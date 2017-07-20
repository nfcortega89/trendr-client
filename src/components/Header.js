import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import '../styles/header.css'
import * as actions from '../actions/userActions'
import firebase from 'firebase'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.firebase = firebase
    this.provider = null
    this.user = null
    this.signInWithGoogle = this.signInWithGoogle.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyAthKeupQ7en4vzvflhtU-nXFCszvBL228",
      authDomain: "trendr-3eddc.firebaseapp.com",
      databaseURL: "https://trendr-3eddc.firebaseio.com",
      projectId: "trendr-3eddc",
      storageBucket: "trendr-3eddc.appspot.com",
      messagingSenderId: "561960402309"
    }
    this.firebase.initializeApp(config)
    this.provider = new this.firebase.auth.GoogleAuthProvider()

    if (window.localStorage.getItem('access_token')) {
      const credential = firebase.auth.GoogleAuthProvider.credential(null, window.localStorage.getItem('access_token'))
        firebase.auth().signInWithCredential(credential)
        .then(user => {
          this.props.actions.userAuthRequest({ uid: user.uid })
        }).catch(err => console.error(err))
    }
  }
  signInWithGoogle() {
    if (this.props.user.uid) {
      window.localStorage.removeItem('access_token')
      this.firebase.auth().signOut().then(() => { this.props.actions.userAuthSignout() })
    } else {
      this.firebase.auth().signInWithPopup(this.provider).then(result => {
        if (result.user) {
          window.localStorage.setItem('access_token', result.credential.accessToken)
          this.props.actions.userAuthRequest({ uid: result.user.uid })
        }
      }).catch(err => console.error(err))
    }
  }
  toggleMenu() {
    const isOpen = this.state.open
    this.setState({
      open: !isOpen
    })
  }
  // willReceiveProps(nextProps) {
  //
  // }
  render() {
    return (
      <div className="header">
        <span className="logo-text">Trendr</span>
        <div className="navbar">
          <svg onClick={() => this.toggleMenu()} className="mobile-menu" fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </div>
        <div className={this.state.open ? 'dropdown open' : 'dropdown'}>
          <Link className="nav-links" to="/">Home</Link>
          <Link  className="nav-links" to="/about">About</Link>
          <span onClick={this.signInWithGoogle} className="nav-links">{this.props.user && this.props.user.uid ? 'logout' : 'login'}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
