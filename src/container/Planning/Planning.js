import React, {Component} from 'react';
import Column from '../../component/Planning/Column';
import {connect} from 'react-redux';
import {selectCell} from '../../action/cell.action';

class Planning extends Component {

    static defaultProps = {
        columns: [],
        mode:{creation: false}

    };

    render() {
        let columns = this.props.columns.map((columnData, columnIndex) => <Column data={columnData} key={columnIndex}
                                                                                  onCellClick={this.props.selectCell}/>);
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
