import React from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import Project from "./pages/Projects"
import Contacts from "./pages/Contacts"

function App(){
  return (
    <div className="w-full min-h-[100%] flex flex-col bg-grad-deep-space font-mono">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  )
}
export default App;
