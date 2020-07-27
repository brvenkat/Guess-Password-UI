import * as React from 'react'
import * as styles from '../styles/Arrow.styles'
import classNames from 'classnames'

export const Arrow = (props: { className?: string}) => (
  <div className={classNames(styles.arrow, props.className)}>
    <div className={styles.line}></div>
    <div className={styles.point}></div>
</div>
)