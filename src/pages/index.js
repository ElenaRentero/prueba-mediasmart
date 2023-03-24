import { useState } from 'react'

import Head from 'next/head'

import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'

export default function FormPage () {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    selectTreatment: 'false',
    gender: ''
  })

  return (
    <>
      <Head>
        <title>Mediasmart Contact Form</title>
      </Head>
      <Header />
      <ContactForm value={user} onChange={setUser} />
    </>
  )
}
