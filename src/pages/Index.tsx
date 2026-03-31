import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

const sections = [
  { id: 'tormysh', path: '/tormysh', title: 'Тормыш юлы' },
  { id: 'shakhsi', path: '/shakhsi', title: 'Шəхси тормышы' },
  { id: 'sugish', path: '/sugish', title: 'Сугыш юлы' },
  { id: 'moabit', path: '/moabit', title: 'Моабит дəфтəрлəре' },
  { id: 'jalilcheler', path: '/jalilcheler', title: 'Җəлилчелəр' },
  { id: 'ijat', path: '/ijat', title: 'Иҗат' },
  { id: 'bugengekon', path: '/bugengekon', title: 'Бүгенге көн' },
];

const sectionTexts = [
  {
    id: 'tormysh',
    path: '/tormysh',
    title: 'Тормыш юлы',
    year: '1906–1941',
    photo: 'https://cdn.poehali.dev/files/b0ba96ed-05d5-46df-9c72-33c6d36c9f78.jpg',
    photoCaption: 'Муса Җəлил — шəкерт. 1916 ел',
    paragraphs: [
      'Муса Җəлил 1906 елның 15 февралендə Ырынбур губернасының Мостафа авылында дөньяга килə. Алты яшендə əтисе аны авыл мəктəбенə бирə. Бу мəктəптə кечкенə Муса бер ел эчендə 4 еллык программаны үзлəштерə.',
      '1914 елда "Хөсəения" мəдрəсəсенə укырга керə. Габдулла Тукай шигырьлəрен укып, ул беренче тапкыр əдəбиятны ача. Мəдрəсəдəн соң Муса комсомол сафларына кушыла, шигырьлəрен газеталарда бастыра башлый.',
      '1927 елда Мəскəү дəүлəт университетына укырга керə. Мəскəүдəге татар яшьлəре арасында əдəби түгəрəк оештыра, Мəскəүдəге татар матбугатында мөхəррир булып эшли.',
    ],
  },
  {
    id: 'shakhsi',
    path: '/shakhsi',
    title: 'Шəхси тормышы',
    year: 'Гаилə',
    photo: 'https://cdn.poehali.dev/files/4cef3a33-fd57-4fb2-92c5-7ccc9bf04b2c.jpg',
    photoCaption: 'Муса Җәлил хатыны Әминә белән',
    paragraphs: [
      '1936 елның җəендə Муса Əминə Сəйфуллинага өйлəнə. 1937 елның апрелендə аларның кызы Чулпан туа.',
      'Шагыйрь хатыны истəлеклəрендə: «Сугыш алдындагы алты елны без бик тату яшəдек. Кызыбыз Чулпан бик куандыра иде. Безнең бəхетнең чиге юк кебек тоелды».',
      'Муса нечкə күңелле, сизгер иде. Ул шат күңелле, арымый-талмый көлəргə, шаяртырга ярата иде.',
    ],
  },
  {
    id: 'sugish',
    path: '/sugish',
    title: 'Сугыш юлы',
    year: '1941–1942',
    photo: 'https://cdn.poehali.dev/files/faa05e6f-6c25-4168-8b60-8028ba80d705.jpg',
    photoCaption: '1925 елгы уком бюросы. Муса Җәлил (уртада)',
    paragraphs: [
      '1941 елда Бөек Ватан сугышы башлана. Муса Җəлил фронтка китə. Ул Волхов фронтында сугыша. 1942 елда авыр яраланганнан соң немецлар тарафыннан əсир алына.',
      'Немецлар Мусаны Идел-Урал легионына кертергə тырышалар. Лəкин ул риваять буенча дошманга хезмəт итми. Гайнан Кормаш белəн бергə яшерен оешма оештырырга тотына.',
      'Яшерен оешма тоткынлар арасында антифашист агитация алып бара, побег планлаштыра. 1943 елда оешма ачыкланып, барлык членнары кулга алына.',
    ],
  },
  {
    id: 'moabit',
    path: '/moabit',
    title: 'Моабит дəфтəрлəре',
    year: '1942–1944',
    photo: 'https://cdn.poehali.dev/files/36e213fd-776f-46a5-b4f9-9ee76463a039.jpg',
    photoCaption: 'Рабфак студенты. 1923 ел',
    paragraphs: [
      'Берлиндагы Моабит төрмəсенə ябылып, Муса шигырь яза. Ул ике кечкенə дəфтəр тутыра — андагы 106 шигырь тоткынлык шартларында язылган. Бу шигырьлəр — батырлык, мəхəббəт, ирек турында.',
      'Дəфтəрлəрне Муса тоткынлыкташ дусларына тапшыра. Алар сакларга сүз бирəлəр. Сугыш беткəч, дəфтəрлəр СССР-га кайтарыла.',
      'Бу шигырьлəр 1953 елда беренче тапкыр бастырыла. 1957 елда "Моабит дəфтəрлəре" Ленин премиясенə лаек була.',
    ],
  },
  {
    id: 'jalilcheler',
    path: '/jalilcheler',
    title: 'Җəлилчелəр',
    year: 'Батырлар',
    photo: 'https://cdn.poehali.dev/files/b0ba96ed-05d5-46df-9c72-33c6d36c9f78.jpg',
    photoCaption: 'Муса Җәлил — шәкерт. 1916 ел',
    paragraphs: [
      'Муса Джалил белəн бергə яшерен оешмага кергəн 11 батыр 1944 елның 25 августында Плетцензее төрмəсендə (Берлин) гильотинада башкарыла.',
      'Алар арасында язучы Абдулла Алиш, Гайнан Кормаш, Фуат Булатов, Ахмет Симаев həм башкалар бар.',
      'Алар батырлык белəн үлделəр, дошманга баш иймəделəр. Аларның данлы исемнəре татар халкының мəңгелек горурлыгы булып тора.',
    ],
  },
  {
    id: 'ijat',
    path: '/ijat',
    title: 'Иҗат',
    year: 'Шигырьлəр',
    photo: 'https://cdn.poehali.dev/files/5de5d4b9-bd6b-4daf-8dc8-c6e52674ad7d.jpg',
    photoCaption: 'Мəскəү университеты студенты. 1929 ел',
    paragraphs: [
      'Муса Җəлилнең иҗаты — татар поэзиясенең алтын бите. Ул 1910-нче еллардан башлап шигырьлəр язган, аның əсəрлəре газеталарда, журналларда чыккан.',
      'Лирик шигырьлəр, балалар шигырьлəре, поэмалар, балладалар, опера либреттолары — аның иҗат мирасы байлыгы белəн гаҗəплəндерə.',
      'Моабит тоткынлыгында язылган 106 шигырь — аның иң зур батырлык əсəре. Алар тоткынлык, ирек, мəхəббəт, үлем турында — тирəн лирик əсəрлəр.',
    ],
  },
  {
    id: 'bugengekon',
    path: '/bugengekon',
    title: 'Бүгенге көн',
    year: 'Хəтер',
    photo: 'https://cdn.poehali.dev/files/c42d3da8-7051-4d10-965d-585ff996f7a1.jpeg',
    photoCaption: 'Муса Җәлил',
    paragraphs: [
      'Муса Җəлил исеме бүгенге көндə дə татар халкының күңелендə яши. Аның шигырьлəре мəктəплəрдə өйрəнелə, музейларда саклана, театрларда куела.',
      'Казанда Муса Җəлилгə багышланган мемориаль музей эшли. Казан Кремлендə 1966 елда ачылган гранит həйкəл куелган.',
      'Татарстан Республикасы Муса Җəлил исемендəге Дəүлəт опера həм балет театры — бүгенге Казанның бизəге.',
    ],
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {lightbox && (
        <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />
      )}

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="portrait-circle">
              <img
                src="https://cdn.poehali.dev/files/c42d3da8-7051-4d10-965d-585ff996f7a1.jpeg"
                alt="Муса Җəлил"
              />
            </div>
          </div>

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

          <h1
            className="text-center font-black text-gray-900 leading-none mb-4"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.03em',
              fontSize: 'clamp(2.5rem, 10vw, 8rem)',
              whiteSpace: 'nowrap',
            }}
          >
            МУСА ҖƏЛИЛ
          </h1>

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
              Үлемем дə яңрар җыр булып...
            </p>
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--ink-muted)',
            }}>— Муса Җəлил</span>
          </div>
        </div>
      </section>

      {/* ── SECTION NAV ── */}
      <section className="px-6 md:px-16 lg:px-24 pb-4" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-8 flex flex-wrap justify-center gap-x-8 gap-y-3">
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
            <section key={sec.id} className="content-section" style={{ overflow: 'hidden' }}>
              <span className="section-label">{sec.year}</span>
              <h2 className="section-title">{sec.title}</h2>

              {sec.photo && (
                <div
                  onClick={() => setLightbox({ src: sec.photo!, caption: sec.photoCaption || '' })}
                  style={{ float: 'right', marginLeft: '32px', marginBottom: '16px', width: '220px', cursor: 'zoom-in' }}
                >
                  <img
                    src={sec.photo}
                    alt={sec.photoCaption || ''}
                    style={{ width: '100%', display: 'block', filter: 'grayscale(10%) contrast(1.05)' }}
                  />
                  {sec.photoCaption && (
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--ink-muted)', marginTop: '6px', fontStyle: 'italic' }}>
                      {sec.photoCaption}
                    </p>
                  )}
                </div>
              )}

              <div className="space-y-5">
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="body-text">{p}</p>
                ))}
              </div>
              <div style={{ clear: 'both' }} />

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