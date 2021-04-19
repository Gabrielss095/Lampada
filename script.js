const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !isLampBroken () ){
    lamp.src = 'acesa.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
    lamp.src = 'apagada.jpg';

    }
}

function lampBroken () {
    lamp.src = 'quebrada.jpg';
}

turnOff.addEventListener ('click', lampOff);
turnOn.addEventListener ('click', lampOn);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);
