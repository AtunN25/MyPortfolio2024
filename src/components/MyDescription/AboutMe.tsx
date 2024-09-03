import SubTitle from '../SubTitles'

import {

  mdiAccountBox,
}
  from '@mdi/js';

function AboutMe() {
  return (
    <div className='bg-green-500 h-1/5 '>
          <SubTitle subtitle="About me" iconName={mdiAccountBox} ></SubTitle>
    </div>
  )
}

export default AboutMe
