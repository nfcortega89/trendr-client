import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import GalleryPage from './containers/GalleryPage'
import AboutPage from './components/AboutPage'
import CategoryPage from './containers/CategoryPage'

export default () => (
  <div>
    <Header />
    <main>
      <Route exact path="/" component={CategoryPage} />
      <Route path="/gallery/:category_id" component={GalleryPage} />
      <Route path="about" component={AboutPage}/>
    </main>
    <Footer />
  </div>
)
