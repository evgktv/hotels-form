'use strict';

//MENU MOBILE
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
    }
    else    {
        navMain.classList.add('main-nav--closed');
    }
});

//ROUNDTRIP
var checkRoundtrip = document.querySelector('.content__form-roundtrip');
var labelRoundtrip = document.querySelector('.content__form-label-roundtrip');
var returnDate = document.querySelector('.content__form-box--date-return');
var calendar = document.querySelector('.content__form-calendar--return');

labelRoundtrip.addEventListener('click', function () {

    if (checkRoundtrip.checked == false) {
        returnDate.classList.add('content__form-box--disable');
        returnDate.disabled = 'disabled';
        calendar.classList.add('content__form-box--disable');
    } else {
        returnDate.classList.remove('content__form-box--disable');
        returnDate.disabled = '';
        calendar.classList.remove('content__form-box--disable');
    }
});

//CURRENCY
var currencyBut = document.querySelector('.content__form-currency-button');
var currencyBox = document.querySelector('.content__form-currency-box');
var currencyList = document.querySelector('.content__form-currency-list');

var currencyItem;

currencyBut.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (currencyBox.classList.contains('content__form-currency-box--active')) {
        currencyBox.classList.remove('content__form-currency-box--active');
        currencyList.style.display = 'none';
    } else {
        currencyBox.classList.add('content__form-currency-box--active');
        currencyList.style.display = 'block';

        currencyItem = [].slice.call(document.querySelectorAll('.content__form-currency-item'));

        currencyItem.forEach(function (currencyItem, i) {

            currencyItem.addEventListener('click', function (evt) {
                evt.preventDefault();

                changeCurrency (i);
            })
        });
    }
});

function changeCurrency(j) {

    var currencyNew = currencyItem[j].innerHTML;
    currencyBox.classList.remove('content__form-currency-box--active');
    currencyList.style.display = 'none';

    document.querySelector('.content__form-currency-checked').innerHTML = currencyNew;
};

//CITY-SWAP
var swap = document.querySelector('.content__icon-swap');

swap.addEventListener('click', function () {

    var cityDep = document.querySelector('.content__form-box--city-departure').value;
    var cityArrival = document.querySelector('.content__form-box--city-arrival').value;

    document.querySelector('.content__form-box--city-departure').value = cityArrival;
    document.querySelector('.content__form-box--city-arrival').value = cityDep;
});
