export const SHIPPING_FORM_ACTION = {
    SHIPPING_CHANGE: 'SHIPPING_FORM.SHIPPING_CHANGE'
};

export function formShippingChange(updatedShipping) {
    return {
        type: SHIPPING_FORM_ACTION.SHIPPING_CHANGE,
        payload: updatedShipping
    };
}