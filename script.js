const calendar = document.querySelector('.calendar');

// Conteúdo para cada dia do advento
const adventDays = [
    { title: "Dia 1 - Domingo de Ramos", content: "Leitura Bíblica: Mateus 21.1-11. Atividade: Faça os ramos e encene a entrada triunfal." },
    { title: "Dia 2 - Lava pés", content: "Leitura Bíblica: João 13.1-17. Atividade: Faça a atividade do lava pés com as crianças." },
    { title: "Dia 3 - A Última Ceia", content: "Leitura Bíblica: Mateus 26.14-30. Atividade: Pinte o desenho da Santa Ceia." },
    { title: "Dia 4 - Getsêmani", content: "Leitura Bíblica: Mateus 26.36-46. Atividade: Faça o teste do marshmallow." },
    { title: "Dia 5 - Prisão de Jesus", content: "Leitura Bíblica: Mateus 26.47-68. Atividade: Organize uma sequência dos eventos." },
    { title: "Dia 6 - Crucificação", content: "Leitura Bíblica: Mateus 27.11-44. Atividade: Faça biscoitos em formato de cruz." },
    { title: "Dia 7 - Sepultamento", content: "Leitura Bíblica: Lucas 23.50-56. Atividade: Decore a tumba de Jesus com criatividade." },
    { title: "Dia 8 - Ressurreição", content: "Leitura Bíblica: Lucas 24.1-12. Atividade: Investigadores da Ressurreição." },
];

// Gerar os dias do advento dinamicamente
adventDays.forEach((day, index) => {
    const dayElement = document.createElement('div');
    dayElement.className = 'day';
    dayElement.textContent = `Dia ${index + 1}`;
    dayElement.onclick = () => openModal(day.title, day.content);
    calendar.appendChild(dayElement);
});

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');

function openModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// Fechar modal clicando fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
