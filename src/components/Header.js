import Image from 'next/image'

import styles from '@/styles/FormPage.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.divLogo}>
        <Image src='/images/mediasmartLogo.svg' width={230} height={70} alt='Mediasmart Logo' />
      </div>
    </header>
  )
}

export default Header
