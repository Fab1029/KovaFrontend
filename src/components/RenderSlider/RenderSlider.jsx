import React, { useEffect, useState } from 'react'
import './RenderSlider.css'

const RenderSlider = ({project}) => {
    const [index, setIndex] = useState(0);
    const [type, setType] = useState('Render');
    const [direction, setDirection] = useState('');
    const [image, setImage] = useState(project.renders[0]);
    

    const handleChangeType = (ty) => {
        if (ty === 'Render')
            setImage(project.renders[0]);
        else
            setImage(project.blueprints[0]);

        setIndex(0);
        setType(ty);
    }

    const handleRightArrow = () => {
        let indx = 0;
        setDirection('right');

        if (type === 'Render'){
            indx = index === project.renders.length - 1 ? 0 : index + 1;
            setImage(project.renders[indx]);
        }
            
        else{
            indx = index === project.blueprints.length - 1 ? 0 : index + 1;
            setImage(project.blueprints[indx]);
        }
            
        setIndex(indx);
    }

    const handleLeftArrow = () => {
        let indx = 0;
        setDirection('left');

        if (type === 'Render'){
            indx = index === 0 ? project.renders.length - 1 : index - 1;
            setImage(project.renders[indx]);
        }
            
        else{
            indx = index === 0 ? project.blueprints.length - 1 : index - 1;
            setImage(project.blueprints[indx]);
        }
            
        setIndex(indx);
    }

  return (
    <div data-aos = 'slide-up' data-aos-duration = '900' className='render-slider-container'>
        
        <div className={`render-slider-container-child ${direction === 'left' ? 'slide-left' : direction === 'right' ? 'slide-right' : ''}`} style={{backgroundImage: `url(${image})`}} onAnimationEnd={() => setDirection('')}>
            <div className='render-slider-buttons-container'>
                <button style={{backgroundColor: type === 'Render' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'}} onClick={() => handleChangeType('Render')}>
                    Render
                </button>
                <button style={{backgroundColor: type !== 'Render' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'}} onClick={() => handleChangeType('Detalle')}>
                    Detalle
                </button>
            </div>

            <div className='render-slider-arrows-container'>

                <svg className='left-arrow-render-slider arrow-render-slider' viewBox="0, 0, 400,400" onClick={handleLeftArrow}>
                    <g id="svgg">
                        <path id="path0" d="M273.047 1.840 C 269.930 3.359,250.494 22.418,176.814 96.207 L 84.487 188.672 83.164 193.301 C 81.573 198.866,81.973 204.506,84.342 209.902 C 86.493 214.804,267.140 395.713,272.266 398.099 C 283.397 403.280,291.587 400.392,305.278 386.457 C 316.365 375.172,317.493 373.220,317.538 365.234 C 317.595 355.080,322.531 360.621,238.391 276.367 L 162.128 200.000 238.819 123.242 L 315.511 46.484 316.835 41.855 C 319.898 31.147,317.035 24.220,304.500 12.016 C 291.951 -0.203,283.110 -3.064,273.047 1.840" stroke="none" fill="#D9D9D9" fillRule="evenodd"></path>
                    </g>
                </svg>

                <svg className='right-arrow-render-slider arrow-render-slider' viewBox="0, 0, 400,400" onClick={handleRightArrow}>
                    <g id="svgg">
                        <path id="path0" d="M108.203 1.877 C 102.744 4.480,86.623 20.846,84.291 26.154 C 81.970 31.436,81.970 38.875,84.290 44.159 C 85.721 47.416,98.321 60.376,161.939 124.023 L 237.880 200.000 161.610 276.367 C 77.116 360.969,82.385 355.027,82.455 365.625 C 82.507 373.444,84.501 376.938,94.777 387.214 C 107.771 400.208,116.429 403.143,126.953 398.121 C 132.779 395.341,314.967 212.791,316.494 208.203 C 318.171 203.165,317.833 194.797,315.768 190.234 C 313.009 184.142,133.547 4.856,127.344 1.996 C 121.453 -0.719,113.751 -0.767,108.203 1.877" stroke="none" fill="#D9D9D9" fillRule="evenodd"></path>
                    </g>
                </svg>

            </div>

            <div className='render-slider-numbers-container'>
                <div>
                    <h1>{index + 1}</h1>
                    <h1>/</h1>
                    <h1>{type === 'Render' ? project.renders.length : project.blueprints.length}</h1>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default RenderSlider