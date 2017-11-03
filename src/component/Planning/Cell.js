import React, {Component} from 'react';
import PropTypes from 'prop-types';
import clientShape from '../../shape/ClientShape'
import ShippingLabel from '../ShippingLabel';

class Cell extends Component {
    static defaultProps = {
        client: undefined,
        selected: false,
        onclick: () => {
        }
    };

    static propTypes = {
        client: clientShape,
        selected: PropTypes.bool,
        onclick: PropTypes.func
    };

    render() {
        return <div onClick={this.props.onclick} style={this.props.selected?selectedCellStyle:cellStyle}>
            {this._renderClientLabel()}
            <span>Selected : {this.props.selected?'oui':'non'}</span>
        </div>
    }

    _renderClientLabel() {
        if (!!this.props.client) {
            return <ShippingLabel client={this.props.client}/>
        }
    }
}


const cellStyle = {
    overflow: 'hidden',
    minHeight: '3em',
    borderTop: 'solid 1px #AAA',
    borderRight: 'solid 1px #AAA',
    padding: '1em'
};

const selectedCellStyle = {
    ...cellStyle,
    backgroundColor: 'green'
};

export default Cell;