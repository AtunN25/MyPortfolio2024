import Icon from '@mdi/react';
//import SubTitle from '../SubTitles'
import catImage from '../../assets/cat.png';
import Typewriter from 'typewriter-effect';

import {
  mdiGmail,
  mdiWhatsapp,
  mdiSchool,
  mdiMapMarker,
  mdiTranslateVariant,
  mdiDownloadBoxOutline,

  mdiAccountSchool,
  mdiAccountTie,
  mdiCodeLessThan

}
  from '@mdi/js';


function Main() {
  return (
    <div className='  rounded-md flex '>
      <div className="shadow-2xl bg-stone-900 rounded-xl pb-6 p-2 space-y-4 border-t-2 border-teal-800">
        <div className=' flex rounded-md  dark:shadow-2xl'>
          <div className='w-1/2 p-4'>
            <img src={catImage} className="h-48 w-48" />
          </div>
          <div className=" flex flex-col p-2 w-full">
            <div className="h-1/3 w-full flex justify-between items-center">

              <div className='bg-neutral-800 border border-zinc-700 rounded-xl py-1 px-4 h-1/2 flex space-x-2 items-center '>
                <div className=" relative flex h-2 w-2">
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></div>
                  <div className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></div>
                </div>
                <h2 className=''>Available To Work</h2>
              </div>

              <div className='flex items-center '>
                my cv&nbsp;
                <Icon className='bg-neutral-900 border border-zinc-700 rounded-xl  p-1' path={mdiDownloadBoxOutline} size={1.8} />
              </div>
            </div>
            <div className="h-2/3 px-2 justify-center space-y-3 flex flex-col">
              <h1 className='font-bold text-3xl'>Frank Chaparro</h1>
              <p className='text-teal-200'>
              <Typewriter
                    onInit={typewriter => {
                      typewriter
                        .typeString('<span style="color: white;">I am a </span>')
                        .typeString('Software Developer')
                        .deleteChars(18)
                        .pauseFor(2000)
                        .typeString('Computer science and systems student.')
                        .pauseFor(1000)
                        .start();
                    }}
                  />
              </p>
            </div>
          </div>
        </div>
        <div className='bg-stone-800 rounded-lg p-2 flex flex-wrap gap-2'>
          <div className='bg-neutral-800 border border-stone-700  h-8 rounded-lg p-2 flex items-center'>
            <Icon path={mdiMapMarker} size={1} className="mr-2" />  Peru
          </div>

          <div className='bg-neutral-800 border border-stone-700  h-8 rounded-lg p-2 flex items-center'>
            <Icon path={mdiTranslateVariant} size={1} className="mr-2" />English & Spanish
          </div>

          <div className='bg-neutral-800 border border-stone-700  h-8 rounded-lg p-2 flex items-center'>
            <Icon path={mdiSchool} size={1} className="mr-2" />UNJBG
          </div>
          <div className='bg-neutral-800 border border-stone-700  h-8 rounded-lg p-2 flex items-center'>
            <Icon path={mdiCodeLessThan} size={1} className="mr-2" />Software Developer
          </div>

          <div className='bg-neutral-800 border border-stone-700  h-8 rounded-lg p-2 flex items-center'>
            <Icon path={mdiAccountSchool} size={1} className="mr-2" />Computer and systems Engineer
          </div>
          <div className='bg-neutral-800 border border-stone-700  h-8 rounded-lg p-2 flex items-center'>
            <Icon path={mdiAccountTie} size={1} className="mr-2" />Student
          </div>

        </div>

        <div className=' flex space-x-2'>
          <a
            className="flex grow justify-center items-center bg-stone-800  font-semibold w-1/2 p-1  rounded-lg  "

            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon path={mdiWhatsapp} size={1.5} className="mr-2" /> WhatsApp
          </a>

          <a
            className="flex grow items-center justify-center bg-stone-800 text-font-semibold w-1/2 p-1 rounded-lg "

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
