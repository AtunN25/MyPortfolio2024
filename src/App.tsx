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
    <div className='p-6 gap-4 flex  h-screen'>


      <div className='bg-blue-700 w-2/12 flex rounded-md gap-3 p-2 '>
        <div className='flex bg-green-500 flex-col p-2 h-full w-1/2 space-y-2'>
          <Backend />
          <Fronted />
        </div>
        <div className='flex bg-red-700 p-2 flex-col h-full w-1/2 space-y-2'>
          <OtherStack />
          <DataBase />
        </div>
      </div>


      <div className='bg-emerald-600 w-4/12 rounded-md gap-3 p-2 space-y-3'>
        <Main></Main>
        <Education></Education>
        <AboutMe></AboutMe>
      </div>


      <div className='bg-red-400 w-6/12 p-2 rounded-md flex-col'>
        <div className='bg-blue-500 flex h-2/5 p-2 gap-2'>
          <ClientExperience/>
          <Services/>
        </div>
        <Projects></Projects>
        <div className='bg-green-500 h-1/5 flex p-2 gap-2'>
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

