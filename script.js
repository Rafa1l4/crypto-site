// Счётчик скачиваний
let downloadCount = localStorage.getItem('downloadCount');
if (!downloadCount || downloadCount < 12847) {
    downloadCount = 12847;
    localStorage.setItem('downloadCount', downloadCount);
} else {
    downloadCount = parseInt(downloadCount);
}

// Обновляем отображение
const countSpan = document.getElementById('downloadCount');
if (countSpan) {
    countSpan.innerText = downloadCount.toLocaleString();
}

// При клике увеличиваем
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
        downloadCount++;
        localStorage.setItem('downloadCount', downloadCount);
        if (countSpan) {
            countSpan.innerText = downloadCount.toLocaleString();
            countSpan.style.animation = 'none';
            setTimeout(() => { countSpan.style.animation = 'counterPop 0.3s ease'; }, 10);
        }
        alert('Файл начал скачиваться.');
    });
}

// Плавное появление постов
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.post').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s';
    observer.observe(el);
});

// Подсветка активной страницы
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = '#F7B32B';
        link.style.fontWeight = 'bold';
    }
});