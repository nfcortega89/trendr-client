import React from 'react'
import '../styles/lightbox.css'

function Lightbox(props) {
  return (
    <div className={props.show ? 'lightbox show' : 'lightbox'} onClick={() => props.close()}>
      <img alt={props.image.url} className="lightbox__image" src={props.image.url}/>
    </div>
  )
}

export default Lightbox
