import { Link } from 'react-router-dom'
import './Main.css';

const Main = () => {
    return (
        <>
         <div className='container'>
{/* 
       <button><Link className='link' to={'/new-post'}>Start Your Own Fundraiser</Link></button>   */}
        <div className='main'>

        <div className='main-h1'>
        <h1>High quality Furniture</h1>
        </div>
        <div className='main-p'>
        <p>Our furniture is made with high quality materials</p>

        </div>

        </div>
  

        <div className='info'>

        
        <h1>How We Do It?</h1>

<p>
With fundraising for all, we are creating the giving layer of the internet: a space where individuals, teams, organisations</p>
</div>
        </div>
        </>
       
    );
}

export default Main;