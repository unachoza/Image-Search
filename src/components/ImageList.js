import "./ImageList.css"
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = props => {
    console.log(props)
    const images = props.onSearchSubmit.map(image => {
        return <ImageCard key={image.id} image={image}/>
    })
    return <div className="image-list">{images}</div>
}

export default ImageList