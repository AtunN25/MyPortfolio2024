import SubTitle from '../SubTitles'
import mysql from '../../assets/mysql.svg'
import postgresql from '../../assets/postgresql.svg'

import {
 
  mdiDatabase,
}
  from '@mdi/js';

function DataBase() {
  return (
    
      <div className='h-1/3 bg-stone-900 rounded-xl'>
            <SubTitle subtitle="DataBase Stack" iconName={mdiDatabase} />
            <div className='flex flex-col items-center space-y-3'>
              
              <div>
                <img src={mysql} />
                <p className='font-thin text-center'>Mysql</p>
              </div>
              <div>
                <img className='h-10 flex items-center w-full' src={postgresql} />
                <p className='font-thin text-center'>PostgreSql</p>
              </div>
              
            </div>
      </div>
    
  )
}

export default DataBase
