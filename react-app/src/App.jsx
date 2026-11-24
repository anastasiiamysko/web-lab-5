import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  // Автоматичне визначення теми за часом доби (07:00 - 21:00)
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  // Застосування класу теми до <body>
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode', 'dark');
    } else {
      document.body.classList.remove('dark-mode', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        backgroundColor: isDark ? '#0f172a' : '#f8fafc',
        color: isDark ? '#f1f5f9' : '#1e293b',
        minHeight: '100vh',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={toggleTheme}
            style={{
              padding: '8px 16px',
              cursor: 'pointer',
              borderRadius: '8px',
              border: '1px solid #6366f1',
              backgroundColor: isDark ? '#1e293b' : '#ffffff',
              color: isDark ? '#f8fafc' : '#1e293b',
              fontWeight: '600',
            }}
          >
            {isDark ? '☀️ Денна тема' : '🌙 Нічна тема'}
          </button>
        </div>

        <Header />

        <main style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <About />
          <Experience />
          <Skills />
          <Reviews />
        </main>

        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;