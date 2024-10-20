import SubTitle from '../SubTitles'
import Icon from '@mdi/react';

import {
  mdiWhatsapp ,
  mdiContacts,
  mdiGmail,
  mdiFacebook,
  mdiLinkedin
}
  from '@mdi/js';

function ContactMe() {
  return (
    <div className='bg-stone-900 rounded-xl w-1/3 flex-col '>
        <SubTitle subtitle="Contact me" iconName={mdiContacts} />

        <div className='p-2  flex flex-wrap gap-2'>
          <button className='font-bold p-2 border rounded-md flex space-x-1'>
            <Icon path={mdiWhatsapp} size={1} />
            <h1>WhatsApp</h1>
          </button>

          <button className='font-bold p-2 border rounded-md flex space-x-1'>
            <Icon path={mdiLinkedin} size={1} />
            <h1>Linkedin</h1>
          </button>

          <button className='font-bold p-2 border rounded-md flex space-x-1'>
            <Icon path={mdiGmail} size={1} />
            <h1>Gmail</h1>
          </button>

          <button className='font-bold p-2 border rounded-md flex space-x-1'>
            <Icon path={mdiFacebook} size={1} />
            <h1>Facebook</h1>
          </button>


        </div>
    </div>
  )
}

export default ContactMe
