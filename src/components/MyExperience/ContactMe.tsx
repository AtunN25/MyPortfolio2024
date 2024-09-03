import SubTitle from '../SubTitles'

import {

  mdiContacts,
}
  from '@mdi/js';

function ContactMe() {
  return (
    <div className='bg-gray-900 w-1/3 flex-col'>
            <SubTitle subtitle="Contact me" iconName={mdiContacts} />
          </div>
  )
}

export default ContactMe
