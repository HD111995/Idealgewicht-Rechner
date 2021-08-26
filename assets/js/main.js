function calc(){
    //Define Variables
let bodySize =Number(document.getElementById("body-size").value);
let age = Number(document.getElementById("age").value);
let breite = document.getElementById("breite").checked;
let schmale = document.getElementById("schmale").checked;
let printResult = document.getElementById("result");
let result = 0;
if (bodySize <= 20){
    window.alert("Geben Sie bitte richtige Körpergröße ab 20cm")
}else if (age < 1){
    window.alert("Geben Sie bitte ihren Alter ab 1 jahralt")
}else{
    if (breite == true){
        result = (bodySize - 100) +(age / 10) * 0.9 *1.1;
        printResult.innerHTML = "Dein Idealgewicht ist "+result+" kg"
    }else if (schmale == true){
        result = (bodySize - 100) +(age / 10) * 0.9 *0.9;
    }
    printResult.innerHTML = "Dein Idealgewicht ist "+result+" kg"
}
}