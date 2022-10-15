import React, { useState, useContext, useEffect } from 'react'
import BlogContext from '../Context/BlogContext'

function Add() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState('')

  //const [progress, setProgress] = useState(0)
  const { progress, addBlogs, blogEdit, handleEditBlog } =
    useContext(BlogContext)
  // handling the edit event using api context

  useEffect(() => {
    if (blogEdit.edit === true) {
      setTitle(blogEdit.item.title)
      setDescription(blogEdit.item.description)
    }
  }, [blogEdit])
  const submitForm = (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert('please make sure you fill all the fields')
      return
    }
    if (blogEdit.edit === true) {
      console.log(blogEdit.item.id)
      handleEditBlog(blogEdit.item.id, {
        title: title,
        description: description,
        imgURL: blogEdit.item.imgURL,
      })
    } else {
      addBlogs(file, title, description, setTitle, setFile, setDescription)
    }
  }

  /****************************************** */
  return (
    <form className="container" onSubmit={submitForm}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="add title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />

      <textarea
        type="text"
        name="description"
        id="description"
        accept="image/*"
        value={description}
        placeholder="Adding description here "
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      {!blogEdit.edit && (
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          name="file"
          id="file"
          onChange={(e) => {
            setFile(e.target.files[0])
          }}
        />
      )}
      <button type="submit">Add to firebase</button>
      <p>Progress bar : {progress} %</p>
    </form>
  )
}

export default Add
