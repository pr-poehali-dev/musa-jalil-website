import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Баш бит', path: '/' },
  { label: 'Тормыш юлы', path: '/tormysh' },
  { label: 'Шәхси тормыш', path: '/shakhsi' },
  { label: 'Сугыш юлы', path: '/sugыsh' },
  { label: 'Моабит', path: '/moabit' },
  { label: 'Җәлилчеләр', path: '/jalilcheler' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo — text only */}
          <button
            onClick={() => navigate('/')}
            className="font-heading font-black text-sm tracking-[0.12em] text-white/80 hover:text-jade-400 transition-colors uppercase"
          >
            Муса Җәлил
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`nav-link px-3 py-2 text-sm font-heading font-semibold rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-jade-400 active'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-white/5">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-heading font-semibold transition-all ${
                  location.pathname === item.path
                    ? 'bg-jade-500/10 text-jade-400 border border-jade-500/20'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
