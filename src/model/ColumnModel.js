import PropTypes from 'prop-types';
import cellModel from './CellModel';


export default PropTypes.shape({
    name: PropTypes.string,
    cells: PropTypes.arrayOf(cellModel)
})