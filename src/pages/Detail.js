import React,{Fragment,useState,useEffect} from 'react';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";

function Detail({match}){
    const [Items,setItems]=useState({});

    useEffect( ()=> {
        const [id]=useState(match.params.id);
        const getItems = async e => {
            try{
              const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
              const data= await response.json();
              setItems(data.meals[0]);
            }catch(err){
                console.log(err.message);
            }
        };
        getItems();
      },[] );
    
    const getYouId = (url) => {
        const getVideoId = require('get-video-id');
        return getVideoId(`${url}`).id;
    }
  return <Fragment>
<div class="container">
 <div class="row">
     <div class="col">
         <nav aria-label="breadcrumb">
             <ol class="breadcrumb">
                 <li class="breadcrumb-item"><Link to={`/`} >Home</Link></li>
                 <li class="breadcrumb-item active">{Items.strMeal}</li>
             </ol>
         </nav>
         <section class="jumbotron text-center">
  <div class="container">
  <iframe title="youtube" width="750" height="315" src={`https://www.youtube.com/embed/=${getYouId(Items.strYoutube)}?playlist=${getYouId(Items.strYoutube)}&loop=1`}></iframe>
      <h1 class="jumbotron-heading">{Items.strMeal}</h1>
      <p class="lead text-muted mb-0">{Items.strInstructions}</p>
  </div>
</section> 
     </div>
 </div>
</div>
<Footer/>
 </Fragment>
}
export default Detail;
