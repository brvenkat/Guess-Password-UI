import * as React from 'react'
import * as styles from '../styles/Error.styles'

export const Error = ({ formErrors }) => (
  <span className={styles.ErrorBox}>
  { 
    formErrors.length > 0 && formErrors.map((error, index) => (
      <span key={index} className={styles.Errors}>{error}</span>
    ))
  }
  </span>
)