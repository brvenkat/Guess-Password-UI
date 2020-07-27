import * as React from 'react'
import { Attempts } from '../components/Attempts';
import { Error } from '../components/Error'
import * as styles from '../styles/verifyHint.styles'

export function VerifyHint(props: {hint: string}) {
  const [attempts, setAttempts] = React.useState([])
  const [currInput, setCurrInput] = React.useState('')
  const [allErrors, setAllErrors] = React.useState([])

  const validateInput = () => {
    let isValid = true
    const isNum = /^\d+$/.test(currInput)
    let errorList = []
    if (!isNum) {
      isValid = false
      errorList.push('Please enter numbers only')
    }
    if (currInput.length !== 8) {
      isValid = false
      errorList.push('Number should be of length 8')
    }
    setAllErrors([...allErrors, ...errorList])
    setCurrInput('')
    return isValid
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!validateInput())
      return

    fetch('/verify-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attempt: currInput, hint: props.hint }),
    })
    .then(res => res.json())
    .then(response => {
      if(response.status === 404) {
        setAllErrors([...allErrors, ...['The hint does not exist']])
      } else {
        setAttempts([...attempts, response])
        setCurrInput('')
        setAllErrors([])
      }
    })
    .catch((error) => console.log(error))
  }

  return (
    <>
      <Attempts hints={attempts}/>
      {
        allErrors.length > 0 && <Error formErrors={allErrors} />
      }
      <form onSubmit={handleSubmit}>
        <input
          type="hint"
          placeholder="Type Here"
          value={currInput}
          onChange={(e) => setCurrInput(e.target.value)}
          className={styles.input}
        />
        <br/>
        <button className={styles.button}>SUBMIT</button>
      </form>
    </>
  )
}