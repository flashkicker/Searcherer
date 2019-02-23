import React from 'react'

const ImageList = (props) => {
    const { imageList } = props
    const images = imageList.map((image) => {
        let { id, description, urls } = image
        return <img alt={description} key={id} src={urls.regular} />
    })

    return <div>{images}</div>
}

export default ImageList