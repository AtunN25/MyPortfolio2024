import SubTitle from '../SubTitles'

import {

  mdiAccountMultiple,
}
  from '@mdi/js';

function Other() {
  return (
    <div className='bg-gray-900 w-2/3 flex-col'>
            <SubTitle subtitle="Other things" iconName={mdiAccountMultiple} />
          </div>
  )
}

export default Other
