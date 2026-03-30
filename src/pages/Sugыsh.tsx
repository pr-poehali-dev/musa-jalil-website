import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const warEvents = [
  {
    year: 'Июнь 1941',
    icon: 'Siren',
    title: 'Сугыш башлана',
    text: 'Германия СССР-га бәрелде. Муса Җәлил дошманны Ватаннан куу өчен фронтка юнәлә. Ул беренче отрядлар белән Көнбатыш фронтка китә.',
    color: 'ocean',
  },
  {
    year: '1942',
    icon: 'Shield',
    title: 'Политрук',
    text: 'Муса полк яки дивизия матбугатының политрук хезмәтчесе булып хезмәт итә. Сугышчыларны рухландыру, уку-язу алып бару эшен башкара. Шигырьне ул монда да ташламый.',
    color: 'jade',
  },
  {
    year: 'Июнь 1942',
    icon: 'AlertTriangle',
    title: 'Чорлану',
    text: 'Волхов фронтында Муса авыр яраланып, немецлар тарафыннан Ленинград янында чорланып, әсир алына. Алды белән бу аның өчен — үлем белән тигез хәл.',
    color: 'coral',
  },
  {
    year: '1942–1943',
    icon: 'Lock',
    title: 'Легион — яшерен оешма',
    text: 'Немецлар Муса Җәлилне "Идел-Урал" легионына тарта. Ләкин ул андагы үзенең фикердәшләре белән дошманга каршы яшерен оешма корый. Аларның максаты — сугышчыларны яклау, диверсия ясау.',
    color: 'amber',
  },
  {
    year: '1943',
    icon: 'Eye',
    title: 'Куркыту',
    text: 'Яшерен оешма немецлар тарафыннан ачыла. Муса Җәлил гестапо тарафыннан кулга алына. Аны Берлинга, Моабит төрмәсенә алып китәләр.',
    color: 'coral',
  },
  {
    year: '25 август 1944',
    icon: 'Star',
    title: 'Батырлык белән үлем',
    text: 'Муса Җәлил һәм аның 10 иптәше Берлин янындагы Плетцензее төрмәсендә гильотинага тапшырылалар. Батырлар Ватаннары өчен жаннарын бирә.',
    color: 'jade',
  },
];

export default function Sugыsh() {
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

  const colorMap: Record<string, { icon: string; card: string; dot: string; year: string }> = {
    ocean: {
      icon: 'bg-ocean-500/20 text-ocean-400',
      card: 'border-ocean-500/20',
      dot: 'border-ocean-500 bg-ocean-500/20',
      year: 'text-ocean-400 bg-ocean-500/10',
    },
    jade: {
      icon: 'bg-jade-500/20 text-jade-400',
      card: 'border-jade-500/20',
      dot: 'border-jade-500 bg-jade-500/20',
      year: 'text-jade-400 bg-jade-500/10',
    },
    coral: {
      icon: 'bg-coral-500/20 text-coral-400',
      card: 'border-coral-500/20',
      dot: 'border-coral-500 bg-coral-500/20',
      year: 'text-coral-400 bg-coral-500/10',
    },
    amber: {
      icon: 'bg-amber-500/20 text-amber-400',
      card: 'border-amber-500/20',
      dot: 'border-amber-500 bg-amber-500/20',
      year: 'text-amber-400 bg-amber-500/10',
    },
  };

  return (
    <div className="min-h-screen section-bg-blue">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-ocean-500/8 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-ocean-500/20 flex items-center justify-center">
                <Icon name="Sword" size={20} className="text-ocean-400" />
              </div>
              <span className="font-heading text-xs font-semibold tracking-[0.3em] text-ocean-400/70 uppercase">
                Өченче бүлек
              </span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-4">
              Сугыш юлы
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-ocean-500 to-jade-500 rounded-full mb-6" />
            <p className="font-body text-white/60 text-lg max-w-2xl leading-relaxed">
              1941–1944 еллар — ул Муса Җәлил өчен иң авыр, шул ук вакытта иң батыр еллар.
              Фронт, ясир, герой үлем.
            </p>
          </div>
        </div>
      </section>

      {/* War timeline */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {warEvents.map((event, i) => {
              const cl = colorMap[event.color];
              return (
                <div
                  key={i}
                  ref={addReveal}
                  className={`reveal glass-card rounded-2xl p-6 border ${cl.card}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${cl.icon.split(' ')[0]}`}>
                      <Icon name={event.icon} size={22} className={cl.icon.split(' ')[1]} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading font-bold text-lg text-white">{event.title}</h3>
                        <span className={`font-heading text-xs font-semibold px-3 py-1 rounded-full ${cl.year}`}>
                          {event.year}
                        </span>
                      </div>
                      <p className="font-body text-white/60 text-sm leading-relaxed">{event.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video section */}
      <section ref={addReveal} className="reveal pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-ocean-500/20 flex items-center justify-center">
                <Icon name="Play" size={16} className="text-ocean-400" />
              </div>
              <h2 className="font-heading font-bold text-2xl text-white">Документаль видео</h2>
            </div>
            <p className="font-body text-white/50 text-sm ml-11">Муса Җәлил сугышы турында документаль материал</p>
          </div>
          <div className="glass-card-blue rounded-2xl p-4 border border-ocean-500/20">
            <div className="video-container rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/5xRdq7V_MBk"
                title="Муса Җәлил турында документаль"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero quote */}
      <section ref={addReveal} className="reveal pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card-blue rounded-3xl p-8 md:p-12 border border-ocean-500/20">
            <div className="quote-mark text-ocean-400 text-6xl leading-none mb-4">"</div>
            <blockquote className="font-heading font-semibold text-2xl md:text-3xl text-white/85 leading-relaxed mb-6">
              Мин яшәдем, дошманга баш бирмәдем,
              <br />
              Үлгәндә дә яшим — шигырьдә...
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-ocean-500/50" />
              <span className="font-body text-sm text-white/40">Муса Җәлил</span>
              <div className="w-8 h-px bg-ocean-500/50" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}