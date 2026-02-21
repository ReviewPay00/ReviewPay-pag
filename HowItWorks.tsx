'use client';

import Container from './Container';
import Reveal from './Reveal';
import { steps } from '@/data/content';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Como funciona
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
              Uma jornada inteligente do briefing ao review
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1}>
              <div className="glass-panel h-full rounded-3xl p-6 transition hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white/70">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-white/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
