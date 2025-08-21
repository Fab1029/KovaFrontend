import React from 'react'
import './Values.css'
import valuesImage from '../../assets/Values/valuesImage.webp'

const Values = () => {
  return (
    <div data-aos = 'zoom-in' className='values-container' style={{backgroundImage: `url(${valuesImage})`}}>
        <div data-aos = 'fade-up'>
            <div  className='value-container'>
                <h2 className='value-title'>Misión</h2>
                <p className='value-description'>
                    Diseñamos y construimos espacios que combinen la autenticidad de la arquitectura rústica con la elegancia funcionalidad de lo moderno, a través de un proceso colaborativo con el cliente
                </p>
            </div>
        </div>
        
        <div data-aos = 'fade-up'>
            <div className='value-container'>
                <p className='value-description'>
                    Aspiramos a ser reconocidos como líderes que honran el legado arquitectónico de nuestra ciudad mientras avanza hacia el futuro, todo en estrecha colaboración con nuestros clientes
                </p>
                <h2 className='value-title value-title-vision'>Visión</h2>
            </div>
        </div>
    </div>
  )
}

export default Values