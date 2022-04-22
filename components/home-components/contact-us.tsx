import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'
import ContactForm from '../data-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return (
    <section id="contact-us">
      <div className="hidden xl:block h-[150px] bg-brown-bg"></div>

      <WrapperLarge className="bg-contact-bg place-items-center xl:grid-cols-2 gap-6 lg:gap-8">
        <div className="grid grid-rows-auto-1fr gap-6">
          <Button
            className={
              'text-2xl rounded-full text-icon-bg font-bold bg-light max-w-[119px]'
            }
            type="button"
            text={data.homepage.contactUsHeading}
          />

          <h2 className="text-4xl font-bold">{data.homepage.contactUsTitle}</h2>
          <p className="text-xl max-w-[400px] pt-3">
            {data.homepage.contactUsText}
          </p>

          <ul className="grid gap-2.5 lg:grid-cols-auto-1fr grid-rows-auto-1fr">
            {data.common.contactUsLinks.map((x, index) => {
              return (
                <li key={index}>
                  {x.linkType === 'address' ? (
                    <a
                      href={`https://www.google.co.il/maps/search/${x.text}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex gap-2">
                        <img src={x.imagePath} />
                        <p className="self-center">{x.text}</p>
                      </div>
                    </a>
                  ) : (
                    <>
                      {x.linkType === 'email' ? (
                        <a
                          href={`mailto:${x.text}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex gap-2">
                            <img src={x.imagePath} />
                            <p className="self-center">{x.text}</p>
                          </div>
                        </a>
                      ) : (
                        <a href={`tel:${x.linkValue}`}>
                          <div className="flex gap-2">
                            <img src={x.imagePath} />
                            <p className="self-center">{x.text}</p>
                          </div>
                        </a>
                      )}
                    </>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <ContactForm data={data} />
      </WrapperLarge>
    </section>
  )
}
