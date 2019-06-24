function przedzial()
    {let liczba1 = document.getElementById("pole1").value;
    let liczba2 = document.getElementById("pole2").value;
    let liczba = " ";

    for(i = liczba1; i <= liczba2; i++)
        {liczba = liczba + " " + i + " ";
        }
        
    document.getElementById("liczby_z_przedzialu").innerHTML=liczba;
    };