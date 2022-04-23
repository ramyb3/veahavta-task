import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'
import Image from 'next/image'

export default function AboutTheClinic({ data }: HomePageType) {
  return (<>

    <div id="about-us"></div>

    <WrapperLarge className="bg-brown-bg lg:grid-cols-2 gap-10 place-items-center">
     
      <div className='xl:mr-20'>
        <Image 
          src={'/icons/about-clinic.png'}
          width={'702px'}
          height={'628px'}
        />
      </div>

      <div>
        <div className="text-3xl text-header-blue">
          {data.homepage.aboutHeading}
        </div>

        <h2 className="font-bold text-5xl pt-3 max-w-[440px]">
          {data.homepage.aboutTitle}
        </h2>

        <p className="text-lg max-w-[500px] py-10 pt-10">
          {data.homepage.aboutUsText}
        </p>

        <Button
          className={
            'text-lg font-bold bg-icon-bg text-light px-8 py-2 rounded-full'
          }
          text={data.homepage.aboutUsButton}
        />
      </div>
    </WrapperLarge>
  </>)
}
