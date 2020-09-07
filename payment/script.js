// $('.payment-tabs_title li a').click(function (e) {
//     e.preventDefault();
//     $('.payment-tabs_title li .active').removeClass('active');
//     $(this).addClass('active');
//     var tab = $(this).attr('href');
//     $('.box-content').not(tab).css({
//         'display': 'none'
//     });
//     $(tab).fadeIn(400);
// });

let faturaAd = document.querySelector('#username');
let faturaSoyad = document.querySelector('#usersurname');
let faturaFirma = document.querySelector('#firmaname');
let faturaTc = document.querySelector('#usertc');
let faturaUlke = document.querySelector('#country');
let faturaSehir = document.querySelector('#usercity');
let faturaIlce = document.querySelector('#userpart');
let faturaAdres = document.querySelector('#userstreet');
let faturaPosta = document.querySelector('#userzip');
let faturaTelefon = document.querySelector('#userphone');
let faturaEmail = document.querySelector('#useremail');

let faturaDivAd = document.querySelector('.username div');
let faturaDivSoyad = document.querySelector('.usersurname div');
let faturaDivFirma = document.querySelector('.firmaname div');
let faturaDivTc = document.querySelector('.usertc div');
let faturaDivUlke = document.querySelector('.country div');
let faturaDivSehir = document.querySelector('.usercity div');
let faturaDivIlce = document.querySelector('.userpart div');
let faturaDivAdres = document.querySelector('.userstreet div');
let faturaDivPosta = document.querySelector('.userzip div');
let faturaDivTelefon = document.querySelector('.userphone div');
let faturaDivEmail = document.querySelector('.useremail div');

let kargoAd = document.querySelector('#anyname');
let kargoSoyad = document.querySelector('#anysurname');
let kargoUlke = document.querySelector('#anycountry');
let kargoSehir = document.querySelector('#anycity');
let kargoIlce = document.querySelector('#anypart');
let kargoAdres = document.querySelector('#anystreet');
let kargoPosta = document.querySelector('#anyzip');
let kargoTelefon = document.querySelector('#anyphone');
let kargoBtn = document.querySelector('#kargo-btn');

let kargoDivAd = document.querySelector('.anyname div');
let kargoDivSoyad = document.querySelector('.anysurname div');
let kargoDivUlke = document.querySelector('.anycountry div');
let kargoDivSehir = document.querySelector('.anycity div');
let kargoDivIlce = document.querySelector('.anypart div');
let kargoDivAdres = document.querySelector('.anystreet div');
let kargoDivPosta = document.querySelector('.anyzip div');
let kargoDivTelefon = document.querySelector('.anyphone div');

var selectedSemtOption = '';

var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
var targetUrl = 'https://il-ilce-rest-api.herokuapp.com/v1/cities';

var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/html; charset=utf-8");
    myHeaders.set('Access-Control-Allow-Origin', '*');

function getSehir() {
    fetch(proxyUrl + targetUrl, {
        method: 'GET',
        mode: 'cors',
        headers: myHeaders,
        body: null,
        cache: 'default'
    }).then(res => res.json())
    .then(data => {
        let allData = data.data;
        let listTxt = '';
    
        console.log(allData);
    
        allData.forEach((element) => {
            listTxt = listTxt = listTxt + '<option value="' + element._id + '">' + element.name + '</option>';
        });
    
        $('#usercity').html(listTxt);
    }).catch(error => {
        console.log('Request failed', error);
    });
}

function getIlce(id) {
    var ilceUrl = targetUrl + "/" + id + '/towns';
    fetch(proxyUrl + ilceUrl, {
        method: 'GET',
        mode: 'cors',
        headers: myHeaders,
        body: null,
        cache: 'default'
    }).then(res => res.json())
    .then(data => {
        let allData = data.data;
        let listTxt = '';
    
        console.log(allData);
    
        allData.forEach((element) => {
            listTxt = listTxt = listTxt + '<option value="' + element._id + '">' + element.name + '</option>';
        });
    
        $('#userpart').html(listTxt);
    }).catch(error => {
        console.log('Request failed', error);
    });
}

$('#country').on('change', function() {
    getSehir();
});

$('#usercity').on('change', function() {
    var id = $(this).val();
    kargoUcretsiz();
    getIlce(id);
});

$('#userpart').on('change', function() {
    var id = $(this).val();
    selectedSemtOption = id;
    kargoUcretsiz();
});

//Option 

let allTrue = false;

let deliveryBox = $('.delivery-box');
let kargoBox = $('.kargo-box');
let addAddressBox = $('.add-address-box');
let kargoRadio = $('input[name=kargo-tipi]');
let faturaCheck = $('#fatura-kargo');
let kargoForm = $('#kargo-bilgiler');
let kargoSelectBox = $('.kargo-select-box');
let expresKargoSelect = $('#express-kargo-select');
// btn
let editAdres = $('#do-edit-btn');
let faturaBtn = $('.fatura-btn');
let deliveryBtn = $('.delivery-btn');
let addAdresSelect = $('#add-this');
let allTrueBtn = $('#go-to-next');
// Product Total
let productTotal = $('#product-total').html();
let ParseProductTotal = parseFloat(productTotal);
// Kargo price
let kargoTotal = 0;
// total price
let total = $('#total').html();
let ParseTotal = parseFloat(total);


deliveryBox.hide();
deliveryBtn.show();
kargoBox.hide();
addAddressBox.hide();
kargoForm.hide();
kargoSelectBox.hide();
expresKargoSelect.hide();

deliveryBtn.on('click', function() {
    deliveryBtn.hide();
    addAddressBox.show();
});

editAdres.on('click', function() {
    addAddressBox.show();
    deliveryBox.hide();
    kargoBox.hide();
});

addAdresSelect.on('click', function() {
    kargoSelectBox.show();
});

// Valide Mail
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function wrideFaturaDiv() {
    faturaDivAd.innerHTML = faturaAd.value;
    faturaDivSoyad.innerHTML = faturaSoyad.value;
    faturaDivFirma.innerHTML = faturaFirma.value;
    faturaDivTc.innerHTML = faturaTc.value;
    faturaDivUlke.innerHTML = faturaUlke.options[faturaUlke.selectedIndex].text;
    faturaDivSehir.innerHTML = faturaSehir.options[faturaSehir.selectedIndex].text;
    faturaDivIlce.innerHTML = faturaIlce.options[faturaIlce.selectedIndex].text;
    faturaDivAdres.innerHTML = faturaAdres.value;
    faturaDivPosta.innerHTML = faturaPosta.value;
    faturaDivTelefon.innerHTML = faturaTelefon.value;
    faturaDivEmail.innerHTML = faturaEmail.value;
}
function wrideKargoDiv() {
    kargoDivAd.innerHTML = kargoAd.value;
    kargoDivSoyad.innerHTML = kargoSoyad.value;
    // kargoDivUlke.innerHTML = kargoUlke.options[faturaUlke.selectedIndex].text;
    // kargoDivSehir.innerHTML = kargoSehir.options[faturaSehir.selectedIndex].text;
    // kargoDivIlce.innerHTML = kargoIlce.options[faturaIlce.selectedIndex].text;
    kargoDivAdres.innerHTML = kargoAdres.value;
    kargoDivPosta.innerHTML = kargoPosta.value;
    kargoDivTelefon.innerHTML = kargoTelefon.value;
}
function wrideKargoInput() {
    kargoAd.value = faturaAd.value;
    kargoSoyad.value = faturaSoyad.value;
    kargoUlke.options[kargoUlke.selectedIndex].text = faturaUlke.options[faturaUlke.selectedIndex].text;
    kargoSehir.options[kargoSehir.selectedIndex].text = faturaSehir.options[faturaSehir.selectedIndex].text;
    kargoIlce.options[kargoIlce.selectedIndex].text = faturaIlce.options[faturaIlce.selectedIndex].text;
    kargoAdres.value = faturaAdres.value;
    kargoPosta.value = faturaPosta.value;
    kargoTelefon.value = faturaTelefon.value;
}

$('#firmavergidairesi').val('Vergi Dairesi');
$('#firmano').val('Vergi No');
$('#firmaname').on('focusout', ()=> {
    if($('#firmaname').val() != '') {
        $('#tc-no').addClass('hidden');
        $('#tc-no #usertc').val('28339727832');
        $('#vergi-area').removeClass('hidden');
        $('#vergi-area').addClass('show');
        $('#firmavergidairesi').val('');
        $('#firmano').val('');
    } else {
        $('#tc-no').removeClass('hidden');
        $('#tc-no').addClass('show');
        $('#tc-no input[name=usertc]').val('');
        $('#vergi-area').removeClass('show');
        $('#vergi-area').addClass('hidden');
        $('#firmavergidairesi').val('Vergi Dairesi');
        $('#firmano').val('Vergi No');
    }
});

faturaCheck.on('change', function() {
    var agreed = $(this).is(':checked');
    if (agreed == true) {
        kargoForm.hide();
    } else {
        wrideFaturaDiv();
        wrideKargoInput();
        wrideKargoDiv();
        kargoForm.show();
    }
});

var kreditKard = $('#kredit-kard');
var havale = $('#havale');

havale.hide();

$('input[name=payment-method]').on('change', function() {
    var id = $(this).attr('id');
    
    if(id == 'card-method') {
        kreditKard.show();
        havale.hide();
    } else {
        kreditKard.hide();
        havale.show();
    }
});

function TCNOKontrol(TCNO) {
    var tek = 0,
        cift = 0,
        sonuc = 0,
        TCToplam = 0,
        i = 0;
    //hatali = [11111111110, 22222222220, 33333333330, 44444444440, 55555555550, 66666666660, 7777777770, 88888888880, 99999999990];

    if (TCNO.length != 11) return false;
    if (isNaN(TCNO)) return false;
    if (TCNO[0] == 0) return false;

    tek = parseInt(TCNO[0]) + parseInt(TCNO[2]) + parseInt(TCNO[4]) + parseInt(TCNO[6]) + parseInt(TCNO[8]);
    cift = parseInt(TCNO[1]) + parseInt(TCNO[3]) + parseInt(TCNO[5]) + parseInt(TCNO[7]);

    tek = tek * 7;
    sonuc = Math.abs(tek - cift);
    if (sonuc % 10 != TCNO[9]) return false;

    for (var i = 0; i < 10; i++) {
        TCToplam += parseInt(TCNO[i]);
    }

    if (TCToplam % 10 != TCNO[10]) return false;

    //if (hatali.toString().indexOf(TCNO) != -1) return false;

    return true;
}

$('.fatura-btn').on('click', function(e) {
    e.preventDefault();

    var agreed = $("#fatura-kargo").is(':checked');
    
    if (agreed == true) {
        wrideFaturaDiv();
        wrideKargoInput();
        wrideKargoDiv();
    } else {
        wrideFaturaDiv();
        wrideKargoDiv();
    }

    if (faturaAd.value == '' || faturaSoyad.value == '' || !TCNOKontrol(faturaTc.value) || faturaUlke.options[faturaUlke.selectedIndex].text == 'Seçiniz...' || faturaSehir.options[faturaSehir.selectedIndex].text == 'Seçiniz...' || faturaIlce.options[faturaIlce.selectedIndex].text == 'Seçiniz...' || faturaAdres.value == '' || faturaTelefon.value == '' || faturaEmail.value == '') {
        Swal.fire({
            title: '<h4><span class="red-star">*</span> ile işaretlenen alanlar boş bırakılamaz!</h4>'
        });
        if (faturaAd.value == '') {
            faturaAd.style.borderColor = '#ff1100';
        } else {
            faturaAd.style.borderColor = '#ced4da';
        }
        if (faturaSoyad.value == '') {
            faturaSoyad.style.borderColor = '#ff1100';
        } else {
            faturaSoyad.style.borderColor = '#ced4da';
        }
        if($('#tc-no').hasClass('hidden')) {
            console.log('This is hidden');
        } else {
            if(TCNOKontrol(faturaTc.value)) {
                console.log('TC dogru')
            } else {
                Swal.fire({
                    type: 'error',
                    text: 'TC kimlik numaranızı yanlış girdiniz!',
                    timer: 1000,
                });
            }
        }
        if (faturaUlke.options[faturaUlke.selectedIndex].text == 'Seçiniz...') {
            faturaUlke.style.borderColor = '#ff1100 !important';
        } else {
            faturaUlke.style.borderColor = '#ced4da';
        }
        if (faturaSehir.options[faturaSehir.selectedIndex].text == 'Seçiniz...') {
            faturaSehir.style.borderColor = '#ff1100 !important';
        } else {
            faturaSehir.style.borderColor = '#ced4da';
        }
        if (faturaIlce.options[faturaIlce.selectedIndex].text == 'Seçiniz...') {
            faturaIlce.style.borderColor = '#ff1100 !important';
        } else {
            faturaIlce.style.borderColor = '#ced4da';
        }
        if (faturaAdres.value == '') {
            faturaAdres.style.borderColor = '#ff1100';
        } else {
            faturaAdres.style.borderColor = '#ced4da';
        }
        if (faturaTelefon.value == '') {
            faturaTelefon.style.borderColor = '#ff1100';
        } else {
            faturaTelefon.style.borderColor = '#ced4da';
        }
        if (faturaEmail.value == '') {
            faturaEmail.style.borderColor = '#ff1100';
        } else {
            faturaEmail.style.borderColor = '#ced4da';
        }
    } else {
        if (validateEmail(faturaEmail.value)) {
            Swal.fire({
                type: 'success',
                title: 'Fatura Bilgiler Doğru!',
                text: 'E-Posta Adresin Doğru!',
                showConfirmButton: false,
            })
            setTimeout(() => Swal.close(), 1000);
            allTrue = true;
            addAddressBox.hide();
            deliveryBox.show();
            kargoBox.show();
        } else {
            Swal.fire({
                type: 'error',
                text: 'E-Posta Adresin Hatalı!',
                timer: 1000,
            });
        };
    }

    if(selectedSemtOption == 'bccdf16204b5a81620ed39c8c69930ea' || selectedSemtOption == 'c4df5abe743f2f734cbd194806bdcb0d' || selectedSemtOption == 'b863ccd5205c53c99f2c60172eedc64f' || selectedSemtOption == '96b874ea9c147691cacc1636e989e8e2') {
        expresKargoSelect.show();
    } else {
        expresKargoSelect.hide();
    }
});

function kargoUcretsiz() {
    $('#kargo-selected').html('<span class="products-item__title">Ucretsiz Kargo</span><span class="products-item__total"> <span class="kargo-total">0</span> TL</span>');
    kargoTotal = 0;
    let parseKargoTotal = parseFloat(kargoTotal);
    let basketToplam = ParseProductTotal + parseKargoTotal;
    let fixedBasketToplam = basketToplam.toFixed(2);
    $('#total').html(fixedBasketToplam);
}

function kargoExpress() {
    $('#kargo-selected').html('<span class="products-item__title">Kargo Ücreti (Hızlı Teslimat)</span><span class="products-item__total"><span class="kargo-total">12.90</span> TL</span>');
    kargoTotal = 19.20;
    let parseKargoTotal = parseFloat(kargoTotal);
    let basketToplam = ParseProductTotal + parseKargoTotal;
    let fixedBasketToplam = basketToplam.toFixed(2);
    $('#total').html(fixedBasketToplam);
}


kargoRadio.on('change', function() {
    if($(this).attr('id') == 'ucretsiz') {
        kargoUcretsiz();
    } else if ($(this).attr('id') == 'expres') {
        kargoExpress();
    }
});

// if(kargoSehir || kargoIlce) {
//     expresKargoSelect.show();
// } else {
//     expresKargoSelect.hide();
// }

allTrueBtn.on('click', function() {
    if(allTrue == false) {
        Swal.fire({
            type: 'error',
            text: 'Lutfen Adresinizi giriniz!',
            timer: 1000,
        });
    } else {
        window.location = 'basketPayment2.html';
    }
});