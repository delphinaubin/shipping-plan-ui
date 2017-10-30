import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ColumnHeader extends Component {


    static defaultProps = {
        text: ''
    };

    static propTypes = {
      text: PropTypes.string
    };

    render() {
        return <div style={columnHeaderStyle}>{this.props.text}</div>
    }
}

const columnHeaderStyle = {
    textAlign: 'center',
    fontWeight: 'bold'
};

export default ColumnHeader;
