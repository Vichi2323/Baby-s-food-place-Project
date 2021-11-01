import React, { useState } from 'react'
import back from '../../assets/img/icon_back_white.svg';
import { Link, useHistory,} from 'react-router-dom';
import image_burger from '../../assets/img/fast-food.png'



const CreateRecipe = () => {

const token = localStorage.getItem('JWT')

const History = useHistory()

const [recipe, setRecipe] = useState({
    recipe_title: "",
    category: "",
    prep_time: "",
    no_people: "",
    short_description: "",
    recipe: "",
    img: ""
})


const [file, setFile] = useState(null);
const[image, setImage] = useState(null);
const convertBinaryImage = (e) => {
    if(!e.target.files[0]) return;
    setRecipe({...recipe, img: ''})

    setFile(e.target.files[0])
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])

    let bin = null

    reader.onload = function() {
      bin = reader.result
      setImage(bin);
    }       
    reader.onerror = function() {
      bin = null
    }
  }

      

      const uploadImage = (img, token) => {
         return fetch(`http://localhost:10002/api/v1/storage`,{
             method:'POST',
             headers:{
                'Authorization':`Bearer ${token}`
             },
             body:img
         })
         .then(res => {
             return res.json()
         })
     }

     
      const uploadFile = async () => {
          if(!file){
            postRecipe(recipe)
            return;
          }
        let formData = new FormData();
        formData.append('document', file);

       await uploadImage(formData, token)
            .then(res => {
                postRecipe({...recipe, img:res.filename});
            })
            .catch(err => {
                console.log(err);
            });
      }
     






const postRecipe = (recipe) => {
    fetch("http://localhost:10004/api/v1/recipes",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(recipe)

    }

    )
    .then(res => res.json())
    .then(data => setRecipe(data))
    // History.push("/my_recipes")
}


const handleUpdateRecipe = (e) => {
    uploadFile().then(
  History.push("/my_recipes"))
    }

    return (
        <div className="my-recipes-update">
        <div className="div-title-line-my-recipes-update">
        <h3 className="title-recipes-update">My Recipes</h3><hr id="hr7"/>
        <Link to="/my_recipes"> <div className='plus-back'><img className='sign-image' src={back} alt="plus"/></div></Link>
        </div>
        <form onSubmit={handleUpdateRecipe}>
            <div className="container-recipe">
            <div className="recipe-image-div">
                <label className="label">Recipe Image</label>
                <img src={recipe.img ? `http://localhost:10002/api/v1/storage/${recipe.img}` : image || image_burger} className="image-recipe" alt="img-burger"></img>
                <label for="recipe-image-btn" className="img-btn-label">Upload Image</label>
                <input type="file" id="recipe-image-btn" onChange={(e) => convertBinaryImage(e)} hidden/>
            </div>
            <div className="recipe-center">
            <label className="label">Recipe Title</label>
            <input 
                type="text" 
                className="input-recipe-title"
                placeholder="Homemade pizza"
                name="recipe_title"
                value={recipe.recipe_title}
                onChange={(e) => setRecipe({...recipe, recipe_title: e.target.value})}
            />
            <div className="center-middle">
                <span><label className="label">Category</label>
                <select 
                    className="input-category"
                    placeholder="Category"
                    name="category"
                    value={recipe.category}
                    onChange={(e) => setRecipe({...recipe, category: e.target.value})}
                 >
                    <option value="breakfast">Breakfast</option>
                    <option value="brunch">Brunch</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select></span>
                <span>
                    <label className="label">Preparation Time</label>
                    <input 
                        type="number" 
                        className="prep-time-input" 
                        placeholder="45"
                        name="prep_time"
                        value={recipe.prep_time}
                        onChange={(e) => setRecipe({...recipe, prep_time: e.target.value})}
                     
                    />
                </span>
                <span>
                    <label className="label">No.People</label>
                    <input 
                            type="number" 
                            className="no-people-input" 
                            placeholder="4"
                            name="no_people"
                            value={recipe.no_people}
                            onChange={(e) => setRecipe({...recipe, no_people: e.target.value})} 
                    />
                </span>
                </div>
                <label className="label">Short Description</label>
                <textarea 
                        className="descr-text"
                        name="short_description"
                        value={recipe.short_description}
                        onChange={(e) => setRecipe({...recipe, short_description: e.target.value})}

                >

                </textarea>
                <input 
                        type="submit" 
                        value="SAVE" 
                        className="save-recipe" 

                        />
            </div>
            <div className="right-recipe">
                <label className="label">Recipe</label>
                <textarea 
                        className="recipe-text"
                        name="recipe"
                        value={recipe.recipe}
                        onChange={(e) => setRecipe({...recipe, recipe: e.target.value})}
                        >

                        </textarea>
            </div>
            </div>
        </form>
    </div>

    )
}

export default CreateRecipe
