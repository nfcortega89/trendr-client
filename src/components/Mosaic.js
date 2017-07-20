import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/imageActions'
import '../styles/delete.css'
import Polaroid from './Polaroid'

class Mosaic extends Component {
  render() {
    return (
      <div className="row main">
        <div className="col left">
          <div className="row top">
            <Polaroid image={this.props.images[0]} mosaicClass={'col single'} />
          </div>
          <div className="row bottom">
            <div className="row small">
              <Polaroid image={this.props.images[4]} mosaicClass={'col small'} />
              <Polaroid image={this.props.images[5]} mosaicClass={'col small'} />
            </div>
            <div className="row small">
              <Polaroid image={this.props.images[6]} mosaicClass={'col small'} />
              <Polaroid image={this.props.images[7]} mosaicClass={'col small'} />
            </div>
          </div>
        </div>
        <div className="col right">
          <div className="row triplet">
            <Polaroid image={this.props.images[1]} mosaicClass={'col wide'} />
          </div>
          <div className="row triplet">
            <Polaroid image={this.props.images[2]} mosaicClass={'col wide'} />
          </div>
          <div className="row triplet">
            <Polaroid image={this.props.images[3]} mosaicClass={'col wide'} />
          </div>
        </div>
      </div>
    )
  }
}
Mosaic.propTypes = {
  images: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Mosaic)
