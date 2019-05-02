const inputs = document.querySelectorAll('input');
const page = document.getElementById('page');


function create_Ele(){
    let element = document.createElement(inputs[0].value);
    for(let i=1; i < inputs.length; i++) {
        let attribute = inputs[i].getAttribute('placeholder');
        let value = inputs[i].value;
        if (value) {
            element[attribute] = value;
        }
        page.appendChild(element);
    }
    console.log(element);

}