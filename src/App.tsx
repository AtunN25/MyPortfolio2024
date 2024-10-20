//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'




import Backend from './components/MyStack/Backend'
import DataBase from './components/MyStack/DataBase'
import Fronted from './components/MyStack/Fronted'
import OtherStack from './components/MyStack/OtherStack'

import ClientExperience from './components/MyExperience/ClientExperience'
import ContactMe from './components/MyExperience/ContactMe'
import Other from './components/MyExperience/Other'
import Projects from './components/MyExperience/Projects'
import Services from './components/MyExperience/Services'

import AboutMe from './components/MyDescription/AboutMe'
import Education from './components/MyDescription/Education'
import Main from './components/MyDescription/Main'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='p-8 gap-3 flex h-screen'>


      <div className=' w-2/12 flex rounded-md gap-3 '>
        <div className='flex flex-col  h-full w-1/2 space-y-3'>
          <Backend />
          <Fronted />
        </div>
        <div className='flex   flex-col h-full w-1/2 space-y-3'>
          <OtherStack />
          <DataBase />
        </div>
      </div>


      <div className=' w-4/12 rounded-md gap-3  space-y-3'>
        <Main></Main>
        <Education></Education>
        <AboutMe></AboutMe>
      </div>


      <div className=' w-6/12  rounded-md flex-col space-y-3 pb-6'>
        <div className='flex h-2/5 gap-2 space-x-1'>
          <ClientExperience/>
          <Services/>
        </div>
        <Projects></Projects>
        <div className='h-1/5 flex gap-2'>
          <ContactMe/>
          <Other/>
        </div>
      </div>

    </div>
  )
}

export default App

{
  /*
  <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  */
}

