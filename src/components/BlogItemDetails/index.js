import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
      title: data.title,
      imageUrl: data.image_url,
    }

    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData, isLoading} = this.state
    const {id, author, imageUrl, avatarUrl, content, title} = blogData
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-info">
            <h2 className="blog-details-title">{title}</h2>

            <div className="author-details">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="blog-author-name">{author}</p>
            </div>

            <img src={imageUrl} alt={title} className="blog-image" />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}
export default BlogItemDetails
