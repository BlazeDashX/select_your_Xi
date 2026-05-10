import navLogo from '../../assets/logo.png';
import dlrImg from '../../assets/dollar.png';
const Navbar = ({ availableBalance }) => {
    return (
        <div>
            <div className="navbar max-w-300 mx-auto">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className="h-16 w-16" src={navLogo} alt="Logo" />
                    </a>
                </div>
                <div className="flex items-center gap-1">
                    <span>{availableBalance}</span>
                    <span> Coin</span>
                    <img className='h-4' src={dlrImg} alt="Dollar" />
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;