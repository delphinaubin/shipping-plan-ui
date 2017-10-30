import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import shippingModel from '../../model/ShippingModel';

import AddShippingForm from '../../component/Shipping/AddShippingForm';
import Drawer from 'material-ui/Drawer';

import {formShippingChange} from '../../action/shippingform.action'

import AppBar from 'material-ui/AppBar'


class AddShipping extends Component {

    static defaultProps = {
        shipping: {},
        formVisible: false
    };

    static propTypes = {
        shipping: shippingModel,
        formVisible: PropTypes.bool
    };

    render() {
        return <Drawer disableSwipeToOpen={true} openSecondary={true} open={this.props.formVisible} width={400}>
            <AppBar
                title="Ajouter une livraison"
                iconElementLeft={<span/>}
            ></AppBar>
            <AddShippingForm shipping={this.props.shipping} onChange={this.props.formShippingChange}/>
        </Drawer>
    }


    _handleShippingChange(newShipping) {

    }
}

const mapStateToProps = (state) => {
    return {
        formVisible: state.planning.mode.creation,
        shipping: state.planning.shippingForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        formShippingChange: (updatedShipping) => {
            dispatch(formShippingChange(updatedShipping));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddShipping);