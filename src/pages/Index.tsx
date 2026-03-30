import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  { id: 'tormysh', path: '/tormysh', title: 'Тормыш юлы' },
  { id: 'shakhsi', path: '/shakhsi', title: 'Шәхси тормышы' },
  { id: 'sugыш', path: '/sugыsh', title: 'Сугыш юлы' },
  { id: 'moabit', path: '/moabit', title: 'Моабит дәфтәрләре' },
  { id: 'jalilcheler', path: '/jalilcheler', title: 'Җәлилчеләр' },
  { id: 'bugengekon', path: '/bugengekon', title: 'Бүгенге көн' },
];

const sectionTexts = [
  {
    id: 'tormysh',
    path: '/tormysh',
    title: 'Тормыш юлы',
    year: '1906–1941',
    paragraphs: [
      'Муса Җәлил 1906 елның 15 февралендә Ырынбур губернасының Мостафа авылында дөньяга килә. Алты яшендә әтисе аны авыл мәктәбенә бирә. Бу мәктәптә кечкенә Муса бер ел эчендә 4 еллык программаны үзләштерә.',
      '1914 елда "Хөсәения" мәдрәсәсенә укырга керә. Габдулла Тукай шигырьләрен укып, ул беренче тапкыр әдәбиятны ача. Мәдрәсәдән соң Муса комсомол сафларына кушыла, шигырьләрен газеталарда бастыра башлый.',
      '1927 елда Мәскәү дәүләт университетына укырга керә. Мәскәүдәге татар яшьләре арасында әдәби түгәрәк оештыра, Мәскәүдәге татар матбугатында мөхәррир булып эшли.',
    ],
  },
  {
    id: 'shakhsi',
    path: '/shakhsi',
    title: 'Шәхси тормышы',
    year: 'Гаилә',
    paragraphs: [
      'Муса Казанда яшәгән чорда Рахиля Сайфуллина белән таныша. Рахиля аның тормыш иптәше, терәге, иң якын кешесе булып кала. Аларның кызы Чулпан туа.',
      'Фронтка китеп, Муса хатынына сагыну тулы хатлар яза. Моабит тоткынлыгыннан да ул гаиләсе турында уйлый — шигырьләрендә Чулпанга мөнәсәбәт сизелә.',
      'Мусаның иң якын кешесе апасы Мәрьям була. Аңа ул 1915 елда ук бөек язучы булырга хыялланганы турында сөйли. Гаилә аның иҗатының нигезе, рухи таянычы.',
    ],
  },
  {
    id: 'sugыш',
    path: '/sugыш',
    title: 'Сугыш юлы',
    year: '1941–1942',
    paragraphs: [
      '1941 елда Бөек Ватан сугышы башлана. Муса Җәлил фронтка китә. Ул Волхов фронтында сугыша. 1942 елда авыр яраланганнан соң немецлар тарафыннан әсир алына.',
      'Немецлар Мусаны Идел-Урал легионына кертергә тырышалар. Ләкин ул риваять буенча дошманга хезмәт итми. Гайнан Кормаш белән бергә яшерен оешма оештырырга тотына.',
      'Яшерен оешма тоткынлар арасында антифашист агитация алып бара, побег планлаштыра. 1943 елда оешма ачыкланып, барлык членнары кулга алына.',
    ],
  },
  {
    id: 'moabit',
    path: '/moabit',
    title: 'Моабит дәфтәрләре',
    year: '1942–1944',
    paragraphs: [
      'Берлиндагы Моабит төрмәсенә ябылып, Муса шигырь яза. Ул ике кечкенә дәфтәр тутыра — андагы 106 шигырь тоткынлык шартларында язылган. Бу шигырьләр — батырлык, мәхәббәт, ирек турында.',
      'Дәфтәрләрне Муса тоткынлыкташ дусларына тапшыра. Алар сакларга сүз бирәләр. Сугыш беткәч, дәфтәрләр СССР-га кайтарыла.',
      'Бу шигырьләр 1953 елда беренче тапкыр бастырыла. 1957 елда "Моабит дәфтәрләре" Ленин премиясенә лаек була. Бүгенге көндә бу — дөнья әдәбиятының алтын битләренең берсе.',
    ],
  },
  {
    id: 'jalilcheler',
    path: '/jalilcheler',
    title: 'Җәлилчеләр',
    year: 'Батырлар',
    paragraphs: [
      'Муса Джалил белән бергә яшерен оешмага кергән 11 батыр 1944 елның 25 августында Плетцензее төрмәсендә (Берлин) гильотинада башкарыла.',
      'Алар арасында язучы Абдулла Алиш, Гайнан Кормаш, Фуат Булатов, Ахмет Симаев, Зиннат Хасанов, Сәлим Бухаров, Хиса Солтанов, Фоат Сайфельмулюков, Галимҗан Бассиров, Мухаммад Джалялов бар.',
      'Алар батырлык белән үлделәр, дошманга баш иймәделәр. Аларның данлы исемнәре татар халкының мәңгелек горурлыгы булып тора.',
    ],
  },
  {
    id: 'bugengekon',
    path: '/bugengekon',
    title: 'Бүгенге көн',
    year: 'Хәтер',
    paragraphs: [
      'Муса Җәлил исеме бүгенге көндә дә татар халкының күңелендә яши. Аның шигырьләре мәктәпләрдә өйрәнелә, музейларда саклана, театрларда куела.',
      'Казанда Муса Җәлилгә багышланган мемориаль музей эшли. Шагыйрьнең исемен йөртүче урамнар, мәктәпләр, мәдәни учреждениеләр Татарстанда гына түгел, бөтен дөньяда таралган.',
      'Моабит дәфтәрләре бүгенге көндә дә укучыларны тетрәтә. Аның батырлыгы — киләчәк буыннар өчен рухи мирас.',
    ],
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          {/* Portrait */}
          <div className="flex justify-center mb-10">
            <div className="portrait-circle">
              <img
                src="https://cdn.poehali.dev/files/c42d3da8-7051-4d10-965d-585ff996f7a1.jpeg"
                alt="Муса Җәлил"
              />
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-4">
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
              display: 'block',
            }}>ҮЗ ХАЛКЫН ДАНЛАГАН ТАТАРЛАР:</span>
          </div>

          {/* Name — fits 1 line via viewport-based clamp */}
          <h1
            className="text-center font-black text-gray-900 leading-none mb-4"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(2.5rem, 10vw, 8rem)',
              whiteSpace: 'nowrap',
            }}
          >
            МУСА ҖӘЛИЛ
          </h1>

          {/* Years */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className="divider-muted block" />
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
            }}>1906 — 1944</span>
            <span className="divider-muted block" />
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto text-center" style={{ padding: '32px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              lineHeight: 1.6,
              color: 'var(--ink)',
              fontStyle: 'italic',
              letterSpacing: '0.01em',
              textAlign: 'center',
              marginBottom: '16px',
            }}>
              Гомерем минем моңлы бер җыр иде,<br />
              Үлемем дә яңрар җыр булып...
            </p>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
            }}>— Муса Җәлил</span>
          </div>
        </div>
      </section>

      {/* ── SECTION NAV ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-4" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-8 flex flex-wrap gap-x-8 gap-y-3">
            {sections.map((s) => (
              <button
                key={s.id}
                className="section-nav-item"
                onClick={() => navigate(s.path)}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTIONS ── */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          {sectionTexts.map((sec) => (
            <section key={sec.id} className="content-section">
              <span className="section-label">{sec.year}</span>
              <h2 className="section-title">{sec.title}</h2>
              <div className="space-y-5">
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="body-text">{p}</p>
                ))}
              </div>
              <button
                onClick={() => navigate(sec.path)}
                className="mt-8 inline-flex items-center gap-3 group"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <span style={{ borderBottom: '1px solid var(--ink)', paddingBottom: '2px' }}>Тулырак укырга</span>
                <span style={{ display: 'inline-block', transition: 'transform 0.2s' }} className="group-hover:translate-x-1">→</span>
              </button>
            </section>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
