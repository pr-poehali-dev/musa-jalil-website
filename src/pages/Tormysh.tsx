import { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const timeline = [
  {
    year: '1906',
    title: 'Дөньяга килү',
    text: 'Муса Җәлил 1906 елның 15 февралендә Ырынбур губернасының Мостафа авылында дөньяга килә.',
    color: 'jade',
  },
  {
    year: '1912',
    title: 'Беренче адымнар',
    text: 'Алты яшендә әтисе Мустафа кечкенә Мусаны авыл мәктәбенә бирә. Бу мәктәптә әдип бер ел эчендә 4 еллык уку программасын үзләштерә.',
    color: 'ocean',
  },
  {
    year: '1913',
    title: 'Ырынбурга күчү',
    text: 'Бурычка алынган акчага ачылган кибет көтелгән табышны алып килмәгәнлектән, Мусаның әтисе Мустафа гаиләсе белән Ырынбурга күченеп китә.',
    color: 'jade',
  },
  {
    year: '1914',
    title: '"Хөсәения" мәдрәсәсе',
    text: 'Әдип шәкерт булып, "Хөсәениягә" укырга керә. Нәкъ шул ук елны ул беренче тапкыр әдәби әсәрләр укый: Габдулла Тукай шигырьләре һәм А.С.Пушкинның әкиятләре. Муса еш кына "Белек" китапханәсенә йөри торган була. Анда ул танылган язучы Шариф Камал белән таныша.',
    color: 'coral',
  },
  {
    year: '1915',
    title: 'Язучы булырга хыял',
    text: 'Җәлил апасы Мәрьямгә бөек язучы булырга хыялланганы турында сөйли. Тиздән яшь шагыйрь турында Оренбургның танылган язучысы Төхфәт Ченекәй ишетеп ала. Ул "Хөсәениягә" килеп, Мусаны эзләп таба һәм аңа гарәп, фарсы, татар классикаларын укырга бирә, спектакльләргә, әдәби кичәләргә алып бара.',
    color: 'ocean',
  },
  {
    year: '1919',
    title: 'Комсомол рәтләрендә',
    text: 'Муса Казанга килеп, татар яшьләре арасында актив эшчәнлек башлый. Комсомол оешмасына керә, шигырьләрен бастыра башлый.',
    color: 'jade',
  },
  {
    year: '1927',
    title: 'Мәскәүдә белем',
    text: 'Москвага күченеп, Мәскәү дәүләт университетының әдәбият факультетына укырга керә. Мәскәүдә татар мәдәниятен популярлаштыру эшен алып бара.',
    color: 'coral',
  },
  {
    year: '1941',
    title: 'Сугышка китү',
    text: 'Бөек Ватан сугышы башлана. Муса Җәлил фронтка китә — Ватанны яклау өчен.',
    color: 'ocean',
  },
];

const colorMap: Record<string, string> = {
  jade: 'border-jade-500 bg-jade-500/10 text-jade-400',
  ocean: 'border-ocean-500 bg-ocean-500/10 text-ocean-400',
  coral: 'border-coral-500 bg-coral-500/10 text-coral-400',
};

export default function Tormysh() {
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
    <div className="min-h-screen section-bg-green">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-jade-500/8 blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <div className="opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-jade-500/20 flex items-center justify-center">
                <Icon name="BookOpen" size={20} className="text-jade-400" />
              </div>
              <span className="font-heading text-xs font-semibold tracking-[0.3em] text-jade-400/70 uppercase">
                Беренче бүлек
              </span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-4">
              Тормыш юлы
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-jade-500 to-ocean-500 rounded-full mb-6" />
            <p className="font-body text-white/60 text-lg max-w-2xl leading-relaxed">
              Мусаның балачагыннан алып сугышка кадәр — шагыйрьнең тормыш юлы, белем алуы
              һәм шигъри иҗатының формалашуы.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => {
                const colors = colorMap[item.color];
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    ref={addReveal}
                    className={`reveal relative flex items-start gap-6 md:gap-0 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`glass-card rounded-2xl p-5 border ${colors.split(' ')[0]}/20`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-heading font-semibold mb-3 ${colors}`}>
                          <span>{item.year}</span>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                        <p className="font-body text-white/60 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-5 z-10">
                      <div className={`w-5 h-5 rounded-full border-2 ${colors.split(' ')[0]} bg-deep-bg flex items-center justify-center`}>
                        <div className={`w-2 h-2 rounded-full ${colors.split(' ')[1].replace('/10', '')}`} />
                      </div>
                    </div>

                    {/* Empty side */}
                    <div className="hidden md:block flex-1 md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section ref={addReveal} className="reveal py-16 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="quote-mark text-jade-400 text-6xl font-display leading-none mb-4">"</div>
            <blockquote className="font-display italic text-2xl md:text-3xl text-white/85 leading-relaxed mb-6">
              Без яшибез, чөнки без яратабыз,
              <br />
              Без яратабыз, чөнки без яшибез.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-jade-500/50" />
              <span className="font-body text-sm text-white/40">Муса Җәлил</span>
              <div className="w-8 h-px bg-jade-500/50" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
