import "./App.css";
import Header from "./MyComponents/Header";
import { Contain } from "./MyComponents/Contain";
import { Footer } from "./MyComponents/Footer";
import { AddContain } from "./MyComponents/AddContain";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react'; 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initContain;
  if(localStorage.getItem("Contains")===null){
    initContain = [];
  }
  else {
    initContain = JSON.parse(localStorage.getItem("contains"));
  }
  // Delete Button Here 
  const onDelete = (contain) =>{
    // Deleting this way in react does not work
    //let index = contains.undex(contain);
    //contains.splice(index, 1);

    setContains(contains.filter((e) =>{
      return e!==contain;
    }));
    localStorage.setItem("Contains", JSON.stringify(contains));
  }
  
  // Add contains in form
  const addContain = (title, desc) => {
    console.log("I am adding this Contain.",title, desc)
    let sno;
    if(contains.length===0){
      sno = 0;
    }
    else {
      sno = contains[contains.length - 1].sno + 1;
    }
    const myContain = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setContains([...contains, myContain]);
    
  }
    
  // it's Contains
  const [contains, setContains] = useState(initContain);
  useEffect(() => {
    localStorage.setItem("contains", JSON.stringify(contains));
  }, [contains])


  return (
    <> 
    <Router>
      <Header title="AJIO" searchBar={true}/>
      <Switch>
          <Route exact path="/" render={() => {
            return (
            <>
            <AddContain addContain={addContain} />
            <Contain contains={contains} onDelete={onDelete} />
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
