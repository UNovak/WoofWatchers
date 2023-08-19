import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import AddressInput from './addressInput'

const ProfileSetupt = () => {
  // const [email, setEmail] = useState('example@email.com')
  // const [firstName, setFirstName] = useState('firstname')
  // const [lastname, setLastName] = useState('lastname')
  // const [street, setStreet] = useState('street')
  // const [houseNumber, setHouseNumber] = useState('12a')
  // const [city, setCity] = useState('city')

  return <AddressInput />
}

export default ProfileSetupt
