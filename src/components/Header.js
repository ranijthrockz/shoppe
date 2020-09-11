import React from 'react';
import { Link } from "react-router-dom";
function Header(props){
  return  <nav class="navbar navbar-expand-md navbar-dark bg-dark header">
  <div class="container">
      <a class="navbar-brand" href="index.html">Shoppe</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
          <ul class="navbar-nav m-auto">
              <li class="nav-item active">
              <Link to={`/`} className="nav-link">Home</Link>
              </li>
              <li class="nav-item ">
                  <a class="nav-link" href="category.html">Categories <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="product.html">Product</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="cart.html">Cart</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#footer">Contact</a>
              </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" onSubmit={props.getRecipes}>
              <div class="input-group input-group-sm">
                  <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..." onChange={e => props.OnChangeInput(e.target.value)} value={props.searchval}/>
                  <div class="input-group-append">
                      <button type="submit" class="btn btn-secondary btn-number">
                          <i class="fa fa-search"></i>
                      </button>
                  </div>
              </div>
              <a class="btn btn-success btn-sm ml-3" href="cart.html">
                  <i class="fa fa-shopping-cart"></i> Cart
                    <span class="badge badge-light">{props.count}</span>
              </a>
          </form>
      </div>
  </div>
</nav>
 
}
export default Header;
