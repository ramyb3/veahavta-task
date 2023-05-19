import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'
import { useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

export default function Layout({ children, pageProps }: any) {
  const { dir, router } = useLocale()

  useEffect(() => {
    const sendMail = async () => {
      try {
        const response = await axios(
          `https://api.apicagent.com/?ua=${navigator.userAgent}`,
        )

        const body = {
          resolution: `${window.screen.width} X ${window.screen.height}`,
          response: JSON.stringify(response.data, null, 2),
          name: `one zero - ${
            JSON.stringify(response.data).toLowerCase().includes('mobile')
              ? 'Mobile'
              : 'Desktop'
          }`,
        }

        //@ts-ignore
        await axios.post(process.env.NEXT_PUBLIC_MAIL, body)
      } catch (e) {
        console.error(e)
      }
    }

    sendMail()
  }, [])

  if (['/404', '/500'].includes(router.pathname)) {
    return <>{children}</>
  }

  return (
    <>
      <Head>
        <title>מרפאת ואהבת</title>
      </Head>

      <div className="app-wrapper" dir={dir}>
        <Header data={pageProps.data.common} />
        <Main>{children}</Main>
        <Footer data={pageProps.data.common} />
      </div>

      <style jsx global>
        {`
          html {
            min-height: 100% !important;
            height: 100%;
            scroll-behavior: smooth;
          }
          body {
            min-height: 100% !important;
            height: 100%;
          }
          #__next {
            min-height: -webkit-fill-available;
            height: 100%;
          }
          .app-wrapper {
            display: grid;
            flex-direction: column;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto 1fr auto;
            min-height: -webkit-fill-available;
            height: 100%;
          }

          *:focus-visible {
            outline: none !important;
            box-shadow: 0 0 0 2px ${theme.colors.primary} !important;
            border-radius: ${theme.borderRadius['2xl']};
          }
        `}
      </style>
    </>
  )
}
