import React from 'react'
import "./RecipeTile.css";

export default function RecipeTile({recipe}) {
  return (
    recipe["recipe"]['image'].match(/\.(jpeg|jpg|gif|png)$/)
    !=null && 
    (<div className="recipetile" onClick={()=>{
      window.open(recipe["recipe"]["url"])
    }}>
        {/* <p>Dummy text</p> */}
        <img className="recipetile_image" src={recipe["recipe"]['image']} />
        <p className="recipetile_label">{recipe["recipe"]["label"]}</p>

    </div>
    )
  )
}
