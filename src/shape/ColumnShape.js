import PropTypes from 'prop-types';
import cellShape from './CellShape';


export default PropTypes.shape({
    name: PropTypes.string,
    cells: PropTypes.arrayOf(cellShape)
})