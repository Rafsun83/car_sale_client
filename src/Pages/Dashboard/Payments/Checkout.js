import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { Container, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import UseAuth from './../../../Hooks/UseAuth';

const Checkout = ({ bookedorder }) => {
    const { user } = UseAuth()
    const { price, _id } = bookedorder
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    useEffect(() => {
        fetch('https://nameless-chamber-77947.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))



    }, [price])

    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            setSuccess('')
        }
        else {
            setError('')
            console.log(paymentMethod)
        }

        //payment intent
        const { paymentIntent, error: IntentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,

                    },
                },
            },
        );
        if (IntentError) {
            setError(IntentError.message)
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('Your payment success successfully')
            console.log(paymentIntent)
            setProcessing(false)
            //save database payment
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]

            }

            const url = `https://nameless-chamber-77947.herokuapp.com/bookedorders/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }

    return (
        <Container >
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ? <CircularProgress></CircularProgress> :
                        <button type="submit" disabled={!stripe || success}>
                            Pay {price}
                        </button>
                }
                {
                    error && <p style={{ color: 'red' }} >{error}</p>
                }
                {
                    success && <p style={{ color: 'green' }} >{success}</p>
                }

            </form>
        </Container>
    );
};

export default Checkout;