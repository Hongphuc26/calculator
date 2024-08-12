let num1 = "";
let num2 = "";
let opt;

function buttonHandle(btn) {
    const pressValue = btn.innerText;
    const resultInput = document.getElementById('resultInput');
    if ( isNaN(pressValue)){
        if (pressValue == 'C')
        {
            num1 = "";
            num2 = "";
            opt = undefined;
            resultInput.value = "";
            return;
        }

        if ( pressValue == '=')
        {
            const result = perform(num1,num2,opt);
            resultInput.value = result;
            num1 = "";
            num2 = "";
            opt =undefined;
        }
        else{
            opt = pressValue;
        }
    }
    else{
        if (opt){
            num2 += pressValue;
            resultInput.value = num2;
        }
        else{
            num1 += pressValue;
            resultInput.value = num1;
        }
    }
}

function perform(n1, n2, ot) {
    n1 = Number(n1);
    n2 = Number(n2);

    switch (ot) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case 'x':
            return n1 * n2;
        case ':':
            return n1 / n2;
            
    }
}