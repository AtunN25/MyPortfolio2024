import Icon from '@mdi/react';


function SubTitles({ subtitle,iconName }: { subtitle: string,iconName: string}) {
  return (
    <div className='flex justify-center bg-blue-700  '>
      <Icon path={iconName} size={1} className="mr-2" />
      {subtitle}
    </div>
  )
}

export default SubTitles
