'use client';

import Container from './Container';
import Reveal from './Reveal';
import CheckoutButton from './CheckoutButton';
import { plans } from '@/data/content';

export default function Plans() {
  return (
    <section id="planos" className="py-24">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Planos
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                Escolha o nivel de automacao ideal
              </h2>
            </div>
            <span className="text-sm text-white/60">
              Precisa de um plano enterprise? Fale com nosso time.
            </span>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.1}>
              <div
                className={`glass-panel h-full rounded-3xl border ${
                  plan.highlight
                    ? 'border-laser/60 shadow-glow'
                    : 'border-white/10'
                } p-8`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                      {plan.badge}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {plan.name}
                    </h3>
                  </div>
                  {plan.highlight ? (
                    <span className="rounded-full bg-laser/20 px-3 py-1 text-xs font-semibold text-laser">
                      Mais desejado
                    </span>
                  ) : null}
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <p className="text-4xl font-semibold text-white">{plan.price}</p>
                  <span className="text-sm text-white/60">{plan.cadence}</span>
                </div>
                <p className="mt-4 text-sm text-white/70">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-laser" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CheckoutButton
                    label={plan.cta}
                    priceId={plan.stripePriceId}
                    variant={plan.highlight ? 'primary' : 'ghost'}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
