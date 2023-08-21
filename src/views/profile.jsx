/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react'
import Form from '../components/form'
import Avatar from '../components/avatar'

const Profile = ({ onSave, userData, onToggle, mode }) => {
  return (
    <Fragment>
      <Form
        isDisabled={true}
        onSave={onSave}
        userData={userData}
        onToggle={onToggle}
        mode={mode}
      />
    </Fragment>
  )
}

export default Profile
