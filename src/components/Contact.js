import React from 'react'
import "../style.css"
import Main from './Main'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t, i18n } = useTranslation();
    const handleClick=(lang)=>{
      i18n.changeLanguage(lang)
    }
  return (
    <>
    <div className='my-5'>
       <button className='btn btn-info mx-2 text-white' onClick={()=>handleClick("en")}>English</button>
       <button className='btn btn-info mx-2 text-white' onClick={()=>handleClick("ko")}>Korea</button>
       <button  className='btn btn-info mx-2 text-white' onClick={()=>handleClick("chi")}>chinese</button>
       <h1 className='my-5'>{t("contact.1")}</h1>
     </div>
  <Main/>
</>
   
  )
}

export default Contact