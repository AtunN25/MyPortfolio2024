import SubTitle from '../SubTitles'

import {

  mdiCodeBlockBraces,
}
  from '@mdi/js';

function Backend() {
  return (

    <div className='bg-gray-900 h-1/3 rounded-md'>
      <SubTitle subtitle="Backend Stack" iconName={mdiCodeBlockBraces} />
    </div>

  )
}

export default Backend
