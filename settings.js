const form = document.getElementById('settings');
const speed = form.querySelector('#speed');
const growth = form.querySelector('#growth');
speed.value = localStorage.getItem('speed') || 5;
growth.value = localStorage.getItem('growth') || 4;



form.addEventListener('submit', (e) => {
  e.preventDefault();
  const speed = form.querySelector('#speed').value;
  const growth = form.querySelector('#growth').value;
  localStorage.setItem('speed', speed);
  localStorage.setItem('growth', growth);

  window.location.reload();
})