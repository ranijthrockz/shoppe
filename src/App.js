import React,{useEffect,useState} from 'react';
import './App.css';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
    const[recipes,setRecipes] = useState([]);
    const[searchval,setSearchVal] = useState('chicken');
    
        const OnChangeInput = (val) => {
            setSearchVal(val);
            getRecipesOnload();
        }
    useEffect( ()=> {
        const getRecipesOnload = async e => {
            try{
              const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchval}`);
              const data= await response.json();
              setRecipes(data.meals);
            }catch(err){
                console.log(err.message);
            }
            };
        getRecipesOnload();
      },[] );
    
      const getRecipes = async e => {
          try{
            e.preventDefault();
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchval}`);
            const data= await response.json();
            setRecipes(data.meals);
            window.location = "/";
          }catch(err){
              console.log(err.message);
          }
      };

    const[count,setCount] = useState(0);

    const Increment = () => {
        setCount(count+1);
    }

  return (
    <Router>
      <div className="App">
      <Header getRecipes={getRecipes} OnChangeInput={OnChangeInput} searchval={searchval} count={count} />
        <Switch>
          <Route path="/detail/:id" component={Detail} />
          <Route path="/">
          <Home recipes={recipes} Increment={Increment}/>  
          </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
