const dates = [
    // Adicione as datas aqui
    { date: '05/10/2024', day: 'Sábado' },
    { date: '06/10/2024', day: 'Domingo' },
    { date: '12/10/2024', day: 'Sábado' },
    { date: '13/10/2024', day: 'Domingo' },
    { date: '19/10/2024', day: 'Sábado' },
    { date: '20/10/2024', day: 'Domingo' },
    { date: '26/10/2024', day: 'Sábado' },
    { date: '27/10/2024', day: 'Domingo' },
    { date: '02/11/2024', day: 'Sábado' },
    { date: '03/11/2024', day: 'Domingo' },
    { date: '09/11/2024', day: 'Sábado' },
    { date: '10/11/2024', day: 'Domingo' },
    { date: '16/11/2024', day: 'Sábado' },
    { date: '17/11/2024', day: 'Domingo' },
    { date: '23/11/2024', day: 'Sábado' },
    { date: '24/11/2024', day: 'Domingo' },
    { date: '30/11/2024', day: 'Sábado' },
    { date: '01/12/2024', day: 'Domingo' },
    { date: '07/12/2024', day: 'Sábado' },
    { date: '08/12/2024', day: 'Domingo' },
    { date: '14/12/2024', day: 'Sábado' },
    { date: '15/12/2024', day: 'Domingo' },
    { date: '21/12/2024', day: 'Sábado' },
    { date: '22/12/2024', day: 'Domingo' },
    { date: '28/12/2024', day: 'Sábado' },
    { date: '29/12/2024', day: 'Domingo' }
];

const tableBody = document.querySelector('#calendar tbody');

dates.forEach(dateObj => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${dateObj.date}</td>
        <td>${dateObj.day}</td>
        <td class="status" data-recreadora="Pati"></td>
        <td class="status" data-recreadora="Jess"></td>
        <td class="status" data-recreadora="Rafa"></td>
        <td class="status" data-recreadora="Tatá"></td>
        <td class="status" data-recreadora="Lara"></td>
        <td class="status" data-recreadora="Isa"></td>
        <td class="status" data-recreadora="Nati"></td>
        <td class="counts">0</td>
        <td class="counts">0</td>
    `;
    tableBody.appendChild(row);
});

document.querySelectorAll('.status').forEach(cell => {
    cell.addEventListener('click', () => {
        if (cell.classList.contains('available')) {
            cell.classList.remove('available');
            cell.classList.add('unavailable');
        } else if (cell.classList.contains('unavailable')) {
            cell.classList.remove('unavailable');
            cell.classList.add('available');
        } else {
            cell.classList.add('available');
        }
        updateCounts();
    });
});

function updateCounts() {
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const availableCount = row.querySelectorAll('.available').length;
        const unavailableCount = row.querySelectorAll('.unavailable').length;
        row.cells[9].innerText = availableCount; // Disponíveis
        row.cells[10].innerText = unavailableCount; // Indisponíveis
    });
}
