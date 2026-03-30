import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/d68d78be-770b-4649-a285-81de771fc333.jpg',
    caption: 'Муса Җəлил хатыны Əминə белəн',
    side: 'right',
    width: 220,
  },
  {
    src: 'https://cdn.poehali.dev/files/9b70f25f-8636-4b1e-b58a-236bd2fd14d8.jpg',
    caption: 'Муса Җəлил кызы Чулпан белəн',
    side: 'left',
    width: 200,
  },
  {
    src: 'https://cdn.poehali.dev/files/b343e84c-9b36-43b6-9334-3038b2b3791b.jpg',
    caption: 'Мари Жан, Əминə həм Чулпан Җəлиловалар, Андре Тиммерманс',
    side: 'right',
    width: 280,
  },
  {
    src: 'https://cdn.poehali.dev/files/da871140-68ad-46dc-a7a9-a276b45d9e7d.jpg',
    caption: 'Муса Җəлил кызы Чулпан белəн',
    side: 'left',
    width: 220,
  },
  {
    src: 'https://cdn.poehali.dev/files/d04c9221-3805-4170-8427-4bb947117749.jpg',
    caption: 'Муса Җəлил кызы Чулпан белəн',
    side: 'right',
    width: 200,
  },
];

export default function Shakhsi() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {lightbox && (
        <Lightbox src={lightbox.src} caption={lightbox.caption} onClose={() => setLightbox(null)} />
      )}

      <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 pt-28 pb-24">
        <span className="section-label">Икенче бүлек</span>
        <h1 className="section-title">Шəхси тормышы</h1>

        {/* Блок 1: с фото справа */}
        <div style={{ overflow: 'hidden', marginBottom: '48px' }}>
          <div
            onClick={() => setLightbox(photos[0])}
            style={{ float: 'right', marginLeft: '32px', marginBottom: '16px', width: `${photos[0].width}px`, cursor: 'zoom-in' }}
          >
            <img
              src={photos[0].src}
              alt={photos[0].caption}
              style={{ width: '100%', display: 'block', filter: 'grayscale(10%) contrast(1.05)' }}
            />
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--ink-muted)', marginTop: '6px', fontStyle: 'italic' }}>
              {photos[0].caption}
            </p>
          </div>

          <p className="body-text">
            1936 елның җəендə Муса икътисад техникумын тəмамлаган Əминə Сəйфуллинага өйлəнгəч, аның ике никахы həм ике баласы – Альберт белəн Люция була. 1937 елның апрелендə Муса Җəлилнең кече кызы Чулпан туа.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Шагыйрь хатыны үзенең истəлеклəрендə: «Сугыш алдындагы алты елны, Мусаның иң актив иҗат елларын, без бик тату яшəдек. Кызыбыз Чулпан бик куандыра иде. Безнең бəхетнең чиге юк кебек тоелды. Җəлил нечкə күңелле, сизгер иде. Ул шат күңелле, арымый-талмый көлəргə, шаяртырга, күңелле компаниялəр, озын кичке əңгəмəлəр сөйлəргə ярата иде. Назлы, йомшак, ачык күңелле булса да, тигез, тыныч, даими була белə иде», — дип яза.
          </p>
          <div style={{ clear: 'both' }} />
        </div>

        {/* Блок 2: с фото слева */}
        <div style={{ overflow: 'hidden', borderTop: '1px solid var(--line)', paddingTop: '48px', marginBottom: '48px' }}>
          <div
            onClick={() => setLightbox(photos[1])}
            style={{ float: 'left', marginRight: '32px', marginBottom: '16px', width: `${photos[1].width}px`, cursor: 'zoom-in' }}
          >
            <img
              src={photos[1].src}
              alt={photos[1].caption}
              style={{ width: '100%', display: 'block', filter: 'grayscale(10%) contrast(1.05)' }}
            />
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--ink-muted)', marginTop: '6px', fontStyle: 'italic' }}>
              {photos[1].caption}
            </p>
          </div>

          <div
            onClick={() => setLightbox(photos[3])}
            style={{ float: 'left', marginRight: '32px', marginBottom: '16px', width: `${photos[3].width}px`, cursor: 'zoom-in' }}
          >
            <img
              src={photos[3].src}
              alt={photos[3].caption}
              style={{ width: '100%', display: 'block', filter: 'grayscale(10%) contrast(1.05)' }}
            />
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--ink-muted)', marginTop: '6px', fontStyle: 'italic' }}>
              {photos[3].caption}
            </p>
          </div>

          <p className="body-text">
            Муса Чулпан кызын бик яраткан. Сугышта булган чакта да, Моабит тоткынлыгында да кызын уйлаган. Аны хыялланып сагынган. Шигырьлəрендə кызына мөнəсəбəт сизелə — ул аның өчен яшəүнең мəгънəсе.
          </p>
          <div style={{ clear: 'both' }} />
        </div>

        {/* Блок 3: фото справа + слева */}
        <div style={{ overflow: 'hidden', borderTop: '1px solid var(--line)', paddingTop: '48px', marginBottom: '48px' }}>
          <div
            onClick={() => setLightbox(photos[2])}
            style={{ float: 'right', marginLeft: '32px', marginBottom: '16px', width: `${photos[2].width}px`, cursor: 'zoom-in' }}
          >
            <img
              src={photos[2].src}
              alt={photos[2].caption}
              style={{ width: '100%', display: 'block', filter: 'grayscale(10%) contrast(1.05)' }}
            />
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--ink-muted)', marginTop: '6px', fontStyle: 'italic' }}>
              {photos[2].caption}
            </p>
          </div>

          <div
            onClick={() => setLightbox(photos[4])}
            style={{ float: 'right', marginLeft: '32px', marginBottom: '16px', width: `${photos[4].width}px`, cursor: 'zoom-in' }}
          >
            <img
              src={photos[4].src}
              alt={photos[4].caption}
              style={{ width: '100%', display: 'block', filter: 'grayscale(10%) contrast(1.05)' }}
            />
            <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500, fontSize: '0.68rem', letterSpacing: '0.06em', color: 'var(--ink-muted)', marginTop: '6px', fontStyle: 'italic' }}>
              {photos[4].caption}
            </p>
          </div>

          <p className="body-text">
            Муса Казанда яшəгəн чорда Əминə Сəйфуллина белəн таныша. Əминə аның тормыш иптəше, терəге, иң якын кешесе булып кала. Муса фронтка киткəч, ул хатыны белəн сагыну хатлары алышкан. Фронттагы хатлар — назлы сагыну тулы.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Аның иң якын кешесе апасы Мəрьям була. Аңа ул 1915 елда ук язучы булырга хыялланганы турында сөйли. Апасы аны аңлаган, хупланы. Гаилə аның иҗатының нигезе, рухи таянычы булды.
          </p>
          <div style={{ clear: 'both' }} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
