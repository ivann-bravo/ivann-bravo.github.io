function navbarResponsiveChecked(clase, tamanoADesplazar) {
    const claseADesplazar = document.querySelector(clase);
    const checkbox = document.querySelector('#menu');
    
    if (checkbox.checked) {
        claseADesplazar.style.marginTop = tamanoADesplazar;
    } else {
        claseADesplazar.style.marginTop = '0';
    }
}