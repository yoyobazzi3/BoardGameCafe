const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const daysContainer = document.getElementById('days');
const monthYearDisplay = document.getElementById('month-year');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function updateCalendar(month, year) {
    daysContainer.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    monthYearDisplay.innerHTML = `${months[month]}<br><span style="font-size:18px">${year}</span>`;

    for (let i = 1; i <= lastDate; i++) {
        const dayElement = document.createElement('li');
        dayElement.textContent = i;
        if (i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            dayElement.classList.add('active');
        }
        daysContainer.appendChild(dayElement);
    }
}

prevButton.addEventListener('click', () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    updateCalendar(currentMonth, currentYear);
});

nextButton.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    updateCalendar(currentMonth, currentYear);
});

document.addEventListener('DOMContentLoaded', () => {
    updateCalendar(currentMonth, currentYear);
});
