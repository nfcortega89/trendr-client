import React from 'react'
import '../styles/about-page.css'

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2 className="alt-header">About</h2>
      </div>
      <vr />
      <hr />
      <div className="about-right">
        <p className="about">Trendr is a gallery page that showcases trending images from carefully curated photos. Images are organized into categories where viewers can vote on them. The photo with the most up votes is displayed on the home page, and automatically changes based on the trending pictures.</p>
      </div>
    </div>
  )
}

export default AboutPage
