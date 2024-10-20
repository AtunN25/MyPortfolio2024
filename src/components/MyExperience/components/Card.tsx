import image from '../../../assets/image.jpg'

import postgresql from '../../../assets/postgresql.svg'
import expressJs from '../../../assets/express-js.svg'
import Icon from '@mdi/react';

import {
    mdiTailwind,
    mdiReact,
    mdiLanguageTypescript,
    mdiGithub ,
    mdiApplicationParentheses
  }
    from '@mdi/js';

function Card() {
    return (


        <div className="border border-gray-500 rounded-lg w-1/4  flex-grow">
            <a href="#">
                <img className="rounded-t-lg h-1/3" src={image} alt="" />
            </a>
            <div className="p-1">
                <a href="#">
                    <h5 className="mb-2 text-sm font-bold text-white">Sistema de control de camelidos sudamericanos</h5>
                </a>
                <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">
                    Sistema de registro,contro y exportacion de sabanas en excel respecto a las diversas medidas de los camelidos...
                </p>
               
            </div>
            <div className='py-1 flex justify-between'>
                <div className='px-2 flex space-x-1 items-center'>
                    <img  className='h-6'  src={expressJs} />
                    <img  className='h-6' src={postgresql} />
                    <Icon path={mdiTailwind} size={1} className="mr-2 "/>
                    <Icon path={mdiReact} size={1} className="mr-2 "/>
                    <Icon path={mdiLanguageTypescript} size={1} className="mr-2 "/>
                    
                </div>
                <div className=''>
                    <div className='px-2 flex space-x-1 items-center'>
                        <Icon className='border rounded' path={mdiGithub} size={1.2} />
                        <Icon className='border rounded' path={mdiApplicationParentheses} size={1.2} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card
