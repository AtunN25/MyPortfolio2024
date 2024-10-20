import SubTitle from '../SubTitles'

import {

  mdiAccountBox,
}
  from '@mdi/js';

function AboutMe() {
  return (
    <div className='bg-stone-900 rounded-xl h-1/5 '>
          <SubTitle subtitle="About me" iconName={mdiAccountBox} ></SubTitle>
    </div>
  )
}

export default AboutMe
