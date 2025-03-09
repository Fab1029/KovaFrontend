import React from 'react'
import './ClientCard.css'


const ClientCard = ({client}) => {
  return (
    <div className='client-card'>
      <div className='client-info'>
        <svg className='client-icon' viewBox="0 0 24 24" fill='none'>
            <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#253646" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p className='client-info-name'>{client.name}</p>
      </div>
      <p className='client-project-description'>{client.description}</p>
      <div className='client-project-container'>
          <h1 className='client-project-title'>{client.detail.title}</h1>
          <h1 className='client-project-subtitle'>{client.detail.detail}</h1>
      </div>
    </div>
  )
}

export default ClientCard