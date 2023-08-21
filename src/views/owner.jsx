import AnimalCard from '../components/animalCard'

const Owner = ({ userData, email }) => {
  console.log(userData)
  console.log(email)

  return (
    <div className='container'>
      <div className='row card-container'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <AnimalCard viewMode={'look'} id={1} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <AnimalCard viewMode={'look'} id={2} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <AnimalCard viewMode={'edit'} id={3} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <AnimalCard viewMode={'edit'} id={4} />
        </div>
      </div>
    </div>
  )
}

export default Owner
