import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const poems = [
  {
    title: 'Моабит дәфтәрләре',
    lines: [
      'Мин моннан китәрмен, исән калмам,',
      'Ләкин шигырьдә яшим мин daim.',
      'Дошманга баш бирмәм, тезләнмәм,',
      'Батырча үлермен — Ватаным өчен.',
    ],
    note: 'Беренче дәфтәрдән',
    color: 'amber',
  },
  {
    title: 'Өмет',
    lines: [
      'Чыбык артыннан карыйм мин зәңгәр күккә,',
      'Ирек теләп, ирек тели йөрәгем.',
      'Кил, иртәгем, кил — мине сакла,',
      'Шигырьдә мин — үлмәсмен дип ышанам.',
    ],
    note: 'Икенче дәфтәрдән',
    color: 'jade',
  },
  {
    title: 'Хат',
    lines: [
      'Рахиля, сине уйлыйм да яшим,',
      'Чулпанымны күрергә телим.',
      'Тимер чыбыклар аерса да безне,',
      'Мәхәббәтем — иреккә омтыла.',
    ],
    note: 'Гаиләгә багышланган',
    color: 'coral',
  },
];

const facts = [
  {
    icon: 'BookOpen',
    title: 'Ике дәфтәр',
    text: '1942–1944 елларда Моабит тоткынлыгында Муса ике кечкенә дәфтәр тутыра. Аларда 106 шигырь язылган.',
    color: 'amber',
  },
  {
    icon: 'Globe',
    title: 'Бөтен дөньяга таралу',
    text: 'Дәфтәрләрне яшерен рәвештә аның тоткынлыкташ дуслары саклый. Сугыштан соң алар СССР-га кайтарыла.',
    color: 'jade',
  },
  {
    icon: 'Award',
    title: 'Дөнья танкытнамасы',
    text: '"Моабит дәфтәрләре" 1953 елда беренче тапкыр бастырыла. 1957 елда Ленин премиясенә лаек була.',
    color: 'ocean',
  },
  {
    icon: 'Shield',
    title: 'Батырлык символы',
    text: 'Муса тоткынлыкта да шигырь яза. Бу — гаҗәп батырлык. Дошман аны күрсәтергә куша иде, ул ирек елын сакламый.',
    color: 'coral',
  },
];

export default function Moabit() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const colorMap: Record<string, string> = {
    amber: 'border-amber-500/20 bg-amber-500/15 text-amber-400',
    jade: 'border-jade-500/20 bg-jade-500/15 text-jade-400',
    coral: 'border-coral-500/20 bg-coral-500/15 text-coral-400',
    ocean: 'border-ocean-500/20 bg-ocean-500/15 text-ocean-400',
  };

  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(ellipse at 50% 10%, rgba(245,158,11,0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(14,165,233,0.06) 0%, transparent 50%), var(--deep-bg)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Icon name="PenLine" size={20} className="text-amber-400" />
              </div>
              <span className="font-heading text-xs font-semibold tracking-[0.3em] text-amber-400/70 uppercase">
                Дүртенче бүлек
              </span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-4">
              Моабит дәфтәрләре
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-coral-500 rounded-full mb-6" />
            <p className="font-body text-white/60 text-lg max-w-2xl leading-relaxed">
              Тоткынлыкта язылган шигырьләр — батырлык, мәхәббәт, ирек турында.
              Дөнья әдәбиятының алтын битләрендә.
            </p>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="pb-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {facts.map((fact, i) => {
            const cls = colorMap[fact.color];
            return (
              <div
                key={i}
                ref={addReveal}
                className={`reveal glass-card-gold rounded-2xl p-5 border ${cls.split(' ')[0]}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${cls.split(' ')[1]}`}>
                  <Icon name={fact.icon} size={18} className={cls.split(' ')[2]} />
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{fact.title}</h3>
                <p className="font-body text-white/55 text-xs leading-relaxed">{fact.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Poems */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={addReveal} className="reveal mb-8">
            <h2 className="font-heading font-black text-3xl text-white mb-2">Шигырьләр</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-coral-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {poems.map((poem, i) => {
              const cls = colorMap[poem.color];
              return (
                <div
                  key={i}
                  ref={addReveal}
                  className={`reveal glass-card rounded-2xl p-6 border ${cls.split(' ')[0]}`}
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <h3 className={`font-heading font-bold text-lg mb-4 ${cls.split(' ')[2]}`}>{poem.title}</h3>
                  <div className="space-y-1 mb-5">
                    {poem.lines.map((line, j) => (
                      <p key={j} className="font-heading font-medium text-white/75 text-sm leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-medium ${cls.split(' ')[1]} ${cls.split(' ')[2]}`}>
                    <Icon name="BookMarked" size={12} />
                    {poem.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video */}
      <section ref={addReveal} className="reveal pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Icon name="Play" size={16} className="text-amber-400" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-white">Моабит дәфтәрләре турында</h2>
          </div>
          <div className="glass-card-gold rounded-2xl p-4 border border-amber-500/20">
            <div className="video-container rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/LBjA-5zNuTE"
                title="Моабит дәфтәрләре"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second video */}
      <section ref={addReveal} className="reveal pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-ocean-500/20 flex items-center justify-center">
              <Icon name="Film" size={16} className="text-ocean-400" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-white">Документаль фильм</h2>
          </div>
          <div className="glass-card-blue rounded-2xl p-4 border border-ocean-500/20">
            <div className="video-container rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/kECe7CKCi_A"
                title="Муса Джалиль документальный"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}