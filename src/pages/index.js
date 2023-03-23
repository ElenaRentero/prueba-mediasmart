import { Poppins } from 'next/font/google'
// import styles from '@/styles/FormPage.module.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function FormPage () {
  return (
    <div className={poppins.className}>
      <p>Hello World</p>
    </div>
  )
}
