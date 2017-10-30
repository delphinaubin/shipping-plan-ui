import React, {Component} from 'react';

import shippingModel from '../../model/ShippingModel';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class AddShippingForm extends Component {
    static defaultProps = {
        onChange: () => {
        },
        visible: true,
        shipping: {
            client: {
                name: ''
            }
        }
    };

    static propTypes = {
        shipping: shippingModel
    };


    render() {
        return <div style={style}>
            <TextField hintText="Nom client" value={this.props.shipping.client.name}
                       onChange={this._handleClientNameChange.bind(this)}/>
            <TextField hintText="Ville" value={this.props.shipping.client.city}
                       onChange={this._handleClientCityChange.bind(this)}/>
            <RaisedButton label="Valider" primary={true} onClick={this._handleValid.bind(this)} disabled={!this.props.shipping.isValid}/>

        </div>
    }


    _handleClientNameChange(e, newClientName) {
        this.props.onChange({
            ...this.props.shipping,
            client: {
                ...this.props.shipping.client,
                name: newClientName
            }
        });
    }

    _handleClientCityChange(e, newClientCity) {
        this.props.onChange({
            ...this.props.shipping,
            client: {
                ...this.props.shipping.client,
                city: newClientCity
            }
        });
    }

    _handleValid() {
        alert('validation');
    }
}


const style = {
    padding: '2em'
};