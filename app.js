
let produk = [
["Nike Sport Red","850.000","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"],
["Classic Sneakers","550.000","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700"],
["Running Shoes","450.000","https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=700"],
["Casual Shoes","350.000","https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=700"]
];

produk.forEach((p,i)=>{
document.getElementById("daftar").innerHTML += `
<div class="card">
<img src="${p[2]}">
<div class="isi">
<h3>${p[0]}</h3>
<p class="harga">Rp ${p[1]}</p>
<button onclick="buka(${i})">Lihat Detail</button>

<div id="form${i}" style="display:none">
<p>Sepatu nyaman dan stylish.</p>
<input id="nama${i}" placeholder="Nama Pemesan">
<textarea id="alamat${i}" placeholder="Alamat Pengiriman"></textarea>

<select id="ukuran${i}">
<option value="">Pilih Ukuran</option>
${[38,39,40,41,42,43,44,45].map(x=>`<option>${x}</option>`).join("")}
</select>

<button onclick="pesan(${i})">Pesan via WhatsApp</button>
</div>
</div>
</div>`;
});

function buka(i){
let f=document.getElementById("form"+i);
f.style.display=f.style.display==="none"?"block":"none";
}

function pesan(i){
let nama=document.getElementById("nama"+i).value;
let alamat=document.getElementById("alamat"+i).value;
let ukuran=document.getElementById("ukuran"+i).value;

if(!nama||!alamat||!ukuran){
alert("Lengkapi data pemesanan!");
return;
}

let teks=`Halo Kaisan Shoes!
Nama: ${nama}
Sepatu: ${produk[i][0]}
Harga: Rp ${produk[i][1]}
Ukuran: ${ukuran}
Alamat: ${alamat}`;

window.open("https://wa.me/6285285761927?text="+encodeURIComponent(teks),"_blank");
}
