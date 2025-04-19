import React from 'react'
import TestimonalCard from './TestimonalCard'
import Testimonial_desc from './Testimonal_desc'
import "./testimonal.css";

const Testimonal = () => {
  return (
    <div className='main-container'>
      <Testimonial_desc/>
     <div className='cards'> 
     <TestimonalCard name='Shivangi Singla' img='https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fshiwangi-singla.png&w=1920&q=75' desc='"Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field,
     you can easily find a job through the Apna app."'/>
     {/* <TestimonalCard name='Jenil Ghevariya' img='https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fjenil-ghevariya.png&w=1920&q=75' desc='"This app is very helpful if you are looking for a job and the team is also very supportive and friendly. They guided me through every stage. It is very easy to find a job on Apna because there are a lot of job options here for everyone. I got a job interview call very quickly after applying."'/>
     <TestimonalCard name='Kaynat Mansuri' img='https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Fkaynat-mansuri.png&w=1920&q=75' desc='"It is definitely a great app with correct and true information on the job details. I am happy to use it and I would also recommend my friends to use it for their career development."'/>
     <TestimonalCard name='Rekha' img='https://apna.co/_next/image?url=https%3A%2F%2Fcdn.apna.co%2Fcloudinary%2FHomepageRevampAssets%2Frekha.png&w=1920&q=75' desc='    "Thanks Apna for helping me find a job without much hassle. If you are a fresher or a skilled person with expert knowledge in a specific field you can easily find a job through the Apna app."'/> */}

     </div>

    </div>
  )


}

export default Testimonal
