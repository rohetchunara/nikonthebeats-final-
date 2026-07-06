import type { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

function getTimeBasedHeader(): string {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    return 'Designing in the Dark — Night Shift Active';
  }
  return 'Sonic Architecture in Progress — Archiving Trans-Border Audio';
}

const footerLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Spotify', href: 'https://spotify.com' },
  { label: 'Soundcloud', href: 'https://soundcloud.com' },
  { label: 'Contact', page: 'briefing' as PageView },
];

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const timeHeader = getTimeBasedHeader();

  return (
    <footer className="relative border-t instrument-border bg-black/60">
      <div className="container-tight py-24 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-20 lg:gap-28">
          <div>
            <p className="label-text mb-10 max-w-md leading-relaxed normal-case tracking-label">
              {timeHeader}
            </p>

            <div className="group relative inline-block">
              <div className="absolute inset-0 -m-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-tuned pointer-events-none">
                <div className="radar-pulse border" />
                <div className="radar-pulse border" />
                <div className="radar-pulse border" />
              </div>
              <p className="relative font-serif text-xl text-editorial-body group-hover:text-white transition-colors duration-700 ease-tuned">
                27.7172° N, 85.3240° E
              </p>
              <p className="relative mt-2 label-text normal-case">
                Studio Coordinates — Kathmandu Valley
              </p>
            </div>

            <div className="mt-20 pt-10 staff-line">
              <p className="label-text normal-case text-editorial-dim">
                &copy; {currentYear} NIKONTHEBEATS. All rights reserved.
              </p>
            </div>
          </div>

          <div className="flex flex-col min-w-[180px]">
            {footerLinks.map((link, index) => (
              <div key={link.label}>
                {link.page ? (
                  <button
                    onClick={() => onNavigate(link.page!)}
                    className="block w-full text-left py-5 label-text transition-colors duration-700 ease-tuned text-editorial-muted hover:text-white"
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-5 label-text transition-colors duration-700 ease-tuned text-editorial-muted hover:text-white"
                  >
                    {link.label}
                  </a>
                )}
                {index < footerLinks.length - 1 && <div className="staff-line" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
