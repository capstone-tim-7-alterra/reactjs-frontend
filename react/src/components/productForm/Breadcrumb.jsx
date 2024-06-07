import PropTypes from 'prop-types';

export default function Breadcrumbs({ pages }) {
    return (
        <div className="breadcrumbs">
            <ul>
                <li><a href="#">Dashboard</a></li> 
                <li><a href="#">Manage Product</a></li> 
                <li>{pages}</li>
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
