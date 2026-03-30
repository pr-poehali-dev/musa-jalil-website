import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const heroes = [
  { name: 'Муса Мостафа улы Залилов', role: 'Башлык — Шагыйрь', years: '1906–1944', desc: 'Муса Джалил — группаның рухи башлыгы, шагыйре. Яшерен оешма эшчәнлеген алып баручы, Моабит дәфтәрләрен яздыручы.' },
  { name: 'Гайнан Кормаш', role: 'Оешмачы', years: '1916–1944', desc: 'Яшерен оешманың актив катнашучысы. Немецлар тарафыннан кулга алынгач та ул иптәшләрен сатмаган, батырча тотынган.' },
  { name: 'Абдулла Алиш', role: 'Язучы-батыр', years: '1908–1944', desc: 'Танылган татар балалар язучысы. Яшерен оешмага кергән, тоткынлыкта да иҗатын ташламаган. Муса Джалил белән бергә гильотинага тапшырылган.' },
  { name: 'Фуат Булатов', role: 'Актив катнашучы', years: '1916–1944', desc: 'Идел-Урал легионындагы татар офицеры. Яшерен оешмага кушылып, дошманга каршы эшчәнлек алып барган.' },
  { name: 'Ахмет Симаев', role: 'Катнашучы', years: '?–1944', desc: 'Легион яшерен оешмасы члены. Данлыклы батырлар арасында — ул да шул яу юлы үтте.' },
  { name: 'Зиннат Хасанов', role: 'Катнашучы', years: '?–1944', desc: 'Немец фашизмына каршы яшерен оешмада актив рольне үтәгән батыр.' },
  { name: 'Хиса Солтанов', role: 'Катнашучы', years: '?–1944', desc: 'Идел-Урал легионы батырлары арасында. Ватан кешесе.' },
  { name: 'Сәлим Бухаров', role: 'Катнашучы', years: '?–1944', desc: 'Оешма членнарының берсе. Немецларга бирелмәгән, тимер ирадәле.' },
  { name: 'Фоат Сайфельмулюков', role: 'Катнашучы', years: '?–1944', desc: 'Яшерен оешманың тагын бер баш күтәрмәс катнашучысы. Батырларча үлем.' },
  { name: 'Галимҗан Бассиров', role: 'Катнашучы', years: '?–1944', desc: 'Яшерен оешма членнарының берсе. Немецларга бирелмәгән.' },
  { name: 'Мухаммад Джалялов', role: 'Катнашучы', years: '?–1944', desc: 'Яшерен батырлар оешмасы членнарының берсе. Тоткынлыкта да баш бирмәгән.' },
];

export default function Jalilcheler() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-24">
        <span className="section-label">Бишенче бүлек</span>
        <h1 className="section-title">Җәлилчеләр</h1>

        <div className="space-y-5" style={{ marginBottom: '56px' }}>
          <p className="body-text">
            11 батыр — Муса Джалил белән бергә Идел-Урал легионына каршы яшерен оешма
            оештырганнар. Алар тоткынлыкта да Ватанны яклаудан баш тартмаганнар.
          </p>
          <p className="body-text">
            1944 елның 25 августында алар Плетцензее төрмәсендә (Берлин) гильотинада башкарыла.
            Дошманга баш имичә, батырларча үлделәр.
          </p>
          <p className="body-text">
            Аларның исемнәре татар халкының мәңгелек горурлыгы булып тора.
            Совет Союзы Герое исеменә тоткыннар лагерьларында шундый батырлык күрсәтү — тарихта бик сирәк очрый.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px' }}>
          <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--line)', display: 'grid', gridTemplateColumns: '1fr 80px', gap: '24px' }}>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
              Исем
            </p>
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
              Еллар
            </p>
          </div>
          {heroes.map((hero, i) => (
            <div key={i} style={{ paddingTop: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--line)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px', gap: '24px', marginBottom: '8px' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--ink)' }}>
                  {hero.name}
                </p>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.75rem', color: 'var(--ink-muted)' }}>
                  {hero.years}
                </p>
              </div>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '6px' }}>
                {hero.role}
              </p>
              <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, fontSize: '0.88rem', lineHeight: '1.7', color: '#444', textAlign: 'justify' }}>
                {hero.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pull-quote" style={{ marginTop: '64px' }}>
          <p>Алар үлде, ләкин аларның исеме үлмәде.<br />Алар — татар халкының мәңгелек горурлыгы.</p>
          <cite>Хәтер сакла</cite>
        </div>
      </div>

      <Footer />
    </div>
  );
}
