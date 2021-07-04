import React from 'react';
import '../../styles/Modal.css';

const RecipeHeader=({hideModal})=>{
    return(
        <div class="header">
            <h1 class="title">
                Mac & Bacon (and cheese)
            </h1>
            <i class="bi bi-x" onClick={hideModal}/>      
        </div>
    )
}

export default RecipeHeader;