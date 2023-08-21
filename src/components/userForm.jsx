import React, { useState } from 'react'
import AddressInput from './addressInput'
import Avatar from './avatar'

function Form({ userData, isDisabled }) {
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
    <div className='row justify-content-center'>
      <div className='col-lg-4'>
        <Avatar type={'profile'} />

        <form>
          <div className='form-group'>
            <label htmlFor='email' className='form-control-sm'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              placeholder={email}
              disabled
            />
          </div>

          <div className='form-group'>
            <label htmlFor='name' className='form-control-sm'>
              name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder={firstName}
              disabled={isDisabled}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='surname' className='form-control-sm'>
              last name
            </label>
            <input
              type='text'
              className='form-control'
              id='lastname'
              placeholder={lastName}
              disabled={isDisabled}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='name' className='form-control-sm'>
              Address
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder={address}
              disabled
            />
          </div>

          <div className='form-group'>
            <label htmlFor='addressFill' className='form-control-sm'>
              you can change the address here
            </label>
            <AddressInput />
          </div>

          <button type='submit' className='btn btn-primary mt-3'>
            SAVE
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
