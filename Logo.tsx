import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="#topo" className="group inline-flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-laser via-aurora to-neon text-ink shadow-glow">
        <span className="font-display text-lg font-semibold">R</span>
      </span>
      <span className="font-display text-lg font-semibold tracking-wide text-white">
        ReviewPay
      </span>
    </Link>
  );
}
