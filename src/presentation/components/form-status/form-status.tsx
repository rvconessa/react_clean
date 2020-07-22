import React from 'react'
import Styles from './_form-status.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
