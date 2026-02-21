'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import Container from './Container';
import Reveal from './Reveal';
import { hero } from '@/data/content';

const stats = [
  { label: 'Taxa media de aprovacao', value: '94%' },
  { label: 'Reducao de custo por review', value: '-38%' },
  { label: 'Tempo medio de setup', value: '12 min' }
];

export default function Hero() {
  return (
    <section className="relative pb-24 pt-24" id="topo">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              SaaS premium para campanhas de review
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              <span className="text-gradient">{hero.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-lg text-white/70">{hero.subtitle}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Button href="#contato">{hero.primaryCta}</Button>
              <Button href="#planos" variant="ghost">
                {hero.secondaryCta}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-2xl px-4 py-4"
                >
                  <p className="text-sm text-white/60">{stat.label}</p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.35}>
          <motion.div
            className="glass-panel relative overflow-hidden rounded-[32px] p-8 shadow-neon"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-white/10 bg-white/5" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white/60">
                  Campanhas ativas
                </span>
                <span className="rounded-full bg-laser/20 px-3 py-1 text-xs font-semibold text-laser">
                  Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/60">Reviews previstas</p>
                  <p className="mt-2 text-2xl font-semibold text-white">1.240</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-white/60">Compliance</p>
                  <p className="mt-2 text-2xl font-semibold text-white">99,2%</p>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  AI Copilot
                </p>
                <p className="mt-3 text-base text-white/80">
                  Ajustando fluxo para reduzir cancelamentos e elevar notas 4-5 estrelas.
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-laser" />
                  <span className="text-xs text-white/60">
                    Atualizado ha 2 min
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
