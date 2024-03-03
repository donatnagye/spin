const cells = 111

// From 0.001 to 100
const items = [
  {name: 'iPhone', img: 'IMG/case/iPhone.png', chance: 5},
  {name: 'tesla', img: 'IMG/case/tesla.png', chance: 6},
  {name: 'MAC', img: 'IMG/case/mac.jpg', chance: 8},
  {name: 'rolex', img: 'IMG/case/rolex.png', chance: 9},
  {name: 'lv', img: 'IMG/case/lv.png', chance: 10},
  {name: 'Headphones', img: 'IMG/case/happyday.jpeg', chance: 1},
  
]

function getItem(i) {
  console.log(i);
  let item;
  if (i === 56 - 1) {
    console.log('fuck');
    return { name: 'Headphones', img: 'IMG/case/happyday.jpeg', chance: 100 };
  }

  while (!item) {
    const chance = Math.floor(Math.random() * 100)
    
    items.forEach(elm => {
      if (chance < elm.chance && !item) item = elm
    })
  }

  return item
}

function generateItems() {
  document.querySelector('.list').remove()
  document.querySelector('.scope').innerHTML = `
    <ul class="list"></ul>
  `
  
  const list = document.querySelector('.list')

  for (let i = 0; i < cells; i++) {
    const item = getItem(i)

    
    const li = document.createElement('li')
    li.setAttribute('data-item', JSON.stringify(item))
    li.classList.add('list__item')
    li.innerHTML = `
      <img src="${item.img}" alt="" />
    `

    list.append(li)
  }
}

generateItems()

let isStarted = false
let isFirstStart = true

function start() {
    if (isStarted) return;
    else isStarted = true;

    if (!isFirstStart) generateItems();
    else isFirstStart = false;

    const list = document.querySelector('.list');

    setTimeout(() => {
      list.style.left = '50%';
      list.style.transform = 'translate3d(-50%, 0, 0)';
    }, 0);

    const item = list.querySelectorAll('li')[30];

    list.addEventListener('transitionend', () => {
      isStarted = false;
      item.classList.add('active');
      const data = JSON.parse(item.getAttribute('data-item'));
      const fullImage = document.getElementById('fullImage');
      fullImage.src = "IMG/case/happyday.jpeg";
      document.querySelector('.overlay').style.display = 'block';
    }, {once: true});
  }

  function closeOverlay() {
  window.location.href = 'https://www.google.com';
}


