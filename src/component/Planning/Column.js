import React, {Component} from 'react';
import Cell from './Cell';
import ColumnHeader from './ColumnHeader';

class Column extends Component {

    static defaultProps = {
        onCellClick: () => {
        },
        data: {
            cells: []
        }
    };


    render() {
        let cells = this.props.data.cells.map((cell, i)=>{
            return <Cell {...cell} key={i} onclick={this._onCellClick(cell)}/>;
        });

        return <div style={colStyle}>
            <ColumnHeader text={this.props.data.name}/>
            {cells}
        </div>;
    }


    _onCellClick(clickedCell) {
        return () => {
            this.props.onCellClick(clickedCell);
        }
    }

}

const colStyle = {
    float: 'left',
    display: 'block',
    width: '15em'
};

export default Column;
