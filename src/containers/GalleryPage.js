import React, { Component } from 'react'
import Mosaic from '../components/Mosaic'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import _ from 'lodash'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/imageActions'
import '../styles/gallerypage.css'


class GalleryPage extends Component {
  constructor(props) {
    super(props)
    this.renderImages = this.renderImages.bind(this)
  }
  componentDidMount() {
    this.props.actions.imageDataRequest({ params: { category_id: this.props.match.params.category_id } })
  }
  renderImages() {
    const mosaic = _.chunk(this.props.images, 8)

    return mosaic.map((images, index) => {
      return <Mosaic key={index} images={images} />
    })
  }
  render() {
    return (
      <div className="gallery-container">
        <h1 className="title">{this.props.match.params.category_id}</h1>
        <div className="title-line"></div>
        {this.renderImages()}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    images: state.image.images,
    categories: state.category.categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

GalleryPage.propTypes = {
  images: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryPage)
