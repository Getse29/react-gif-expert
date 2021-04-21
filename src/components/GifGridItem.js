import React from 'react'

export const GifGridItem = ({ title, img }) => {
  /* const { id, title, image } = img */
  return (
    <div className="card animate__animated animate__slideInUp">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  )
}
