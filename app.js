
/* =========================================
   MODAGT - PRODUCTOS
========================================= */

const PRODUCTS = [
  {id:1,name:"Blusa Satinada",category:"blusas",price:"Q 149.00",image:"blusa_blusa_satinada.jpg",description:"Blusa Satinada. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:2,name:"Blusa Casual",category:"blusas",price:"Q 119.00",image:"blusa_blusa_casual.jpg",description:"Blusa Casual. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:3,name:"Blusa Manga Globo",category:"blusas",price:"Q 139.00",image:"blusa_blusa_manga_globo.jpg",description:"Blusa Manga Globo. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:4,name:"Blusa Básica",category:"blusas",price:"Q 89.00",image:"blusa_blusa_basica.jpg",description:"Blusa Básica. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:5,name:"Blusa Floral",category:"blusas",price:"Q 129.00",image:"blusa_blusa_floral.jpg",description:"Blusa Floral. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:6,name:"Blusa de Lino",category:"blusas",price:"Q 159.00",image:"blusa_blusa_de_lino.jpg",description:"Blusa de Lino. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:7,name:"Blusa Elegante",category:"blusas",price:"Q 179.00",image:"blusa_blusa_elegante.jpg",description:"Blusa Elegante. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:8,name:"Top Ribbed",category:"blusas",price:"Q 99.00",image:"blusa_top_ribbed.jpg",description:"Top Ribbed. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:9,name:"Blusa Oversize",category:"blusas",price:"Q 135.00",image:"blusa_blusa_oversize.jpg",description:"Blusa Oversize. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:10,name:"Blusa Cuello V",category:"blusas",price:"Q 115.00",image:"blusa_blusa_cuello_v.jpg",description:"Blusa Cuello V. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},

  {id:11,name:"Jeans Clásico",category:"pantalones",price:"Q 229.00",image:"pantalon_jeans_clasico.jpg",description:"Jeans Clásico. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:12,name:"Pantalón Wide Leg",category:"pantalones",price:"Q 249.00",image:"pantalon_pantalon_wide_leg.jpg",description:"Pantalón Wide Leg. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:13,name:"Pantalón Recto",category:"pantalones",price:"Q 219.00",image:"pantalon_pantalon_recto.jpg",description:"Pantalón Recto. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:14,name:"Jeans Mom Fit",category:"pantalones",price:"Q 239.00",image:"pantalon_jeans_mom_fit.jpg",description:"Jeans Mom Fit. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:15,name:"Pantalón de Lino",category:"pantalones",price:"Q 199.00",image:"pantalon_pantalon_de_lino.jpg",description:"Pantalón de Lino. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:16,name:"Pantalón Cargo",category:"pantalones",price:"Q 259.00",image:"pantalon_pantalon_cargo.jpg",description:"Pantalón Cargo. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:17,name:"Jeans Skinny",category:"pantalones",price:"Q 219.00",image:"pantalon_jeans_skinny.jpg",description:"Jeans Skinny. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:18,name:"Pantalón Palazzo",category:"pantalones",price:"Q 245.00",image:"pantalon_pantalon_palazzo.jpg",description:"Pantalón Palazzo. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:19,name:"Pantalón Formal",category:"pantalones",price:"Q 279.00",image:"pantalon_pantalon_formal.jpg",description:"Pantalón Formal. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:20,name:"Short Denim",category:"pantalones",price:"Q 149.00",image:"pantalon_short_denim.jpg",description:"Short Denim. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},

  {id:21,name:"Vestido Floral",category:"vestidos",price:"Q 249.00",image:"vestido_vestido_floral.jpg",description:"Vestido Floral. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:22,name:"Vestido Midi",category:"vestidos",price:"Q 279.00",image:"vestido_vestido_midi.jpg",description:"Vestido Midi. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:23,name:"Vestido Casual",category:"vestidos",price:"Q 219.00",image:"vestido_vestido_casual.jpg",description:"Vestido Casual. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:24,name:"Vestido Elegante",category:"vestidos",price:"Q 329.00",image:"vestido_vestido_elegante.jpg",description:"Vestido Elegante. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:25,name:"Vestido Camisero",category:"vestidos",price:"Q 259.00",image:"vestido_vestido_camisero.jpg",description:"Vestido Camisero. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:26,name:"Vestido de Verano",category:"vestidos",price:"Q 199.00",image:"vestido_vestido_de_verano.jpg",description:"Vestido de Verano. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:27,name:"Vestido Negro",category:"vestidos",price:"Q 289.00",image:"vestido_vestido_negro.jpg",description:"Vestido Negro. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:28,name:"Vestido Satinado",category:"vestidos",price:"Q 319.00",image:"vestido_vestido_satinado.jpg",description:"Vestido Satinado. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:29,name:"Vestido Corto",category:"vestidos",price:"Q 229.00",image:"vestido_vestido_corto.jpg",description:"Vestido Corto. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:30,name:"Vestido Largo",category:"vestidos",price:"Q 349.00",image:"vestido_vestido_largo.jpg",description:"Vestido Largo. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},

  {id:31,name:"Tenis Urbanos",category:"zapatos",price:"Q 299.00",image:"zapato_tenis_urbanos.jpg",description:"Tenis Urbanos. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:32,name:"Tacones Clásicos",category:"zapatos",price:"Q 329.00",image:"zapato_tacones_clasicos.jpg",description:"Tacones Clásicos. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:33,name:"Tenis Blancos",category:"zapatos",price:"Q 279.00",image:"zapato_tenis_blancos.jpg",description:"Tenis Blancos. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:34,name:"Sandalias Casual",category:"zapatos",price:"Q 189.00",image:"zapato_sandalias_casual.jpg",description:"Sandalias Casual. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:35,name:"Botines Urbanos",category:"zapatos",price:"Q 359.00",image:"zapato_botines_urbanos.jpg",description:"Botines Urbanos. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:36,name:"Mocasines",category:"zapatos",price:"Q 289.00",image:"zapato_mocasines.jpg",description:"Mocasines. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:37,name:"Tenis Deportivos",category:"zapatos",price:"Q 319.00",image:"zapato_tenis_deportivos.jpg",description:"Tenis Deportivos. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:38,name:"Sandalias de Tiras",category:"zapatos",price:"Q 199.00",image:"zapato_sandalias_de_tiras.jpg",description:"Sandalias de Tiras. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:39,name:"Tacón Elegante",category:"zapatos",price:"Q 379.00",image:"zapato_tacon_elegante.jpg",description:"Tacón Elegante. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:40,name:"Balerinas",category:"zapatos",price:"Q 219.00",image:"zapato_balerinas.jpg",description:"Balerinas. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},

  {id:41,name:"Bolso Casual",category:"accesorios",price:"Q 249.00",image:"accesorio_bolso_casual.jpg",description:"Bolso Casual. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:42,name:"Collar Minimalista",category:"accesorios",price:"Q 89.00",image:"accesorio_collar_minimalista.jpg",description:"Collar Minimalista. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:43,name:"Bolso de Hombro",category:"accesorios",price:"Q 279.00",image:"accesorio_bolso_de_hombro.jpg",description:"Bolso de Hombro. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:44,name:"Aretes Dorados",category:"accesorios",price:"Q 69.00",image:"accesorio_aretes_dorados.jpg",description:"Aretes Dorados. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:45,name:"Cinturón Clásico",category:"accesorios",price:"Q 99.00",image:"accesorio_cinturon_clasico.jpg",description:"Cinturón Clásico. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:46,name:"Pulsera Delicada",category:"accesorios",price:"Q 75.00",image:"accesorio_pulsera_delicada.jpg",description:"Pulsera Delicada. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:47,name:"Bolso Mini",category:"accesorios",price:"Q 199.00",image:"accesorio_bolso_mini.jpg",description:"Bolso Mini. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:48,name:"Lentes de Sol",category:"accesorios",price:"Q 129.00",image:"accesorio_lentes_de_sol.jpg",description:"Lentes de Sol. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:49,name:"Collar de Capas",category:"accesorios",price:"Q 119.00",image:"accesorio_collar_de_capas.jpg",description:"Collar de Capas. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."},
  {id:50,name:"Cartera Elegante",category:"accesorios",price:"Q 169.00",image:"accesorio_cartera_elegante.jpg",description:"Cartera Elegante. Una pieza seleccionada de ModaGT para complementar tu estilo. Disponible en varias opciones según existencia."}
];


/* =========================================
   FUNCIONES GENERALES
========================================= */

const money = n => 'Q ' + Number(n).toFixed(2);

const priceNumber = s =>
  Number(String(s).replace(/[^\d.]/g,'')) || 0;

const read = (key,fallback=[]) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch(e) {
    return fallback;
  }
};

const save = (key,value) =>
  localStorage.setItem(key,JSON.stringify(value));

let cart = read('modagtCarrito',[]);
let favorites = read('modagtFavoritos',[]);

const $ = id => document.getElementById(id);


/* =========================================
   MENSAJES Y CARRITO
========================================= */

function toast(msg){
  const el = $('toast');
  if(!el)return;

  el.textContent = msg;
  el.classList.add('show');

  setTimeout(()=>{
    el.classList.remove('show');
  },2300);
}

function updateCount(){
  const el = $('cartCount');

  if(el){
    el.textContent = cart.reduce((a,b)=>a+b.qty,0);
  }
}

function addCart(id,size='M',color='Según fotografía'){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p)return;

  const found = cart.find(
    x=>x.id===id && x.size===size && x.color===color
  );

  if(found){
    found.qty++;
  }else{
    cart.push({id,qty:1,size,color});
  }

  save('modagtCarrito',cart);
  updateCount();
  toast('¡Agregado a tu carrito!');
}


/* =========================================
   FAVORITOS
========================================= */

function toggleFavorite(id){

  favorites = favorites.includes(id)
    ? favorites.filter(x=>x!==id)
    : [...favorites,id];

  save('modagtFavoritos',favorites);

  document.querySelectorAll(
    `[data-favorite-id="${id}"]`
  ).forEach(btn=>{

    const active = favorites.includes(id);

    btn.classList.toggle('favorite-active',active);
    btn.innerHTML = active ? '♥' : '♡';

    btn.setAttribute(
      'aria-label',
      active ? 'Quitar de favoritos' : 'Agregar a favoritos'
    );

    btn.setAttribute('aria-pressed',String(active));
  });

  const modalFavorite = $('modalFavorite');

  if(modalFavorite && Number(modalFavorite.dataset.id)===id){

    const active = favorites.includes(id);

    modalFavorite.classList.toggle('favorite-active',active);

    modalFavorite.innerHTML = active
      ? '♥ Guardado en favoritos'
      : '♡ Agregar a favoritos';
  }

  toast(
    favorites.includes(id)
      ? 'Agregado a favoritos'
      : 'Quitado de favoritos'
  );
}


/* =========================================
   TARJETAS DE PRODUCTOS
========================================= */

function productCard(p){

  const favorite = favorites.includes(p.id);

  return `<article class="product-card">

    <div class="product-image"
      role="button"
      tabindex="0"
      aria-label="Ver ${p.name}"
      onclick="viewProduct(${p.id})"
      onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();viewProduct(${p.id})}">

      <img
        src="img/${p.image}"
        alt="${p.name}"
        onerror="this.style.display='none'">

      <span class="product-badge">MODAGT</span>

      <button
        class="heart-btn ${favorite?'favorite-active':''}"
        data-favorite-id="${p.id}"
        onclick="event.stopPropagation();toggleFavorite(${p.id})"
        aria-label="${favorite?'Quitar de favoritos':'Agregar a favoritos'}"
        aria-pressed="${favorite}">
        ${favorite?'♥':'♡'}
      </button>

      <div class="image-overlay">
        <span>Ver producto</span>
      </div>

    </div>

    <div class="product-info">

      <span class="product-category">${p.category}</span>

      <h3>${p.name}</h3>

      <div class="product-bottom">
        <span class="price">${p.price}</span>
      </div>

      <div class="card-actions">
        <button onclick="viewProduct(${p.id})">Ver producto</button>
        <button onclick="addCart(${p.id})">Agregar +</button>
      </div>

    </div>

  </article>`;
}

function renderGrid(items,target){

  if(!target)return;

  target.innerHTML = items.length
    ? items.map(productCard).join('')
    : '<div class="empty-state">No encontramos productos con esa búsqueda.</div>';
}

function renderCurrent(){

  const grid = $('productGrid');

  if(grid){

    const cat = grid.dataset.category;

    let list = PRODUCTS.filter(p=>p.category===cat);

    const q = ($('searchInput')?.value||'').toLowerCase();

    list = list.filter(
      p=>p.name.toLowerCase().includes(q)
    );

    const sort = $('sortSelect')?.value;

    if(sort==='low'){
      list.sort((a,b)=>priceNumber(a.price)-priceNumber(b.price));
    }

    if(sort==='high'){
      list.sort((a,b)=>priceNumber(b.price)-priceNumber(a.price));
    }

    if(sort==='name'){
      list.sort((a,b)=>a.name.localeCompare(b.name));
    }

    renderGrid(list,grid);

    const total = $('productTotal');

    if(total){
      total.textContent = list.length+' productos';
    }
  }
}


/* =========================================
   DETALLES DEL PRODUCTO
========================================= */

function viewProduct(id){

  const p = PRODUCTS.find(x=>x.id===id);
  if(!p)return;

  const modal = $('productModal');
  const content = $('modalContent');

  const favorite = favorites.includes(id);

  content.innerHTML = `
    <div class="modal-product-layout">

      <img
        src="img/${p.image}"
        alt="${p.name}"
        onerror="this.style.display='none'">

      <div>

        <span class="eyebrow">
          ${p.category.toUpperCase()} / MODAGT
        </span>

        <h2>${p.name}</h2>

        <b class="price">${p.price}</b>

        <p>${p.description}</p>

        <button
          type="button"
          id="modalFavorite"
          data-id="${p.id}"
          class="modal-favorite ${favorite?'favorite-active':''}"
          onclick="toggleFavorite(${p.id})">

          ${favorite
            ? '♥ Guardado en favoritos'
            : '♡ Agregar a favoritos'}

        </button>

        <label>
          Talla
          <select id="modalSize">
            <option>XS</option>
            <option>S</option>
            <option selected>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </label>

        <label>
          Color
          <select id="modalColor">
            <option>Según fotografía</option>
            <option>Negro</option>
            <option>Blanco</option>
            <option>Beige</option>
            <option>Rosa</option>
          </select>
        </label>

        <button
          class="btn btn-dark full"
          onclick="addCart(${p.id},$('modalSize').value,$('modalColor').value);$('productModal').classList.remove('show')">

          Agregar al carrito →

        </button>

      </div>
    </div>
  `;

  modal.classList.add('show');
}


/* =========================================
   TOTALES DEL CARRITO
========================================= */

function cartTotals(){

  let subtotal = cart.reduce((sum,item)=>{

    const p = PRODUCTS.find(x=>x.id===item.id);

    return sum + (
      p ? priceNumber(p.price)*item.qty : 0
    );

  },0);

  return {
    subtotal,
    shipping:subtotal>0?25:0,
    total:subtotal+(subtotal>0?25:0)
  };
}


/* =========================================
   MOSTRAR COMPRA
========================================= */

function renderCheckout(){

  const items = $('checkoutItems');

  if(!items)return;

  if(!cart.length){

    items.innerHTML = `
      <div class="empty-state">
        Tu carrito está vacío.
        <a class="text-link" href="blusas.html">
          Explora las prendas →
        </a>
      </div>
    `;

  }else{

    items.innerHTML = cart.map(item=>{

      const p = PRODUCTS.find(x=>x.id===item.id);

      return p ? `

        <div class="checkout-item">

          <div>
            <strong>${p.name}</strong>

            <small>
              Talla: ${item.size} ·
              Color: ${item.color} ·
              ${p.price}
            </small>
          </div>

          <div class="quantity-controls">

            <button onclick="changeQty(${item.id},-1,'${item.size}')">
              −
            </button>

            <b>${item.qty}</b>

            <button onclick="changeQty(${item.id},1,'${item.size}')">
              +
            </button>

          </div>

        </div>

      ` : '';

    }).join('');
  }

  const s = cartTotals();
  const sum = $('orderSummary');

  if(sum){

    sum.innerHTML = `

      <div class="summary-line">
        <span>Subtotal</span>
        <b>${money(s.subtotal)}</b>
      </div>

      <div class="summary-line">
        <span>Envío</span>
        <b>${s.shipping?money(s.shipping):'—'}</b>
      </div>

      <div class="summary-line summary-total">
        <span>Total</span>
        <b>${money(s.total)}</b>
      </div>

      <p class="form-note">
        Costo de envío demostrativo: Q 25.00 por pedido.
      </p>
    `;
  }
}


/* =========================================
   CAMBIAR CANTIDADES
========================================= */

function changeQty(id,delta,size){

  const item = cart.find(
    x=>x.id===id && x.size===size
  );

  if(!item)return;

  item.qty += delta;

  if(item.qty<=0){
    cart = cart.filter(x=>x!==item);
  }

  save('modagtCarrito',cart);

  renderCheckout();
  updateCount();
}


/* =========================================
   REGISTRAR COMPRA
========================================= */

function submitOrder(e){

  e.preventDefault();

  if(!cart.length){
    toast('Agrega productos antes de confirmar.');
    return;
  }

  const form = new FormData(e.target);
  const totals = cartTotals();

  const order = {

    number:'MGT-'+Date.now().toString().slice(-8),

    date:new Date().toLocaleString('es-GT'),

    customer:Object.fromEntries(form.entries()),

    items:cart.map(x=>({
      ...x,
      product:PRODUCTS.find(p=>p.id===x.id)
    })),

    ...totals
  };

  save('modagtUltimoPedido',order);

  let history = read('modagtPedidos',[]);

  history.push(order);

  save('modagtPedidos',history);

  cart = [];

  save('modagtCarrito',cart);

  location.href='factura.html';
}


/* =========================================
   GENERAR FACTURA
========================================= */

function renderInvoice(){

  const el = $('invoiceContent');

  if(!el)return;

  const o = read('modagtUltimoPedido',null);

  if(!o)return;

  const c = o.customer;

  el.innerHTML = `

    <div class="invoice-head">

      <div>
        <span class="eyebrow">
          MODAGT · COMPROBANTE DE COMPRA
        </span>

        <h2>ModaGT</h2>

        <p>Guatemala, Guatemala</p>
      </div>

      <div>
        <b>FACTURA / PEDIDO</b>
        <p>No. ${o.number}</p>
        <p>${o.date}</p>
      </div>

    </div>

    <h3>Datos del cliente</h3>

    <p>
      <b>${c.nombre}</b><br>
      ${c.correo} · ${c.telefono}
    </p>

    <p>
      <b>Dirección de envío:</b>
      ${c.direccion}, ${c.municipio}, ${c.departamento}
      <br>
      <b>Referencia:</b>
      ${c.referencia||'No indicada'}
    </p>

    <p>
      <b>Método de pago:</b> ${c.pago}
    </p>

    <table>

      <thead>
        <tr>
          <th>Producto</th>
          <th>Talla / color</th>
          <th>Cant.</th>
          <th>Precio</th>
        </tr>
      </thead>

      <tbody>

        ${o.items.map(i=>`

          <tr>
            <td>${i.product.name}</td>
            <td>${i.size} / ${i.color}</td>
            <td>${i.qty}</td>
            <td>
              ${money(priceNumber(i.product.price)*i.qty)}
            </td>
          </tr>

        `).join('')}

      </tbody>

    </table>

    <div class="invoice-total">

      <p>Subtotal: ${money(o.subtotal)}</p>
      <p>Envío: ${money(o.shipping)}</p>
      <h2>Total: ${money(o.total)}</h2>

    </div>

    <p class="form-note">
      Comprobante demostrativo de ModaGT.
      No constituye una factura fiscal ni confirma un cobro real.
    </p>

  `;
}


/* =========================================
   ARMAR OUTFITS
========================================= */

function outfitProduct(id){
  return PRODUCTS.find(p=>p.id===Number(id));
}

function fillOutfitSelect(id,list){

  const el = $(id);

  if(!el)return;

  el.innerHTML = list.map(p=>`
    <option value="${p.id}">
      ${p.name} · ${p.price}
    </option>
  `).join('');
}

function selectedOutfit(){

  return [
    'outfitTop',
    'outfitBottom',
    'outfitShoes',
    'outfitAccessory'
  ].map(id=>outfitProduct($(id)?.value)).filter(Boolean);
}

function renderOutfit(){

  const preview = $('outfitPreview');

  if(!preview)return;

  const pieces = selectedOutfit();

  preview.innerHTML = pieces.map(p=>`

    <div class="outfit-piece">

      <img
        src="img/${p.image}"
        alt="${p.name}"
        onerror="this.style.display='none'">

      <strong>${p.name}</strong>

      <small>${p.price}</small>

    </div>

  `).join('');

  const total = pieces.reduce(
    (sum,p)=>sum+priceNumber(p.price),
    0
  );

  const totalEl = $('outfitTotal');

  if(totalEl){
    totalEl.textContent = money(total);
  }
}

function setupOutfit(){

  if(!$('outfitTop'))return;

  const main = PRODUCTS.filter(
    p=>p.category==='blusas'||p.category==='vestidos'
  );

  fillOutfitSelect('outfitTop',main);

  fillOutfitSelect(
    'outfitBottom',
    PRODUCTS.filter(p=>p.category==='pantalones')
  );

  fillOutfitSelect(
    'outfitShoes',
    PRODUCTS.filter(p=>p.category==='zapatos')
  );

  fillOutfitSelect(
    'outfitAccessory',
    PRODUCTS.filter(p=>p.category==='accesorios')
  );

  [
    'outfitTop',
    'outfitBottom',
    'outfitShoes',
    'outfitAccessory'
  ].forEach(id=>{
    $(id).addEventListener('change',renderOutfit);
  });

  renderOutfit();

  $('addOutfit').addEventListener('click',()=>{

    const pieces = selectedOutfit();

    if(pieces.length!==4){
      toast('Selecciona las cuatro piezas del outfit.');
      return;
    }

    const size = $('outfitSize').value;

    pieces.forEach(p=>{
      addCart(p.id,size,'Según fotografía');
    });

    toast('¡Outfit agregado! Revisa tu compra.');
  });
}


/* =========================================
   CARRUSEL DEL BANNER PRINCIPAL
========================================= */

function setupHeroCarousel(){

  const hero = $('heroCarrusel');

  if(!hero)return;

  const slides = hero.querySelectorAll('.hero-slide');
  const dotsContainer = $('heroDots');
  const prevButton = $('heroPrev');
  const nextButton = $('heroNext');

  if(!slides.length || !dotsContainer)return;

  let indiceActual = 0;
  let intervalo = null;
  let pausado = false;

  // Crear puntos indicadores
  slides.forEach((slide,index)=>{

    const dot = document.createElement('button');

    dot.type = 'button';
    dot.className = 'hero-dot';

    dot.setAttribute(
      'aria-label',
      'Mostrar imagen '+(index+1)
    );

    dot.addEventListener('click',()=>{

      mostrarSlide(index);
      reiniciarCarrusel();

    });

    dotsContainer.appendChild(dot);

  });

  const dots = dotsContainer.querySelectorAll('.hero-dot');

  // Mostrar una fotografía
  function mostrarSlide(index){

    slides[indiceActual].classList.remove('active');
    dots[indiceActual].classList.remove('active');

    indiceActual = (index+slides.length)%slides.length;

    slides[indiceActual].classList.add('active');
    dots[indiceActual].classList.add('active');

  }

  // Avanzar
  function siguienteSlide(){
    mostrarSlide(indiceActual+1);
  }

  // Retroceder
  function anteriorSlide(){
    mostrarSlide(indiceActual-1);
  }

  // Detener el temporizador
  function detenerCarrusel(){
    clearInterval(intervalo);
    intervalo = null;
  }

  // Iniciar el temporizador
  function iniciarCarrusel(){

    detenerCarrusel();

    if(!pausado && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
      intervalo = setInterval(siguienteSlide,5000);
    }
  }

  // Reiniciar el temporizador después de una interacción
  function reiniciarCarrusel(){
    iniciarCarrusel();
  }

  // Botón siguiente
  if(nextButton){

    nextButton.addEventListener('click',()=>{

      siguienteSlide();
      reiniciarCarrusel();

    });
  }

  // Botón anterior
  if(prevButton){

    prevButton.addEventListener('click',()=>{

      anteriorSlide();
      reiniciarCarrusel();

    });
  }

  // Pausar cuando el cursor está sobre el banner
  hero.addEventListener('mouseenter',()=>{

    pausado = true;
    detenerCarrusel();

  });

  hero.addEventListener('mouseleave',()=>{

    pausado = false;
    iniciarCarrusel();

  });

  // Mostrar primera imagen
  mostrarSlide(0);

  // Comenzar automáticamente
  iniciarCarrusel();

}


/* =========================================
   INICIALIZACIÓN GENERAL
========================================= */

function setup(){

  updateCount();

  // Menú para celular
  const toggle = $('menuToggle');

  if(toggle){

    toggle.addEventListener('click',()=>{
      $('mainNav').classList.toggle('open');
    });

  }

  // Menús desplegables
  document.querySelectorAll('.nav-drop-btn').forEach(btn=>{

    btn.addEventListener('click',()=>{
      btn.parentElement.classList.toggle('open');
    });

  });

  // Carrusel del banner
  setupHeroCarousel();

  // Cerrar ventana de producto
  const close = $('modalClose');

  if(close){

    close.onclick = ()=>{
      $('productModal').classList.remove('show');
    };

  }

  // Cerrar al hacer clic fuera del producto
  const backdrop = $('productModal');

  if(backdrop){

    backdrop.addEventListener('click',e=>{

      if(e.target===backdrop){
        backdrop.classList.remove('show');
      }

    });

  }

  // Catálogo
  if($('productGrid')){

    renderCurrent();

    $('searchInput').addEventListener('input',renderCurrent);

    $('sortSelect').addEventListener('change',renderCurrent);

  }

  // Productos destacados
  if($('featuredProducts')){

    renderGrid(
      [
        PRODUCTS[0],
        PRODUCTS[10],
        PRODUCTS[20],
        PRODUCTS[30],
        PRODUCTS[40],
        PRODUCTS[5]
      ],
      $('featuredProducts')
    );

  }

  // Armado de outfits
  setupOutfit();

  // Compra
  if($('checkoutItems')){

    renderCheckout();

    $('checkoutForm').addEventListener(
      'submit',
      submitOrder
    );

  }

  // Factura
  if($('invoiceContent')){
    renderInvoice();
  }

  // Imprimir factura
  if($('printInvoice')){

    $('printInvoice').onclick = ()=>{
      window.print();
    };

  }

  // Contacto
  if($('contactForm')){

    $('contactForm').addEventListener('submit',e=>{

      e.preventDefault();

      const messages = read('modagtMensajes',[]);

      messages.push(
        Object.fromEntries(new FormData(e.target).entries())
      );

      save('modagtMensajes',messages);

      e.target.reset();

      toast('¡Mensaje guardado! Gracias por escribirnos.');

    });

  }

}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded',setup);
