'use client';

import Container from './Container';
import Reveal from './Reveal';
import { marketplaces } from '@/data/content';

export default function Marketplaces() {
  return (
    <section id="marketplaces" className="py-24">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Marketplaces suportados
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                Conecte campanhas com os maiores players do Brasil
              </h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
              Novos canais em breve
            </span>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {marketplaces.map((marketplace, index) => (
            <Reveal key={marketplace.name} delay={index * 0.1}>
              <div className="glass-panel flex items-center justify-between rounded-3xl p-6">
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-semibold"
                    style={{
                      background: `${marketplace.accent}22`,
                      color: marketplace.accent,
                      border: `1px solid ${marketplace.accent}55`
                    }}
                  >
                    {marketplace.name.slice(0, 1)}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {marketplace.name}
                    </p>
                    <p className="text-xs text-white/60">API + compliance</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-white/50">Verificado</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
