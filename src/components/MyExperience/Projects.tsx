import SubTitle from '../SubTitles'
import Card from './components/Card'

import {

  mdiBorderAll,
}
  from '@mdi/js';

function Projects() {
  return (
    <div className='bg-stone-900 rounded-xl h-2/5 flex flex-col'>
          <SubTitle subtitle="Projects" iconName={mdiBorderAll}/>
          <div className=' p-2  flex-grow'>
            <Card></Card>
          </div>
    </div>
  )
}

export default Projects
