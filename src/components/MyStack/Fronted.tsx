import SubTitle from '../SubTitles'

import BoxStack from './BoxStack'

import {
  mdiMonitorMultiple,
  mdiLanguageHtml5,
  mdiLanguageCss3,
  mdiLanguageJavascript,
  mdiTailwind,
  mdiReact,
  mdiLanguageTypescript,
}
  from '@mdi/js';



function Fronted() {
  return (

    <div className=' h-2/3 bg-stone-900 rounded-xl'>
      <SubTitle subtitle="Fronted Stack" iconName={mdiMonitorMultiple } />

      <div className='flex flex-col items-center space-y-1'>
        <BoxStack icon={mdiLanguageHtml5} subtitleIcon={"Html"}></BoxStack>
        <BoxStack icon={mdiLanguageCss3} subtitleIcon={"css"}></BoxStack>
        <BoxStack icon={mdiLanguageJavascript} subtitleIcon={"JavaScript"}></BoxStack>
        <BoxStack icon={mdiTailwind} subtitleIcon={"Tailwind"}></BoxStack>
        <BoxStack icon={mdiReact} subtitleIcon={"React"}></BoxStack>
        <BoxStack icon={mdiLanguageTypescript} subtitleIcon={"Typecript"}></BoxStack>
      </div> 
     
    </div>



  )
}

export default Fronted
