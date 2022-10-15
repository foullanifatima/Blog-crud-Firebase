import * as React from 'react'
import { useContext } from 'react'
import BlogContext from '../Context/BlogContext'
import { useNavigate } from 'react-router-dom'

export default function MediaCard(props) {
  const { deleteBlog, editBlog } = useContext(BlogContext)
  let navigate = useNavigate()
  return (
    <div className="container">
      <div className="blog-card">
        <img src={props.item.imgURL} alt="Travel is good " />
        <h1 className="blog-title">{props.item.title}</h1>
        <p className="blog-content">{props.item.description}</p>
        <a
          className="read-more"
          onClick={() => {
            editBlog(props.item.id, props.item)
            navigate('/add')
          }}
        >
          Edit
        </a>
        <a
          className="read-more"
          onClick={() => {
            deleteBlog(props.item.id)
          }}
        >
          Delete
        </a>
      </div>
      <hr></hr>
    </div>
  )
}

// <Card sx={{ maxWidth: 345 }}>
//   <CardMedia
//     component="img"
//     height="140"
//     image={props.item.imgURL}
//     alt="green iguana"
//   />

{
  /* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            editBlog(props.item.id, props.item)
          }}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={() => {
            deleteBlog(props.item.id)
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card> */
}
