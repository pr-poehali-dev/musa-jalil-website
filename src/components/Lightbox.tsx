import { useEffect } from 'react';

interface LightboxProps {
  src: string;
  caption?: string;
  onClose: () => void;
}

export default function Lightbox({ src, caption, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.88)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        cursor: 'zoom-out',
      }}
    >
      <img
        src={src}
        alt={caption || ''}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: '85vh', maxWidth: '90vw',
          objectFit: 'contain',
          cursor: 'default',
          boxShadow: '0 8px 48px rgba(0,0,0,0.6)',
        }}
      />
      {caption && (
        <p style={{
          marginTop: '16px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.7)',
          fontStyle: 'italic',
          textAlign: 'center',
          maxWidth: '600px',
        }}>{caption}</p>
      )}
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '20px', right: '24px',
          background: 'none', border: 'none',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '2rem', cursor: 'pointer',
          lineHeight: 1, padding: '4px 8px',
        }}
      >×</button>
    </div>
  );
}
