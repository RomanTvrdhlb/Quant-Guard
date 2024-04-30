import SimpleBar from 'simplebar';

const simpleBar = new SimpleBar(document.getElementById('data-simplebar'), { autoHide: false });
const container = simpleBar.getScrollElement();
const parent = document.getElementById('data-simplebar').parentNode;

// Создаем элемент span
const span = document.createElement('span');
span.classList.add('simplebar-line');
span.style.display = 'block';

// Получаем элемент .simplebar-track
const scrollTrack = document.querySelector('.simplebar-track');

// Добавляем span в scrollTrack
scrollTrack.appendChild(span);

// Получаем элемент .simplebar-scrollbar
const scrollbarVisible = document.querySelector('.simplebar-scrollbar');

function updateSpanWidth() {
    if (scrollbarVisible) {
        const styles = window.getComputedStyle(scrollbarVisible);
        const transformValue = styles.getPropertyValue('transform');
        let tx;

        const match = transformValue.match(/matrix\([^,]+,\s*[^,]+,\s*[^,]+,\s*[^,]+,\s*(-?\d+)(?:px)?,\s*[^,]+\)/);
        if (match) {
            tx = parseInt(match[1]);
        }
        let displayValue = parseInt(styles.getPropertyValue('width').replace('px', ''));
        let widthLine = displayValue + tx - 15;
   
        span.style.width = `${widthLine}px`;
    }
}

// Вызываем updateSpanWidth при загрузке страницы
window.addEventListener('load', updateSpanWidth);

// Вызываем updateSpanWidth при изменении размеров окна
window.addEventListener('resize', updateSpanWidth);

container.addEventListener('scroll', function() {
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;
  
    if (isAtEnd) {
        parent.classList.add('active');
    } else {
        parent.classList.remove('active');
    }

    updateSpanWidth();
});
