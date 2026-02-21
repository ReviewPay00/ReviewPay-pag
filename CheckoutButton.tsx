'use client';

import { stripeConfig } from '@/lib/stripe';

export default function CheckoutButton({
  label,
  priceId,
  variant = 'primary'
}: {
  label: string;
  priceId: string;
  variant?: 'primary' | 'ghost' | 'dark';
}) {
  const className =
    variant === 'primary'
      ? 'bg-gradient-to-r from-laser via-aurora to-neon text-ink shadow-glow'
      : variant === 'dark'
        ? 'bg-white/10 text-white border border-white/10'
        : 'border border-white/15 bg-white/5 text-white';

  const handleCheckout = async () => {
    if (!stripeConfig.publishableKey) {
      return;
    }

    await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId })
    });
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      {label}
    </button>
  );
}
