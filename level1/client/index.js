import $ from 'jquery';
import store from './store';
import { powerUpdate, marchUpdate } from './actions-creators';

window.$ = window.jQuery = $;

// Actualizar interfaz con los datos del store actualizados
function render () {

  const { power, rpm, march } = store.getState();

  // RPM
  $('#rpm').text(rpm);

  // Opción: power
  $('#power').text(power ? 'Apagar' : 'Arrancar');
  $('#power').removeClass('alert');
  if (power) {
    $('#power').addClass('alert');
  }

  // Opciones de marcha
  $('.march').removeClass('success');
  $(`.march[data-n=${march}]`).addClass('success');

  // Animación
  if (power && march) {
    const keyframes = march > 0 ? 'wheelRun' : 'wheelRunBackwards';
    const time = 1000 / rpm;
    $('.car .wheel').css('animation', `${keyframes} ${time}s linear infinite normal`);
  }
  else {
    $('.car .wheel').css('animation', '');
  }
}

// Evento: cuando se trate de encender/apagar el carro
$('#power').on('click', function () {
  const { power } = store.getState();
  store.dispatch(powerUpdate(!power));
});

// Evento: cuando se trate de cambiar la marcha del vehículo
$('.march').on('click', function () {
  const march = Number($(this).data('n'));
  store.dispatch(marchUpdate(march));
});

render();

store.subscribe(render);
