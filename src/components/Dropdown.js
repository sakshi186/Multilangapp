import React from 'react'

const Dropdown = (props) => {
  return (
    <>
       <select onChange={props.onChange}>
          <option>Select language</option>
          <option value={'en'}>English</option>
          <option value={'chi'}> Chinese</option>
          <option value={'ko'}>korean</option>
       </select>
    </>
  )
}

export default Dropdown;