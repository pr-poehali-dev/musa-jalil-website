import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
  },
];

export default function Moabit() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-24">
        <span className="section-label">Дүртенче бүлек</span>
        <h1 className="section-title">Моабит дәфтәрләре</h1>

        <div className="space-y-5" style={{ marginBottom: '56px' }}>
          <p className="body-text">
            Берлиндагы Моабит төрмәсенә ябылып, Муса шигырь яза. Ул ике кечкенә дәфтәр тутыра —
            андагы 106 шигырь тоткынлык шартларында язылган. Бу шигырьләр — батырлык, мәхәббәт,
            ирек турында.
          </p>
          <p className="body-text">
            Дәфтәрләрне Муса тоткынлыкташ дусларына тапшыра. Алар сакларга сүз бирәләр.
            Сугыш беткәч, дәфтәрләр СССР-га кайтарыла. Аларны яшерен рәвештә саклаучылар
            татар халкының иң зур батырлыгын башкардылар.
          </p>
          <p className="body-text">
            Бу шигырьләр 1953 елда беренче тапкыр бастырыла. 1957 елда "Моабит дәфтәрләре"
            Ленин премиясенә лаек була. Бүгенге көндә бу — дөнья әдәбиятының алтын битләренең берсе.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--ink)', marginBottom: '40px' }}>
            Шигырьләр
          </h2>
          <div className="space-y-10">
            {poems.map((poem, i) => (
              <div key={i} style={{ paddingBottom: '32px', borderBottom: i < poems.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', color: 'var(--ink)', marginBottom: '16px' }}>
                  {poem.title}
                </p>
                <div className="space-y-1" style={{ marginBottom: '16px' }}>
                  {poem.lines.map((line, j) => (
                    <p key={j} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.95rem', lineHeight: '1.8', color: '#333', textAlign: 'left' }}>
                      {line}
                    </p>
                  ))}
                </div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
                  {poem.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pull-quote" style={{ marginTop: '64px' }}>
          <p>Кеше үлә — яши аның нәселе,<br />Кеше яши — яши аның исеме.</p>
          <cite>Муса Җәлил</cite>
        </div>
      </div>

      <Footer />
    </div>
  );
}
