const makanan = [
    {
        nama: "Nasi Uduk",
        harga: [{ label: "", value: 38000 }],
        kategori: "NUSANTARA"
    },
    {
        nama: "Nasi Liwet",
        harga: [{ label: "", value: 45000 }],
        kategori: "NUSANTARA"
    },
    {
        nama: "Nasi Bakar ",
        harga: [
            { label: "", value: 30000 },
            { label: "", value: 32000 },
            { label: "", value: 36000 }
        ],
        kategori: "NUSANTARA"
    },
    {
        nama: "Nasi Bali",
        harga: [{ label: "", value: 38000 }],
        kategori: "NUSANTARA"
    },
    {
        nama: "Nasi Jeruk ",
        harga: [
            { label: "", value: 38000 },
            { label: "", value: 48000 }
        ],
        kategori: "NUSANTARA"
    },
    {
        nama: "Nasi Bekal",
        harga: [{ label: "", value: 26000 }],
        kategori: "NUSANTARA"
    },
    {
        nama: "Nasi Tentrm",
        harga: [{ label: "", value: 55000 }],
        kategori: "NUSANTARA"
    },
    { nama: "Chicken Teriyaki Bowl", harga: 35000, kategori: "RICE BOWL" },
    { nama: "Chicken BBQ Bowl", harga: 35000, kategori: "RICE BOWL" },
    { nama: "Spicy Beef Bowl", harga: 38000, kategori: "RICE BOWL" },
    { nama: "Beef Black Paper Bowl", harga: 38000, kategori: "RICE BOWL" },
    { nama: "Dory Matah Bowl", harga: 32000, kategori: "RICE BOWL" },
    { nama: "Nasi Goreng Kampung", harga: 38000, kategori: "NASI/MIE GORENG" },
    { nama: "Nasi Goreng Andaliman", harga: 38000, kategori: "NASI/MIE GORENG" },
    { nama: "Nasi Goreng Yangzhou Seafood", harga: 42000, kategori: "NASI/MIE GORENG" },
    { nama: "Nasi Goreng Sapi Rempah", harga: 45000, kategori: "NASI/MIE GORENG" },
    { nama: "Nasi Goreng Gila", harga: 38000, kategori: "NASI/MIE GORENG" },
    { nama: "Nasi Goreng Telur", harga: 25000, kategori: "NASI/MIE GORENG" },
    { nama: "Mie Goreng Telur", harga: 25000, kategori: "NASI/MIE GORENG" },
    { nama: "Mie Goreng Indonesia", harga: 42000, kategori: "NASI/MIE GORENG" },
    { nama: "Kwetiau Goreng Tentrm", harga: 45000, kategori: "NASI/MIE GORENG" },
    {
        nama: "Mie Ayam Standard",
        harga: [
            { label: "", value: 25000 },
            { label: "", value: 28000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Ayam Pangsit",
        harga: [
            { label: "", value: 30000 },
            { label: "", value: 33000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Ayam Bakso",
        harga: [
            { label: "", value: 30000 },
            { label: "", value: 33000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Ayam Grilled Chicken",
        harga: [
            { label: "", value: 35000 },
            { label: "", value: 38000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Ayam Chicken Katsu",
        harga: [
            { label: "", value: 35000 },
            { label: "", value: 38000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Ayam Komplit",
        harga: [
            { label: "", value: 35000 },
            { label: "", value: 38000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Ayam Gila",
        harga: [
            { label: "", value: 30000 },
            { label: "", value: 33000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Ayam Yamin (Dry)",
        harga: [
            { label: "", value: 28000 },
            { label: "", value: 31000 }
        ],
        kategori: "MIE AYAM"
    },
    {
        nama: "Mie Sapi Rempah",
        harga: [
            { label: "", value: 35000 },
            { label: "", value: 38000 }
        ],
        kategori: "MIE AYAM"
    },
    { nama: "French Fries", harga: 27000, kategori: "SNACK ASIN" },
    { nama: "Cheesy Fries", harga: 35000, kategori: "SNACK ASIN" },
    { nama: "Ubi Goreng", harga: 32000, kategori: "SNACK ASIN" },
    { nama: "Tahu Balik", harga: 30000, kategori: "SNACK ASIN" },
    { nama: "Chicken Popcorn", harga: 32000, kategori: "SNACK ASIN" },
    { nama: "Curry Puff", harga: 23000, kategori: "SNACK ASIN" },
    { nama: "Chicken Croquettes", harga: 23000, kategori: "SNACK ASIN" },
    { nama: "BBQ Chicken Wing", harga: 32000, kategori: "SNACK ASIN" },
    { nama: "Pangsit Goreng", harga: 27000, kategori: "SNACK ASIN" },
    { nama: "Nachos", harga: 27000, kategori: "SNACK ASIN" },
    { nama: "Snack Platter", harga: 48000, kategori: "SNACK ASIN" },
    { nama: "Jajan Nusantara", harga: 58000, kategori: "SNACK ASIN" },
    { nama: "Roti Bakar Srikaya", harga: 27000, kategori: "SNACK MANIS" },
    { nama: "Roti Bakar Coklat Keju", harga: 27000, kategori: "SNACK MANIS" },
    { nama: "Pisang Goreng Srikaya", harga: 30000, kategori: "SNACK MANIS" },
    { nama: "Pisang Goreng Coklat Keju", harga: 30000, kategori: "SNACK MANIS" },
    { nama: "Mantou Srikaya", harga: 30000, kategori: "SNACK MANIS" },
    { nama: "French Toast Mozarella", harga: 30000, kategori: "SNACK MANIS" }
];

// Data minuman dengan kategori dan varian harga
const minuman = [
    {
        nama: "VIrgin Mojito",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FRUITY"
    },
    {
        nama: "Tentrm's Signature tea",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FRUITY"
    },
    {
        nama: "Iced Sour Plum",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FRUITY"
    },
    {
        nama: "Lychee Yo",
        harga: [
            { label: "", value: 41000 },
            { label: "", value: 43000 },
            { label: "", value: 45000 }
        ],
        kategori: "FRUITY"
    },
    {
        nama: "ORange Zest",
        harga: [
            { label: "", value: 33000 },
            { label: "", value: 35000 },
            { label: "", value: 37000 }
        ],
        kategori: "FRUITY"
    },
    {
        nama: "Pinky Flamingo ",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FRUITY"
    },
    {
        nama: "Black Lychee",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FRUITY COFFEE"
    },
    {
        nama: "Coffee Berry",
        harga: [
            { label: "", value: 33000 },
            { label: "", value: 35000 },
            { label: "", value: 37000 }
        ],
        kategori: "FRUITY COFFEE"
    },
    {
        nama: "Orange Americano",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FRUITY COFFEE"
    },
    {
        nama: "Twilight Butterfly",
        harga: [
            { label: "", value: 33000 },
            { label: "", value: 35000 },
            { label: "", value: 37000 }
        ],
        kategori: "FLORAL"
    },
    {
        nama: "Rose Mist",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FLORAL"
    },
    {
        nama: "Osmanthus Sakura",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "FLORAL"
    },
    {
        nama: "Indo Latte",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "SWEET"
    },
    {
        nama: "Tentrm Oat Latte",
        harga: [
            { label: "", value: 44000 },
            { label: "", value: 46000 },
            { label: "", value: 48000 }
        ],
        kategori: "SWEET"
    },
    {
        nama: "Sanger",
        harga: [
            { label: "", value: 26000 },
            { label: "", value: 28000 },
            { label: "", value: 30000 }
        ],
        kategori: "SWEET"
    },
    {
        nama: "Kopi Susu Gula Aren",
        harga: [
            { label: "", value: 28000 },
            { label: "", value: 30000 },
            { label: "", value: 32000 }
        ],
        kategori: "SWEET"
    },
    {
        nama: "Sea Salt Indo Latte",
        harga: [
            { label: "", value: 41000 },
            { label: "", value: 43000 },
            { label: "", value: 45000 }
        ],
        kategori: "SWEET"
    },
    {
        nama: "Matcha Latte",
        harga: [
            { label: "", value: 33000 },
            { label: "", value: 35000 },
            { label: "", value: 37000 }
        ],
        kategori: "SWEET MATCHA"
    },
    {
        nama: "Matcha Chocolate (Matcho)",
        harga: [
            { label: "", value: 50000 },
            { label: "", value: 52000 },
            { label: "", value: 54000 }
        ],
        kategori: "SWEET MATCHA"
    },
    {
        nama: "Matcha Coconut (Manut)",
        harga: [
            { label: "", value: 41000 },
            { label: "", value: 43000 },
            { label: "", value: 45000 }
        ],
        kategori: "SWEET MATCHA"
    },
    {
        nama: "Matcha Mango (Mamang)",
        harga: [
            { label: "", value: 41000 },
            { label: "", value: 43000 },
            { label: "", value: 45000 }
        ],
        kategori: "SWEET MATCHA"
    },
    {
        nama: "Tea (Sweet/No Sugar",
        harga: [
            { label: "", value: 18000 },
            { label: "", value: 20000 },
            { label: "", value: 22000 }
        ],
        kategori: "SWEET MATCHA"
    },
    {
        nama: "Tempo Doeloe",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "SPICES"
    },
    {
        nama: "Chai Spice Latte",
        harga: [
            { label: "", value: 33000 },
            { label: "", value: 35000 },
            { label: "", value: 37000 }
        ],
        kategori: "SPICES"
    },
    {
        nama: "Spicy Brew",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "SPICES"
    },
    {
        nama: "Honey Ginger",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "SPICES"
    },
    {
        nama: "Cinnamon Tea",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "SPICES"
    },
    {
        nama: "Mocha Latte",
        harga: [
            { label: "", value: 42000 },
            { label: "", value: 50000 },
            { label: "", value: 54000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "Peanut Butter Latte",
        harga: [
            { label: "", value: 41000 },
            { label: "", value: 43000 },
            { label: "", value: 45000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "Chocolate Cold Brew",
        harga: [
            { label: "", value: 41000 },
            { label: "", value: 43000 },
            { label: "", value: 45000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "Chocolate Hazelnut",
        harga: [
            { label: "", value: 50000 },
            { label: "", value: 52000 },
            { label: "", value: 54000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "60% Dark Chocolate",
        harga: [
            { label: "", value: 50000 },
            { label: "", value: 52000 },
            { label: "", value: 54000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "Chocolate Banana",
        harga: [
            { label: "", value: 50000 },
            { label: "", value: 52000 },
            { label: "", value: 54000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "Peanut Butter Chcoolate",
        harga: [
            { label: "", value: 50000 },
            { label: "", value: 52000 },
            { label: "", value: 54000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "Chocolate Sea Salt",
        harga: [
            { label: "", value: 50000 },
            { label: "", value: 52000 },
            { label: "", value: 54000 }
        ],
        kategori: "NUTTY COCOA"
    },
    {
        nama: "Roasted Almond Latte",
        harga: [
            { label: "", value: 41000 },
            { label: "", value: 43000 },
            { label: "", value: 45000 }
        ],
        kategori: "ROASTED"
    },
    {
        nama: "Robacco Latte",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "ROASTED"
    },
    {
        nama: "Espresso",
        harga: [
            { label: "", value: 22000 },
            { label: "", value: 24000 },
            { label: "", value: 26000 }
        ],
        kategori: "BLACK"
    },
    {
        nama: "Long Black",
        harga: [
            { label: "", value: 27000 },
            { label: "", value: 29000 },
            { label: "", value: 31000 }
        ],
        kategori: "BLACK"
    },
    {
        nama: "Piccolo",
        harga: [
            { label: "", value: 28000 },
            { label: "", value: 30000 },
            { label: "", value: 32000 }
        ],
        kategori: "WHITE"
    },
    {
        nama: "Cappucino",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "WHITE"
    },
    {
        nama: "Latte",
        harga: [
            { label: "", value: 31000 },
            { label: "", value: 33000 },
            { label: "", value: 35000 }
        ],
        kategori: "WHITE"
    }
];

// Kategori makanan & minuman
const kategoriList = ["NUSANTARA", "RICE BOWL", "NASI/MIE GORENG", "MIE AYAM", "SNACK ASIN", "SNACK MANIS"];
const kategoriMinumanList = ["FRUITY","FRUITY COFFEE", "FLORAL", "SWEET","SWEET MATCHA", "SPICES", "NUTTY COCOA", "ROASTED", "BLACK", "WHITE"];

// DOM
const makananList = document.getElementById("makanan-list");
const minumanList = document.getElementById("minuman-list");
const pesananList = document.getElementById("pesanan-list");
const totalHarga = document.getElementById("total-harga");
const kategoriBtns = document.querySelectorAll('#kategori-makanan-nav .kategori-btn');
const kategoriMinumanBtns = document.querySelectorAll('#kategori-minuman-nav .kategori-btn');

let pesanan = [];
let kategoriAktif = "NUSANTARA";
let kategoriMinumanAktif = "FRUITY";

// Render makanan sesuai kategori aktif
function renderMenuMakanan() {
    makananList.innerHTML = "";
    const filtered = makanan.filter(item => item.kategori === kategoriAktif);

    filtered.forEach(item => {
        const li = document.createElement("li");
        li.className = "menu-item";

        // Jika ada beberapa harga/varian
        if (Array.isArray(item.harga) && item.harga.length > 1) {
            let hargaOptions = item.harga.map(h =>
                `<option value="${h.value}">${h.label ? h.label + " - " : ""}Rp ${h.value.toLocaleString()}</option>`
            ).join("");
            li.innerHTML = `
                <span class="menu-item-info">
                    <span class="menu-item-kategori">${item.kategori}</span>
                    ${item.nama} 
                    <select class="menu-harga-select">${hargaOptions}</select>
                </span>
                <div class="menu-item-action">
                    <button class="menu-item-btn">Tambah</button>
                </div>
            `;
            li.querySelector(".menu-item-btn").onclick = function () {
                const select = li.querySelector(".menu-harga-select");
                const harga = Number(select.value);
                tambahPesanan(item.nama, harga);
            };
        } else {
            // Jika harga tunggal
            const hargaObj = Array.isArray(item.harga) ? item.harga[0] : { value: item.harga, label: "" };
            li.innerHTML = `
                <span class="menu-item-info">
                    <span class="menu-item-kategori">${item.kategori}</span>
                    ${item.nama} 
                    <span class="menu-item-price">Rp ${hargaObj.value.toLocaleString()}</span>
                </span>
                <div class="menu-item-action">
                    <button class="menu-item-btn" onclick="tambahPesanan('${item.nama}', ${hargaObj.value})">Tambah</button>
                </div>
            `;
        }

        makananList.appendChild(li);
    });
}

// Render minuman sesuai kategori aktif DAN tampilkan varian harga bila ada
function renderMenuMinuman() {
    minumanList.innerHTML = "";
    const filtered = minuman.filter(item => item.kategori === kategoriMinumanAktif);
    filtered.forEach(item => {
        const li = document.createElement("li");
        li.className = "menu-item";
        if (Array.isArray(item.harga) && item.harga.length > 1) {
            let hargaOptions = item.harga.map(h =>
                `<option value="${h.value}">${h.label ? h.label + " - " : ""}Rp ${h.value.toLocaleString()}</option>`
            ).join("");
            li.innerHTML = `
                <span class="menu-item-info">
                    ${item.nama} 
                    <select class="menu-harga-select">${hargaOptions}</select>
                </span>
                <div class="menu-item-action">
                    <button class="menu-item-btn">Tambah</button>
                </div>
            `;
            li.querySelector(".menu-item-btn").onclick = function () {
                const select = li.querySelector(".menu-harga-select");
                const harga = Number(select.value);
                tambahPesanan(item.nama, harga);
            };
        } else {
            const hargaObj = Array.isArray(item.harga) ? item.harga[0] : { value: item.harga, label: "" };
            li.innerHTML = `
                <span class="menu-item-info">
                    ${item.nama} 
                    <span class="menu-item-price">Rp ${hargaObj.value.toLocaleString()}</span>
                </span>
                <div class="menu-item-action">
                    <button class="menu-item-btn" onclick="tambahPesanan('${item.nama}', ${hargaObj.value})">Tambah</button>
                </div>
            `;
        }
        minumanList.appendChild(li);
    });
}

// Tambah pesanan
window.tambahPesanan = function (nama, harga) {
    const existing = pesanan.find(p => p.nama === nama && p.harga === harga);
    if (existing) {
        existing.jumlah += 1;
    } else {
        pesanan.push({ nama, harga, jumlah: 1 });
    }
    renderPesanan();
};

// Kurangi pesanan
window.kurangiPesanan = function (nama, harga) {
    const idx = pesanan.findIndex(p => p.nama === nama && p.harga === harga);
    if (idx !== -1) {
        pesanan[idx].jumlah -= 1;
        if (pesanan[idx].jumlah <= 0) {
            pesanan.splice(idx, 1);
        }
    }
    renderPesanan();
};

// Tambah dari pesanan
window.tambahDariPesanan = function (nama, harga) {
    const existing = pesanan.find(p => p.nama === nama && p.harga === harga);
    if (existing) {
        existing.jumlah += 1;
    }
    renderPesanan();
};

// Render pesanan
function renderPesanan() {
    pesananList.innerHTML = "";
    let total = 0;
    if (pesanan.length === 0) {
        pesananList.innerHTML = `<li style="color:#888; text-align:center;">Belum ada pesanan</li>`;
    }
    pesanan.forEach(item => {
        const labelHarga = item.harga ? ` <span style="color:#777; font-size:0.98em;">(Rp ${item.harga.toLocaleString()})</span>` : "";
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.nama}${labelHarga} <span style="color:#1A7F64;font-weight:500;">x${item.jumlah}</span> - Rp ${(item.harga * item.jumlah).toLocaleString()}</span>
            <span class="pesanan-controls">
                <button class="kurangi-btn" title="Kurangi" onclick="kurangiPesanan('${item.nama}', ${item.harga})">–</button>
                <button class="tambah-btn" title="Tambah" onclick="tambahDariPesanan('${item.nama}', ${item.harga})">+</button>
            </span>
        `;
        pesananList.appendChild(li);
        total += item.harga * item.jumlah;
    });
    totalHarga.textContent = `Total: Rp ${total.toLocaleString()}`;
}

// Event listener kategori makanan
kategoriBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        kategoriBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        kategoriAktif = this.getAttribute('data-kategori');
        renderMenuMakanan();
    });
});

// Event listener kategori minuman
kategoriMinumanBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        kategoriMinumanBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        kategoriMinumanAktif = this.getAttribute('data-kategori');
        renderMenuMinuman();
    });
});

// Inisialisasi
renderMenuMakanan();
renderMenuMinuman();
renderPesanan();