import React, { memo } from 'react'
import Styles from './_login-header.scss'
import Logo from '@/presentation/components/logo/logo'

type Props = React.HTMLAttributes<HTMLElement>

const LoginHeader: React.FC<Props> = (props: Props) => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
