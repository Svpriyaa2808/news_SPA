import { useState } from "react"
import Header from "./components/Header"
import Navigation from "./components/Navigation_bar"
import Featured from "./components/Featured"
import Category from './components/Category'
import ChoseCategory from "./components/ChoseCategory"
import Footer from "./components/Footer"
import { SportsArray,SwedenArray,EntertainmentArray,Crimerray,WorldArray,categoryArticles } from "./data/data"
import { categoryArray } from "./data/data"
import DisplayArticle from "./components/DisplayArticle"

function App() {
  const[SelectedCategory,SetSelectedCategory] = useState(null);
  const[SelectedArticle,SetSelectedArticle] = useState(null)

  const UpdateArticle = (item) => {
    SetSelectedArticle(item); //we can declare a function here and we can pass it to the children instead of passing variable and declaring fun later.
  }
  
  console.log(SelectedArticle)
  return (
    <>
     <Header />
     <Navigation clickedCategory={SetSelectedCategory} clickedarticle={UpdateArticle}/>

     {SelectedCategory !== null && !SelectedArticle && 
     <ChoseCategory displayCategory={categoryArticles(SelectedCategory)} clickedarticle={UpdateArticle}/> 
     } 
    
    {!SelectedCategory  && !SelectedArticle &&
      <>
      <Featured clickedarticle={UpdateArticle}/>
      <Category title="Sports" categoryArray={SportsArray} clickedarticle={UpdateArticle}/>
      <Category title="Sweden" categoryArray={SwedenArray} clickedarticle={UpdateArticle}/>
      <Category title="Entertainment" categoryArray={EntertainmentArray} clickedarticle={UpdateArticle}/>
      <Category title="Crime" categoryArray={Crimerray} clickedarticle={UpdateArticle}/>
      <Category title="World" categoryArray={WorldArray} clickedarticle={UpdateArticle}/>
     </>}

      {SelectedArticle && 
        <DisplayArticle displayArticle={SelectedArticle} />
      }

     <Footer />
    </>
  )
}

export default App
