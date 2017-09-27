import React, {Component} from 'react';


class ColumnHeader extends Component {

    render() {
        return <div style={columnHeaderStyle}>{this.props.text}</div>
    }
}

const columnHeaderStyle = {
    textAlign: 'center',
    fontWeight: 'bold'
};

export default ColumnHeader;
