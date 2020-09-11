import React from 'react';
import '../App.css';
import {useState} from 'react';
import { Link } from "react-router-dom";
 function Product(props){
    
     return(
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top" src={props.meals.strMealThumb} alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title"><a href="product.html" title="View Product">{props.meals.strMeal}</a></h4>
                <p class="card-text"></p>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-success btn-block" onClick={props.Increment}>Add to Cart</button>
                    </div>
                    <div class="col" key={props.meals.idMeal}>
                        <Link to={`/detail/${props.meals.idMeal}`} className="btn btn-success btn-block">More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
     );
 }
 export default Product;