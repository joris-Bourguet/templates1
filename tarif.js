function calcul(tarif)
{
    var adulte = parseInt(tarif.adulte.value);
    var enfant1 = parseInt(tarif.enfant1.value);
    var enfant2 = parseInt(tarif.enfant2.value);
    var enfant3 = parseInt(tarif.enfant3.value);
    
    var tarif = (adulte * 50) + (enfant1 * 35) + (enfant2 * 40) + (enfant3 * 45);
    window.document.getElementById('Prix').innerHTML = "Le prix a payer est de : " + tarif +" euros par ans";
    
}