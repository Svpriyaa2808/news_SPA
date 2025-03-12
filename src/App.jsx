import { useState } from "react"
import Header from "./components/Header"
import Navigation from "./components/Navigation_bar"
import Featured from "./components/Featured"
import Category from './components/Category'
import ChoseCategory from "./components/ChoseCategory"
import Footer from "./components/Footer"
import { SportsArray,SwedenArray,EntertainmentArray,Crimerray,WorldArray } from "./data/data"
import { categoryArray } from "./data/data"
import DisplayArticle from "./components/DisplayArticle"

function App() {
  const[SelectedCategory,SetSelectedCategory] = useState(null);
  const[SelectedArticle,SetSelectedArticle] = useState(null)
  console.log(SelectedArticle)
  return (
    <>
     <Header />
     <Navigation clickedCategory={SetSelectedCategory} clickedarticle={SetSelectedArticle}/>

   

     
     {SelectedCategory !== null && !SelectedArticle && 
     <ChoseCategory displayCategory={categoryArray.filter((category => category.category === SelectedCategory))} clickedarticle={SetSelectedArticle}/> 
     } 
    
    {!SelectedCategory  && !SelectedArticle &&
      <>
      <Featured clickedarticle={SetSelectedArticle}/>
      <Category title="Sports" categoryArray={SportsArray} clickedarticle={SetSelectedArticle}/>
      <Category title="Sweden" categoryArray={SwedenArray} clickedarticle={SetSelectedArticle}/>
      <Category title="Entertainment" categoryArray={EntertainmentArray} clickedarticle={SetSelectedArticle}/>
      <Category title="Crime" categoryArray={Crimerray} clickedarticle={SetSelectedArticle}/>
      <Category title="World" categoryArray={WorldArray} clickedarticle={SetSelectedArticle}/>
     </>}

     {/* {SelectedArticle &&  
     
     <DisplayArticle displayArticle={articles.filter((item => item === SelectedArticle))}/>}
       */}

{SelectedArticle && 
    // <DisplayArticle displayArticle={articles.filter((item => item === SelectedArticle))} />
    <DisplayArticle displayArticle={SelectedArticle} />

}

  
     <Footer />
    </>
  )
}

export default App
