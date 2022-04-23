import { HomePageType } from '@/lib/interface'
import { WrapperLarge } from '../wrapper'
import { Button } from '../data-components/button'
import ContactForm from '../data-components/contact-form'

export default function ContactUs({ data }: HomePageType) {
  return (
    <section id="contact-us">
      <div
        id="contact-us"
        className="hidden xl:block h-[150px] bg-brown-bg"
      ></div>

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
            {data.common.contactUsLinks.map((contactUsLink, index) => {
              return (
                <li key={index}>
                  {contactUsLink.linkType === 'address' ? (
                    <a
                      href={`https://www.google.co.il/maps/search/${contactUsLink.text}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="flex gap-2">
                        <img src={contactUsLink.imagePath} />
                        <p className="self-center">{contactUsLink.text}</p>
                      </div>
                    </a>
                  ) : (
                    <>
                      {contactUsLink.linkType === 'email' ? (
                        <a
                          href={`mailto:${contactUsLink.text}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="flex gap-2">
                            <img src={contactUsLink.imagePath} />
                            <p className="self-center">{contactUsLink.text}</p>
                          </div>
                        </a>
                      ) : (
                        <a href={`tel:${contactUsLink.linkValue}`}>
                          <div className="flex gap-2">
                            <img src={contactUsLink.imagePath} />
                            <p className="self-center">{contactUsLink.text}</p>
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
