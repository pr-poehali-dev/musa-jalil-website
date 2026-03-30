import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const sections = [
  {
    id: 'tormysh',
    path: '/tormysh',
    title: 'Тормыш юлы',
    subtitle: 'Тормыш тарихы',
    desc: 'Шагыйрьнең балачагы, яшьлеге, белем алуы һәм иҗади формалашуы',
    icon: 'BookOpen',
    iconBg: 'bg-jade-500/20',
    iconColor: 'text-jade-400',
    border: 'border-jade-500/20',
    glowClass: 'glow-green',
    year: '1906–1941',
  },
  {
    id: 'shakhsi',
    path: '/shakhsi',
    title: 'Шәхси тормышы',
    subtitle: 'Гаилә',
    desc: 'Мусаның гаиләсе, мәхәббәте, якын кешеләре турында',
    icon: 'Heart',
    iconBg: 'bg-rose-500/20',
    iconColor: 'text-rose-400',
    border: 'border-rose-500/20',
    glowClass: 'glow-coral',
    year: 'Гаилә тарихы',
  },
  {
    id: 'sugыш',
    path: '/sugыsh',
    title: 'Сугыш юлы',
    subtitle: 'Сугыш һәм әсирлек',
    desc: 'Икенче дөнья сугышы, фронт юлы, немец әсирлегенә эләгү',
    icon: 'Sword',
    iconBg: 'bg-ocean-500/20',
    iconColor: 'text-ocean-400',
    border: 'border-ocean-500/20',
    glowClass: 'glow-blue',
    year: '1941–1942',
  },
  {
    id: 'moabit',
    path: '/moabit',
    title: 'Моабит дәфтәрләре',
    subtitle: 'Шигъри мирас',
    desc: 'Моабит төрмәсендә язылган бөек шигырьләр — батырлык символы',
    icon: 'PenLine',
    iconBg: 'bg-amber-500/20',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/20',
    glowClass: 'glow-gold',
    year: '1942–1944',
  },
  {
    id: 'jalilcheler',
    path: '/jalilcheler',
    title: 'Җәлилчеләр',
    subtitle: 'Батыр дуслар',
    desc: 'Муса Җәлил белән бергә герой булган иптәшләре',
    icon: 'Users',
    iconBg: 'bg-violet-500/20',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/20',
    glowClass: 'glow-coral',
    year: 'Герой дуслар',
  },
];

const stats = [
  { value: '1906', label: 'Туган ел' },
  { value: '106+', label: 'Шигырь' },
  { value: '2', label: 'Дәфтәр' },
  { value: '1956', label: 'Герой исеме' },
];

export default function Index() {
  const navigate = useNavigate();
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <div className="min-h-screen hero-bg">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 pb-8 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-jade-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Portrait — large */}
          <div
            className="relative mb-8 opacity-0 animate-scale-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className="portrait-frame">
              <img
                src="https://cdn.poehali.dev/files/c42d3da8-7051-4d10-965d-585ff996f7a1.jpeg"
                alt="Муса Җәлил"
                className="portrait-img"
              />
            </div>
            <div className="portrait-ring" />
          </div>

          {/* Label above name */}
          <div
            className="opacity-0 animate-fade-up mb-3"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <span className="font-heading text-sm md:text-base font-semibold tracking-[0.18em] text-white/55 uppercase">
              ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:
            </span>
          </div>

          {/* Main title */}
          <h1
            className="opacity-0 animate-fade-up font-heading font-black text-6xl md:text-8xl lg:text-9xl tracking-tight mb-2 gradient-text"
            style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
          >
            МУСА ҖӘЛИЛ
          </h1>

          {/* Years line */}
          <div
            className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-jade-500/50" />
            <span className="font-heading text-sm font-semibold text-white/35 tracking-widest">1906 — 1944</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-jade-500/50" />
          </div>

          {/* Quote */}
          <div
            className="glass-card rounded-2xl px-8 py-6 max-w-2xl mx-auto relative overflow-hidden opacity-0 animate-fade-up"
            style={{ animationDelay: '0.95s', animationFillMode: 'forwards' }}
          >
            <blockquote className="font-heading font-semibold text-lg md:text-xl text-white/80 leading-relaxed">
              Гомерем минем моңлы бер җыр иде,
              <br />
              Үлемем дә яңрар җыр булып...
            </blockquote>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-6 h-px bg-jade-500/50" />
              <span className="font-heading text-sm text-white/35 font-medium">Муса Җәлил</span>
            </div>
          </div>

          {/* Scroll cue */}
          <div
            className="mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => document.getElementById('sections')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 text-white/25 hover:text-jade-400 transition-colors group"
            >
              <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1 group-hover:border-jade-400 transition-colors">
                <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={addReveal} className="reveal pb-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center border border-white/5">
              <div className="font-heading font-black text-3xl md:text-4xl gradient-text mb-1">{s.value}</div>
              <div className="font-heading text-xs font-semibold text-white/40 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION CARDS */}
      <section id="sections" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, i) => (
              <div
                key={section.id}
                ref={addReveal}
                className={`reveal section-card glass-card rounded-2xl p-6 cursor-pointer group ${section.border} ${section.glowClass}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
                onClick={() => navigate(section.path)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${section.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon name={section.icon} size={22} className={section.iconColor} />
                  </div>
                  <span className={`font-heading text-xs font-semibold ${section.iconColor} opacity-60`}>
                    {section.year}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">{section.title}</h3>
                <p className={`font-heading text-xs ${section.iconColor} font-semibold mb-3 uppercase tracking-wider opacity-70`}>
                  {section.subtitle}
                </p>
                <p className="font-body text-white/55 text-sm leading-relaxed">{section.desc}</p>
                <div className={`mt-5 flex items-center gap-2 ${section.iconColor} group-hover:gap-3 transition-all`}>
                  <span className="font-heading text-sm font-bold">Укырга</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
