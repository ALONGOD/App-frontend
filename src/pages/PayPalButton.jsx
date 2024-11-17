import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ total }) => {
    return (
        <PayPalScriptProvider options={{ "client-id": "AQalVGUt3gWycz57GMtAr5Hfs1B9Aj68_lK54N4Y3iPaL0AGTuow_OL6nyDu0ld2bAGYD252yS7K8Dc9" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: total,
                            },
                        }],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        alert('Transaction completed by ' + details.payer.name.given_name);
                        // Handle successful payment here
                    });
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PayPalButton;