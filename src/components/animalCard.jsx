import React, { useState, Fragment } from 'react'
import Avatar from './avatar'

const AnimalCard = ({ userData, viewMode }) => {
  const owner = 1
  const cardID = 0
  const imageURL = ''
  const [name, setName] = useState('grey')
  const [species, setSpecies] = useState('muc')
  const [[images], setImages] = useState([])
  const [description, setDescriptions] = useState(
    'najbolj prijazen muc na svetu'
  )

  const buildCard = () => {
    if (viewMode === 'look')
      return (
        <div className='card bg-light mb-2 mt-2 animal-card'>
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <Avatar type={'animal}'} />
            <div className='card-body'></div>
            <p className='card-text'>{description}</p>
          </div>

          <div className='card-body'>
            <button className='btn btn-primary mt-3'>Edit</button>
          </div>
        </div>
      )
    // returned when edit button is clicked
    else
      return (
        <div className='card bg-light m-2 animal-card'>
          <Avatar type={'animal}'} src={imageURL} />
          <div className='card-body'>
            <form className='m-2'>
              <input
                id='name'
                type='text'
                className='form-control-xl m-2'
                placeholder={name}
              />
              <textarea className='form-control' id='description' />
              <input
                type='submit'
                value='Save'
                className='btn btn-primary mr-1'
              />
              <button className='btn btn-danger ml-1'>Delete</button>
            </form>
          </div>
        </div>
      )
  }
  return <div>{buildCard()}</div>
}

export default AnimalCard
