'use client';

import Container from './Container';
import Reveal from './Reveal';
import { testimonials } from '@/data/content';

const proofStats = [
  { label: 'Campanhas automatizadas', value: '2.8k' },
  { label: 'Reviews ativadas', value: '410k' },
  { label: 'ROI medio', value: '4.6x' }
];

export default function SocialProof() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Provas sociais
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                Times de ecommerce escalando com ReviewPay
              </h2>
            </div>
            <div className="flex gap-6 text-sm text-white/60">
              {proofStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-semibold text-white">{stat.value}</p>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <div className="glass-panel h-full rounded-3xl p-6">
                <p className="text-sm text-white/70">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
