import React, { useEffect, useState } from 'react'
import "../../styles/my-recipes.css"
import { Link, useHistory } from 'react-router-dom';
import plus from '../../assets/img/icon_plus_white.svg';
import icon_trash from '../../assets/img/icon_trashcan.svg';
import { Button } from 'react-bootstrap';





const MyRecipes = () => {

    const [createdRecipe, setCreatedRecipe] = useState()
    const token = localStorage.getItem('JWT')
    const id = localStorage.getItem('id')
    let history = useHistory()


    const getCreatedRecipe = () => {
        fetch('http://localhost:10004/api/v1/recipes',{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setCreatedRecipe(data))
        .catch(err => console.error(err))
    }

    useEffect(() => {
        getCreatedRecipe()
    }, [])

    console.log(createdRecipe)

 

    const deleteRecipe = async (id)  => {
        await fetch(`http://localhost:10004/api/v1/recipes/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
            }
       
    });
    const newRecipes = createdRecipe.filter((item)=> item._id !== id);
    console.log(newRecipes)
    setCreatedRecipe([...newRecipes]);
};

  
    
    
    return (
        <div className="my-recipes">
           <div className="div-title-line-my-recipes">
            <h3 className="title-recipe">My Recipes</h3><hr id="hr7"/>
            <Link to="/create_recipe"><div className='circle-plus'><img className='sing' src={plus} alt=""/></div></Link>

            </div>
            <table className="my-recipes-table">
                <tr className="tr">
                    <th className="table-head-1">Recipe Name</th>
                    <th className="table-head-2">Category</th>
                    <th className="table-head-3">Created On</th>
                    <th className="table-head-4">Delete</th>
             </tr>
          <tbody>
            {createdRecipe&&createdRecipe?createdRecipe.map(recipe => {
                const redirectToUpdate = () => {
                    history.push({
                        pathname: "/my_recipes_update",
                        state: {id: recipe._id}
                    })
                }
                return(
                   <tr key={recipe._id} className='trr'>
                        <td className='my-recipe-title' onClick={()=>redirectToUpdate(recipe._id)}>{recipe.recipe_title}</td>
                            <td className="td1"><button className='my-recipe-cat' onClick={()=>redirectToUpdate(recipe._id)}>{recipe.category}</button></td>
                            <td className='my-recipe-date' onClick={()=>redirectToUpdate(recipe._id)}><span className="my-recipe-data-span">{new Date(recipe.created).toLocaleDateString()}</span></td>
                            <td className='my-recipe-del' onClick={()=>{deleteRecipe(recipe._id)}}><img src={icon_trash}/></td>          
                    </tr>       
                )
            }): "error"}
            </tbody>
              </table>
        </div>
    )
}

export default MyRecipes



// http://localhost:10004/api/v1/recipes

// treba da zemesh token...treba da se naprai get na 28ma linija...vo headers da go pratis tokenot so bearer token...da mapirash od state i da gi dades dole...

