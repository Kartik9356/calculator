
// document.getElementById('display2')
let display = document.querySelector("#display");
let display2 = document.querySelector('#display2');
let sample = "";

function linear() {
    display.value;
    let x = math.evaluate(display.value);
    display.value = x;
    sample = x;
    return x;
}

function apppend(x) {
    if (x != "%") {
        if (display.value === "" && (x == '+' || x == '*' || x == '/')) {
            display.value = "";
            sample = "";
        } else {

            let lastchar = display.value.slice(-1);
            if (x == '+' || x == '-' || x == '*' || x == '/') {
                if (lastchar == '+' || lastchar == '-' || lastchar == '*' || lastchar == '/') {

                    display.value = display.value.slice(0, -1) + x;
                    sample = sample.slice(0, -1) + x;

                    // code for display 2

                    document.getElementById('display2').innerHTML = document.getElementById('display2').innerHTML.slice(0, display2.innerHTML.length - 59);
                    if (x == '+') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\1.png" height="15px" width="15px" alt="">';
                    }
                    if (x == '-') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\2.png" height="15px" width="15px" alt="">';
                    }
                    if (x == '/') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\4.png" height="17px" width="17px" alt="">';
                    }
                    if (x == '*') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\3.png" height="15px" width="15px" alt="">';
                    }
                }
                else {
                    display.value += x;
                    sample += x;
                    // code for display 2
                    if (x == '+') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\1.png" height="15px" width="15px" alt="">';
                    }
                    if (x == '-') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\2.png" height="15px" width="15px" alt="">';
                    }
                    if (x == '/') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\4.png" height="17px" width="17px" alt="">';
                    }
                    if (x == '*') {
                        document.getElementById('display2').innerHTML += '<img src="icons2\\3.png" height="15px" width="15px" alt="">';
                    }
                }
            }
            else {
                display.value += x;
                sample += x;
                // code for display 2
                document.getElementById('display2').innerHTML += `<span>${x}</span>`;
            }
        }
        console.log(sample);
        return display.value;
    }
}

function back() {
    let lastchar = display.value.slice(-1);
    display.value = display.value.slice(0, -1)
    sample = display.value;
    console.log(sample);
    //code for display 2
    // if ( lastchar == '-' || lastchar == '*' || lastchar == '/') {
    //     document.getElementById('display2').innerHTML = document.getElementById('display2').innerHTML.slice(0, display2.innerHTML.length - 59);
    // }else {
    //     document.getElementById('display2').innerHTML = document.getElementById('display2').innerHTML.slice(0, display2.innerHTML.length - 14);
    // }
    document.getElementById('display2').innerHTML = document.getElementById('display2').innerHTML.slice(0, display2.innerHTML.length - 14);
    return display.value;

}


function calc() {
    display.value = math.evaluate(display.value);
    sample = math.evaluate(sample);
    console.log(sample);
    //code for display 2
    document.getElementById('display2').innerHTML = "";
    num = sample;
    let text = num.toString();
    for (i = 0; i < text.length; i++) {
        document.getElementById('display2').innerHTML += `<span>${text[i]}</span>`;
    }
    return display.value;

}

function clearDisplay() {
    display.value = "";
    sample = "";
    console.log(sample);
    //code for display 2
    document.getElementById('display2').innerHTML = sample;
    return display.value;
}




document.addEventListener('keydown', function (event) {
    if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '9' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '.') {
        sample = apppend(event.key)
        console.log(sample);
    }
    if (event.key == "." || event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
        // uncomment following function to make 'linear' calculator
        // calc();
        sample = apppend(event.key)
        console.log(sample);


    }
    if (event.key == "Enter" || event.key === '=') {
        sample = calc();
        console.log(sample);

    }

    if (event.key === 'c') {
        sample = clearDisplay();
        console.log(sample);

    }
    if (event.key === "Backspace") {
        sample = back();
        console.log(sample);

    }
});

