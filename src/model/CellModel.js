import PropTypes from 'prop-types';
import clientModel from './ClientModel';
export default PropTypes.shape({
    index: PropTypes.number,
    columnIndex: PropTypes.number,
    selected: PropTypes.bool,
    client: clientModel
});