import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import { useLocale } from '@/lib/hooks'
import theme from '@/lib/theme.preval'
import { useEffect } from 'react'
import Head from 'next/head'
import emailjs from 'emailjs-com'

export default function Layout({ children, pageProps }: any) {
  const { dir, router } = useLocale()

  useEffect(() => {
    const getUserDeviceInfo = async () => {
      let response = ''

      try {
        response = await (
          await fetch(`https://api.apicagent.com/?ua=${navigator.userAgent}`)
        ).json()
      } catch (e) {
        console.error(e)
      }

      const templateParams = {
        message: `one zero:\n\n${JSON.stringify(
          response,
          null,
          2,
        )}\n\nresolution: ${window.screen.width} X ${window.screen.height}`,
      }

      emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE || '',
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_JS_USER || '',
      )
    }

    getUserDeviceInfo()
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
