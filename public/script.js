const socket = io();

const cells = document.querySelectorAll('.cell');
let turn = 'X';

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '') {
      cell.textContent = turn;
      socket.emit('move', { id: cell.id, player: turn });
      turn = turn === 'X' ? 'O' : 'X';
    }
  });
});

socket.on('move', (data) => {
  const cell = document.getElementById(data.id);
  cell.textContent = data.player;
});
