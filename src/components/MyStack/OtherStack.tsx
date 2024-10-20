import SubTitle from '../SubTitles'
import powerBi from '../../assets/powerbi.svg'
import BoxStack from './BoxStack'

import {

  mdiChartBarStacked,
  //mdiArch,
  mdiUbuntu,
  mdiGit,
  mdiLanguageJava,
  mdiLanguageCpp,
  mdiNodejs,
  mdiMicrosoftExcel,
  mdiGithub
  
}
  from '@mdi/js';

 const stackItems = [
    { icon: mdiUbuntu, subtitle: "Ubuntu" },
    { icon: mdiGit, subtitle: "Git" },
    { icon: mdiGithub, subtitle: "Github" },
    { icon: mdiLanguageJava, subtitle: "Java" },
    { icon: mdiLanguageCpp, subtitle: "C++" },
    { icon: mdiNodejs, subtitle: "NodeJs" },
    { icon: mdiMicrosoftExcel, subtitle: "Excel" },
  ];

  //const carruselStack = [...stackItems,...stackItems]

function OtherStack() {
  return (
    <div className='h-2/3 bg-stone-900 rounded-xl'>
      <SubTitle subtitle="Other Stack" iconName={mdiChartBarStacked} />
      <div className='flex flex-col items-center space-y-1'>
        {stackItems.map((item, index) => (
          <BoxStack key={index} icon={item.icon} subtitleIcon={item.subtitle}></BoxStack>
        ))}
        <div>
          <img className='h-10 flex items-center w-full' src={powerBi} />
            <p className='font-thin text-center'>PowerBi</p>
          </div>
        </div>
    </div>
  )
}

export default OtherStack
