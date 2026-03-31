import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';

const photos = [
  {
    src: 'https://cdn.poehali.dev/files/4cef3a33-fd57-4fb2-92c5-7ccc9bf04b2c.jpg',
    caption: 'Муса Җәлил хатыны Әминә белән',
    side: 'right',
    width: 200,
  },
  {
    src: 'https://cdn.poehali.dev/files/cffee8fb-ea33-4b75-98b4-9a67f2907871.jpg',
    caption: 'Муса Җәлил кызы Чулпан белән',
    side: 'left',
    width: 180,
  },
  {
    src: 'https://cdn.poehali.dev/files/39258f0d-73b7-41b2-aea3-df01207570d5.jpg',
    caption: 'Мари Жан, Әминә һәм Чулпан Җәлиловалар, Андре Тиммерманс',
    side: 'right',
    width: 260,
  },
  {
    src: 'https://cdn.poehali.dev/files/3532b586-ff70-4a2e-b137-cd023075d905.jpg',
    caption: 'Муса Җәлил кызы Чулпан белән',
    side: 'left',
    width: 190,
  },
  {
    src: 'https://cdn.poehali.dev/files/3d029047-d7c0-42e2-96d2-c7678a9d204a.jpg',
    caption: 'Муса Җәлил кызы Чулпан белән',
    side: 'right',
    width: 210,
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
        <h1 className="section-title">Шәхси тормышы</h1>

        {/* Блок 1: фото 1 справа — текст */}
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
            1936 елның җәендә Муса икътисад техникумын тәмамлаган Әминә Сәйфуллинага өйләнгәч, аның ике никахы һәм ике баласы – Альберт белән Люция була. 1937 елның апрелендә Муса Җәлилнең кече кызы Чулпан туа.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Шагыйрь хатыны үзенең истәлекләрендә: «Сугыш алдындагы алты елны, Мусаның иң актив иҗат елларын, без бик тату яшәдек. Кызыбыз Чулпан бик куандыра иде. Безнең бәхетнең чиге юк кебек тоелды. Җәлил нечкә күңелле, сизгер иде. Ул шат күңелле, арымый-талмый көләргә, шаяртырга, күңелле компанияләр, озын кичке әңгәмәләр сөйләргә ярата иде. Назлы, йомшак, ачык күңелле булса да, тигез, тыныч, даими була белә иде», — дип яза.
          </p>
          <div style={{ clear: 'both' }} />
        </div>

        {/* Блок 2: фото 2 слева + фото 4 слева */}
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
            Муса Чулпан кызын бик яраткан. Сугышта булган чакта да, Моабит тоткынлыгында да кызын уйлаган. Аны хыялланып сагынган. Шигырьләрендә кызына мөнәсәбәт сизелә — ул аның өчен яшәүнең мәгънәсе.
          </p>
          <div style={{ clear: 'both' }} />
        </div>

        {/* Блок 3: фото 3 справа + фото 5 справа */}
        <div style={{ overflow: 'hidden', borderTop: '1px solid var(--line)', paddingTop: '48px', marginBottom: '48px' }}>
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

          <p className="body-text">
            Муса Казанда яшәгән чорда Әминә Сәйфуллина белән таныша. Әминә аның тормыш иптәше, терәге, иң якын кешесе булып кала. Муса фронтка киткәч, ул хатыны белән сагыну хатлары алышкан. Фронттагы хатлар — назлы сагыну тулы.
          </p>
          <p className="body-text" style={{ marginTop: '1.2em' }}>
            Аның иң якын кешесе апасы Мәрьям була. Аңа ул 1915 елда ук язучы булырга хыялланганы турында сөйли. Апасы аны аңлаган, хупланы. Гаилә аның иҗатының нигезе, рухи таянычы булды.
          </p>
          <div style={{ clear: 'both' }} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
