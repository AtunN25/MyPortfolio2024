import SubTitle from '../SubTitles'
import unjbg from '../../assets/unjbg.png'
import ceid from '../../assets/ceid.jpg'

import {
  mdiSchool,
}
  from '@mdi/js';

function Education() {
  return (
    <div className='flex h-1/4 gap-2 space-x-1  '>
      <div className='shadow-2xl bg-stone-900 rounded-xl  flex-col w-1/3 border-t-4 border-teal-800 flex space-y-3 justify-center items-center'>
        <img  className='h-24 '  src={unjbg} />
        <img  className='h-20 p-2 bg-slate-50 rounded-lg'  src={ceid} />
      </div>
      <div className='shadow-2xl bg-stone-900 rounded-xl  flex-col w-2/3'>
        <SubTitle subtitle="Education" iconName={mdiSchool} ></SubTitle>


        <div className='ps-6 text-sm'>
          <ol className="relative border-s border-gray-200">
            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5"></div>
              <h1 className="font-bold">Computer science and systems engineering</h1>
              <p className="text-base text-gray-500 dark:text-gray-400">Universidad Nacional Jorge Basadre Grohmann</p>
              <p className="text-base text-gray-500 dark:text-gray-400">(5th cycle)</p>
            </li>

            <li className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5"></div>
              <time className="font-bold">English</time>
              <p className="text-base text-gray-500 dark:text-gray-400">Centro de Idiomas Universidad Nacional Jorge Basadre</p>
              <p className="text-base text-gray-500 dark:text-gray-400">(Intermediate level)</p>
            </li>
          </ol>
        </div>


      </div>
    </div>
  )
}

export default Education
