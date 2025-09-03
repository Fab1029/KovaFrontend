import './Loading.css';
import logo from '../../assets/Loading/Logo.webp'

const Loading = () => {
  return (
    <div className='loading-container'>
      
      <div className='loading-header-container'/>

      <div className='loading-main-container'>
          <div className='loading-left-container'/>

          <div className='loading-center-container'>
            <img src={logo} alt='logo' className='loading-kova-img'/>

            <div className='loading-square-container'>
              <div className="square"></div>
              <div className="square"></div>
              <div className="square"></div>
            </div>

          </div>

          <div className='loading-right-container'/>
      </div>
      

      <div className='loading-footer-container'/>
      
    </div>
  );
}

export default Loading;
