import Button from './Button';
import Container from './Container';
import Logo from './Logo';

const footerLinks = [
  { label: 'Privacidade', href: '#' },
  { label: 'Termos', href: '#' },
  { label: 'Status', href: '#' }
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-white/5 py-16">
      <Container>
        <div className="glass-panel rounded-3xl p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                Pronto para acelerar reviews?
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white">
                Agende uma demonstracao com nossos especialistas
              </h2>
              <p className="mt-3 text-sm text-white/60">
                contato@reviewpay.com
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="mailto:contato@reviewpay.com">Solicitar demo</Button>
              <Button href="#planos" variant="ghost">
                Ver planos
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <Logo />
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/40">
            Copyright 2026 ReviewPay. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
