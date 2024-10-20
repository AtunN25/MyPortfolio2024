import SubTitle from '../SubTitles'
import springBoot from '../../assets/spring-boot.svg'
import expressJs from '../../assets/express-js.svg'

import {

  mdiCodeBlockBraces
}
  from '@mdi/js';

function Backend() {
  return (

    <div className='bg-stone-900 rounded-xl h-1/3 '>
      <SubTitle subtitle="Backend Stack" iconName={mdiCodeBlockBraces} />
      <div className='flex flex-col items-center justify-center  space-y-3'>
        <div>
          <img className='h-10 flex items-center w-full' src={expressJs} />
          <p className='font-thin'>expressJS</p>
        </div>
        <div>
          <img className='h-10 flex items-center w-full' src={springBoot} />
          <p className='font-thin'>springBoot</p>
        </div>
      </div>
      
    </div>

  )
}

export default Backend
