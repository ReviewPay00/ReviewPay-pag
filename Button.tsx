import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-laser/60';

const variants = {
  primary:
    'bg-gradient-to-r from-laser via-aurora to-neon text-ink shadow-glow hover:scale-[1.02] active:scale-[0.98]',
  ghost:
    'border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/30',
  dark:
    'bg-white/10 text-white hover:bg-white/20 border border-white/10'
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link className={`${base} ${variants[variant]} ${className ?? ''}`} href={href}>
      {children}
    </Link>
  );
}
