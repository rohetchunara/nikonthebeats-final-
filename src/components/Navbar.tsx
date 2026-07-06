import type { PageView } from '../types';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
}

const navItems: { id: PageView; label: string }[] = [
  { id: 'home', label: 'Showreel' },
  { id: 'services', label: 'Services' },
  { id: 'briefing', label: 'Briefing Room' },
];

const Navbar = ({ activePage, onNavigate }: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b">
      <div className="container-tight">
        <div className="flex items-center justify-between h-20 md:h-[5.5rem]">
          <button
            onClick={() => onNavigate('home')}
            className="font-serif text-lg md:text-xl tracking-editorial text-white transition-opacity duration-700 ease-tuned hover:opacity-60"
          >
            NIKONTHEBEATS
          </button>

          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`label-text transition-all duration-700 ease-tuned ${
                  activePage === item.id
                    ? 'text-white'
                    : 'text-editorial-muted hover:text-editorial-body'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigate('briefing')}
            className="button-primary text-[10px] px-7 py-3"
          >
            Initiate Project
          </button>
        </div>

        <div className="md:hidden flex gap-8 pb-4 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`label-text whitespace-nowrap transition-all duration-700 ease-tuned ${
                activePage === item.id ? 'text-white' : 'text-editorial-muted'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
