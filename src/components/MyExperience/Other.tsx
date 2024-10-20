import SubTitle from '../SubTitles'

import {

  mdiAccountMultiple,
}
  from '@mdi/js';

function Other() {
  return (
    <div className='bg-stone-900 rounded-xl w-2/3 flex-col'>
            <SubTitle subtitle="Other things" iconName={mdiAccountMultiple} />
          </div>
  )
}

export default Other
