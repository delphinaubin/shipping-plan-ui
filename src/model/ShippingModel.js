import PropTypes from 'prop-types';
import clientModel from './ClientModel';

export default PropTypes.shape({
    isValid:PropTypes.bool,
    client:clientModel
});