import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, author, imageUrl, avatarUrl, topic, title} = blogData

  return (
    <Link to={`blogs/${id} `} className="nav-item-link">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="item-image" />

        <div className="item-info">
          <p className="item-topic">{topic}</p>

          <h1 className="item-title">{title}</h1>

          <div className="author-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="item-avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
