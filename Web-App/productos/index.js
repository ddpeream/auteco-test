const container = document.getElementById('cards1');

const container2 = container.getElementsByClassName('card0')

const h1 = document.createElement('h1');

console.log('SUMA: ', 6+6)
h1.innerHTML = `<div className="card0">
<figure>
  <img className="fig-zap" src="../../sitioWeb/img/8.jpg" alt="zapato" />
</figure>
<figure>
  <img src="../../sitioWeb/img/14.jpg" alt="zapatos" />
  <img src="../../sitioWeb/img/9.jpg" alt="zapatos" />
</figure>
<h3>Slip On Hombrte Camelot</h3>
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '15%'}}>
  <h2 style={{color: '#9a5b63'}}>$00.000</h2>
</div>
<button className="buttonCarr">AÑADIR AL CARRITO</button>
</div>
`
h1.className = 'card0'




container.appendChild(h1)
console.log(container2[2].getElementsByClassName('fig-zap')[0]);