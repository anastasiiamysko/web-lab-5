import React, { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: '',
    platform: '',
  });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform || 'Невідома платформа',
    };

    localStorage.setItem('systemInfo', JSON.stringify(info));

    const savedInfo = localStorage.getItem('systemInfo');
    if (savedInfo) {
      setSystemInfo(JSON.parse(savedInfo));
    }
  }, []);

  return (
    <footer
      style={{
        marginTop: '1rem',
        padding: '1rem',
        borderRadius: '12px',
        border: '1px solid #cbd5e1',
        fontSize: '0.85rem',
      }}
    >
      <p style={{ marginBottom: '0.4rem' }}>
        <strong>Платформа (ОС):</strong> {systemInfo.platform}
      </p>
      <p style={{ wordBreak: 'break-word' }}>
        <strong>Браузер (User Agent):</strong> {systemInfo.userAgent}
      </p>
    </footer>
  );
}

export default Footer;