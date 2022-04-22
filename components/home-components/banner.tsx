import { HomePageType } from '@/lib/interface'
import themePreval from '@/lib/theme.preval'
import { PageHeader } from '../data-components/header-text'
import { Button } from '../data-components/button'
import { WrapperLarge } from '../wrapper'

export default function Banner({ data }: HomePageType) {
  return (
    <div className="wrapper overflow-hidden">
      <WrapperLarge>
        <div className="hidden 2xl:block max-h-full max-w-full">
          <img
            src="/icons/Rectangle-1.png"
            style={{ left: '165px', top: '0px' }}
          />
          <img
            src="/icons/Rectangle-2.png"
            style={{ left: '637px', top: '-190px' }}
          />
          <img
            src="/icons/Rectangle-3.png"
            style={{ left: '1398px', top: '87px' }}
          />
          <img
            src="/icons/Rectangle-4.png"
            style={{ left: '1627px', top: '259px' }}
          />
          <img
            src="/icons/Rectangle-5.png"
            style={{ left: '1262px', top: '540px' }}
          />
          <img
            src="/icons/Rectangle-6.png"
            style={{ left: '322px', top: '540px' }}
          />
          <img
            src="/icons/Rectangle-7.png"
            style={{ left: '-43px', top: '300px' }}
          />
        </div>

        <div className="grid place-items-center 2xl:py-24">
          <div className="background"></div>

          <PageHeader>{data.homepage.title}</PageHeader>

          <p className="text-xl text-center max-w-[400px] md:4/12 md:text-2xl">
            {data.homepage.description}
          </p>

          <Button
            className={
              'text-2xl bg-icon-bg text-light font-bold px-6 py-2 rounded-full mt-8'
            }
            type="button"
            text={data.homepage.getToKnowUsButton}
          />
        </div>
      </WrapperLarge>

      <style jsx>{`
        div.wrapper {
          margin-top: -${themePreval.height.header};
          padding-top: ${themePreval.height.header};
          position: relative;
        }

        div.background {
          position: absolute;
          z-index: -1;
          inset: 0;
          background: linear-gradient(
            109.17deg,
            white,
            rgb(203, 180, 229) 98.95%
          );
        }

        img {
          width: 315px;
          height: 380px;
          position: absolute;
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}
