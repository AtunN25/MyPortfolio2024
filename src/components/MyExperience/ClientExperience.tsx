import SubTitle from '../SubTitles'
import Comments from './components/Comments'

import {

  mdiAccountGroup,
}
  from '@mdi/js';

function ClientExperience() {
  return (
    <div className='bg-stone-900 rounded-xl flex flex-col w-3/5 '>
      <SubTitle subtitle="Experience" iconName={mdiAccountGroup}/>

      <div className='rounded-md flex-grow mt-2 mx-4 mb-4 border-t-2 border-stone-700 space-y-2 pt-2 '>
        <Comments></Comments>
        <Comments></Comments>
      </div>
    </div>
  )
}

export default ClientExperience
