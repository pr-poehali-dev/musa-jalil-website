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
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-jade-500 to-ocean-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <span className="text-white text-xs font-bold font-heading">МҖ</span>
            </div>
            <span className="hidden sm:block font-heading font-bold text-sm text-white/90 group-hover:text-jade-400 transition-colors">
              Муса Җәлил
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`nav-link px-3 py-2 text-sm font-body font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-jade-400 active'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
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
        <div className="md:hidden nav-blur border-t border-white/5 mobile-menu-enter">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`text-left px-4 py-3 rounded-lg text-sm font-body font-medium transition-all ${
                  location.pathname === item.path
                    ? 'bg-jade-500/10 text-jade-400 border border-jade-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
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
