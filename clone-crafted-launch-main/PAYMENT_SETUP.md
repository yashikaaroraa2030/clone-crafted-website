# Payment Gateway Setup Guide

This website uses **Stripe** for payment processing. Follow these steps to set up payments:

## 1. Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Sign up for a free account
3. Complete the account setup process

## 2. Get Your API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Navigate to **Developers** → **API keys**
3. Copy your **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for live mode)

## 3. Configure Environment Variables

1. Create a `.env` file in the root directory (if it doesn't exist)
2. Add your Stripe publishable key:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
```

3. For production, use your live key:
```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_live_your_actual_key_here
```

## 4. Backend Setup (Required for Production)

⚠️ **Important**: The current implementation is a frontend-only demo. For production, you need:

1. **Backend Server**: Create a server (Node.js, Python, etc.) to handle:
   - Creating PaymentIntents
   - Processing webhooks
   - Managing customer data securely

2. **Stripe Webhooks**: Set up webhooks to handle:
   - Payment success events
   - Payment failure events
   - Subscription updates

3. **Security**: Never expose your secret key (`sk_test_` or `sk_live_`) in frontend code. Always use it on your backend.

## 5. Test Payments

Use Stripe's test card numbers:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Use any future expiry date, any CVC, and any ZIP code

## 6. Payment Flow

1. User selects a plan on `/pricing`
2. User is redirected to `/checkout?plan=launch|growth|authority`
3. User enters payment details
4. Payment is processed via Stripe
5. User is redirected to:
   - `/payment-success` on success
   - `/payment-failure` on failure

## Current Implementation

The checkout page currently:
- ✅ Collects customer information
- ✅ Displays payment form with Stripe Elements
- ✅ Creates a payment method
- ⚠️ **Simulates payment processing** (needs backend integration)

## Next Steps for Production

1. Set up a backend API endpoint to create PaymentIntents
2. Update `Checkout.tsx` to call your backend API
3. Set up Stripe webhooks
4. Store customer and order information in your database
5. Send confirmation emails
6. Handle subscription renewals (if applicable)

## Support

For Stripe integration help:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe React Integration](https://stripe.com/docs/stripe-js/react)
- [Stripe Support](https://support.stripe.com)


