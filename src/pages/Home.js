import React,{Fragment,useState} from 'react';
import Tweet from '../components/Product'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
import About from '../components/About'
import '../App.css';

function Home(props) {

  
  const [currentPage, setCurrentPage] = useState(1);
  const [newPerPage] = useState(9);

  
  const paginate = pageNumber =>setCurrentPage(pageNumber);
  const indexOfLastNew = currentPage * newPerPage;
  const indexOfFirstNew = indexOfLastNew - newPerPage;
 
  if(props.recipes){
    const currentNew = props.recipes.slice(indexOfFirstNew, indexOfLastNew); 
  return (
    <Fragment>
     
<About/>
<div class="container">
    <div class="row">
        <div class="col">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="category.html">Category</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Sub-category</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div class="container">
    <div class="row">
        
        <div class="col">
            <div class="row">
                    
            {currentNew.map(user => (
                <Tweet meals={user} Increment={props.Increment} />
              ))}
                <div class="col-12">
                    <nav aria-label="...">
                    <Pagination newPerPage={newPerPage} totalNew={props.recipes.length} paginate={paginate} />
                    </nav>
                </div>
            </div>
        </div>

    </div>
</div>
<Footer/>

    </Fragment>
    
  );
 }else{
    return (
        <Fragment>
    <About/>
    <div class="container">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="category.html">Category</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Sub-category</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-3">
                <div class="card bg-light mb-3">
                    <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-list"></i> Categories</div>
                    <ul class="list-group category_block">
                        <li class="list-group-item"><a href="category.html">Cras justo odio</a></li>
                        <li class="list-group-item"><a href="category.html">Dapibus ac facilisis in</a></li>
                        <li class="list-group-item"><a href="category.html">Morbi leo risus</a></li>
                        <li class="list-group-item"><a href="category.html">Porta ac consectetur ac</a></li>
                        <li class="list-group-item"><a href="category.html">Vestibulum at eros</a></li>
                    </ul>
                </div>
                <div class="card bg-light mb-3">
                    <div class="card-header bg-success text-white text-uppercase">Last product</div>
                    <div class="card-body">
                        <img class="img-fluid" src="https://dummyimage.com/600x400/55595c/fff" alt="dummy" />
                        <h5 class="card-title">Product title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p class="bloc_left_price">99.00 $</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="row">
                <div class="col-12 col-md-6 col-lg-4">
                <div class="card">
                <div class="card-body">
                <h4 class="card-title"><a href="product.html" title="View Product">No Items Found!</a></h4>
                <p class="card-text"></p>

                </div>
                </div>
                </div>
                </div>
            </div>
    
        </div>
    </div>
    <Footer/>
    
        </Fragment>
        
      ); 
 }
}

export default Home;
