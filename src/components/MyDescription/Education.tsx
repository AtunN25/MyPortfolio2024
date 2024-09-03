import SubTitle from '../SubTitles'

import {
  mdiSchool,
}
  from '@mdi/js';

function Education() {
  return (
    <div className='bg-yellow-500 flex h-1/4 gap-2 p-2'>
          <div className='bg-orange-900 flex-col  w-1/3'></div>
          <div className='bg-sky-900 flex-col w-2/3'>
            <SubTitle subtitle="Education" iconName={mdiSchool} ></SubTitle>
          </div>
        </div>
  )
}

export default Education
