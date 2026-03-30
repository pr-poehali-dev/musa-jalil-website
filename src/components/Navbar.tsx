import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Баш бит', path: '/' },
  { label: 'Тормыш юлы', path: '/tormysh' },
  { label: 'Шәхси тормыш', path: '/shakhsi' },
  { label: 'Сугыш юлы', path: '/sugish' },
  { label: 'Моабит', path: '/moabit' },
  { label: 'Җәлилчеләр', path: '/jalilcheler' },
  { label: 'Иҗат', path: '/ijat' },
  { label: 'Бүгенге көн', path: '/bugengekon' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-clean' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigate('/')}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--ink)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Муса Җәлил
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: location.pathname === item.path ? 'var(--ink)' : 'var(--ink-muted)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-1"
            style={{ color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={18} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t" style={{ borderColor: 'var(--line)' }}>
          <div className="px-6 py-4 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: location.pathname === item.path ? 'var(--ink)' : 'var(--ink-muted)',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid var(--line)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '12px 0',
                }}
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