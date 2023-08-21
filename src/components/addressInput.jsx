import React, { useState, useEffect } from 'react'

const mapBoxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const AddressInput = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
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
    setSuggestions([])
    setShowSuggestions(false) // Hide suggestions when an address is confirmed
    console.log(suggestion)
    onChange(suggestion)
    setInputValue('')
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
