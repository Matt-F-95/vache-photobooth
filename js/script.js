let fieldsCheck;

let hamburger = document.getElementById('hamburgerbtn');

    let mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
    });

    
function hasCharsCheck(dataToCheck) {
    let pattern = /^[a-zA-Z]{2,60}$/;
    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function hasNumsCheck(dataToCheck) {
    let pattern = /^[0-9]$/;
    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}
function hasEmailCheck(dataToCheck) {
    let pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}
function hasAddressCheck(dataToCheck) {
    let pattern = /^[a-zA-Z0-9\s,. '-]{3,}$/;
    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}
function hasDobCheck(dataToCheck) {
    let pattern = /^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/;
    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}
function hasPhoneCheck(dataToCheck) {
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}
function hasCharsNumsCheck(dataToCheck) {
    let pattern =  /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[ ]?[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
    if(pattern.test(dataToCheck.field.value)){
        return true;
    }
    return false;
}

function errorsReset() {
    fieldsCheck.forEach(inputField => {
        inputField.error.innerText = ""
    })
}

function formChecker(e){
    console.log('check form!');
    let errorsDetected = 0;
    errorsReset();
    e.preventDefault();

    // automated error checking 
    fieldsCheck.forEach(inputField => {
        if(inputField.checker(inputField) == false) {
            inputField.error.innerText = inputField.msg;
            errorsDetected += 1;

        }
    });

    if(errorsDetected>0){
        console.log('fix your errors');
    }

}

window.addEventListener('load', loadImg);

function loadImg() {
  const url = "https://api.unsplash.com/search/photos?query=coffee&per_page=20&client_id=gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";
  const imageDiv = document.querySelector('.image');
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
               
                for (let i = 0; i < data.results.length; i++) {
                   
                    /* Fetch only image that you want by using id. Example : https://unsplash.com/photos/6VhPY27jdps, id = '6VhPY27jdps'   */
                    if (data.results[i].id == "S1HuosAnX-Y") {
                        let imageElement = document.createElement('img');
                        imageElement.src = data.results[i].urls.thumb;
                        imageDiv.append(imageElement);
                    }
                }
            });
}

function inputChecker(e) {

    let firstNameInput = document.getElementById('firstName');
    let lastNameInput = document.getElementById('lastName');
    let emailAddressInput = document.getElementById('emailAddress');
    let phoneNumberInput = document.getElementById('phoneNumber');
    let addressInput = document.getElementById('address');
    let birthdayInput = document.getElementById('dateOfBirth');
    let parentFirstNameInput = document.getElementById('parentFirstName');
    let parentLastNameInput = document.getElementById('parentLastName');
    let parentPhoneNumberInput = document.getElementById('parentPhoneNumber');
    let errors = 0;

    if(firstNameInput.value == "") {
        errors = errors + 1;
        firstNameInput.style.borderBottom = "1px solid red";

    } else {
        firstNameInput.style.borderBottom = "1px solid green";
    }

    if(lastNameInput.value == "") {
        errors = errors + 1;
        lastNameInput.style.borderBottom = "1px solid red";

    } else {
        lastNameInput.style.borderBottom = "1px solid green";
    }
    if (emailAddressInput.value == "") {
        errors = errors + 1;
        emailAddressInput.style.borderBottom = "1px solid red";
    } else {
        emailAddressInput.style.borderBottom = "1px solid green";
    }
    if (phoneNumberInput.value == "") {
        errors = errors + 1;
        phoneNumberInput.style.borderBottom = "1px solid red";
    } else {
        phoneNumberInput.style.borderBottom = "1px solid green";
    }
    if (addressInput.value == "") {
        errors = errors + 1;
        addressInput.style.borderBottom = "1px solid red";
    } else {
        addressInput.style.borderBottom = "1px solid green";
    }

    if (birthdayInput.value <= "") {
        birthdayInput.style.borderBottom = "1px solid red";
    } else {
        alert('age is less than 18');
    }

    if (parentFirstNameInput.value == "") {
       parentFirstNameInput.style.borderBottom = "1px solid red";
    } else {
        parentLastNameInput.style.borderBottom = "1px solid green";
    }

    if (parentPhoneNumberInput.value == "") {
        parentPhoneNumberInput.style.borderBottom = "1px solid red";

    } else {
        parentLastNameInput.style.borderBottom = "1px solid green";
    }
}
    



function initForm() {
    let firstName = document.querySelector('#firstName');
    let firstNameError = document.querySelector('#firstNameError');
    let lastName = document.querySelector('#lastName');
    let lastNameError = document.querySelector('#lastNameError');
    let emailAddress = document.querySelector('#emailAddress');
    let emailAddressError = document.querySelector('#emailAddressError');
    let phoneNumber = document.querySelector('#phoneNumber');
    let phoneNumberError = document.querySelector('#phoneNumberError');
    let dateOfBirth = document.querySelector('#dateOfBirth');
    let dateOfBirthError = document.querySelector('#dobError');
    let address = document.querySelector('#address');
    let addressError = document.querySelector('#addressError');
    let parentFirstName = document.querySelector('#parentFirstName');
    let parentFirstNameError = document.querySelector('#parentFirstNameError');
    let parentLastName = document.querySelector('#parentLastName');
    let parentLastNameError = document.querySelector('#parentLastNameError');
    let parentPhoneNumber = document.querySelector('#parentPhoneNumber');
    let parentPhoneNumberError = document.querySelector('#parentPhoneNumberError')
    let skillTestQuestion = document.querySelector('#skillTestQuestion');
    let skillTestQuestionError = document.querySelector('#skillTestQuestionError');

    fieldsCheck = [
        {field: firstName, checker: hasCharsCheck, error:firstNameError , msg:"Please enter a valid first name."},
        {field: lastName, checker: hasCharsCheck, error:lastNameError , msg:"Please enter a valid last name."},
        {field: emailAddress, checker: hasEmailCheck, error:emailAddressError , msg:"Please enter a valid email address."},
        {field: phoneNumber, checker: hasPhoneCheck, error:phoneNumberError , msg:"Please enter a valid phone number."},
        {field: dateOfBirth, checker: hasDobCheck, error:dateOfBirthError , msg:"Please enter a valid age. You must be at least 18 years old."},
        {field: address, checker: hasAddressCheck, error:addressError , msg:"Please enter a valid address."},
        {field: parentFirstName, checker:hasCharsCheck , error: parentFirstNameError , msg:"Please enter a valid first name."},
        {field: parentLastName, checker:hasCharsCheck , error: parentLastNameError , msg:"Please enter a valid last name."},
        {field: parentPhoneNumber, checker:hasPhoneCheck, error: parentPhoneNumberError , msg:"Please enter a valid phone number."},
        {field: skillTestQuestion, checker:hasNumsCheck , error: skillTestQuestionError , msg:"Please answer the question correctly."}
    ]
    let formSubmit = document.querySelector('#formSubmit');
    formSubmit.addEventListener('click', formChecker);
    formSubmit.addEventListener('click', inputChecker);
}   
// 10 fields
document.addEventListener("DOMContentLoaded", function(){
    initForm();

});