import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ borderTop: '1px solid var(--line)', paddingTop: '48px', paddingBottom: '48px', marginTop: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink)' }}>
              Муса Җәлил
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--ink-muted)', marginTop: '4px' }}>
              1906 – 1944
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: 'Тормыш юлы', path: '/tormysh' },
              { label: 'Шәхси тормыш', path: '/shakhsi' },
              { label: 'Сугыш юлы', path: '/sugish' },
              { label: 'Моабит', path: '/moabit' },
              { label: 'Җәлилчеләр', path: '/jalilcheler' },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, transition: 'color 0.2s' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', marginTop: '32px', paddingTop: '24px' }}>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.05em', color: 'var(--ink-muted)' }}>
            © 2026 — Татар әдәбиятын өйрәнү һәм үстерү проекты. Лилия Кәримова.
          </p>
        </div>
      </div>
    </footer>
  );
}