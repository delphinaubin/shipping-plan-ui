import PropTypes from 'prop-types';
import clientShape from './ClientShape';

export default PropTypes.shape({
    isValid:PropTypes.bool,
    client:clientShape
});