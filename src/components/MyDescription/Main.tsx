import Icon from '@mdi/react';
import SubTitle from '../SubTitles'
import catImage from '../../assets/cat.png';

import {
  mdiGmail,
  mdiWhatsapp,
  mdiSchool,
  mdiMapMarker,
  mdiTranslateVariant,
  mdiDownloadBoxOutline,

  //mdiAccountMultiple,
  //mdiFilePdfBox,

}
  from '@mdi/js';


function Main() {
  return (
    <div className='bg-blue-500  rounded-md flex p-2'>
          <div className="bg-slate-500  p-2">
            <div className='bg-neutral-800 flex rounded-md  shadow-2xl p-2'>
              <div className='w-1/2'>
                <img src={catImage} className="h-48 w-48" />
              </div>
              <div className="bg-amber-400 flex flex-col p-2 w-full">
                <div className="bg-red-600 h-1/3 w-full flex justify-between items-center">

                  <div className='bg-neutral-700 py-1 px-4 h-1/2 flex space-x-2 items-center rounded-xl'>
                    <div className=" relative flex h-2 w-2">
                      <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                      <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
                    </div>
                    <h2 className=''>Available To Work</h2>
                  </div>

                  <div className='flex items-center '>
                    My cv <Icon className='bg-neutral-700 p-1' path={mdiDownloadBoxOutline} size={1.5} />
                  </div>
                </div>
                <div className="bg-yellow-400 h-2/3 px-2">
                  <h1 className='font-bold text-2xl'>My name is Frank</h1>
                  <h2 className='font-bold'>I'm student</h2>
                </div>
              </div>
            </div>
            <div className='bg-red-300  p-2 flex flex-wrap gap-2'>
              <div className='bg-neutral-800 h-8 rounded-lg p-2 flex items-center'>
                <Icon path={mdiMapMarker} size={1} className="mr-2" />  Peru
              </div>

              <div className='bg-neutral-800 h-8 rounded-lg p-2 flex items-center'>
                <Icon path={mdiTranslateVariant} size={1} className="mr-2" />English & Spanish
              </div>

              <div className='bg-neutral-800 h-8 rounded-lg p-2 flex items-center'>
                <Icon path={mdiTranslateVariant} size={1} className="mr-2" />English & Spanish
              </div>
              <div className='bg-neutral-800 h-8 rounded-lg p-2 flex items-center'>
                <Icon path={mdiTranslateVariant} size={1} className="mr-2" />English & Spanish
              </div>
              <div className='bg-neutral-800 h-8 rounded-lg p-2 flex items-center'>
                <Icon path={mdiSchool} size={1} className="mr-2" />Computer and systems engineer
              </div>
              <div className='bg-neutral-800 h-8 rounded-lg p-2 flex items-center'>
                <Icon path={mdiTranslateVariant} size={1} className="mr-2" />English & Spanish
              </div>

            </div>

            <div className='bg-red-800 p-2 flex space-x-2'>
              <a
                className="flex grow justify-center items-center bg-neutral-800  font-semibold  px-4   rounded"

                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiWhatsapp} size={1.5} className="mr-2" /> WhatsApp
              </a>

              <a
                className="flex grow items-center justify-center bg-neutral-800 text-font-semibold  px-4 border rounded"

                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon path={mdiGmail} size={1.5} className="mr-2" /> Gmail
              </a>

            </div>
          </div>

         {/*
          <div className='bg-red-400 flex flex-col p-2 space-y-2'>
            <div className='bg-neutral-800 p-2 rounded-md h-1/3 font-semibold'>
              <SubTitle subtitle="Projects" iconName={mdiAccountMultiple} />
            </div>
            <div className='bg-neutral-800 p-2 rounded-md h-1/3 font-semibold'>
              <SubTitle subtitle="Clients" iconName={mdiAccountMultiple} />
            </div>
            <div className='bg-neutral-800 p-2 rounded-md h-1/3 font-semibold'>
              <SubTitle subtitle="Experience" iconName={mdiAccountMultiple} />
            </div>
          </div>
         */}


        </div>
  )
}

export default Main
