
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

function myMap() {
    var mapProp= {
        center : new google.maps.LatLng(45.5069261,6.6746882),
        zoom : 12
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position : plagne,
        map : map
    });
}
  

  /*  var myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function(e) {

        alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
    
        e.preventDefault();
    
    });
*/

function hoveractivite2(txtInfo)
{
    window.document.getElementById('description').innerHTML = txtInfo;
}

function hoveractivitejdl(txtInfo)
{
    window.document.getElementById('description').innerHTML = txtInfo;
}

function hovermichel(txtInfo)
{
    window.document.getElementById('description').innerHTML = txtInfo;
}

function hoverjannine(txtInfo)
{
    window.document.getElementById('description').innerHTML = txtInfo;
}

function hoverCompet(txtInfo)
{
    window.document.getElementById('description').innerHTML = txtInfo;
}

