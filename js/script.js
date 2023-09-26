function clickBtn(fichario) {
    const selected = document.querySelector('.clicked');
    const ficharioClass = fichario.className;

    if ( ficharioClass.includes('fich-2')){
        selected.style.marginLeft = '203px'
    } else if(ficharioClass.includes('fich-3')){
        selected.style.marginLeft = '405.5px'
    } else {
        selected.style.marginLeft = '0px'
    }
}