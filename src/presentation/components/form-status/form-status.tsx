import React, { useContext } from 'react'
import Styles from './_form-status.scss'
import Spinner from '@/presentation/components/spinner/spinner'
import Context from '@/presentation/context/form/form-context'

const FormStatus: React.FC = () => {
  const { state: { isLoading }, errorState: { mainError } } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { mainError && <span className={Styles.error}>{mainError}</span> }
    </div>
  )
}

export default FormStatus
