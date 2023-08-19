import React, { useState, useEffect } from 'react'

const mapBoxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const AddressInput = () => {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (inputValue.length > 2) {
      const fetchSuggestions = async () => {
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          inputValue
        )}.json?access_token=${mapBoxToken}`
        const response = await fetch(url)
        const data = await response.json()
        setSuggestions(data.features.map(feature => feature.place_name))
      }
      fetchSuggestions()
    }
  }, [inputValue])

  const handleInputChange = e => {
    setInputValue(e.target.value)
  }

  const handleSuggestionClick = suggestion => {
    setInputValue(suggestion)
    setSuggestions([])
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <ul>
        {suggestions.map(suggestion => (
          <li
            key={suggestion}
            onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddressInput