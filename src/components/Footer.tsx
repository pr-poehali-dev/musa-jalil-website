import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-white/5 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-jade-500 to-ocean-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold font-heading">МҖ</span>
            </div>
            <div>
              <p className="font-heading font-bold text-white">Муса Җәлил</p>
              <p className="text-xs text-white/40 font-body">1906 – 1944</p>
            </div>
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
                className="text-white/50 hover:text-jade-400 transition-colors font-body"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/30 text-xs font-body">
              Белем бирү проекты
            </p>
            <p className="text-white/20 text-xs font-body mt-1">© 2024</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="font-display italic text-white/30 text-lg">
            "Гомерем минем моңлы бер җыр иде..."
          </p>
        </div>
      </div>
    </footer>
  );
}
