# Baby-s-food-place-Project

import React,{useState,useEffect} from 'react'

const MostPopular = () => {
const [popular, setPopular] = useState()

const getPopular = () => {
    fetch("http://localhost:10004/api/v1/recipes/popular")
    .then(res => res.json())
    .then(data => setPopular(data))
}
useEffect(() => {
    getPopular()
},[])
console.log(popular)




    return (
        <div>
            <h1>Most popular</h1>
            {popular ? popular.map((pop, i)=> {  
                return(
                <div key={i}>
                <h1>
                    {pop.recipe_title}
                    
                </h1>
                <p>{pop.short_description}</p>
                </div>
                )
            }):"Can't open"}
        </div>
    )
}

export default MostPopular

