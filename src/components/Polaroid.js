import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Lightbox from './Lightbox'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/imageActions'
import '../styles/polaroid.css'


class Polaroid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flash: 'vote-validate',
      show: false
    }
    this.renderBackgroundImage = this.renderBackgroundImage.bind(this)
    this.renderDeleteButton = this.renderDeleteButton.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.getDownvotes = this.getDownvotes.bind(this)
    this.getUpvotes = this.getUpvotes.bind(this)
    this.vote = this.vote.bind(this)
    this.showLoginRequired = this.showLoginRequired.bind(this)
    this.showLightbox = this.showLightbox.bind(this)
    this.onLightboxClose = this.onLightboxClose.bind(this)
  }
  onDelete(e) {
    e.stopPropagation()
    this.props.actions.imageDeleteRequest(this.props.image._id)
  }
  renderDeleteButton() {
    if (this.props.admin) {
      return (
        <div className="delete-btn" onClick={(e) => this.onDelete(e)}>
          <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      )
    }
    return
  }
  getDownvotes() {
      if (this.props.renderVotes) {
        return this.props.images[this.props.image.index].downvotes.length
      }
      return this.props.image.downvotes.length
  }
  getUpvotes() {
      if (this.props.renderVotes) {
        return this.props.images[this.props.image.index].upvotes.length
      }
      return this.props.image.upvotes.length
  }
  vote(direction) {
    const options = { userId: this.props.userId, imageId: this.props.image._id }
    const categoryOptions = { params: { category_id: this.props.match.params.category_id } }
    if (!this.props.userId) {
      return this.showLoginRequired()
    }
    switch(direction) {
      case 'up':
        return this.props.actions.upvoteRequest(options, categoryOptions)
      case 'down':
        return this.props.actions.downvoteRequest(options, categoryOptions)
      default: return
    }
  }
  showLoginRequired() {
    setTimeout(() => {
      this.setState({
        flash: 'vote-validate'
      })
    }, 1200)
    this.setState({
      flash: 'vote-validate show'
    })
  }
  showLightbox() {
    this.setState({ show: true })
  }
  onLightboxClose() {
    this.setState({ show: false })
  }
  renderBackgroundImage() {
    if (typeof this.props.image === 'undefined') {
      return ''
    }
    return this.props.image.url
  }
  render() {
    if (typeof this.props.image === 'undefined') {
      return <div></div>
    }
    return (
      <div className="polaroid">
        <div className="col single" onClick={() => this.showLightbox()} style={{ backgroundImage: `url(${this.renderBackgroundImage()})` }}>
          {this.renderDeleteButton()}
        </div>
        <div className="vote-container">
          <div className="vote-divider">
            <div className="vote-stats">
              <div className="vote-stats-left">
                <svg onClick={() => this.vote('down')} className="vote downvote" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
                </svg>
              </div>
              <div className="vote-stats-right">
                <span className="vote-count">{this.getDownvotes()}</span>
              </div>
            </div>
          </div>
          <div className="vote-divider">
            <div className="vote-stats">
              <div className="vote-stats-left">
                <span className="vote-count">{this.getUpvotes()}</span>
              </div>
              <div className="vote-stats-right">
                <svg onClick={() => this.vote('up')} className="vote" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
                </svg>
              </div>
            </div>
          </div>
          <span className={this.state.flash}>Login to vote</span>
        </div>
        <Lightbox image={this.props.image} show={this.state.show} close={this.onLightboxClose} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    admin: state.user.admin,
    userId: state.user._id,
    images: state.image.images,
    renderVotes: state.image.renderVotes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Polaroid.propTypes = {
  image: PropTypes.object,
  images: PropTypes.array,
  mosiacClass: PropTypes.string,
  index: PropTypes.number,
  actions: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Polaroid))
