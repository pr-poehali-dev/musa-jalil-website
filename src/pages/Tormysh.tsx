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
    icon: 'Star',
  },
  {
    year: '1912',
    title: 'Мәктәпкә беренче адым',
    text: 'Алты яшендә әтисе Мустафа кечкенә Мусаны авыл мәктәбенә бирә. Бу мәктәптә әдип бер ел эчендә 4 еллык уку программасын үзләштерә.',
    color: 'ocean',
    icon: 'BookOpen',
  },
  {
    year: '1913',
    title: 'Ырынбурга күчү',
    text: 'Бурычка алынган акчага ачылган кибет көтелгән табышны алып килмәгәнлектән, Мусаның әтисе Мустафа гаиләсе белән Ырынбурга күченеп китә.',
    color: 'jade',
    icon: 'MapPin',
  },
  {
    year: '1914',
    title: '"Хөсәения" мәдрәсәсе',
    text: 'Әдип шәкерт булып, "Хөсәениягә" укырга керә. Нәкъ шул ук елны ул беренче тапкыр әдәби әсәрләр укый: Габдулла Тукай шигырьләре һәм А.С.Пушкинның әкиятләре. Муса еш кына "Белек" китапханәсенә йөри торган була. Анда ул танылган язучы Шариф Камал белән таныша.',
    color: 'coral',
    icon: 'BookMarked',
  },
  {
    year: '1915',
    title: 'Язучы булырга хыял',
    text: 'Җәлил апасы Мәрьямгә бөек язучы булырга хыялланганы турында сөйли. Тиздән яшь шагыйрь турында Оренбургның танылган язучысы Төхфәт Ченекәй ишетеп ала. Ул "Хөсәениягә" килеп, Мусаны эзләп таба һәм аңа гарәп, фарсы, татар классикаларын укырга бирә, спектакльләргә, әдәби кичәләргә алып бара.',
    color: 'ocean',
    icon: 'Feather',
  },
  {
    year: '1916',
    title: 'Ач фетнә',
    text: 'Даими рәвештә хәерчелек чигендә булган күп балалы гаиләгә исән калу җиңел булмаган. 1916 елның маенда Оренбургта Казаклар тарафыннан каты бастырылган ач фетнә кабынып китә.',
    color: 'jade',
    icon: 'Flame',
  },
  {
    year: '1917',
    title: 'Революция чоры',
    text: 'Февраль революциясеннән соң шәһәр шаулый башлый. Муса бу шау-шулы тормышка актив кушыла. Ул стена газеталары һәм кулъязма журнал өчен шигырьләр яза. 11 яшьлек Муса язган пьесасы ("Злодей") Оренбург шәһәр театрында куела.',
    color: 'coral',
    icon: 'Drama',
  },
  {
    year: '1918',
    title: 'Беренче шигырь',
    text: 'Безгә килеп җиткән шигырьләрнең беренчесе 1918 елның 15 октябрендә язылган. Ул вакыйгаларга багышланган бу шигырь "кечкенә Җәлил" дип имзалана.',
    color: 'ocean',
    icon: 'PenLine',
  },
  {
    year: '1919',
    title: '"Кызыл Йолдыз" газетасы',
    text: '"Кызыл Йолдыз" газетасында беренче рәсми мәкалә басыла. Муса "Кызыл Чәчәк" балалар оешмасын оештыра. 1920 елның 17 февралендә комсомол сафларына керә.',
    color: 'jade',
    icon: 'Newspaper',
  },
  {
    year: '1921',
    title: 'Авыр еллар',
    text: 'Ырынбурда ачлык була. Мусаның ике энесе үлде, әнисе хәлсез иде. Ул Оренбург хәрби-сәяси мәктәбендә курсант була, шигырьләр һәм пьесалар язуын дәвам итә.',
    color: 'coral',
    icon: 'Shield',
  },
  {
    year: '1922',
    title: 'Казанга килү',
    text: 'Ноябрь ахырында Муса Казанга килә һәм шунда ук диярлек җирле татар газета-журналларында басыла башлый. 1923 елда "Көрәш җырлары" күмәк җыентыгында аның шигырьләр циклы басылып чыга.',
    color: 'ocean',
    icon: 'MapPin',
  },
  {
    year: '1927',
    title: 'МДУда белем',
    text: 'Муса беренче МДУ этнология факультетының әдәби бүлеге беренче курс студенты була. Параллель рәвештә "Кечкенә иптәшләр" исемле татар балалар журналы мөхәррире. Варлам Шаламов аның бүлмәдәше була.',
    color: 'jade',
    icon: 'GraduationCap',
  },
  {
    year: '1930-е',
    title: 'Мәскәүдә әдәби түгәрәк',
    text: 'Муса Мәскәүдәге татар яшьләре өчен әдәби түгәрәк оештыра. Аның утырышлары Төрки халыкларның үзәк китапханәсендә уза. Татар телен, стилистиканы, грамматиканы өйрәтүгә зур игтибар бирелә.',
    color: 'coral',
    icon: 'Users',
  },
  {
    year: '1934',
    title: 'Опера студиясе',
    text: 'Татар опера студиясенең әдәби бүлек мөдире була. Эшли һәм шул ук вакытта яңадан укый: сәнгать буенча китаплар, консерватория профессорларының лекцияләрен тыңлый.',
    color: 'ocean',
    icon: 'Music',
  },
  {
    year: '1941',
    title: 'Сугышка китү',
    text: 'Бөек Ватан сугышы башлана. Муса Җәлил фронтка китә — Ватанны яклау өчен. Аның тормышының иң авыр һәм иң батыр бите башлана.',
    color: 'jade',
    icon: 'Sword',
  },
];

const colorMap: Record<string, { dot: string; badge: string; border: string; text: string }> = {
  jade: {
    dot: 'border-jade-500 bg-jade-500/20',
    badge: 'bg-jade-500/15 text-jade-400',
    border: 'border-jade-500/20',
    text: 'text-jade-400',
  },
  ocean: {
    dot: 'border-ocean-500 bg-ocean-500/20',
    badge: 'bg-ocean-500/15 text-ocean-400',
    border: 'border-ocean-500/20',
    text: 'text-ocean-400',
  },
  coral: {
    dot: 'border-coral-500 bg-coral-500/20',
    badge: 'bg-coral-500/15 text-coral-400',
    border: 'border-coral-500/20',
    text: 'text-coral-400',
  },
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
              <span className="font-heading text-xs font-bold tracking-[0.3em] text-jade-400/70 uppercase">
                Беренче бүлек
              </span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl text-white mb-4">
              Тормыш юлы
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-jade-500 to-ocean-500 rounded-full mb-6" />
            <p className="font-heading font-medium text-white/55 text-base max-w-2xl leading-relaxed">
              Мусаның балачагыннан алып сугышка кадәр — шагыйрьнең тормыш юлы,
              белем алуы һәм шигъри иҗатының формалашуы.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px timeline-line transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, i) => {
                const cl = colorMap[item.color];
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    ref={addReveal}
                    className={`reveal relative flex items-start gap-6 md:gap-0 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ transitionDelay: `${i * 0.07}s` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`glass-card rounded-2xl p-5 border ${cl.border}`}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`font-heading text-xs font-black px-3 py-1 rounded-full ${cl.badge}`}>
                            {item.year}
                          </span>
                          <div className={`w-6 h-6 rounded-lg ${cl.badge.replace('text-', 'bg-').replace('-400', '-500/20')} flex items-center justify-center`}>
                            <Icon name={item.icon} size={12} className={cl.text} />
                          </div>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-white mb-2">{item.title}</h3>
                        <p className="font-heading font-medium text-white/55 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-5 z-10">
                      <div className={`w-5 h-5 rounded-full border-2 ${cl.dot} flex items-center justify-center`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                      </div>
                    </div>

                    {/* Empty side */}
                    <div className="hidden md:block flex-1" />
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
            <Icon name="Quote" size={32} className="text-jade-400/40 mx-auto mb-6" />
            <blockquote className="font-heading font-semibold text-xl md:text-2xl text-white/80 leading-relaxed mb-6">
              Без яшибез, чөнки без яратабыз,
              <br />
              Без яратабыз, чөнки без яшибез.
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-px bg-jade-500/50" />
              <span className="font-heading font-bold text-xs text-white/35 uppercase tracking-widest">Муса Җәлил</span>
              <div className="w-8 h-px bg-jade-500/50" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
