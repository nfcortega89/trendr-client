import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../styles/globals.css'
import GalleryPage from '../containers/GalleryPage' // eslint-disable-line import/no-named-as-default
import AboutPage from './AboutPage'
import CategoryPage from '../containers/CategoryPage'


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={CategoryPage}/>
          <Route path="gallery/:category_id" component={GalleryPage}/>
          <Route path="about" component={AboutPage}/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default App
