import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { HomePageType } from '@/lib/interface'
import { Button } from './button'
import Input from './input-component'

export default function ContactForm({ data }: HomePageType) {
  const [fill, setFill] = useState(false)

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      text: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required field'),

      lastName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required field'),

      email: Yup.string().email('Invalid Email').required('Required field'),

      tel: Yup.string()
        .matches(phoneRegExp, 'Invalid Phone Number')
        .required('Required field'),
    }),
    onSubmit: () => {
      setFill(true)
    },
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-light rounded-xl text-xl font-bold p-4 w-full max-w-[650px] xl:mt-[-200px]"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Input
          name="firstName"
          text={data.common.contactUsFormFirstName}
          formik={formik}
          touch={formik.touched.firstName}
          error={formik.errors.firstName}
        />
        <Input
          name="lastName"
          text={data.common.contactUsFormLastName}
          formik={formik}
          touch={formik.touched.lastName}
          error={formik.errors.lastName}
        />
        <Input
          name="email"
          text={data.common.contactUsFormEmail}
          formik={formik}
          touch={formik.touched.email}
          error={formik.errors.email}
        />
        <Input
          name="tel"
          text={data.common.contactUsFormPhone}
          formik={formik}
          touch={formik.touched.tel}
          error={formik.errors.tel}
        />
      </div>

      <div className="grid gap-3 pt-4">
        <p className="pt-8">{data.common.contactUsFormMessage}</p>

        <textarea
          className="h-[145px] rounded-xl px-2 shadow-4xl"
          name="text"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
      </div>

      <Button
        className={
          'text-3xl font-bold bg-icon-bg text-light mt-4 mb-4 px-12 py-3 rounded-full'
        }
        type="submit"
        text={data.common.contactUsFormSendButton}
      />

      {fill == true ? (
        <div className="text-lg text-center text-light bg-success">
          form sent
        </div>
      ) : null}
    </form>
  )
}
