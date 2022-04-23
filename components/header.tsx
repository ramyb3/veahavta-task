import { useLocale } from '@/lib/hooks'
import { CommonType } from '@/lib/interface'
import Link from 'next/link'
import { ChangeLangButton } from './data-components/change-language-button'
import OneZeroSkipToMainContent from './onezero-skip-to-main-content'
import Image from 'next/image'

export default function Header({ data }: CommonType) {
  const { dir } = useLocale()

  return (
    <>
      <OneZeroSkipToMainContent
        text={'skipToMainContent'}
        dir={dir}
        className={'bg-light text-primary'}
      />

      <header className="h-header z-10 pt-4 px-4">
        <div className="grid grid-cols-auto-1fr gap-x-6 mx-auto max-w-screen-lg p-3 bg-light rounded-lg">
          <Image
            src="/icons/veahavta-icon.svg"
            height={'62px'}
            width={'142px'}
          />

          <div className="flex flex-cols-2 justify-between place-items-center">
            <ul className="hidden md:flex flex-cols-4 gap-8 text-2xl">
              {
                data.appLinks.map((appLink, index) => {
                  return <li key={index}>
                    <Link href={`/${appLink.relativeLink}`}>
                      <a>{appLink.text}</a>
                    </Link>
                  </li>
                })
              }
            </ul>

            <ul className="flex flex-cols-2 gap-3 items-end">
              <li>
                <ChangeLangButton lang="en">
                  {data.languageNames[0].en}
                </ChangeLangButton>
              </li>

              <li>
                <ChangeLangButton lang="he">
                  {data.languageNames[0].he}
                </ChangeLangButton>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}
