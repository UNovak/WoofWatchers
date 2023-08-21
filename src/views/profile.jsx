/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react'
import Form from '../components/userForm'
import Avatar from '../components/avatar'

const Profile = ({ userData }) => {
  const email = 'example@email.com'
  const [firstName, setFirstName] = useState('ime')
  const [lastName, setLastName] = useState('priimek')
  const [street, setStreet] = useState('ulica')
  const [houseNumber, setHouseNumber] = useState('12')
  const [city, setCity] = useState('Ljubljana')
  const [postalCode, setPostalCode] = useState('1000')
  const [country, setCountry] = useState('SI')
  const address =
    street + ' ' + houseNumber + ', ' + postalCode + ' ' + city + ', ' + country

  const handleSubmit = e => {
    e.preventDefault()
    // Handle the form submission and update the user data in the database
  }

  return (
    <Fragment>
      <Form isDisabled={true} />
    </Fragment>
  )
}

export default Profile
