import React from 'react'
import Link_comp from './Link_comp'
import OtherLinks from './OtherLinks'


const ImportantLinks = () => {
  return (
    <div>
   <Link_comp job_title='Find Jobs' job_data="hi"/>
   <Link_comp job_title='Start Hiring'/>
   <Link_comp job_title='Popular Jobs'/>
   <Link_comp job_title='Jobs By Department'/>
   <OtherLinks/>
    </div>
  )
}

export default ImportantLinks