import { MDCList } from '@material/list';
import { MDCRipple } from '@material/ripple';

import './style.scss';

let value = window.location.pathname.slice(1);

if (+value > 0) {
  value = (Math.round(+value * 100) / 100).toFixed(2).replace('.00', '');

  const paypalUrl = document.querySelector('.paypal')?.getAttribute('href');
  document.querySelector('.paypal')?.setAttribute('href', `${paypalUrl}/${value}`);

  document.querySelectorAll('.value').forEach(element => element.innerHTML = value);
  document.querySelectorAll('.amount')?.forEach(amount => amount.classList.remove('hidden'));
}

document.querySelectorAll('.mdc-list').forEach(button => MDCList.attachTo(button));

document.querySelectorAll('.mdc-button').forEach(button => MDCRipple.attachTo(button));

(async () => {
  const currency = await fetch('https://ipapi.co/currency/').then(response => response.text());
  if (currency !== 'USD') document.querySelector('.us')?.classList.remove('hidden');
})();
