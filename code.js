const carouselContainer = document.querySelector('.carousel-container');

carouselContainer.addEventListener('wheel', (event) => {
  event.preventDefault();
  
  const delta = Math.sign(event.deltaY);
  const scrollAmount = carouselContainer.clientHeight;
  
  carouselContainer.scrollBy({
    top: delta * scrollAmount,
    behavior: 'smooth'
  });
});

function copyLink() {
  var shareLinkInput = document.getElementById('share-link');
  shareLinkInput.select();
  document.execCommand('copy');
  alert('Ссылка скопирована в буфер обмена.');
}

function goBack() {
  window.history.back();
}

// ------------------------------------img change


function changeImage1() {
  var image = document.getElementById('image1');
  
  if (image.src.endsWith('https://static.zara.net/photos///2023/V/0/2/p/1277/413/250/2/w/750/1277413250_1_1_1.jpg?ts=1682075035373')) {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/0962/450/800/2/w/750/0962450800_1_1_1.jpg?ts=1675857776948';
  } 


 {
  var image = document.getElementById('image2');
  
  {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/0962/450/800/2/w/750/0962450800_2_5_1.jpg?ts=1675857841491';
  } 
}
 {
  var image = document.getElementById('image3');
  
  {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/0962/450/800/2/w/750/0962450800_2_2_1.jpg?ts=1675857800453';
  } 
}
 {
  var image = document.getElementById('image4');
  
  {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/0962/450/800/2/w/750/0962450800_2_3_1.jpg?ts=1675857782620';
  } 
}
}


function changeImage() {
  var image = document.getElementById('image1');
  
  if (image.src.endsWith('https://static.zara.net/photos///2023/V/0/2/p/0962/450/800/2/w/750/0962450800_1_1_1.jpg?ts=1675857776948')) {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/1277/413/250/2/w/763/1277413250_1_1_1.jpg?ts=1682075035373';
  } 


 {
  var image = document.getElementById('image2');
  
  {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/1277/413/250/2/w/763/1277413250_2_1_1.jpg?ts=1682075037008';
  } 
}
 {
  var image = document.getElementById('image3');
  
   {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/1277/413/250/2/w/750/1277413250_2_2_1.jpg?ts=1682075036686';
  } 
}
 {
  var image = document.getElementById('image4');
  
   {
    image.src = 'https://static.zara.net/photos///2023/V/0/2/p/1277/413/250/2/w/750/1277413250_2_3_1.jpg?ts=1682075033872';
  } 
}
}

function toggleAccordion(event) {
  var header = event.currentTarget;
  var content = header.nextElementSibling;

  content.style.display = (content.style.display === 'none') ? 'block' : 'none';
}

const firstMenuItem = document.querySelector('.has-submenu');

firstMenuItem.addEventListener('mouseover', function () {
  const submenu2 = this.querySelector('.submenu-2');
  submenu2.style.display = 'block';
});

firstMenuItem.addEventListener('mouseout', function () {
  const submenu2 = this.querySelector('.submenu-2');
  submenu2.style.display = 'none';
});

const menuItems = document.querySelectorAll('.has-submenu');

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function () {
    const submenu = this.querySelector('.submenu');
    submenu.classList.toggle('active');
  });
});


