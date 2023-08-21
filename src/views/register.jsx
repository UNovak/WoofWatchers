import React from 'react'
import Form from '../components/form'

const Registration = ({ onSave, userData, onToggle, mode }) => {
  return (
    <Form
      isDisabled={false}
      onSave={onSave}
      userData={userData}
      onToggle={onToggle}
      mode={mode}
    />
  )
}

export default Registration
