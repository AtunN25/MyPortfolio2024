import SubTitle from '../SubTitles'
import powerBi from '../../assets/powerbi.svg'
import BoxStack from './BoxStack'
import "./stack.css"

import {

  mdiChartBarStacked,
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
    { icon: powerBi, subtitle: "PowerBi", isImage: true },
    { icon: mdiLanguageJava, subtitle: "Java" },
    { icon: mdiLanguageCpp, subtitle: "C++" },
    { icon: mdiNodejs, subtitle: "NodeJs" },
    { icon: mdiMicrosoftExcel, subtitle: "Excel" },
    
  ];

  const carruselStack = [...stackItems,...stackItems]

  function OtherStack() {
    return (
      <div className="h-2/3 bg-stone-900 rounded-xl">
        <SubTitle subtitle="Other Stack" iconName={mdiChartBarStacked} />
        <div className="h-[calc(100%-50px)] overflow-hidden relative">
          <div className="animate-scroll flex flex-col items-center space-y-1">
            {carruselStack.map((item, index) => (
              item.isImage ? ( 
                <div key={index} className="flex flex-col items-center">
                  <img
                    className="h-10 w-full"
                    src={item.icon} 
                    alt={item.subtitle}
                  />
                  <p className="font-thin text-center">{item.subtitle}</p>
                </div>
              ) : (
                <BoxStack
                  key={index}
                  icon={item.icon}
                  subtitleIcon={item.subtitle}
                />
              )
            ))}
          </div>
          
        </div>
      </div>
    );
  }
  
export default OtherStack
