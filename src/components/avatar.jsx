import React from 'react'
import noImg from '../images/empty-avatar.png'
import './components.css'

const Avatar = ({ src, type }) => {
  const alt = 'avatar icon image'

  const iconSelection = src => {
    return src ? src : noImg
  }

  const selectedIcon = iconSelection(src)

  const imageSelection = () => {
    if (type === 'navbar')
      return (
        <img src={selectedIcon} className='avatar avatar-navbar' alt={alt} />
      )
    if (type === 'profile')
      return (
        <img src={selectedIcon} className='avatar avatar-profile' alt={alt} />
      )
    return <img src={selectedIcon} className='avatar avatar-normal' alt={alt} />
  }

  return <div>{imageSelection()}</div>
}

export default Avatar
