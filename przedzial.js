function przedzial() {
    let liczba1 = document.getElementById("pole1").value;
    let liczba2 = document.getElementById("pole2").value;
    let liczba = " ";



    console.log(liczba1);
    console.log(Number(liczba1));
    console.log(Number(liczba1) != NaN);
    console.log(isNaN(Number(liczba1)));
    if (isNaN(Number(liczba1)) && isNaN(Number(liczba2))) {
        liczba = "Wartości w obu polach nie są liczbami";
    } else if (isNaN(Number(liczba1))) {
        liczba = "Wartość w pierwszym polu nie jest liczbą";
    } else if (isNaN(Number(liczba2))) {
        liczba = "Wartość w drugim polu nie jest liczbą";
    } else {
        if (liczba1<liczba2){
            for(i = liczba1; i <= liczba2; i++) {
                liczba = liczba + " " + i + " ";
            }
        } else if (liczba2<liczba1){
            for(i = liczba1; i >= liczba2; i--) {
                liczba = liczba + " " + i + " ";
            }
        } else {
            document.getElementById("liczby_z_przedzialu").innerHTML = "Wprowadzone liczby są równe."
        }
    }
    document.getElementById("liczby_z_przedzialu").innerHTML = liczba;
};

    
// {if (typeof liczba1 != "NaN")
// {liczba = "Wartość w pierwszym polu nie jest liczbą";
// } else if (typeof liczba2 != "number")
// {liczba = "Wartość w drugim polu nie jest liczbą";
// } else if (typeof liczba1 != "number" && typeof liczba2 != "number")
// {liczba = "Wartości w obu polach nie są liczbami";
// } else {liczba = liczba + " " + i + " ";
// }