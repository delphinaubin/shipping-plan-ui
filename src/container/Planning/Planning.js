import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Column from '../../component/Planning/Column';
import {connect} from 'react-redux';
import {selectCell} from '../../action/cell.action';
import columnModel from '../../model/ColumnModel';

class Planning extends Component {

    static defaultProps = {
        columns: [],
        mode:{creation: false}
    };

    static propTypes = {
        columns: PropTypes.arrayOf(columnModel),
        mode: PropTypes.shape({creation: PropTypes.bool})
    };

    render() {
        let columns = this.props.columns.map((columnData, columnIndex) => (
            <Column
                data={columnData}
                key={columnIndex}
                onCellClick={this.props.selectCell}/>
            )
        );
        return <div style={planningStyles}>{columns}</div>;
    }


}

const planningStyles = {
    display: 'flex'
};


const mapStateToProps = (state) => {
    return {
        columns: state.planning.columns,
        mode: state.planning.mode
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        selectCell: (cell) => {
            dispatch(selectCell(cell))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Planning);
