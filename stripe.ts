export const stripeConfig = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '',
  priceIds: {
    basic: process.env.NEXT_PUBLIC_STRIPE_PRICE_BASIC ?? 'price_basic_monthly',
    vip: process.env.NEXT_PUBLIC_STRIPE_PRICE_VIP ?? 'price_vip_lifetime'
  }
};
