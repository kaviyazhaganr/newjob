
// import './App.css'

import Article from "./Article/Article"
import Course from "./Course/Course"
import EntranceExams from "./Entrance/EntranceExams"
import Features from "./Features/Features"
import Footer from "./Footer/Footer"
import Main from "./Main-banner/Main"
import Nav from "./Nav/Nav"
import Path from "./Path/Path"
import Top from "./Top-college/Top"
import Topcourse from "./Top-Course/Topcourse"

function App() {
 

  return (
    <>
      <Nav />
      <Main />
      <Path />
      <Top />
      <Features />

      <Course />
      <Topcourse />
      <EntranceExams />
      <Article />

      <Footer />
    </>
  )
}

export default App
