// Get Div from Html
let generateList = document.querySelector('.generate-block__list');
let barTotal = document.querySelector('.bar-price span');
let barSize = document.querySelector('.bar-size span');

// Get button from Html
let constructorBtn = document.querySelector('.constructor-btn__js');
let removeBtn = document.querySelector('.remove-btn__js');
let barBtn = document.querySelector('.bar-btn__js');

// Get radio from Html
let materialList = document.querySelectorAll('input[name=material-radio]');
let sizeList = document.querySelectorAll('input[name=size-radio]');
let materialPrice = document.querySelector('input[name=material-radio]').getAttribute('data-price');
let materialCheck = '';
let materialCheckPrice = '';
let sizeCheck = '';
let arrId = 0;


let checkedArr = {};
let totatArr = [];

// Get Checked material item
for(let i = 0; i < materialList.length; i++) {
    materialList[i].addEventListener('click', (e) => {
        materialCheck = e.target.value;
        materialCheckPrice = e.target.getAttribute('data-price');
        collectArr();
    });
}

// Get Checked size item
for(let i = 0; i < sizeList.length; i++) {
    sizeList[i].addEventListener('click', (e) => {
        sizeCheck = e.target.value;
        collectArr();
    });
}

// collect all data on array
function collectArr() {
    checkedArr = {
        id: arrId,
        material: materialCheck,
        size: sizeCheck,
        price: materialCheckPrice*(sizeCheck/100),
    }
}


function checkOnZero() {
    if(totatArr.length -1 === 0) {
        totatArr = [];
    }
}


function countSizeAndPriceJson() {
    let total = 0;
    let size = 0;

    if(totatArr.length === 0) {
        total = 0;
        size = 0;
        barTotal.innerHTML = "0" + 'TL'; 
        barSize.innerHTML = "0" + 'gr';
    } else {
        for(var i = 0; i < totatArr.length; i++){
            total += parseInt(totatArr[i].price);
            barTotal.innerHTML = total + 'TL';    
        }

        for(var i = 0; i < totatArr.length; i++){
            size += parseInt(totatArr[i].size);
            barSize.innerHTML = size + 'gr';    
        }
    }
}

// Remove constructor items
function removeListItem(target) {
    target.parentNode.parentNode.remove();
    for(let i = 0; i < totatArr.length; i++) {
        if(+target.getAttribute('data-id') === totatArr[i].id+1) {
            totatArr = totatArr.filter(function(jsonObject) {
                return jsonObject.id+1 != +target.getAttribute('data-id');
            });
        }
    }
    countSizeAndPriceJson();
    checkOnZero();
}

constructorBtn.addEventListener('click', () => {
    totatArr.push(checkedArr);
    
    arrId++;

    collectArr();
    
    countSizeAndPriceJson();
    
    console.log(totatArr);
    
    let html = `<div class="list-item"><div class="name">${checkedArr.material}</div><div class="size">${checkedArr.size + "gr"}</div><div class="button"><button class="remove-btn remove-btn__js" data-id="${checkedArr.id}" onclick="removeListItem(event.target)" type="button">&times;</button></div></div>`;
    generateList.insertAdjacentHTML('afterbegin', html);
});