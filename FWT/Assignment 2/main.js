function generate() {
    let input_box = document.name_form.name;
    let name = String(input_box.value);
    let first_letter = name.charAt(0).toUpperCase();
    console.log("name =" + name)
    var result_strings = new Array();
    if (first_letter === "A" || first_letter === "E" || first_letter === "I" || first_letter === "O" || first_letter === "U") {
        //TODO: Add condition for vowel-names;
    }   else {
        result_strings[0] = name + ", " + name + ", " + "bo-b" + name.slice(1, name.length);
        result_strings[1] = "Banana-fana fo-f" + name.slice(1, name.length);
        result_strings[2] = "Fee-fi-mo-m" +  name.slice(1, name.length);
        result_strings[3] = name + "!";
        console.log("Result = " + result_strings);
        for (i = 0; i < result_strings.length; i++) {
            console.log("iteration i = " + i);
            document.getElementsByName("somename")[0].innerHTML += result_strings[i] + "<br>";
        }
    }
}