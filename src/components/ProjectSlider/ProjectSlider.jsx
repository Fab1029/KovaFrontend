import React, { useState } from 'react'
import './ProjectSlider.css'

const ProjectSlider = ({navBar, font_size}) => {
  /* AQUI DEBE IR LOS 5 PROYECTOS MAS IMPORTANTES O NUEVOS */
  const projects = [
    {title: 'Proyecto', subtitle: 'Nabon', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage.webp'},
    {title: 'Proyecto', subtitle: 'Cuenca', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage2.png'},
    {title: 'Proyecto', subtitle: 'Yunguilla', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage3.jpg'},
    {title: 'Proyecto', subtitle: 'Carmen', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage.webp'},
    {title: 'Proyecto', subtitle: 'Salinas', description: 'Proyecto realizado en la provincia de Nabon', image: '/assets/HeaderImage2.png'},
  ]

  const [index, setIndex] = useState(0)

  const handlePointClick = (index) => {
    setIndex(index)
  }

  const handleArrowRightClick = () => {
    index === projects.length - 1 ? setIndex(0) : setIndex(index + 1)
  }

  const handleArrowLeftClick = () => {
    index === 0 ? setIndex(projects.length - 1) : setIndex(index - 1)
  }

  return (
    <div key={index} className='project-slider' style={{backgroundImage: `url(${projects[index].image})`}} >
      
      {navBar/*Si el componete project esta en homePage debe llevar un navBar*/} 
      {/*El primer slider es un componente donde se renderiza el nombre del proyecto*/}
      <div className='slider'>
        <svg className='left-arrow' viewBox="0, 0, 400,400" onClick={() => handleArrowLeftClick()}><g id="svgg"><path id="path0" d="M273.047 1.840 C 269.930 3.359,250.494 22.418,176.814 96.207 L 84.487 188.672 83.164 193.301 C 81.573 198.866,81.973 204.506,84.342 209.902 C 86.493 214.804,267.140 395.713,272.266 398.099 C 283.397 403.280,291.587 400.392,305.278 386.457 C 316.365 375.172,317.493 373.220,317.538 365.234 C 317.595 355.080,322.531 360.621,238.391 276.367 L 162.128 200.000 238.819 123.242 L 315.511 46.484 316.835 41.855 C 319.898 31.147,317.035 24.220,304.500 12.016 C 291.951 -0.203,283.110 -3.064,273.047 1.840 " stroke="none" fill="#D9D9D9" fill-rule="evenodd"></path></g></svg>
        <div className='name-slider'>
          <h1 className='project-title' style={{fontSize: font_size}}>{projects[index].title}</h1>
          <h1 className='project-subtitle' style={{fontSize: font_size}}>{projects[index].subtitle}</h1>
        </div>
        <svg className='right-arrow' viewBox="0, 0, 400,400" onClick={() => handleArrowRightClick()} ><g id="svgg"><path id="path0" d="M108.203 1.877 C 102.744 4.480,86.623 20.846,84.291 26.154 C 81.970 31.436,81.970 38.875,84.290 44.159 C 85.721 47.416,98.321 60.376,161.939 124.023 L 237.880 200.000 161.610 276.367 C 77.116 360.969,82.385 355.027,82.455 365.625 C 82.507 373.444,84.501 376.938,94.777 387.214 C 107.771 400.208,116.429 403.143,126.953 398.121 C 132.779 395.341,314.967 212.791,316.494 208.203 C 318.171 203.165,317.833 194.797,315.768 190.234 C 313.009 184.142,133.547 4.856,127.344 1.996 C 121.453 -0.719,113.751 -0.767,108.203 1.877 " stroke="none" fill="#D9D9D9" fill-rule="evenodd"></path></g></svg>
      </div>
      {/*Se rederiza el slider point, componente para navegar entre los proyectos*/}
      <ul className='point-slider'>
          {projects.map((_, i) => (
            <li 
              key={i} className='point' onClick={() => handlePointClick(i)} 
              style={{backgroundColor: i === index ? 'white' : '#d9d9d983'}}
            />
          ))}
      </ul>
    </div>
  )
}

export default ProjectSlider