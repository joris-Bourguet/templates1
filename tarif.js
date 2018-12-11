
// tarif

function calcul(tarif)
{
    var adulte = parseInt(tarif.adulte.value);
    var enfant1 = parseInt(tarif.enfant1.value);
    var enfant2 = parseInt(tarif.enfant2.value);
    var enfant3 = parseInt(tarif.enfant3.value);
    
    window.document.getElementById('Prix').innerHTML = "Le total à payer est de : " +((adulte * 50) + (enfant1 * 35) + (enfant2 * 40) + (enfant3 * 45))+ " €";
    
}


// google map 

var map;
function initmap(){

    var ales = {
        lat : 44.6425208,
        lng :  6.4133631
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center : ales,
        zoom : 7
    });
    var marker = new google.maps.Marker({
        position : ales,
        map: map
    })
}