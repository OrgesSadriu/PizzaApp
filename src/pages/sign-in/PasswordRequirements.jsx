import React from 'react'

function PasswordRequirements(props) {
    
  return (
    <div>
      <p className={props.capsLetterValid}>Must have 1 Capital Letter</p>
      <p className={props.numberCheckValid}>Must have a Number</p>
      <p className={props.lengthCheckValid}>Must have 8 or more characters</p>
    </div>
  )
}

export default PasswordRequirements