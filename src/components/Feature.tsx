import React from 'react'

const Feature = () => {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-24 text-black'>
        <h2 className='text-center text-3xl font-bold md:text-5xl  lg:txt-left animate-fade-in-up-transition-all  duration-500 ease-in-out trasform hover:translate-y-[-5px] hover:text-black text-red-600'>
          Kiran Ahmed :  Harvard Health Blog !
        </h2>
<p className='text-center m-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>Read posts from experts at Harvard Health Publishing covering a variety of health topics and perspectives on medical news.</p>
    <div className='mx-auto max-w-7xl px-5'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Explore Our Categories</h1>
    <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
      {[
        "Allergies",
       "Arthritis", 
       "Cancer",
        "Cold & Flu", 
        "Diabetes",
         "Heart Health ",
        ].map((category, index) =>(
        <div key={index} className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-netural-600'>
     <p className='text-center text-lg font-semibold'>{category}</p>
     <div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out gap-2'>
      
       </div>
     </div>
      ))}
    </div>
    </div>
    <p className='text-sm md:text-center text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10 '>
        Dive into our diverse range of health topics and practical advice from
          Harward Health publition experts. Each category features carefully curated blogs that explore
           the latest trands, innovative treatments, and expert insights on a variety of health conditions. Explore our 
           categories to find the information you need to make informed decisions about your health. 
      </p>
      </section>
    </div>
  )
}

export default Feature
