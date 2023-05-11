function calcular(event){
    event.preventDefault();
    let alcoolInput = document.getElementById("alcool").value;
    let gasolinalInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");

    
    /*
    Calculo: alcool / gasolina
    E se o resultado for menor que 0.7 compensa usar alcoll
    */

    let calculo = (alcoolInput / gasolinalInput);

    if(calculo < 0.7){
        //Aqui compensa usar alcool
       textResult.innerHTML = "Compensa usar Álcool";
    }else{
        //Compensa usar gasolina
       textResult.innerHTML = "Compensa usar Gasolina";
    }
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinalInput;
    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput;



    contentResult.classList.remove("hide")
    }
