import React, { useEffect, useState } from 'react'
import icon_time from '../../assets/img/icon_time.svg'
import icon_plate from '../../assets/img/icon_plate.svg'
import icon_star from '../../assets/img/icon_star.svg'
import icon_arrows_white from '../../assets/img/icon_arrows_white.svg'
import { useHistory } from 'react-router-dom'

const Dinner = () => {
    const [recipes, setRecipes] = useState()
    const [recipe, setRecipe] = useState()
    const history = useHistory()
        const getLatest = () => {
        fetch("http://localhost:10004/api/v1/recipes/category/dinner")
        .then(res => res.json())
        .then(data => setRecipes(data))
}
        useEffect(() => {
            getLatest()
        },[])

        const starOne = (_id) => {
            fetch(`http://localhost:10004/api/v1/recipes/${_id}/rate`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>res.json())
            .then(res => {
                const newRecipe = [...recipes];
                if(res){
                    newRecipe.forEach(element => {
                        if(element._id === _id) element.rating ++;
                    });
                }
                setRecipe(newRecipe)
            })
            .catch(err=>{
                console.log(err)
            })
        }


    return (
        <div className="whole-page">

        <div className="title-div">
            <h1 className="title-fresh">Dinner</h1><hr id="hr7" />
        </div>
        <div className="whole-map">
            {recipes && recipes?recipes.map((recipe, i) => {
                                    const goToPopUp = () => {
                                        history.push({
                                            pathname: "/popup",
                                            search: "?query=abc",
                                            state: {details: recipe._id}
                                        })
                                    }
                
            return(
                <div key={i} className="div-key">
                <img className="img-dimensions" src={`http://localhost:10002/api/v1/storage/${recipe.img}`} alt="recipe_img"/> 
                <div className="div-belowimage">
                    <h3 className="orange-title">{recipe.recipe_title}</h3>
                    <p className="short-des-p"> {recipe.short_description} </p>
                    <div className="icons-arrowsbutton">
                        <div className="icons">
                            <span><img src={icon_time} alt="icon_time" /></span><span className="time"> {recipe.prep_time} min</span>
                            <span><img src={icon_plate} alt="icon_plate"/></span><span className="plate"> {recipe.no_people}person</span>
                            <div onClick={() => starOne(recipe._id)} className="icon-number-container"><img src={icon_star} alt="icon_star"/><span className="star"> {recipe.rating}</span></div>
                            
                        </div>
                    <button className="arrows-button" onClick={goToPopUp}>    
                     <img className="icon-arrow" src={icon_arrows_white} alt=""/>
                     </button>

                        
                    </div>

                </div>

            </div>
        )           
    }):"brm brm"}
    </div>
</div>
)
}

export default Dinner
