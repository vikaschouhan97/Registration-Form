let error = false
     
const firstNameHandler = () => {
    let firstNameInput = document.getElementById('first-name').value
    if (firstNameInput.length > 2) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'
        document.getElementById('first-name').style.border =''
        error=false
    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('first-name').style.border ='solid red'
        error = true
    }
}

const secondNameHandler = () => {
    let lasttNameInput = document.getElementById('last-name').value
    if (lasttNameInput.length > 2) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
        document.getElementById('last-name').style.border = ''
        error=false
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('last-name').style.border = 'solid red'
        error = true
    }
}

const emailHandler = () => {
    let emailInput = document.getElementById('email').value
    if (emailInput.length &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf("@") !== 0) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
        document.getElementById('email').style.border = ''
        error=false
    } else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('email').style.border = 'solid red'
        error = true
    }
}

const phoneHandler = () => {
    let phoneInput = document.getElementById('phone').value
    if (phoneInput.length == 10) {
        document.getElementById('phone-valid').style.display = 'block'
        document.getElementById('phone-invalid').style.display = 'none'
        document.getElementById('phone').style.border = ''
        error=false
    } else {
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('phone-invalid').style.display = 'block'
        document.getElementById('phone').style.border = 'solid red'
        error = true
    }
}

const batchHandler = () => {
    let batchInput = document.getElementById('batch-no').value
    if (batchInput != 'select-batch') {
        document.getElementById('batch-no-valid').style.display = 'block'
        document.getElementById('batch-no-invalid').style.display = 'none'
        document.getElementById('batch-no').style.border = ''
        error=false
    } else {
        document.getElementById('batch-no-valid').style.display = 'none'
        document.getElementById('batch-no-invalid').style.display = 'block'
        document.getElementById('batch-no').style.border = 'solid red'
        error = true
    }
}

const moduleHandler = () => {
    let moduleInput = document.getElementById('current-module').value
    if (moduleInput != 'select-module') {
        document.getElementById('module-no-valid').style.display = 'block'
        document.getElementById('module-no-invalid').style.display = 'none'
        document.getElementById('current-module').style.border = ''
        error=false
    } else {
        document.getElementById('module-no-valid').style.display = 'none'
        document.getElementById('module-no-invalid').style.display = 'block'
        document.getElementById('current-module').style.border = 'solid red'
        error = true
    }
}

const tnCChecker = () => {
    let tnCInput = document.getElementById('tnC').checked
    if (tnCInput != true) {
        document.getElementById('tnC_invalid').style.display = 'block'
        error = true;
    } else {
        document.getElementById('tnC_invalid').style.display = 'none'
    }
}


const resetFields = () => {
    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('phone').value = ''
    document.getElementById('batch-no').value = 'select-batch'
    document.getElementById('current-module').value = 'select-module'
    document.getElementById('tnC').checked = false;

    document.getElementById('first-name-invalid').style.display = 'none'
    document.getElementById('first-name-valid').style.display = 'none'
    document.getElementById('last-name-valid').style.display = 'none'
    document.getElementById('last-name-invalid').style.display = 'none'
    document.getElementById('email-invalid').style.display = 'none'
    document.getElementById('email-valid').style.display = 'none'
    document.getElementById('phone-valid').style.display = 'none'
    document.getElementById('phone-invalid').style.display = 'none'
    document.getElementById('batch-no-valid').style.display = 'none'
    document.getElementById('batch-no-invalid').style.display = 'none'
    document.getElementById('module-no-valid').style.display = 'none'
    document.getElementById('module-no-invalid').style.display = 'none'
}

function validate() {

    firstNameHandler()
    secondNameHandler()
    emailHandler()
    phoneHandler()
    batchHandler()
    moduleHandler()
    tnCChecker()

    if (!error) {
        resetFields();
        alert('Your details have been saved successfully !')   
    } 
}