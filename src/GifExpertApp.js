import React, { useState } from 'react'
import { AddCategorie } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GGifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch Man']);

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategorie setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>

    </>
  )
}

export default GGifExpertApp
