import React, {Component} from 'react';

import clientModel from '../shape/ClientShape';

import Chip from 'material-ui/Chip';
class ShippingLabel extends Component{
    static defaultProps = {
        client: {name: undefined, city: undefined}
    };

    static propTypes = {
        client: clientModel
    };

    render(){
        return <div style={{textAlign: 'center'}}>
            <Chip style={{display: 'inline-block'}}>{this.props.client.fullName}</Chip>
            <br/>
            <span>{this.props.client.city}</span>
        </div>;
    }

}

export default ShippingLabel;
