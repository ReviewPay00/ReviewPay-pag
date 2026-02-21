'use client';

import Container from './Container';
import Reveal from './Reveal';
import { aiStack } from '@/data/content';

export default function AiTech() {
  return (
    <section id="tecnologia" className="py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Tecnologia IA
              </p>
              <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
                Inteligencia aplicada para escala e compliance
              </h2>
              <p className="text-white/70">
                Nossa stack combina modelos proprietarios e regras de marketplace para garantir que cada review seja legitimo, seguro e orientado a resultado.
              </p>
              <div className="glass-panel rounded-3xl p-6">
                <p className="text-sm text-white/60">Motor proprietario</p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  12 modelos + 48 sinais comportamentais
                </p>
                <p className="mt-4 text-sm text-white/60">
                  A IA aprende a cada nova campanha e ajusta o score dos usuarios automaticamente.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-6">
            {aiStack.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="glass-panel rounded-3xl p-6">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/65">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
