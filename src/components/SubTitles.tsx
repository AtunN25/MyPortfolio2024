import Icon from '@mdi/react';


function SubTitles({ subtitle,iconName }: { subtitle: string,iconName: string}) {
  return (
    <div className='flex text-sm justify-center rounded-xl py-1 items-center border-t-2 border-teal-800 '>
      <Icon path={iconName} size={1} className="mr-2 text-teal-200" />
      {subtitle}
    </div>
  )
}

export default SubTitles
