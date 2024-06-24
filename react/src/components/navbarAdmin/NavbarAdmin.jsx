import { Link, useLocation, useNavigate } from 'react-router-dom';
import Stroke from '../../assets/icons/navbar/Stroke.svg'
import Logout from '../../assets/icons/navbar/Logout.svg'
import { nameMap } from '../pathMap'

export default function Navbar() {

    const location = useLocation();
    const currentPath = location.pathname;

    // Fungsi untuk mencocokkan rute dengan parameter dinamis
    const getHeaderTitle = (path) => {
        for (let pattern in nameMap) {
            const regex = new RegExp(`^${pattern.replace(/:[^\s/]+/g, '([^\\s/]+)')}$`);
            if (regex.test(path)) {
                return nameMap[pattern];
            }
        }
        return 'Page Not Found';
    };

    const headerTitle = getHeaderTitle(currentPath);

    const navigate = useNavigate();

    const handleLogout = () => {    
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('LastName');
        navigate('/login');
    }

    return (
        <nav className="navbar lg:sticky lg:top-0">
            <header className="navbar-start flex-1">
                { headerTitle }
            </header>

            <div className="navbar-end flex-none gap-10">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <div className="avatar w-8 md:w-10">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="rounded-full"/>
                        </div>
                        <h1 className="font-light text-base hidden md:inline">Admin Nanda</h1>
                        <figure><img src={Stroke}  alt="Stroke" className="w-4" /></figure>
                    </div>

                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary-100 rounded-sm w-52 text-black">
                        <Link>
                            <button onClick={handleLogout} className="flex gap-2">
                                <img src={Logout} alt="Logout" />
                                Logout
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }