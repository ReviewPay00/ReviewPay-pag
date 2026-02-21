import Button from './Button';
import Container from './Container';
import Logo from './Logo';

const navLinks = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Tecnologia IA', href: '#tecnologia' },
  { label: 'Marketplaces', href: '#marketplaces' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/80 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button href="#planos" variant="ghost">
            Ver planos
          </Button>
          <Button href="#contato">Solicitar demo</Button>
        </div>
        <a
          href="#planos"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white md:hidden"
        >
          Planos
        </a>
      </Container>
    </header>
  );
}
