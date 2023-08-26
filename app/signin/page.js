import React from 'react'
import css from './Create.module.css'

const Singin = () => {
  

  return (
    <>
    {/* <style jsx>{      `.backgroundColor{
        backgorundColor : "black";
      }`
}</style>
     */}
    <div className={`${css.headingstyle}`} style={{color: 'darkorange'}}>
      <h1 className='backgroundColor'>Type of css</h1>
      <ul>
        <li>Inline CSS</li>
        <li>external CSS(global.css)</li>
        <li>modular CSS (Create.module.css)</li>
        <li>In page css</li>
      </ul>
      <h1 id='singin'> 

    Singin
    </h1>

    </div>
    </>
  )
}

export default Singin;