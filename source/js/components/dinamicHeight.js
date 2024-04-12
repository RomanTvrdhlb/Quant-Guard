import vars from '../_vars';
import {elementHeight, elementWidth} from '../functions/customFunctions';

const {header} = vars;

elementHeight(header, 'header-height');
// elementHeight(document.querySelector('.document-card'), 'document-card-height');
// elementWidth(document.querySelector('.step-list'), 'step-list-width');
// elementHeight(document.querySelector('.cart-info'), 'cart-info-height');


const slides = document.querySelectorAll('.about-slider__slide');

slides.forEach(function(slide){
    elementWidth(slide, 'card-width')
})