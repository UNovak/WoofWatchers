import React, { useState, useEffect } from 'react'

const mapBoxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const AddressInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [address, setAddress] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  // auto suggestions for address
  useEffect(() => {
    if (inputValue.length > 2) {
      const fetchSuggestions = async () => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          inputValue
        )}.json?access_token=${mapBoxToken}&country=SI&types=address&limit=3`
        const response = await fetch(url)
        const data = await response.json()
        setSuggestions(data.features.map(feature => feature.place_name))
      }
      fetchSuggestions()
    }
  }, [inputValue])

  const handleInputChange = e => {
    setInputValue(e.target.value)
    setShowSuggestions(true) // Show suggestions when typing
  }

  const handleSuggestionClick = suggestion => {
    setInputValue(suggestion)
    setSuggestions([])
    setAddress(suggestion)
    setShowSuggestions(false) // Hide suggestions when an address is confirmed
    console.log(suggestion)
    parseAddress(suggestion)
  }

  const parseAddress = address => {
    const addressArr = address.split(', ')

    if (addressArr.length < 3) {
      console.error('Invalid address format')
      return null
    }

    const streetAndNumber = addressArr[0]
    const city = addressArr[1]
    const country = addressArr[2]

    const streetNumberRegex = /^(.+)\s(\d+.*)$/
    const match = streetAndNumber.match(streetNumberRegex)

    if (!match) {
      console.error('Invalid street and number format')
      return null
    }

    const street = match[1]
    const number = match[2]

    const addressObject = {
      street,
      number,
      city,
      country,
    }

    console.log('Address JSON object:', addressObject)
    return addressObject
  }

  const handleInputFocus = () => {
    setShowSuggestions(true) // Show suggestions when input is focused
  }

  return (
    <div>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        className='form-control'
      />
      {showSuggestions && (
        <div className='list-group mt-2'>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className='list-group-item list-group-item-action'
              onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default AddressInput
