import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // 1 хвилина = 60000 мс

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          color: '#1e293b',
          padding: '1.5rem',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: '700' }}>
            Форма зворотного зв'язку
          </h3>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            style={{
              backgroundColor: '#64748b',
              color: '#ffffff',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Закрити
          </button>
        </div>

        <form
          action="https://formspree.io/f/xgakplge"
          method="POST"
          style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
        >
          <input
            type="text"
            name="name"
            placeholder="Ім’я"
            required
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            required
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <textarea
            name="message"
            placeholder="Повідомлення"
            rows="4"
            required
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              border: 'none',
              padding: '10px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;