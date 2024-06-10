/* eslint-disable react/prop-types */
import { Link, useLocation} from 'react-router-dom'
import PropTypes from 'prop-types';
import { nameMap } from '../nameMap';

export default function Breadcrumbs({ manage }) {

  const location = useLocation();
  const currentPath = location.pathname;
  const Path = nameMap[currentPath] || 'Page Not Found';

    return (
        <div className="breadcrumbs">
            <ul>
                <li><Link >Dashboard</Link></li> 
                <li><Link>{manage}</Link></li> 
                <li><Link>{ Path}</Link></li>
            </ul>
        </div>
    );
}

Breadcrumbs.propTypes = {
    manage: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })),
    ]).isRequired,
  };
