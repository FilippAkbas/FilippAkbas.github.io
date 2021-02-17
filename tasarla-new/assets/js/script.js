let addTotalPrice = 0;
let skyTotal = 269;
let $filtreList  = $('.tasarla-option__tabs').find('li');
let kvkkCheckbox = $('#kvkk-checkbox');
let locationName = '';
let tabsBtn = document.querySelector('#tabs-btn');
let tabtsLink = document.querySelectorAll('.tasarla-option__link li a');
let sizeList = document.querySelectorAll('.size-list li label input');
let borderList = document.querySelectorAll('.border-list li label input');
let themaList = document.querySelectorAll('.thema-list li label input');
let colorList = document.querySelectorAll('.color-list li label input');
let iconList = document.querySelectorAll('.icon-list li label input');
let negativeCheck = false;
let uzayColorChecked = false;
let skyclock = new Date(21-02-1999);
let skyGrid = false;
let skyConstellations = true;
let skyMoon = false;
let SkyScalestars = 1.2;
let SkyConstellationwidth = 1.2;
let SkyNegative = false;

$('.tasarla-option__link li a').click(function (e) {
    e.preventDefault();
    $('.tasarla-option__link li a').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('href');
    $('.option-tabs').not(tab).css({
        'display': 'none'
    });
    $(tab).fadeIn(400);
});

$filtreList.click(function() {
    if($("#beyazBorder").prop("checked") && $("#15x21").prop("checked")) {
        skyTotal = $('#beyazBorder').attr('data-minismall-price');
        $('.totalPrice').text(skyTotal);
    }

    if($("#siyahBorder").prop("checked") && $("#15x21").prop("checked")) {
        skyTotal = $('#siyahBorder').attr('data-minismall-price');
        $('.totalPrice').text(skyTotal);
    }

    if($("#nonBorder").prop("checked") && $("#15x21").prop("checked")) {
        skyTotal = $('#nonBorder').attr('data-minismall-price');
        $('.totalPrice').text(skyTotal);
    }

    if($("#beyazBorder").prop("checked") && $("#30x40").prop("checked")) {
        skyTotal = $('#beyazBorder').attr('data-small-price');
        $('.totalPrice').text(skyTotal);
    }

    if($("#siyahBorder").prop("checked") && $("#30x40").prop("checked")) {
        skyTotal = $('#siyahBorder').attr('data-small-price');
        $('.totalPrice').text(skyTotal);
    }

    if($("#nonBorder").prop("checked") && $("#30x40").prop("checked")) {
        skyTotal = $('#nonBorder').attr('data-small-price');
        $('.totalPrice').text(skyTotal);
    }

    if($('#beyazBorder').prop("checked") && $('#40x50').prop("checked")) {
        skyTotal = $('#beyazBorder').attr('data-middle-price');
        $('.totalPrice').text(skyTotal);
    }

    if($('#siyahBorder').prop("checked") && $('#40x50').prop("checked")) {
        skyTotal = $('#siyahBorder').attr('data-middle-price');
        $('.totalPrice').text(skyTotal);
    }

    if($('#nonBorder').prop("checked") && $('#40x50').prop("checked")) {
        skyTotal = $('#nonBorder').attr('data-middle-price');
        $('.totalPrice').text(skyTotal);
    }

    if($('#beyazBorder').prop("checked") && $('#50x70').prop("checked")) {
        skyTotal = $('#beyazBorder').attr('data-big-price');
        $('.totalPrice').text(skyTotal);
    }

    if($('#siyahBorder').prop("checked") && $('#50x70').prop("checked")) {
        skyTotal = $('#siyahBorder').attr('data-big-price');
        $('.totalPrice').text(skyTotal);
    }

    if($('#nonBorder').prop("checked") && $('#50x70').prop("checked")) {
        skyTotal = $('#nonBorder').attr('data-big-price');
        $('.totalPrice').text(skyTotal);
    }
});

//DataPicker Air http://t1m0n.name/air-datepicker/docs/index.html
$.fn.datepicker.language['tr'] = {
    days: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    , daysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
    , daysMin: ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
    , months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
    , monthsShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
    , today: 'Bugün'
    , clear: 'Temizle'
    , dateFormat: 'yyyy-mm-dd'
    , timeFormat: 'hh:ii'
    , firstDay: 1
}

var prevDay;

$('.datepicker-here').datepicker({
    language: 'tr',
    todayButton: new Date(),
    autoClose: true,
    onHide: function(dp, animationCompleted){
        if (!animationCompleted) {
            var CalendarDate = $(".datepicker-here").val();
            var newFormat = new Date(CalendarDate).toLocaleDateString();

            console.log(CalendarDate);
            console.log(newFormat);

            $('.skymap__date').text(newFormat);
            skyclock = CalendarDate;
            PlanetMap();
        }
    },
});

$("#message").keyup(function () {
    $('.canvas-border__text').text($("#message").val());
});

$("#takimyildizlari").change(function () {
    var agreed = $(this).is(':checked');
    if (agreed == true) {
        skyConstellations = true;
        PlanetMap();
    }
    else {
        skyConstellations = false;
        PlanetMap();
    }
});
$("#koordinatlar").change(function () {
    var agreed = $(this).is(':checked');
    if (agreed === true) {
        $('.canvas-border__location').css('display','flex');
    }
    else {
        $('.canvas-border__location').css('display','none');
    }
});

//Mapbox maps search Area
let skylatitede = '';
let skylongitude = '';

mapboxgl.accessToken = 'sk.eyJ1IjoibWFwaW5za3kiLCJhIjoiY2tkZzN1M29sMDM1ZDJ3bXYybTczN2lueCJ9.O0WMamY1TbAkCc7TEzv0nw';

let geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    placeholder: 'Konum Giriniz',
});

geocoder.addTo('#searchTextField');

geocoder.on('result', (data,lat,lng) => {

    var latitudeText = document.querySelector('.latitudeText');
    var longitudeText = document.querySelector('.longitudeText');

    skylatitede = data.result.geometry.coordinates[1];
    skylongitude = data.result.geometry.coordinates[0];

    let skylatitedeString = String(skylatitede);
    let skylongitudeString = String(skylongitude);

    console.log(skylatitedeString.length)

    if(skylatitedeString.length < 7) {
        if(skylatitedeString.length == 6) {
            $('.latitudeText').val(skylatitede + '0 °N');
            $('.latitudePdf').val(skylatitede);
        } else {
            $('.latitudeText').val(skylatitede + '00 °N');
            $('.latitudePdf').val(skylatitede);
        }
    } else {
        let str = skylatitedeString.slice(0, 7) + ' °N';
        let strPdf = skylatitedeString.slice(0, 7);

        $('.latitudeText').val(str);
        $('.latitudePdf').val(strPdf);
    }

    if(skylongitudeString.length < 7) {
        if(skylongitudeString.length == 6) {
            $('.longitudeText').val(skylongitude + '0 °E');
            $('.longitudePdf').val(skylongitude);
        } else {
            $('.longitudeText').val(skylongitude + '00 °E');
            $('.longitudePdf').val(skylongitude);
        }
    } else {
        let str = skylongitudeString.slice(0, 7) + ' °E';
        let strPdf = skylongitudeString.slice(0, 7) + ' °E';

        $('.longitudeText').val(str);
        $('.longitudePdf').val(strPdf);
    }

    var placeText = data.result.text;
    locationName = placeText;
    $('.canvas-border__text').val(placeText);

    PlanetMap()
});

function thisTabs() {
    for(let i = 0;i < tabtsLink.length; i++) {
        if(tabtsLink[i].classList.contains('active')) {
            if(tabtsLink[i].id === 'tabsLink-1') {
                document.querySelector('#tabs-1').style.display = 'none';
                document.querySelector('#tabs-2').style.display = 'block';
                document.querySelector('#tabsLink-1').classList.remove('active');
                document.querySelector('#tabsLink-2').classList.add('active');
                tabsBtn.textContent = 'Gorunum Ayarlari';
                return false;
            } else if(tabtsLink[i].id === 'tabsLink-2') {
                document.querySelector('#tabs-2').style.display = 'none';
                document.querySelector('#tabs-3').style.display = 'block';
                document.querySelector('#tabsLink-2').classList.remove('active');
                document.querySelector('#tabsLink-3').classList.add('active');
                document.querySelector('#tabs-btn').style.display = 'none';
                document.querySelector('#next-btn').style.display = 'block';
                return false;
            } else if(tabtsLink[i].id === 'tabsLink-3') {
                return false;
            }
        } else {}
    }
}

tabsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    thisTabs()
});

for(let i = 0;i < tabtsLink.length; i++) {
    let activeTabs = tabtsLink[i];
    activeTabs.addEventListener('click', ()=> {
        if(tabtsLink[i].id === 'tabsLink-1') {
            document.querySelector('#tabs-btn').style.display = 'block';
            document.querySelector('#next-btn').style.display = 'none';
            tabsBtn.textContent = 'Boyut ve Cerceve Secenekleri';
        }else if(tabtsLink[i].id === 'tabsLink-2') {
            document.querySelector('#tabs-btn').style.display = 'block';
            document.querySelector('#next-btn').style.display = 'none';
            tabsBtn.textContent = 'Gorunum Ayarlari';
        } else if (tabtsLink[i].id === 'tabsLink-3') {
            document.querySelector('#tabs-btn').style.display = 'none';
            document.querySelector('#next-btn').style.display = 'block';
        }
    });
}

// Thema List Change
for(let i = 0; i < themaList.length; i++) {
    themaList[i].addEventListener('click', ()=> {
        if(themaList[i].id === 'klasiktema') {
            negativeCheck = false;
            PlanetMap()
        }else if (themaList[i].id === 'moderntema') {
            negativeCheck = true;
            PlanetMap()
        }
    })
}

// Color List Change
for(let i = 0; i < colorList.length; i++) {
    colorList[i].addEventListener('click', ()=> {
        if(colorList[i].id === 'beyazcolor') {
            document.querySelector('.canvas-area__border').style.backgroundColor = '#fff';
            document.querySelector('.canvas-area__content').style.borderColor = '#000';
            document.querySelector('.canvas-border__title').style.color = '#000';
            document.querySelector('.canvas-border__icon').style.color = '#000';
            document.querySelector('.canvas-border__date').style.color = '#000';
            document.querySelector('.canvas-border__text').style.color = '#000';
            document.querySelector('.canvas-border__location input.latitudeText').style.color = '#000';
            document.querySelector('.canvas-border__location input.longitudeText').style.color = '#000';
            document.querySelector('.canvas-border__size').style.color = '#000';
            document.querySelector('.canvas-border__logo svg').style.fill = '#000';
        }else if (colorList[i].id === 'uzaycolor') {
            uzayColorChecked = true;
            document.querySelector('.canvas-area__border').style.backgroundColor = '#000';
            document.querySelector('.canvas-area__content').style.borderColor = '#fff';
            document.querySelector('.canvas-border__title').style.color = '#fff';
            document.querySelector('.canvas-border__icon').style.color = '#fff';
            document.querySelector('.canvas-border__date').style.color = '#fff';
            document.querySelector('.canvas-border__text').style.color = '#fff';
            document.querySelector('.canvas-border__location input.latitudeText').style.color = '#fff';
            document.querySelector('.canvas-border__location input.longitudeText').style.color = '#fff';
            document.querySelector('.canvas-border__size').style.color = '#fff';
            document.querySelector('.canvas-border__logo svg').style.fill = '#fff';
        }else if (colorList[i].id === 'yildiztozucolor') {
            document.querySelector('.canvas-area__border').style.backgroundColor = '#cfd2d3';
            document.querySelector('.canvas-area__content').style.borderColor = '#000';
            document.querySelector('.canvas-border__title').style.color = '#000';
            document.querySelector('.canvas-border__icon').style.color = '#000';
            document.querySelector('.canvas-border__date').style.color = '#000';
            document.querySelector('.canvas-border__text').style.color = '#000';
            document.querySelector('.canvas-border__location input.latitudeText').style.color = '#000';
            document.querySelector('.canvas-border__location input.longitudeText').style.color = '#000';
            document.querySelector('.canvas-border__size').style.color = '#000';
            document.querySelector('.canvas-border__logo svg').style.fill = '#000';
        }else if (colorList[i].id === 'lolipopcolor') {
            document.querySelector('.canvas-area__border').style.backgroundColor = '#fac8c9';
            document.querySelector('.canvas-area__content').style.borderColor = '#000';
            document.querySelector('.canvas-border__title').style.color = '#000';
            document.querySelector('.canvas-border__icon').style.color = '#000';
            document.querySelector('.canvas-border__date').style.color = '#000';
            document.querySelector('.canvas-border__text').style.color = '#000';
            document.querySelector('.canvas-border__location input.latitudeText').style.color = '#000';
            document.querySelector('.canvas-border__location input.longitudeText').style.color = '#000';
            document.querySelector('.canvas-border__size').style.color = '#000';
            document.querySelector('.canvas-border__logo svg').style.fill = '#000';
        }
    })
}

// Icon List Change
for(let i = 0; i < iconList.length; i++) {
    iconList[i].addEventListener('click', ()=> {
        if(iconList[i].id === 'null') {
            document.querySelector('.canvas-border__icon img').style.opacity = '0';
        }else if (iconList[i].id === 'babyFootprintInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
            // if(uzayColorChecked === true) {
            //     document.querySelector('.canvas-border__icon img').src = 'http://127.0.0.1:5500/assets/img/svg-icon/baby-footprint-white.svg';
            // }
        }else if (iconList[i].id === 'favoriteInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
            // if(uzayColorChecked === true) {
            //     document.querySelector('.canvas-border__icon img').src = 'http://127.0.0.1:5500/assets/img/svg-icon/favorite-white.svg';
            // }
        }else if (iconList[i].id === 'giftboxInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'ringInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'bouquetInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'cakeInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'emzikInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'highHeelsInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'kepInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'placeholderInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }else if (iconList[i].id === 'unicornInput') {
            let url = iconList[i].parentNode.childNodes[3].childNodes[0].currentSrc;
            document.querySelector('.canvas-border__icon img').style.opacity = '1';
            document.querySelector('.canvas-border__icon img').src = url;
        }
    })
}

// Size List Change
for(let i = 0; i < sizeList.length; i++) {
    sizeList[i].addEventListener('click', ()=> {
        if(sizeList[i].id === '15x21') {
            document.querySelector('.canvas-border__size').textContent = '15cm x 21cm';
        }else if (sizeList[i].id === '30x40') {
            document.querySelector('.canvas-border__size').textContent = '30cm x 40cm';
        }else if (sizeList[i].id === '40x50') {
            document.querySelector('.canvas-border__size').textContent = '40cm x 50cm';
        }else if (sizeList[i].id === '50x70') {
            document.querySelector('.canvas-border__size').textContent = '50cm x 70cm';
        }
    })
}

// Border List change
for(let i = 0; i < borderList.length; i++) {
    borderList[i].addEventListener('click', ()=> {
        if(borderList[i].id === 'beyazBorder') {
            document.querySelector('.canvas-area').style.backgroundColor = '#fff';
        }else if (borderList[i].id === 'siyahBorder') {
            document.querySelector('.canvas-area').style.backgroundColor = '#000';
        }else if (borderList[i].id === 'nonBorder') {
            document.querySelector('.canvas-area').style.backgroundColor = '#f0f4fb';
        }
    })
}


// Valide Mail
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function emailValidate() {
    var email = $("#emailInput").val();

    if (validateEmail(email)) {
        Swal.fire({
            type: 'success',
            title: 'Sepete Gidiyoruz!',
            text: 'E-Posta Adresin Doğru!',
            showConfirmButton: false,
        });
        AjaxReturn = true;
    } else {
        Swal.fire({
            type: 'error',
            text: 'E-Posta Adresin Hatalı!',
        });
    }
}

function PlanetMap() {
    planetarium = S.virtualsky({
        id: 'starmap1',
        projection: 'polar',
        constellations: skyConstellations,
        constellationboundaries: true,
        latitude: skylatitede,
        longitude: skylongitude,
        clock: skyclock,
        gridlines_gal: skyGrid,
        lang: 'en',
        mouse: false,
        cardinalpoints: false,
        showplanets: skyMoon,
        showplanetlabels: false,
        keyboard: false,
        scalestars: SkyScalestars,
        gridstep: 15,
        az: 215,
        gradient: false,
        gridlineswidth: 0.75,
        constellationwidth: SkyConstellationwidth,
        ra: 350,
        dec: 300,
        showorbits: true,
        showdate: false,
        showposition: false,
        constellationboundaries: false,
        magnitude: 6,
        ecliptic: false,
        meridian: false,
        showorbits: false,
        negative: negativeCheck,
    });
}
PlanetMap();