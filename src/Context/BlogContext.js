import { createContext, useState, useEffect } from 'react'
import db, { storage } from '../Firebase'
import { collection, addDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
  const [blogList, setBlogList] = useState([])
  const [blogEdit, setBlogEdit] = useState({
    item: {},
    edit: false,
  })

  const [progress, setProgress] = useState(0)

  // adding function to fetch data from firebase

  const fetchBlogs = async () => {
    const response = db.collection('boards')
    const data = await response.get()
    var result = []
    data.docs.forEach((item) => {
      // we can get id by item.id
      result = [...result, { ...item.data(), id: item.id }]
    })
    console.log(result)
    return result
  }

  useEffect(() => {
    Promise.resolve(fetchBlogs()).then((value) => {
      setBlogList(value)
    })
  }, [])

  // adding function to add data to firebase

  const addBlogs = async (
    file,
    title,
    description,
    setTitle,
    setFile,
    setDescription
  ) => {
    const storageRef = ref(storage, `/images/${Date.now()}${file.name}`)

    const uploadImage = uploadBytesResumable(storageRef, file)

    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progressPercent)
      },
      (err) => {
        console.log(err)
      },
      () => {
        setTitle('')
        setDescription('')
        setFile('')
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, 'boards')
          addDoc(articleRef, {
            title: title,
            description: description,
            imgURL: url,
          })
            .then((data) => {
              console.log('Article added successfully', { type: 'success' })
              setBlogList([
                ...blogList,
                {
                  id: data.id,
                  title: title,
                  description: description,
                  imgURL: url,
                },
              ])
              console.log(title, description, url)
              setProgress(0)
            })
            .catch((err) => {
              console.log('Error adding article', { type: 'error' })
            })
        })
      }
    )
  }

  // function to delete blog

  const deleteBlog = async (id) => {
    // confirm that it will delete
    if (window.confirm('Are you sure you want to delete this blog')) {
      await db.collection('boards').doc(id).delete()
      setBlogList(blogList.filter((item) => item.id !== id))
    }
  }

  // function to edit a Blog
  const editBlog = (id, blog) => {
    setBlogEdit({
      item: blog,
      edit: true,
    })
  }
  const handleEditBlog = async (id, newBlog) => {
    const blogEditRef = db.collection('boards').doc(id)
    await blogEditRef.set(newBlog).catch((err) => {
      console.log(err)
    })
    setBlogList(
      blogList.map((item) => (item.id === id ? { ...item, ...newBlog } : item))
    )
  }
  return (
    <BlogContext.Provider
      value={{
        blogList,
        blogEdit,
        deleteBlog,
        fetchBlogs,
        progress,
        addBlogs,
        editBlog,
        handleEditBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
