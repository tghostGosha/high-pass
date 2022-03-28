/*========================burger========================*/

$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__nav').toggleClass('active');
  });
});

// =====================swiper============================

const sliders = document.querySelector('.swiper');
let swiper = new Swiper(sliders, {

  pagination: {
    slidesPerView: 1,
    slidesPerColumn: 1,

    spaceBetween: 50,
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    loop: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// ===========================Яндекс карта===========================
let center = [55.770208, 37.636814];

function init() {
	let map = new ymaps.Map('map', {
		center: [55.760207, 37.606813],
		zoom: 13
	});



	let placemark1 = new ymaps.Placemark(center, {
		// balloonContent: `
		// 	<div class="balloon">
    //     <h3 class="balloon__title">Студия “High pass”</h3>
		// 		<p class="balloon__address">107045, Москва, Даев переулок, дом 41, бизнес-центр «Даев Плаза», этаж 8, офис № 82  </p>
		// 		<div class="balloon__contacts-block>
    //       <a href="#" class="balloon__contacts link-320px">
    //         <svg width="16.5" height="16.5" class="phone-svg">
    //           <use xlink:href="#phone"></use>
    //         </svg>
    //         <span class="submenu__link-number">+7 (495) 42-423-532</span>
    //       </a>
    //     </div>
		// 	</div>
		// `
	}, {
		iconLayout: 'default#image',
		iconImageHref: '/img/Ellipse.png',
		iconImageSize: [12, 12],
    iconImageOffset: [-3, -42]
	});

	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

	map.geoObjects.add(placemark1);

	// placemark1.balloon.open();

  
}

ymaps.ready(init);

// =====================Валидация=======================
new JustValidate('.js-form', {
  colorWrong : '#FF3030',
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15
    },
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    name: 'Недопустимый формат',
    email: 'Недопустимый формат',
  },
});

// ==============кнопка закрытия======================


$(document).ready(function () {
  $('.close-btn').click(function (event) {
    $('.balloon').toggleClass('disactive');
  });
});


