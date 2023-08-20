import React, { useState } from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

const ServiceCard = ({ userData, viewMode }) => {
  const [name, setName] = useState('Walking the dog')
  const [rate, setRate] = useState(30)
  const [hourly, setHourly] = useState(false)
  const [description, setDescription] = useState(
    'I can walk your dog once a day for 30 minutes and feed him 2 times a day'
  )

  const getRateDisplay = () => {
    return hourly ? rate + ' EUR/h' : rate + ' EUR/day'
  }

  const switchPricing = () => {
    setHourly(!hourly)
  }

  const renderCard = () => {
    if (viewMode === 'look') {
      return (
        <div className='card bg-light mb-2 mt-2 animal-card'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <h5 className='card-title'>{getRateDisplay()}</h5>
            <div className='card-body'></div>
            <p className='card-text'>{description}</p>
          </div>

          <div className='card-body'>
            <button className='btn btn-primary mt-3'>Edit</button>
          </div>
        </div>
      )
    } else if (viewMode === 'search-result') {
      return (
        <div className='card bg-light mb-2 mt-2 animal-card'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <h5 className='card-title'>{getRateDisplay()}</h5>
            <div className='card-body'></div>
            <p className='card-text'>{description}</p>
          </div>

          <div className='card-body'>
            <button className='btn btn-primary mt-3'>Book</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className='card bg-light m-2 animal-card'>
          <div className='card-body'>
            <form className='m-2'>
              <input
                id='name'
                type='text'
                className='form-control-xl m-2'
                placeholder={name}
              />
              <input
                className='form-control m-2'
                id='rate'
                type='text'
                placeholder={rate}
                onChange={e => setRate(e.target.value)}
              />

              <label>
                <div>{hourly ? 'hourly' : 'daily'}</div>
                <Toggle
                  defaultChecked={hourly}
                  icons={false}
                  onChange={switchPricing}
                />
              </label>

              <textarea className='form-control m-1' id='description' />
              <div className='mt-3'>
                <input
                  type='submit'
                  value='Save'
                  className='btn btn-primary mr-1'
                  onClick={() => console.log('rate:' + rate)}
                />
                <button className='btn btn-danger ml-1'>Delete</button>
              </div>
            </form>
          </div>
        </div>
      )
    }
  }

  return <div>{renderCard()}</div>
}

export default ServiceCard
