import SubTitle from '../SubTitles'

import {

  mdiChartBarStacked,
}
  from '@mdi/js';

function OtherStack() {
  return (
    <div className='bg-gray-900 h-2/3 rounded-md'>
      <SubTitle subtitle="Other Stack" iconName={mdiChartBarStacked} />
    </div>
  )
}

export default OtherStack
