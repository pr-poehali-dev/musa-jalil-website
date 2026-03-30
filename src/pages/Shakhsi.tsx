import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Shakhsi() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-28 pb-24">
        <span className="section-label">Икенче бүлек</span>
        <h1 className="section-title">Шәхси тормышы</h1>

        <div className="space-y-5" style={{ marginBottom: '56px' }}>
          <p className="body-text">
            Гаилә, мәхәббәт, якын кешеләр — шагыйрьнең шәхси тормышы аның иҗатына тирән тәэсир иткән.
            Муса Казанда яшәгән чорда Рахиля Сайфуллина белән таныша. Рахиля аның тормыш иптәше,
            терәге, иң якын кешесе булып кала. Аларның кызы Чулпан туа.
          </p>
          <p className="body-text">
            Фронтка китеп, Муса хатынына сагыну тулы хатлар яза. Аның хатлары — мәхәббәт,
            ватан, яшәеш турында тирән уйлар. Моабит тоткынлыгыннан да
            ул хатлар язарга тырышкан — ниһаять аларны китерергә мөмкинлек тапканда.
          </p>
          <p className="body-text">
            Муса Чулпан кызын бик яраткан. Сугышта булган чакта да, Моабит тоткынлыгында да
            кызын уйлаган. Шигырьләрендә кызына мөнәсәбәт сизелә —
            ул аның өчен яшәүнең мәгънәсе.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '48px', marginBottom: '48px' }}>
          <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: '32px' }}>
            Гаилә
          </h2>
          <div className="space-y-8">
            {[
              { name: 'Мустафа Залилов — әтисе', text: 'Муса Мостафа авылында крестьян гаиләсендә туа. Әтисе Мустафа — гади кеше, гаиләсен тукландырыр өчен тырышып эшли. Ырынбурга күчкәч, ул кибет ача, ләкин табышсызлык аркасында гаилә кыенлыкларга дучар була.' },
              { name: 'Рахиля Сайфуллина — хатыны', text: 'Муса Казанда яшәгәндә таныша. Рахиля аның тормыш иптәше, терәге була. Муса фронтка киткәч, ул хатыны белән сагыну хатлары алышкан. Фронттагы хатлар — назлы сагыну тулы.' },
              { name: 'Чулпан — кызы', text: 'Муса Чулпан кызын бик яраткан. Сугышта булган чакта да, Моабит тоткынлыгында да кызын уйлаган. Аны хыялланып сагынган. Шигырьләрендә кызына мөнәсәбәт сизелә — ул аның өчен яшәүнең мәгънәсе.' },
              { name: 'Апасы Мәрьям', text: 'Мусаның иң якын кешесе — апасы Мәрьям. Аңа ул 1915 елда ук язучы булырга хыялланганы турында сөйли. Апасы аны аңлаган, хупланы.' },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--line)', paddingTop: i === 0 ? 0 : '32px' }}>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', color: 'var(--ink)', marginBottom: '8px' }}>
                  {item.name}
                </p>
                <p className="body-text" style={{ fontSize: '0.95rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pull-quote">
          <p>Сине, Чулпаным, сагынам,<br />Күзләреңне, хисләреңне...</p>
          <cite>Рахиля хатынына язылган хаттан</cite>
        </div>
      </div>

      <Footer />
    </div>
  );
}
