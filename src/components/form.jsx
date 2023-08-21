import React, { useState } from 'react'
import AddressInput from './addressInput'
import Avatar from './avatar'

function Form({ userData, isDisabled }) {
  const email = 'example@email.com'
  const [firstName, setFirstName] = useState('ime')
  const [lastName, setLastName] = useState('priimek')
  const [address, setAddress] = useState('')

  const handleAddressChange = newAddress => {
    setAddress(newAddress)
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
              value={address}
              disabled
            />
          </div>

          <div className='form-group'>
            <label htmlFor='addressFill' className='form-control-sm'>
              you can change the address here
            </label>
            <AddressInput onChange={handleAddressChange} />
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
