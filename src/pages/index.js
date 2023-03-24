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

  const submitForm = async () => {
    const cleanUser = {
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      message: user.message
    }

    if (user.selectTreatment) {
      cleanUser.gender = user.gender
    }

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(cleanUser),
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Head>
        <title>Mediasmart Contact Form</title>
      </Head>
      <Header />
      <ContactForm value={user} onChange={setUser} submitForm={submitForm} />
    </>
  )
}
