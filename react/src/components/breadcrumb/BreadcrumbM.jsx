/* eslint-disable react/prop-types */
import { Link, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types';
import { nameMap } from '../nameMap';

export default function Breadcrumbs() {

  const location = useLocation();
  const currentPath = location.pathname;
  const Path = nameMap[currentPath] || 'Page Not Found';

    return (
        <div className="breadcrumbs">
            <ul>
                <li><Link >Dashboard</Link></li> 
                <li><Link to={Path}>{Path}</Link></li> 
            </ul>
        </div>
    );
}

Breadcrumbs.propTypes = {
    pages: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })),
    ]).isRequired,
  };
