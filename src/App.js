import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/globals.css'
import GalleryPage from './containers/GalleryPage'
import AboutPage from './containers/AboutPage'
import CategoryPage from './containers/CategoryPage'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={CategoryPage}/>
      <Route path="/gallery/:category_id" component={GalleryPage}/>
      <Route path="/about" component={AboutPage}/>
      <Footer />
    </div>
  </BrowserRouter>
)

App.propTypes = {
  children: PropTypes.element
}

export default App
