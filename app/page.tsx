"use client"
import React, { useState } from 'react'

const page = () => {
  const [name, setname] = useState<string>("")
  return (
      <>
        <form action="">
          <input value={name} onChange={e=>setname(e.target.value)} type="text" name='name' placeholder='Enter your name' /> <br />
          <button type='submit'>
            get info
          </button>
        </form>
      </>
  )
}

export default page