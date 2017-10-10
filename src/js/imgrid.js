import Turbo from '@baianat/turbo';
import { select, call } from './util';

class Imgrid {
  constructor(selector, {
    thumb = false
  } = {}) {
    this.el = select(selector);
    this.options = {
      thumb
    };
    this.init();
  }

  init() {
    this.initGalley();
    this.initItems();
    this.initCarousal();
  }

  initGalley() {
    this.gallery = document.createElement('div');
    this.close = document.createElement('a');

    this.gallery.classList.add('imgrid', 'is-hidden');
    this.close.classList.add('imgrid-close');
    this.close.insertAdjacentHTML('beforeend', `
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    `);

    this.close.addEventListener('click', this.hideGalley.bind(this));
    this.gallery.appendChild(this.close);
    document.body.appendChild(this.gallery);
  }

  initItems() {
    this.itmes = Array.from(this.el.querySelectorAll('a'));
    this.images = this.itmes.map((item) => item.href);
    this.itmes.forEach((item, index) => {
      item.addEventListener('click', (evnt) => {
        evnt.preventDefault();
        this.turbo.goTo(index);
        this.showGalley();
      })
    });
  }

  initCarousal() {
    this.carousel = document.createElement('div');
    this.carousel.classList.add('turbo');
    this.images.forEach((imageSrc) => {
      const image = document.createElement('img');
      image.classList.add('imgrid-image');
      image.src = imageSrc
      this.carousel.appendChild(image);
    });
    this.carousel.insertAdjacentHTML('beforeend', `
      <a class="turbo-next">
        <svg class="icon" id="icon-next" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </a>
      <a class="turbo-back">
        <svg class="icon" id="icon-back" viewBox="0 0 24 24">
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
        </svg>
      </a>
    `);
    this.gallery.appendChild(this.carousel);

    // create turbo object
    this.turbo = new Turbo(this.carousel, {
      itemsToShow: 1,
      infiniteScroll: true
    });
  }

  showGalley() {
    this.gallery.classList.add('is-visiable');
    this.gallery.classList.remove('is-hidden');
  }

  hideGalley() {
    this.gallery.classList.remove('is-visiable');
    this.gallery.classList.add('is-hidden');
  }

}

export default Imgrid;