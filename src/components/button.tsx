'use client'

import { useState } from "react";


function Button() {
    const [state, setState] = useState(false)
  return (
      <button onClick={()=>{setState(!state)}}>{state?'on':'off'}</button>
  )
}

export default Button
