import React, { Component } from 'react'
import '../styles/image.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/imageActions'

class Image extends Component {
  constructor(props) {
    super(props)
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete() {
    const id = this.props.image._id
    this.props.actions.imageDeleteRequest(id)
  }
  render() {
    return (
      <div className="image-container">
        <div className="delete-btn" onClick={this.onDelete}>x</div>
        <img className="image-item" src={this.props.image.url} alt="girls-gallery" />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.image.images
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Image.propTypes = {
  image: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image)
