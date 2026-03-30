import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const heroes = [
  {
    name: 'Муса Мостафа улы Залилов',
    role: 'Башлык — Шагыйрь',
    years: '1906–1944',
    desc: 'Муса Джалил — группаның рухи башлыгы, шагыйре. Яшерен оешма эшчәнлеген алып баручы, Моабит дәфтәрләрен яздыручы.',
    icon: 'Star',
    color: 'amber',
    badge: 'Герой',
  },
  {
    name: 'Гайнан Кормаш',
    role: 'Оешмачы',
    years: '1916–1944',
    desc: 'Яшерен оешманың актив катнашучысы. Немецлар тарафыннан кулга алынгач та ул иптәшләрен сатмаган, батырча тотынган.',
    icon: 'Shield',
    color: 'ocean',
    badge: 'Батыр',
  },
  {
    name: 'Фуат Булатов',
    role: 'Актив катнашучы',
    years: '1916–1944',
    desc: 'Идел-Урал легионындагы татар офицеры. Яшерен оешмага кушылып, дошманга каршы эшчәнлек алып барган.',
    icon: 'Users',
    color: 'jade',
    badge: 'Батыр',
  },
  {
    name: 'Ахмет Симаев',
    role: 'Катнашучы',
    years: '?–1944',
    desc: 'Легион яшерен оешмасы члены. Данлыклы батырлар арасында — ул да шул яу юлы үтте.',
    icon: 'Award',
    color: 'violet',
    badge: 'Батыр',
  },
  {
    name: 'Зиннат Хасанов',
    role: 'Катнашучы',
    years: '?–1944',
    desc: 'Немец фашизмына каршы яшерен оешмада актив рольне үтәгән батыр.',
    icon: 'Shield',
    color: 'coral',
    badge: 'Батыр',
  },
  {
    name: 'Абдулла Алиш',
    role: 'Язучы-батыр',
    years: '1908–1944',
    desc: 'Танылган татар балалар язучысы. Яшерен оешмага кергән, тоткынлыкта да иҗатын ташламаган. Муса Джалил белән бергә гильотинага тапшырылган.',
    icon: 'Feather',
    color: 'jade',
    badge: 'Язучы-Герой',
  },
  {
    name: 'Фоат Сайфельмулюков',
    role: 'Катнашучы',
    years: '?–1944',
    desc: 'Оешма членларының берсе. Батырлар арасына кергән кеше.',
    icon: 'Users',
    color: 'ocean',
    badge: 'Батыр',
  },
  {
    name: 'Галимҗан Бассиров',
    role: 'Катнашучы',
    years: '?–1944',
    desc: 'Яшерен оешманың тагын бер баш күтәрмәс катнашучысы. Батырларча үлем.',
    icon: 'Star',
    color: 'amber',
    badge: 'Батыр',
  },
  {
    name: 'Хиса Солтанов',
    role: 'Катнашучы',
    years: '?–1944',
    desc: 'Идел-Урал легионы батырлары арасында. Ватан кешесе.',
    icon: 'Shield',
    color: 'coral',
    badge: 'Батыр',
  },
  {
    name: 'Сәлим Бухаров',
    role: 'Катнашучы',
    years: '?–1944',
    desc: 'Оешма членнарының берсе. Немецларга бирелмәгән, тимер ирадәле.',
    icon: 'Award',
    color: 'jade',
    badge: 'Батыр',
  },
  {
    name: 'Мухаммад Джалялов',
    role: 'Катнашучы',
    years: '?–1944',
    desc: 'Яшерен батырлар оешмасы членнарының берсе. Тоткынлыкта да баш бирмәгән.',
    icon: 'Users',
    color: 'violet',
    badge: 'Батыр',
  },
];

const colorMap: Record<string, { icon: string; card: string; badge: string }> = {
  amber: {
    icon: 'bg-amber-500/20 text-amber-400',
    card: 'border-amber-500/20',
    badge: 'bg-amber-500/15 text-amber-400',
  },
  ocean: {
    icon: 'bg-ocean-500/20 text-ocean-400',
    card: 'border-ocean-500/20',
    badge: 'bg-ocean-500/15 text-ocean-400',
  },
  jade: {
    icon: 'bg-jade-500/20 text-jade-400',
    card: 'border-jade-500/20',
    badge: 'bg-jade-500/15 text-jade-400',
  },
  coral: {
    icon: 'bg-coral-500/20 text-coral-400',
    card: 'border-coral-500/20',
    badge: 'bg-coral-500/15 text-coral-400',
  },
  violet: {
    icon: 'bg-violet-500/20 text-violet-400',
    card: 'border-violet-500/20',
    badge: 'bg-violet-500/15 text-violet-400',
  },
};

export default function Jalilcheler() {
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

  return (
    <div className="min-h-screen" style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(139,92,246,0.08) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(34,197,94,0.06) 0%, transparent 50%), var(--deep-bg)' }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-500/6 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                <Icon name="Users" size={20} className="text-violet-400" />
              </div>
              <span className="font-heading text-xs font-semibold tracking-[0.3em] text-violet-400/70 uppercase">
                Бишенче бүлек
              </span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-4">
              Җәлилчеләр
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-ocean-500 rounded-full mb-6" />
            <p className="font-body text-white/60 text-lg max-w-2xl leading-relaxed">
              11 батыр — Муса Джалил белән бергә Идел-Урал легионына каршы яшерен оешма
              оештырганнар. 1944 елның 25 августында алар Плетцензее төрмәсендә батырча үлгән.
            </p>
          </div>
        </div>
      </section>

      {/* Memorial banner */}
      <section className="pb-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div
            ref={addReveal}
            className="reveal glass-card rounded-2xl p-6 border border-violet-500/20 flex flex-wrap items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center flex-shrink-0">
              <Icon name="Flame" size={24} className="text-violet-400" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-xl text-white mb-1">25 август 1944</h2>
              <p className="font-body text-white/55 text-sm">
                Плетцензее (Берлин) — 11 батыр гильотинада башкарыла. Аларның данлы исеме мәңгегә сакланды.
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="font-heading text-xs text-violet-400 font-semibold">11 герой</span>
            </div>
          </div>
        </div>
      </section>

      {/* Heroes grid */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={addReveal} className="reveal mb-8">
            <h2 className="font-heading font-black text-3xl text-white mb-2">Батырлар</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-ocean-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {heroes.map((hero, i) => {
              const cl = colorMap[hero.color] || colorMap.jade;
              return (
                <div
                  key={i}
                  ref={addReveal}
                  className={`reveal glass-card rounded-2xl p-5 border ${cl.card} section-card`}
                  style={{ transitionDelay: `${i * 0.07}s` }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cl.icon.split(' ')[0]}`}>
                      <Icon name={hero.icon} size={18} className={cl.icon.split(' ')[1]} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-sm text-white leading-tight mb-0.5">
                        {hero.name}
                      </h3>
                      <p className={`font-body text-xs font-medium ${cl.icon.split(' ')[1]} opacity-70`}>
                        {hero.role}
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-white/55 text-xs leading-relaxed mb-3">{hero.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className={`font-heading text-xs font-semibold px-2.5 py-1 rounded-full ${cl.badge}`}>
                      {hero.badge}
                    </span>
                    <span className="font-body text-xs text-white/30">{hero.years}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video */}
      <section ref={addReveal} className="reveal pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <Icon name="Play" size={16} className="text-violet-400" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-white">Батырлар турында видео</h2>
          </div>
          <div className="glass-card rounded-2xl p-4 border border-violet-500/20">
            <div className="video-container rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/eQ2T3X5pHNg"
                title="Джалиловцы документальный"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Memorial quote */}
      <section ref={addReveal} className="reveal pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-violet-500/20">
            <Icon name="Flame" size={32} className="text-violet-400 mx-auto mb-4" />
            <blockquote className="font-heading font-semibold text-xl md:text-2xl text-white/85 leading-relaxed mb-6">
              Алар үлде, ләкин аларның исеме үлмәде.
              <br />
              Алар — татар халкының мәңгелек горурлыгы.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-violet-500/50" />
              <span className="font-heading font-bold text-xs text-white/35 uppercase tracking-widest">Хәтер сакла</span>
              <div className="w-8 h-px bg-violet-500/50" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}