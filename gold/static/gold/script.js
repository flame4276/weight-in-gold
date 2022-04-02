let init = async () => {
    document.querySelector('#calculate').disabled = true;
    try {
        let priceData = await (await fetch('https://data.nasdaq.com/api/v3/datasets/LBMA/GOLD/data.json?api_key=dcadzC6yKsf_i8cHp6M6&limit=1')).json();
        goldPrice = priceData.dataset_data.data[0][2];
        document.querySelector('#gold-info').textContent = `The current price of gold is $${goldPrice}`;
        document.querySelector('#calculate').disabled = false;
    } catch {
        document.querySelector('#gold-info').textContent = 'Error: The price of gold could not be retrieved. Please check your internet connection and try again.';
        goldPrice = -1;
    }
}


let createDiv = (message) => {
    let div = document.createElement('div');
    div.classList.add('weight-info');
    div.addEventListener('click', event => event.currentTarget.remove());

    let messageP = document.createElement('p');
    messageP.textContent = message;
    messageP.classList.add('message');
    div.appendChild(messageP);

    let timestampP = document.createElement('p');
    timestampP.textContent = Date();
    timestampP.classList.add('timestamp');
    div.appendChild(timestampP);

    return div;
}

let insertDiv = (div) => {
    document.body.insertBefore(div, document.querySelector('#infobar').nextElementSibling);
}

let calculate = async (event) => {
    if (goldPrice == -1) {
        let div = createDiv('Error: The price of gold has not been retrieved. Please don\'t mess with my site. It should work as is.');
        div.classList.add('error');
        insertDiv(div);
        return;
    }

    let weight = Number(document.querySelector('#weight').value);
    if (Number.isNaN(weight)) {
        let div = createDiv('Error: Please enter a number for the weight. Please don\'t mess with my site. It should work as is.');
        div.classList.add('error');
        insertDiv(div);
        return;
    }
    let unit = document.querySelector('#unit').value;

    try {
        let response = await (await fetch(`${window.origin}/unitconv/convert?from=${unit}&to=t_oz&value=${weight}`)).json();
        div = createDiv(`The value of your weight in gold is ${response.value*goldPrice}`);
        insertDiv(div);
    } catch {
        let div = createDiv('Error: Weight could not be converted. Please check your internet connection and try again.');
        div.classList.add('error');
        insertDiv(div);
    }
}

init();
document.querySelector('#calculate').addEventListener('click', calculate);