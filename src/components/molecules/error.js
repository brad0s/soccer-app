import React from 'react'
AiFillInfoCircle
import { AiFillInfoCircle } from 'react-icons/ai'

function Error() {
  const text = 'Unable to load data. <br>Try again later.'
  return (
    <div className="Error">
      <AiFillInfoCircle className="icon" />
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

export default Error
