import './TopBar.css';
import logo from '../../assets/images/Vector.png'

const TopBar = () => {
    return (
        <div className="topBar">
            <img className='topBarLogo' src={logo} alt="logo Aliexpress" />
        </div>
    );
}

export default TopBar;
