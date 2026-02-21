'use client';

import Container from './Container';
import Reveal from './Reveal';
import { faqs } from '@/data/content';

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
              Perguntas frequentes sobre ReviewPay
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.05}>
              <details className="glass-panel rounded-2xl p-6">
                <summary className="cursor-pointer list-none text-base font-semibold text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-white/70">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
