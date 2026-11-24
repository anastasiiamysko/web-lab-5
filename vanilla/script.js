const VARIANT_NUMBER = 16; 

document.addEventListener('DOMContentLoaded', () => {
    
    const osInfo = navigator.platform;
    const browserInfo = navigator.userAgent;
    
    localStorage.setItem('os_info', osInfo);
    localStorage.setItem('browser_info', browserInfo);

    const footerInfo = document.getElementById('system-info');
    footerInfo.textContent = `ОС: ${localStorage.getItem('os_info')} | Браузер: ${localStorage.getItem('browser_info')}`;

   
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT_NUMBER}/comments`)
        .then(response => response.json())
        .then(comments => {
            const container = document.getElementById('reviews-container');
            container.innerHTML = '';
            comments.forEach(comment => {
                const card = document.createElement('div');
                card.className = 'review-card';
                card.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(err => console.error('Помилка завантаження коментарів:', err));

    
    const modal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    setTimeout(() => {
        modal.classList.remove('hidden');
    }, 60000);

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // 4. Перемикання теми (автоматичне за часом + кнопка)
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.add('dark-mode');
    }

    const themeToggleBtn = document.getElementById('themeToggle');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        document.body.classList.toggle('dark-mode');
    });
});