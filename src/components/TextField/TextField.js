import React, { useState } from 'react'
import PropTypes from 'prop-types';


const TextField = ({ value, placeholder, error, type, styleType, onChange }) => {
//   const [withError, setWithError] = useState(error)

//   const handleChange = useCallback((value) => {
//     setWithError(false)
//     onChange(value)
//   })

//   useEffect(() => {
//     setWithError(error)
//   }, [error])

  const className = [
    'text-field-component',
    styleType,
  ].filter((c) => c).join(' ')

  return (
    <input type={type} className={className} placeholder={placeholder} />
  )
}

export default TextField;

TextField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    styleType: PropTypes.arrayOf(String).isRequired,
    type: PropTypes.string.isRequired,
}
