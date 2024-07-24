import Swiper, { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';


export default class Slider {
    swiper;
    window;
    document;
    section;
    options;
    init = false;

    constructor({ section, window, options }) {
        this.section = section;
        this.window = window;
        this.options = options;
        this.document = window.document;
        this.run();
    }

    run() {
        this.readMoreInit();
        this.swiperCard();
        this.buttonExposeAvailable();
        this.window.addEventListener("resize", () => this.swiperCard());
        this.window.addEventListener("resize", () => this.buttonExposeAvailable());
    }

    readMoreInit() {
        const readMore = this.section.querySelector('.button-read-more');
        if (readMore) {
            const bar = this.section.querySelector('.swiper');
            readMore.addEventListener('click', () => {
                bar.classList.toggle('swiper--exposed');
            });
        }
    }

    swiperCard() {
        const element = this.section.querySelector('.swiper');
        const pagination = this.section.querySelector(".swiper-pagination");
        const changedSize = this.options.changeSize || 1;
        if (this.window.innerWidth < 500) {
            if (!this.init) {
                this.init = true;
                this.swiper = new Swiper(element, {
                    modules: [Pagination],
                    spaceBetween: 16,
                    slidesPerView: 1.18 * changedSize,
                    allowTouchMove: true,
                    speed: 400,
                    autoHeight: true,
                    pagination: {
                        el: pagination,
                        clickable: true,
                    },
                    breakpoints: {
                        350: {
                            slidesPerView: 1.38 * changedSize,
                        },
                        400: {
                            slidesPerView: 1.59 * changedSize,
                        },
                        450: {
                            slidesPerView: 1.79 * changedSize,
                        },
                    },
                });
            }
        } else {
            this.swiper && this.swiper.destroy();
            this.init = false;
        }
    }
    checkExposeButton = (max) => {
        const wrapper = this.section.querySelector('.swiper-wrapper');
        const readMore = this.section.querySelector('.button-read-more');
        if (readMore) {
            const length = wrapper.children.length;
            if (length <= max || max === 0 || this.options.buttonUnavailable) {
                readMore.style.display = "none";
            } else {
                readMore.style.display = "flex";
            }
        }
    }

    buttonExposeAvailable = () => {
        const width = this.window.innerWidth;
        if (width < 500) return this.checkExposeButton(0);
        let max = 4;
        if (width >= 700) max = 6;
        if (width >= 1000) max = 8;
        this.checkExposeButton(max);
    }
}