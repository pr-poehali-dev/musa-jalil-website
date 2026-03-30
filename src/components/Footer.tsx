import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/5 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-black text-white text-sm tracking-[0.12em] uppercase">Муса Җәлил</p>
            <p className="font-heading text-xs text-white/35 font-medium mt-0.5">1906 – 1944</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { label: 'Тормыш юлы', path: '/tormysh' },
              { label: 'Шәхси тормыш', path: '/shakhsi' },
              { label: 'Сугыш юлы', path: '/sugыsh' },
              { label: 'Моабит', path: '/moabit' },
              { label: 'Җәлилчеләр', path: '/jalilcheler' },
            ].map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="font-heading font-semibold text-white/45 hover:text-jade-400 transition-colors text-xs uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-heading font-semibold text-white/20 text-xs">
            © 2026 — Татар әдәбиятын өйрәнү һәм үстерү проекты. Лилия Кәримова.
          </p>
          <p className="font-heading font-semibold text-white/15 text-xs tracking-widest">
            "Гомерем минем моңлы бер җыр иде..."
          </p>
        </div>
      </div>
    </footer>
  );
}
