console.log("Website loaded. Ready to expand!");
const car = document.querySelector('.car');
const green = document.querySelector('.green-light');
const yellow = document.querySelector('.yellow-light');
const red = document.querySelector('.red-light');

document.querySelector('.traffic-light').addEventListener('click', (e) => {
  const lights = [green, yellow, red];

  lights.forEach(light => {
    light.style.backgroundColor = '#333';
    light.style.boxShadow = 'none';
    light.style.animation = 'none';
  });

  const clicked = e.target;

  car.style.animation = 'none';
  void car.offsetWidth; 

  if (clicked.classList.contains('green-light')) {
    green.style.backgroundColor = 'green';
    green.style.boxShadow = '0 0 8px 3px lime';
    car.style.animation = 'moveCar 4s linear infinite';
  }

  if (clicked.classList.contains('yellow-light')) {
    yellow.style.backgroundColor = 'yellow';
    yellow.style.boxShadow = '0 0 8px 3px yellow';
    yellow.style.animation = 'flash-up 1s infinite alternate';
    car.style.animation = 'slowThenFast 6s linear infinite';
  }

  if (clicked.classList.contains('red-light')) {
    red.style.backgroundColor = 'red';
    red.style.boxShadow = '0 0 8px 3px red';
    car.style.animation = 'stopAtLight 4s linear forwards'; 
  }
});

const toggleBtn = document.getElementById('toggleOrderBtn');
const projectsContainer = document.getElementById('projectsContainer');
let newestFirst = true;

toggleBtn.addEventListener('click', () => {
  const boxes = Array.from(projectsContainer.children);
  boxes.reverse();
  boxes.forEach(box => projectsContainer.appendChild(box));

  newestFirst = !newestFirst;
  toggleBtn.textContent = `Sort: ${newestFirst ? 'Newest to Oldest' : 'Oldest to Newest'}`;
});
