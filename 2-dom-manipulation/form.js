let form = document.querySelector('form');

function structureIf(nameCondition){
    if (nameCondition.value == '') {
        console.log(`${nameCondition.id}: It's need value`);
        nameCondition.classList.add('required');
        return "";
    } else {
        nameCondition.classList.remove("required");
        return nameCondition.value;
    }
}

function validEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email.value)) {
        Email.classList.remove("required");
        return Email.value;
    } else {
        Email.classList.add("required");
        console.log(`${Email.id}: You have entered an invalid email address`)
        alert("You have entered an invalid email address!");  
        return "";     
    }
}

function validNumber(){
    if (/\d+$/.test(Phone.value)) {
        Phone.classList.remove("required");
        return Phone.value;
    } else {
        Phone.classList.add("required");
        console.log(`${Phone.id}: You can only write numbers`)
        alert("You can only write numbers!");
        return "";
    }
}

function validCheckbox2(array){
    let check = "";
    if (array[0].checked == false && array[1].checked == false && array[2].checked == false && array[3].checked == false) {
        checkbox_id.classList.add("required");
        alert('At least one course must be selected');
        return "";
    } else {
        checkbox_id.classList.remove("required");
        for (let index = 0; index < array.length; index++) {
            if (array[index].checked == true) {
                check += array[index].value+ ". ";
            }
        }
        return check;
    }
}

function validaTeForm(event){
    event.preventDefault();
    let array = [form.course1, form.course2, form.course3, form.course4];
    print_name.textContent = `Name: ${structureIf(Name)}`;
    structureIf(Email);
    print_email.textContent = `Email: ${validEmail()}`;
    print_number.textContent = `Number: ${validNumber()}`;
    print_checkbox.textContent = `Checkbox: ${validCheckbox2(array)}`;
}

form.addEventListener('submit', validaTeForm);