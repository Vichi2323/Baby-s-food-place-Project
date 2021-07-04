import React from 'react';
import '../../styles/Dashboard.css';
import '../../styles/Modal.css';
import ModalWindow from '../Modal/Modal';
import img1 from '../../images/homemadepizza.png';
import img2 from '../../images/seaspaghetti.png';
import img3 from '../../images/easytacos.png';

const FreshNewRecipes=()=>{
    return (
        <div class="container-fluid" style={{width:780}}>
            
            <div class="separator">
                <h2>Fresh & New</h2>
                <div class="line1"></div>
            </div>

            <div class="row" style={{paddingTop:20}}>
                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={img1} alt="Homemade Pizza"/>
                        <span class="badge badge-pill pill-a" style={{fontSize:10}}>breakfast</span>
                        <div class="card-body">
                            <h6 class="card-title">Homemade Pizza</h6>
                            <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div class="card-body F">
                            <i class="bi bi-clock"> 45 min</i>
                            <i class="bi bi-people"> 4 persons</i>
                            <i class="bi bi-star"> 28</i>

                            <ModalWindow/>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={img2} alt="Sea Spaghetti"/>
                        <span class="badge badge-pill pill-a" style={{fontSize:10}}>lunch</span>
                        <div class="card-body">
                            <h6 class="card-title">Sea Spaghetti</h6>
                            <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div class="card-body F">
                            <i class="bi bi-clock"> 45 min</i>
                            <i class="bi bi-people"> 4 persons</i>
                            <i class="bi bi-star"> 28</i>

                            <ModalWindow/>

                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img class="card-img-top" src={img3} alt="Easy Tacos"/>
                        <span class="badge badge-pill pill-a" style={{fontSize:10}}>brunch</span>
                        <div class="card-body">
                            <h6 class="card-title">Easy Tacos</h6>
                            <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
                        </div>
                        <div class="card-body F">
                            <i class="bi bi-clock"> 45 min</i>
                            <i class="bi bi-people"> 4 persons</i>
                            <i class="bi bi-star"> 28</i>

                            <ModalWindow/>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FreshNewRecipes;