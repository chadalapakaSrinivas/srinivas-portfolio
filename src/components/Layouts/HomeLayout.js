import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Experience from '../Pages/Experience/Experience'
import Skills from '../Pages/Skills'
import Hobbies from '../Pages/Hobbies'
import Contact from '../Pages/Contact'
import Navigation from '../navigation/navigation'
import { Outlet } from 'react-router'
function HomeLayout() {
  return (
    <>
        <div className='homepage-layout'>
        <Navigation/>
            <Home/>
            <About/>
            <Experience/>
            <Skills/>
            <Hobbies/>
            <Contact/>
            <Outlet/>
        </div>
    </>
  )
}

export default HomeLayout