import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const familyItems = [
  {
    icon: 'User',
    title: 'Мустафа Залилов — әтисе',
    text: 'Муса Мостафа авылында крестьян гаиләсендә туа. Әтисе Мустафа — гади кеше, гаиләсен тукландырыр өчен тырышып эшли. Ырынбурга күчкәч, ул кибет ача, ләкин табышсызлык аркасында гаилә кыенлыкларга дучар була.',
    color: 'jade',
  },
  {
    icon: 'Heart',
    title: 'Рахиля Сайфуллина — хатыны',
    text: 'Муса Казанда яшәгәндә таныша. Рахиля аның тормыш иптәше, терәге була. Муса фронтка киткәч, ул хатыны белән сагыну хатлары алышкан. Фронттагы хатлар — назлы сагыну тулы.',
    color: 'coral',
  },
  {
    icon: 'Star',
    title: 'Чулпан — кызы',
    text: 'Муса Чулпан кызын бик яраткан. Сугышта булган чакта да, Моабит тоткынлыгында да кызын уйлаган. Аны хыялланып сагынган. Шигырьләрендә кызына мөнәсәбәт сизелә — ул аның өчен яшәүнең мәгънәсе.',
    color: 'amber',
  },
  {
    icon: 'Users',
    title: 'Апалары — яраткан кардәшләре',
    text: 'Мусаның берничә апасы булган. Аның иң якын кешесе — апасы Мәрьям. Аңа ул 1915 елда ук язучы булырга хыялланганы турында сөйли. Апалары аны аңлаган, хупланы.',
    color: 'ocean',
  },
];

const lifeFacts = [
  { icon: 'MapPin', text: 'Мостафа авылы, Ырынбур губернасы', label: 'Туган урын' },
  { icon: 'GraduationCap', text: '"Хөсәения" мәдрәсәсе, аннан Казан, Мәскәү', label: 'Белем' },
  { icon: 'Feather', text: '14 яшеннән шигырь язарга тотына', label: 'Иҗат' },
  { icon: 'Globe', text: 'Татар, рус, гарәп, фарсы телләрен белгән', label: 'Теллар' },
];

export default function Shakhsi() {
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
    <div className="min-h-screen section-bg-coral">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-coral-500/8 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-rose-400" />
              </div>
              <span className="font-heading text-xs font-semibold tracking-[0.3em] text-rose-400/70 uppercase">
                Икенче бүлек
              </span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-4">
              Шәхси тормышы
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-coral-500 rounded-full mb-6" />
            <p className="font-body text-white/60 text-lg max-w-2xl leading-relaxed">
              Гаилә, мәхәббәт, якын кешеләр — шагыйрьнең шәхси тормышы аның иҗатына
              тирән тәэсир иткән.
            </p>
          </div>
        </div>
      </section>

      {/* Life facts */}
      <section className="pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {lifeFacts.map((fact, i) => (
              <div
                key={i}
                ref={addReveal}
                className="reveal glass-card-coral rounded-2xl p-4 text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center mx-auto mb-3">
                  <Icon name={fact.icon} size={18} className="text-rose-400" />
                </div>
                <p className="font-heading text-xs font-semibold text-rose-400/70 uppercase tracking-wider mb-1">
                  {fact.label}
                </p>
                <p className="font-body text-white/70 text-xs leading-relaxed">{fact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family cards */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div ref={addReveal} className="reveal mb-10">
            <h2 className="font-heading font-black text-3xl text-white mb-2">Гаилә</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-rose-500 to-coral-500 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {familyItems.map((item, i) => {
              const colorClasses: Record<string, string> = {
                jade: 'bg-jade-500/15 text-jade-400 border-jade-500/20',
                coral: 'bg-rose-500/15 text-rose-400 border-rose-500/20',
                amber: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
                ocean: 'bg-ocean-500/15 text-ocean-400 border-ocean-500/20',
              };
              const cls = colorClasses[item.color];
              return (
                <div
                  key={i}
                  ref={addReveal}
                  className={`reveal glass-card rounded-2xl p-6 border ${cls.split(' ')[2]}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${cls.split(' ')[0]}`}>
                      <Icon name={item.icon} size={22} className={cls.split(' ')[1]} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                      <p className="font-body text-white/60 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Letters section */}
      <section ref={addReveal} className="reveal pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card-coral rounded-3xl p-8 md:p-12 border border-rose-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center">
                <Icon name="Mail" size={20} className="text-rose-400" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-white">Фронт хатлары</h2>
            </div>
            <p className="font-body text-white/65 leading-relaxed mb-6">
              Муса Рахиля хатынына фронттан хатлар язган. Бу хатларда ул сагынуын,
              Чулпанны күрергә теләвен белдергән. Аның хатлары — мәхәббәт,
              ватан, яшәеш турында тирән уйлар. Моабит тоткынлыгыннан да
              ул хатлар язарга тырышкан — ниһаять аларны китерергә мөмкинлек тапканда.
            </p>
            <div className="glass-card rounded-xl p-5 border border-rose-500/10">
              <div className="quote-mark text-rose-400 text-4xl font-display leading-none mb-2">"</div>
              <p className="font-display italic text-lg text-white/80 leading-relaxed">
                Сине, Чулпаным, сагынам,
                <br />
                Күзләреңне, хисләреңне...
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-4 h-px bg-rose-500/50" />
                <span className="font-body text-xs text-white/35">Рахиля хатынына язылган хаттан</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
