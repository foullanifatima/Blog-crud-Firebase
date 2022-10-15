import { useContext } from 'react'

import MediaCard from './MediaCard'
import BlogContext from '../Context/BlogContext'

function Show() {
  const { blogList } = useContext(BlogContext)

  return (
    <div className="all-blogs col-lg-8 col-md-12 col-sm-12">
      {blogList.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>No article founds </h1>
      ) : (
        blogList.map((item, index) => <MediaCard key={index} item={item} />)
      )}
    </div>
  )
}

export default Show
