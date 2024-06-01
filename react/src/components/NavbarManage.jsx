import PropTypes from 'prop-types';
import Stroke from "../assets/icons/Down.svg"

export default function Navbar({ pages }) {
    return (
        <nav className="navbar">
            <header className="navbar-start flex-1">
                {pages}
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

                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
  }

  Navbar.propTypes = {
    pages: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })),
    ]).isRequired,
  };