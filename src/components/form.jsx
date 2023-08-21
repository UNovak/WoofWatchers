import React, { useState } from 'react'
import AddressInput from './addressInput'
import Avatar from './avatar'
import ModeToggle from './modetoggle'

function Form({ isDisabled, onSave, userData, onToggle, mode }) {
  const email = userData.email
  const [firstName, setFirstName] = useState(userData.firstName)
  const [lastName, setLastName] = useState(userData.lastName)
  const [address, setAddress] = useState(userData.address)

  const handleAddressChange = newAddress => {
    setAddress(newAddress)
  }

  const handleSubmit = e => {
    e.preventDefault() // Prevent form submission and page refresh
    onSave({ firstName, lastName, address, email })
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-lg-4'>
        <Avatar type={'profile'} />
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='email' className='form-control-sm'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              aria-describedby='emailHelp'
              value={email}
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
              value={firstName}
              disabled={isDisabled}
              onChange={e => setFirstName(e.target.value)}
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
              value={lastName}
              disabled={isDisabled}
              onChange={e => setLastName(e.target.value)}
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
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor='addressFill' className='form-control-sm'>
              you can change the address here
            </label>
            <AddressInput onChange={handleAddressChange} />
          </div>

          <div className='form-group container mt-3'>
            <label name='toggle' className='form-control-sm'>
              this can be changed later
            </label>
            <div className='ml-2 mr-2'>
              <ModeToggle onToggle={onToggle} mode={mode} />
            </div>
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
