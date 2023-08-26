import Link from 'next/link'
import React from 'react'


const page = () => {

  // utils
  //  Usercontext.js
  //  context api
  // data layer
  return (
    <div> 
      <nav>
      <Link href="/signin">
        Singin
      </Link>
      <Link href="/home">Home</Link>
      </nav>
      
    </div>
  );
}

export default page

// static routing 