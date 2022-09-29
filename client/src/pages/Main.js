import { Link } from 'react-router-dom'
import './Main.css';

const Main = () => {
    return (
        <>
         <div className='main'>

       <button><Link className='link' to={'/new-post'}>Start Your Own Fundraiser</Link></button>  

        <h1>What We Do?</h1>
        <p>There’s a part of every one of us that dreams of a better world. That spark of inspiration to help a person, fix a neighborhood, or even change a nation. At GoFundMe, we empower both individuals and charities to turn compassion into action. Because that is how change happens.
        With fundraising for all, we are creating the giving layer of the internet: a space where individuals, teams, organisations, and nonprofits can champion causes that matter and raise money to make a lasting difference. Through GoFundMe, people and organisations have the tools they need to share their cause far and wide and harness the power of generosity. We are transforming the way people give and changing lives—are you ready to join us?
        </p>
        <h1>How We Do It?</h1>
<p>
With fundraising for all, we are creating the giving layer of the internet: a space where individuals, teams, organisations, and nonprofits can champion causes that matter and raise money to make a lasting difference. Through GoFundMe, people and organisations have the tools they need to share their cause far and wide and harness the power of generosity. We are transforming the way people give and changing lives—are you ready to join us?</p>
        </div>
        </>
       
    );
}

export default Main;