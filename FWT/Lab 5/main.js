function analyse() {
    document.getElementById('prime').innerHTML = "";
    document.getElementById('series').innerHTML = "";
    fibonacci();
    isPrime();
}

function fibonacci() {
    let input_box = document.getElementById("someid");
    let number = input_box.value;
    input_box.value = "";
    if (isNaN(number) || input_box.value == "") {
        console.log("NaN!");
        input_box.style.borderBottom = "2px solid orange";
        document.getElementById("someid").value = "";
        // document.getElementById("error").style.display = "inline";
        // document.getElementById("error").style.color = "orange";
        document.number_form.style.border = "2px dashed orange";
    } else {

        console.log("Started fibonacci calc!");
        var fib = [];
        fib[0] = 0;
        fib[1] = 1;
        for (let i = 2; i < number; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
            // console.log("fib[" + i + "] = " + fib[i]);
        }
        console.log("FINISHED!" + fib);
        document.getElementById('fib_heading').innerHTML = "The first " + number + " numbers in the Fibonacci Series are ";

        for (i = 0; i < fib.length; i++) {
            document.getElementById('series').innerHTML += fib[i] + " ";
        }
    }
}


function isPrime() {
    console.log("Started primality.");
    let input_box = document.getElementById("someid");
    let number = input_box.value;
    let flag = "";
    console.log("Started primality about to enter for.");
    for (let i = 0; i < number / 2; i++) {
        console.log("Running for");

        if (number % i == 0) {
            flag = "not prime";
            document.getElementById('prime').innerHTML = number + " is " + flag + ".";
        } else {
            flag = "prime";
            document.getElementById('prime').innerHTML = number + " is " + flag + ".";
        }
    }
}