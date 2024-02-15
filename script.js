document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var mostrarPopupButton = document.getElementById('mostrarPopup');

    mostrarPopupButton.addEventListener('click', function () {
        popup.classList.add('active');
    });

    document.addEventListener('click', function (event) {
        if (!popup.contains(event.target) && event.target !== mostrarPopupButton) {
            popup.classList.remove('active');
        }
    });
});

function redirectToSite(siteUrl) {
    window.location.href = siteUrl;
}

document.getElementById('botaoRolagemConheca').addEventListener('click', function() {
    var pontoDestinoConheca = document.getElementById('pontoDestinoConheca');
    
    window.scrollTo({
      top: pontoDestinoConheca.offsetTop,
      behavior: 'smooth' 
    });
  });
