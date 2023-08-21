import React from 'react'
import ServiceCard from '../components/serviceCard'

const Guardian = () => {
  return (
    <div className='container auth-container'>
      <div className='row card-container'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <ServiceCard viewMode={'look'} id={1} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <ServiceCard viewMode={'look'} id={2} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <ServiceCard viewMode={'edit'} id={3} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <ServiceCard viewMode={'edit'} id={4} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <ServiceCard viewMode={'search-result'} id={1} />
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <ServiceCard viewMode={'search-result'} id={1} />
        </div>
      </div>
    </div>
  )
}

export default Guardian
