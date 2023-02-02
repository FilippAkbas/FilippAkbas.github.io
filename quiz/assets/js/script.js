let AllData = new Array();

function init() {
    $("#page-1").css({"display": "grid"});
    $("#page-2").css({"display": "none"});
    $("#page-3").css({"display": "none"});
    $("#page-4").css({"display": "none"});
}

function GoToNext(step) {
    const body = document.querySelector("body");
    switch (step) {
        case 'step1':
            $("#page-1").css({"display": "grid"});
            $("#page-2").css({"display": "none"});
            body.scrollIntoView({behavior: "smooth"});
            break;
        case 'step2':
            let SelectedKitchen = document.querySelector('input[name="kitchen-type"]:checked') || 'empty';
            let SelectedColection = document.querySelector('input[name="collection-type"]:checked') || 'empty';
            $("#page-1").css({"display": "none"});
            $("#page-2").css({"display": "grid"});
            $('#page-2 .back-btn span').text("Back to previous step");
            AllData.push({'kitchen': SelectedKitchen.value || SelectedKitchen});
            AllData.push({'colection': SelectedColection.value || SelectedColection});
            page2init();
            body.scrollIntoView({behavior: "smooth"});
            break;
        case 'step3':
            $("#page-2").css({"display": "none"});
            $("#page-3").css({"display": "grid"});
            body.scrollIntoView({behavior: "smooth"});
            break;
        case 'step4':
            $("#page-3").css({"display": "none"});
            $("#page-4").css({"display": "grid"});
            body.scrollIntoView({behavior: "smooth"});
            break;
    }
}

function BackToPrev(step) {
    const body = document.querySelector("body");
    switch (step) {
        case 'step1':
            $("#page-1").css({"display": "grid"});
            $("#page-2").css({"display": "none"});
            $('#page-1 .back-btn span').text("Back");
            AllData.splice(0);
            body.scrollIntoView({behavior: "smooth"});
            break;
        case 'step2':
            $("#page-1").css({"display": "none"});
            $("#page-2").css({"display": "grid"});
            $('#page-2 .back-btn span').text("Back to previous step");
            AllData.splice(0);
            body.scrollIntoView({behavior: "smooth"});
            break;
        case 'step3':
            $("#page-2").css({"display": "none"});
            $("#page-3").css({"display": "grid"});
            $('#page-2 .back-btn span').text("Back to previous step");
            body.scrollIntoView({behavior: "smooth"});
            break;
        case 'step4':
            $("#page-3").css({"display": "none"});
            $("#page-4").css({"display": "grid"});
            $('#page-2 .back-btn span').text("Back to previous step");
            body.scrollIntoView({behavior: "smooth"});
            break;
    }
}

function page2init() {
    console.log(AllData);
    switch (AllData[0].kitchen) {
        case 'empty':
            document.querySelector('#page-2 .kitchen-size .title').innerHTML = "What are the approximate measurements of your room?";
            document.querySelector('#page-2 .kitcen-size_img').style.display = "none";
            document.querySelector('#page-2 .kitchen-size_inputs').style.flexDirection = "row";
            document.querySelector('#page-2 .kitchen-size_grid').style.gridTemplateColumns = "1fr";
            document.querySelector('#page-2 .kitchen-size_inputs').innerHTML = `
                <input type="text" name="width" placeholder="Width in inches">
                <input type="text" name="depth" placeholder="Depth in inches">
            `;
            break;
        case 'kitchen-type_1':
            document.querySelector('#page-2 .kitchen-size .title').innerHTML = "Enter the width of your wall kitchen";
            document.querySelector('#page-2 .kitcen-size_img img').src = "./assets/img/kitchen/step2-wall-kitchen.svg";
            document.querySelector('#page-2 .kitchen-size_inputs').style.flexDirection = "column";
            document.querySelector('#page-2 .kitchen-size_grid').style.gridTemplateColumns = "1.5fr 1fr";
            document.querySelector('#page-2 .kitchen-size_inputs').innerHTML = `
                <div class="input">
                    <span>A</span>
                    <input type="text" name="type_1_a" placeholder="inches">
                </div>
            `;
            break;
        case 'kitchen-type_2':
            document.querySelector('#page-2 .kitchen-size .title').innerHTML = "Enter the width of the two sides in your l-shaped kitchen";
            document.querySelector('#page-2 .kitcen-size_img img').src = "./assets/img/kitchen/step2-l-kitchen.svg";
            document.querySelector('#page-2 .kitchen-size_inputs').style.flexDirection = "column";
            document.querySelector('#page-2 .kitchen-size_grid').style.gridTemplateColumns = "1.5fr 1fr";
            document.querySelector('#page-2 .kitchen-size_inputs').innerHTML = `
                <div class="input">
                    <span>A</span>
                    <input type="text" name="type_2_a" placeholder="inches">
                </div>
                <div class="input">
                    <span>B</span>
                    <input type="text" name="type_2_b" placeholder="inches">
                </div>
            `;
            break;
        case 'kitchen-type_3':
            document.querySelector('#page-2 .kitchen-size .title').innerHTML = "Enter the width of the three sides in your u-shaped kitchen";
            document.querySelector('#page-2 .kitcen-size_img img').src = "./assets/img/kitchen/step2-u-kitchen.svg";
            document.querySelector('#page-2 .kitchen-size_inputs').style.flexDirection = "column";
            document.querySelector('#page-2 .kitchen-size_grid').style.gridTemplateColumns = "1.5fr 1fr";
            document.querySelector('#page-2 .kitchen-size_inputs').innerHTML = `
                <div class="input">
                    <span>A</span>
                    <input type="text" name="type_3_a" placeholder="inches">
                </div>
                <div class="input">
                    <span>B</span>
                    <input type="text" name="type_3_b" placeholder="inches">
                </div>
                <div class="input">
                    <span>C</span>
                    <input type="text" name="type_3_c" placeholder="inches">
                </div>
            `;
            break;
        case 'kitchen-type_4':
            document.querySelector('#page-2 .kitchen-size .title').innerHTML = "Enter the width and depth of your kitchen island";
            document.querySelector('#page-2 .kitcen-size_img img').src = "./assets/img/kitchen/step2-island-kitchen.svg";
            document.querySelector('#page-2 .kitchen-size_inputs').style.flexDirection = "column";
            document.querySelector('#page-2 .kitchen-size_grid').style.gridTemplateColumns = "1.5fr 1fr";
            document.querySelector('#page-2 .kitchen-size_inputs').innerHTML = `
                <div class="input">
                    <span>A</span>
                    <input type="text" name="type_4_a" placeholder="inches">
                </div>
                <div class="input">
                    <span>B</span>
                    <input type="text" name="type_4_b" placeholder="inches">
                </div>
            `;
            break;
        case 'kitchen-type_5':
            document.querySelector('#page-2 .kitchen-size .title').innerHTML = "Enter the width of the two sides in your galley kitchen";
            document.querySelector('#page-2 .kitcen-size_img img').src = "./assets/img/kitchen/step2-high-kitchen.svg";
            document.querySelector('#page-2 .kitchen-size_inputs').style.flexDirection = "column";
            document.querySelector('#page-2 .kitchen-size_grid').style.gridTemplateColumns = "1.5fr 1fr";
            document.querySelector('#page-2 .kitchen-size_inputs').innerHTML = `
                <div class="input">
                    <span>A</span>
                    <input type="text" name="type_5_a" placeholder="inches">
                </div>
                <div class="input">
                    <span>B</span>
                    <input type="text" name="type_5_b" placeholder="inches">
                </div>
            `;
            break;
        case 'kitchen-type_6':
            document.querySelector('#page-2 .kitchen-size .title').innerHTML = "Enter the width of your high cabinet wall";
            document.querySelector('#page-2 .kitcen-size_img img').src = "./assets/img/kitchen/step2-wall-kitchen.svg";
            document.querySelector('#page-2 .kitchen-size_inputs').style.flexDirection = "column";
            document.querySelector('#page-2 .kitchen-size_grid').style.gridTemplateColumns = "1.5fr 1fr";
            document.querySelector('#page-2 .kitchen-size_inputs').innerHTML = `
                <div class="input">
                    <span>A</span>
                    <input type="text" name="type_6_a" placeholder="inches">
                </div>
            `;
            break;
    }
}

function WidthAndDepth() {

}

function previewFile() {
    let previewDiv = document.querySelector('.image-output');
    let preview = document.querySelector('.image-output img');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();

    reader.onloadend = function () {
        previewDiv.style.display = 'flex';
        preview.src = reader.result;
    }
  
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
  }

init();