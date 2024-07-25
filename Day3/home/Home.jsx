import './Home.css';
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return (
        <>
            <div className='home-section1'>
                <Navbar/>
                <p>Harvest Your Savings <br />with Bounty Basket!</p>
            </div>
            <div className='home-section2'>
                <h1>Our Products</h1>
            </div>
        </>
    )
}

export default Home