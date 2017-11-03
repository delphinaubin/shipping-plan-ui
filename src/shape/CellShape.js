import PropTypes from 'prop-types';
import clientShape from './ClientShape';
export default PropTypes.shape({
    index: PropTypes.number,
    columnIndex: PropTypes.number,
    selected: PropTypes.bool,
    client: clientShape
});