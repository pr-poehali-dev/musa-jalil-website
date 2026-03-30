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
    id: 'sugыsh',
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
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-jade-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ocean-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-coral-500/4 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Subtitle badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-jade-500 animate-pulse" />
            <span className="font-heading text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:
            </span>
          </div>

          {/* Portrait */}
          <div
            className="relative mb-8 opacity-0 animate-scale-in"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <div
              className="w-48 h-48 md:w-56 md:h-56 rounded-full portrait-glow overflow-hidden mx-auto animate-float"
              style={{ animationDelay: '1s' }}
            >
              <img
                src="https://cdn.poehali.dev/projects/e6da7cdb-103f-4921-9553-ed449e2f33e6/files/b6e84a43-d780-4ff7-8571-a47b391803da.jpg"
                alt="Муса Җәлил"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div
              className="absolute inset-0 rounded-full border-2 border-dashed border-jade-500/20 scale-110 animate-spin"
              style={{ animationDuration: '20s' }}
            />
          </div>

          {/* Title */}
          <h1
            className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <span className="gradient-text">МУСА ҖӘЛИЛ</span>
          </h1>

          {/* Years */}
          <div
            className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.75s', animationFillMode: 'forwards' }}
          >
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-jade-500/50" />
            <span className="font-heading text-sm font-semibold text-white/40 tracking-widest">1906 — 1944</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-jade-500/50" />
          </div>

          {/* Quote */}
          <div
            className="glass-card rounded-2xl p-6 md:p-8 max-w-2xl mx-auto relative overflow-hidden opacity-0 animate-fade-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            <div className="absolute -top-4 -left-2 quote-mark select-none">"</div>
            <blockquote className="font-display italic text-xl md:text-2xl text-white/85 leading-relaxed relative z-10">
              Гомерем минем моңлы бер җыр иде,
              <br />
              Үлемем дә яңрар җыр булып...
            </blockquote>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-6 h-px bg-jade-500/50" />
              <span className="font-body text-sm text-white/40">Муса Җәлил</span>
            </div>
          </div>

          {/* Scroll cue */}
          <div
            className="mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={() => document.getElementById('sections')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex flex-col items-center gap-2 text-white/30 hover:text-jade-400 transition-colors group"
            >
              <span className="font-body text-xs tracking-widest uppercase">Өйрән</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1 group-hover:border-jade-400 transition-colors">
                <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION CARDS */}
      <section id="sections" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div ref={addReveal} className="reveal text-center mb-16">
            <p className="font-heading text-xs font-semibold tracking-[0.3em] text-jade-400/70 uppercase mb-3">
              Белем бирү бүлекләре
            </p>
            <h2 className="font-heading font-black text-3xl md:text-5xl text-white">
              Тарихны өйрән
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-jade-500 via-ocean-500 to-coral-500 rounded-full mx-auto mt-4" />
          </div>

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
                <p className={`font-body text-xs ${section.iconColor} font-medium mb-3 uppercase tracking-wider opacity-70`}>
                  {section.subtitle}
                </p>
                <p className="font-body text-white/55 text-sm leading-relaxed">{section.desc}</p>
                <div className={`mt-5 flex items-center gap-2 ${section.iconColor} group-hover:gap-3 transition-all`}>
                  <span className="font-body text-sm font-semibold">Укырга</span>
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}

            {/* Video card */}
            <div
              ref={addReveal}
              className="reveal section-card glass-card-blue rounded-2xl p-6 cursor-pointer group border border-ocean-500/20 glow-blue"
              style={{ transitionDelay: `${sections.length * 0.1}s` }}
              onClick={() => navigate('/moabit')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Play" size={22} className="text-ocean-400" />
                </div>
                <span className="font-heading text-xs font-semibold text-ocean-400 opacity-60">Видео</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-1">Документаль фильмнар</h3>
              <p className="font-body text-xs text-ocean-400 font-medium mb-3 uppercase tracking-wider opacity-70">
                Видеоматериаллар
              </p>
              <p className="font-body text-white/55 text-sm leading-relaxed">
                Муса Җәлил тормышы турындагы документаль фильмнар һәм видеолар
              </p>
              <div className="mt-5 flex items-center gap-2 text-ocean-400 group-hover:gap-3 transition-all">
                <span className="font-body text-sm font-semibold">Карарга</span>
                <Icon name="ArrowRight" size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-16 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '1906', label: 'Туган ел', color: 'text-jade-400' },
              { num: '106+', label: 'Шигырь', color: 'text-ocean-400' },
              { num: '2', label: 'Дәфтәр', color: 'text-amber-400' },
              { num: '1956', label: 'Герой исеме', color: 'text-coral-400' },
            ].map((fact, i) => (
              <div key={i} ref={addReveal} className="reveal text-center" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className={`font-heading font-black text-4xl md:text-5xl ${fact.color} mb-2`}>{fact.num}</div>
                <div className="font-body text-white/50 text-sm">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
