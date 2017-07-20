import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as categoryActions from '../actions/categoryActions'
import * as imageActions from '../actions/imageActions'
import '../styles/category.css'


class Category extends Component {
  componentDidMount() {
    this.props.imageActions.imageFeaturedRequest({ params: { fetch_top: true, category_id: this.props.category.title } })
  }
  render() {
    return (
      <div className="category">
        <div className="category-item" style={{backgroundImage: `url(${this.props.featuredImages[this.props.category.title]})`}}>
          <span>{this.props.category.title}</span>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    categories: state.category.categories,
    featuredImages: state.image.featuredImages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    categoryActions: bindActionCreators(categoryActions, dispatch),
    imageActions: bindActionCreators(imageActions, dispatch)
  }
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
  imageActions: PropTypes.object.isRequired,
  featuredImages: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)
