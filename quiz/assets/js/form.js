;(function() {
    let forms = document.querySelector('.quiz-form');
    let formsSubmitBtn = document.querySelector('.submit-form');

    if (forms.length === 0) {
        return;
    }

    var serialize = function(forms) {
        var items = forms.querySelectorAll('input, select, textarea');
        var str = '';
        for (var i = 0; i < items.length; i += 1) {
            var item = items[i];
            var name = item.name;
            var value = item.value;
            var separator = i === 0 ? '' : '&';

            if (value) {
                str += separator + name + '=' + value;
            }
        }
        return str;
    };

    var formSend = function(forms) {
        var data = serialize(forms);
        var xhr = new XMLHttpRequest();
        var url = 'mail/mail.php';

        console.log(data);
        
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            console.log(xhr.response);
            if (xhr.response === 'success') {
                console.log('success');
            } else {
                console.log('error');
            }
            forms.reset();
        };

        xhr.send(data);
    };

    

    formsSubmitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let contactName = document.querySelector('input[name=FirstName]');
        let contactSurname = document.querySelector('input[name=surname]');
        let contactEmail = document.querySelector('input[name=email]');
        let contactPhone = document.querySelector('input[name=phone]');
        let contactCountry = document.querySelector('select[name=country]');
        let contactTypeInquiry = document.querySelector('select[name=inquiry_type]');
        let contactCity = document.querySelector('input[name=city]');

        if (!contactName.value) {
            contactName.style.borderColor = 'red';
        } else if(!contactSurname.value) {
            contactName.style.borderColor = 'transparent';
            contactSurname.style.borderColor = 'red';
        } else if(!contactEmail.value) {
            contactSurname.style.borderColor = 'transparent';
            contactEmail.style.borderColor = 'red';
        } else if(!contactPhone.value) {
            contactEmail.style.borderColor = 'transparent';
            contactPhone.style.borderColor = 'red';
        } else if(!contactCountry.options[contactCountry.selectedIndex].value) {
            contactPhone.style.borderColor = 'transparent';
            contactCountry.style.borderColor = 'red';
        } else if(!contactTypeInquiry.options[contactTypeInquiry.selectedIndex].value) {
            contactCountry.style.borderColor = 'transparent';
            contactTypeInquiry.style.borderColor = 'red';
        } else {
            // formSend(forms);
            $.ajax({
                headers: { "Accept": "application/json"},
                type: "POST",
                url: "../mail/mail.php",
                crossDomain: true,
                contentType: "application/json",
                dataType: 'json',
                data:JSON.stringify({
                    username:'text',
                    password:'text'
                }),
                success: function() {
                    alert('success');
                }
            });
        }
    });
})();