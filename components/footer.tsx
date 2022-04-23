import { CommonType } from '@/lib/interface'
import { WrapperLarge } from './wrapper'
import { Button } from './data-components/button'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer({ data }: CommonType) {
  return (
    <WrapperLarge>
      <footer className="bg-light gap-6 grid md:grid-cols-2 lg:grid-cols-4">
        <Image
          src="/icons/veahavta-icon.svg"
          height={'152px'}
          width={'348px'}
        />

        <div className="grid md:justify-self-center grid-rows-auto-1fr gap-2.5">
          <Button
            className={
              'text-icon-bg font-bold px-8 py-2 rounded-full border-2 border-solid'
            }
            text={data.footerScheduleButton}
          />
          <Button
            className={
              'text-icon-bg font-bold px-8 py-2 rounded-full border-2 border-solid h-[48px]'
            }
            text={data.footerSupportUsButton}
          />
        </div>

        <div>
          <h2 className="font-bold text-2xl">{data.footerMenuTitle}</h2>

          <div className="grid gap-2 pt-2">
            <Link href={data.appLinks[1].relativeLink}>
              <a>{data.appLinks[1].text}</a>
            </Link>
            <Link href={data.appLinks[2].relativeLink}>
              <a>{data.footerContactUsTitle}</a>
            </Link>
            <Link href={data.appLinks[3].relativeLink}>
              <a>{data.footerSupportUsButton}</a>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl">{data.appLinks[2].text}</h2>

          <ul className="grid gap-2 pt-2">
            <li>
              <a href={`tel:${data.contactUsLinks[0].linkValue}`}>
                <div className="flex gap-2 mb-1">
                  <img src={'/footer' + data.contactUsLinks[0].imagePath} />
                  <p className="self-center">
                    {data.contactUsLinks[0].text}
                    <br />
                    {data.contactUsLinks[1].text}
                  </p>
                </div>
              </a>
            </li>

            <li>
              <a
                href={`mailto:${data.contactUsLinks[3].text}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex gap-2 mb-1 -mr-1">
                  <img src={'/footer' + data.contactUsLinks[3].imagePath} />
                  <p className="self-center">{data.contactUsLinks[3].text}</p>
                </div>
              </a>
            </li>

            <li>
              <a
                href={`https://www.google.co.il/maps/search/${data.contactUsLinks[2].text}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex gap-2 mb-1">
                  <img src={'/footer' + data.contactUsLinks[2].imagePath} />
                  <p className="self-center">{data.contactUsLinks[2].text}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </WrapperLarge>
  )
}
