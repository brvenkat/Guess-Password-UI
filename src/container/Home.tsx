import * as React from 'react';
import * as styles from '../styles/Home.style'
import { VerifyHint } from './VerifyHint'
import { Arrow } from '../components/Arrow'

export function Home() {
  const [hint, setHint] = React.useState('')

  React.useEffect(() => {
    fetch('/new-password')
    .then(res => res.json())
    .then(response => setHint(response.hint))
    .catch((error) => console.log(error))
  }, [])

  return (
    <div className={styles.homeStyle}>
      Guess The Password!<br/>
      <HorizontalLine />
      <span className={styles.hintStyle}>
        <span className={styles.rightMargin}>Hint</span>
        <Arrow />
        <span className={styles.hintText}>{hint}</span>
      </span>
      <VerifyHint hint={hint}/>
    </div>

  )
}

export const HorizontalLine = () => (
  <span
      style={{
          borderBottom: '1px solid black',
          marginTop: '5px'
      }}
  />
);