'use client'
import { getDataPath, getImgPath } from '@/utils/image'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data/page-data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setEductionData(data?.educationData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section>
      <div className='border-t border-softGray overflow-hidden'>
        <div className='container relative z-10'>
          <Image
            src={getImgPath(
              '/images/home/education-skill/edu-skill-vector.svg'
            )}
            alt='vector'
            width={260}
            height={170}
            className='no-print absolute top-0 left-0 transform -translate-y-1/2'
          />
          <div className='relative z-10 py-16 md:py-32'>
            <div className='flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16'>
              <h2>Skills</h2>
              <p className='text-xl text-orange-500'>( 04 )</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-10 xl:gap-20'>
              <div className='w-full lg:max-w-full flex flex-col gap-0 xl:gap-8'>
                <p className='text-black  text-3xl'>Languages : HTML, CSS, JavaScript </p>
                <p className='text-black  text-3xl'>Frameworks & Libraries: React.js, Redux, Context API, Bootstrap, Tailwind CSS, Framer Motion </p>
                <p className='text-black  text-3xl'>Tools & Technologies: GitHub, REST API Integration, WordPress, cPanel, hPanel, Figma, Adobe Illustrator </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSkills
