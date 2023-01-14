import React from 'react'
import { RaceBy } from '@uiball/loaders'
import "./Loader.css"

function Loader() {
  return (
<div className='loaderFlex'>
<RaceBy className='loaderFlex'
 size={300}
 lineWeight={30}
 speed={1} 
 color="black" 
/>
 </div>
  )
}

export default Loader