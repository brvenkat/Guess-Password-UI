import * as React from 'react'
import * as styles from '../styles/Attempt.styles'
import { Arrow } from '../components/Arrow'
import classNames from 'classnames'

interface IAttempts {
  hints: {
    correct?: boolean
    highlight?: string[]
    attempt?: string
  }[]
}

export const Attempts = (props: IAttempts) => (
  <>
  { props.hints.length > 0 && props.hints.map((entry, index) => (
    <span key={index} className={styles.spanBody}>
      <span className={styles.attemptText}>User Attempt {index + 1}</span>
      <Arrow className={'is-attempt'}/>
        <span className={styles.wholeText}>
        {
          entry.attempt.split('').map((innerEntry, innerKey) => (
            <span key={innerKey} 
              className={classNames(styles.letter, {'is-highlighted': entry.highlight.indexOf(innerEntry) !== -1})}>
              {innerEntry}
            </span>
          ))
        }
        </span>
    </span>
  )) }
  </>
)