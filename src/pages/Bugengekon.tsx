import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Bugengekon() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 pt-28 pb-24">
        <span className="section-label">Алтынчы бүлек</span>
        <h1 className="section-title">Бүгенге көн</h1>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '2.2rem',
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '8px',
          }}>Хəтер</div>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--ink-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>Исем мəңгелеккə</div>

          <p className="body-text">
            Муса Җəлил исеме бүгенге көндə дə татар халкының күңелендə яши. Аның шигырьлəре мəктəплəрдə өйрəнелə, музейларда саклана, театрларда куела. Шагыйрьнең тормышы həм батырлыгы турында китаплар, документаль фильмнар иҗат ителə.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Казанда Муса Җəлилгə багышланган мемориаль музей эшли. Шагыйрьнең исемен йөртүче урамнар, мəктəплəр, мəдəни учреждениелəр Татарстанда гына түгел, Россиянең башка төбəклəрендə həм чит иллəрдə дə бар.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Казан Кремлендə Муса Җəлилгə гранит һəйкəл куелган. Ул 1966 елда ачылган. Берлинда, Плетцензее мемориалында да аның исеме мəңгелəштерелгəн.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px', marginTop: '0', overflow: 'hidden' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '2.2rem',
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '8px',
          }}>Əдəби мирас</div>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--ink-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>Моабит дəфтəрлəре дөньяда</div>

          <p className="body-text">
            «Моабит дəфтəрлəре» бүгенге көндə дə укучыларны тетрəтə. 1957 елда Ленин премиясенə лаек булган бу əсəр рус, инглиз, немец, француз, гарəп həм башка күп теллəргə тəрҗемə ителгəн. Алар дөньяның иң зур китапханəлəрендə саклана.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Татарстан Республикасы Муса Җəлил исемендəге Дəүлəт опера həм балет театры — бүгенге Казанның бизəге. Театр шагыйрьнең исемен 1956 елда алган.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Ел саен Татарстанда «Муса Джалил» исемендəге халыкара опера фестивале үткəрелə. Ул дөньяның иң зур опера yлларының берсенə əверелгəн həм Казанның мəдəни тормышының мөһим өлешенə кергəн.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px', marginTop: '0' }}>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 800,
            fontSize: '2.2rem',
            color: 'var(--ink)',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '8px',
          }}>Яшь буын</div>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--ink-muted)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>Рухи мирас</div>

          <p className="body-text">
            Муса Җəлилнең батырлыгы — киləчəк буыннар өчен рухи мирас. Аның шигырьлəре бүгенге татар яшьлəренə туган телне, туган халыкны ярату нəрсə икəнен өйрəтə.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Татарстан мəктəплəрендə ел саен «Муса Джалил укулары» үткəрелə. Балалар аның шигырьлəрен ятлый, тормышы турында рефератлар яза, рəсем бəйгелəрендə катнаша.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Аның исеме — батырлыкның, шигырьнең, туган иленə мəхəббəтнең символы. Муса Җəлил яшəде, яза торды — həм мəңгегə калды.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
