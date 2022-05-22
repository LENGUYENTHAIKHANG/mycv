import React from 'react'
import Header from './components/header/Header'
import Info from './components/info/Info'
import Project from './components/project/Project'
import Skill from './components/skill/Skill'

function Home() {
  return (
    <div style={{padding:'30px'}}>
        <Header/>
        <hr></hr>
        <Info/>
        <hr></hr>
        <Skill/>
        <br></br>
        <hr></hr>
        <br></br>
        <Project/>
    </div>
  )
}

export default Home