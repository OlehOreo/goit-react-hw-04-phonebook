import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '600px',
  position: 'center-top',
  fontSize: '30px',
  distance: '10px',
  timeout: 5000,
  opacity: 1,
  clickToClose: true,
  textColor: '#babffff5',
});

export { Notiflix };
