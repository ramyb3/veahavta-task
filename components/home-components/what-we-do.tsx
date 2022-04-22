import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'

export default function WhatWeDo({ data }: HomePageType) {
  return (<WrapperLarge className="bg-brown-bg place-items-center gap-1.5 text-center">

    <div className="text-2xl text-red py-4">
      {data.homepage.whatWeDoHeading}
    </div>

    <h2 className="text-7xl font-bold">
      {data.homepage.whatWeDoTitle}
    </h2>

    <div className="grid mt-10 xl:grid-cols-4 gap-5 md:grid-cols-2 gap-5">
      {
        data.homepage.whatWeDoCards.map((x, index) => 
        {
          return <div key={index} className="rounded-3xl h-[480px] bg-light max-w-[338px] overflow-hidden">
          
            <div className="grid place-items-center bg-contact-bg min-h-[241px]">
              <img src={x.imagePath}/>
            </div>
          
            <h2 className="text-3xl text-icon-bg font-bold py-4">{x.title}</h2>
            <p className="text-xl">{x.text}</p>
          </div>
        })
      }
    </div>
  </WrapperLarge>)
}