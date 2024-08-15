//Fungsi untuk menghitung BMI berdasarkan input yang diberikan
function hitungBMI() {
    var beratBadan = parseFloat(document.getElementById("beratBadan").value);
    var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);
    var jenisKelamin = document.querySelector('input[name="Jenis-kelamin"]:checked');
    var usia = parseFloat(document.getElementById("usia").value);

    //Validasi apakah jenis kelamin dipilih
    if (!jenisKelamin) {
        alert("Silakan pilih jenis kelamin.");
        return;
    }

    if (beratBadan <= 0 || tinggiBadan <= 0 || usia <= 0) {  
            alert("Jangan diisi 0 dong ><");
            return
        }

    //Menghitung BMI berdasarkan rumus
    var bmi = (beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100))).toFixed(2);

    //Menampilkan hasil BMI pada halaman
    document.getElementById("hasil-bmi").textContent = bmi;

    var hasilDeskripsi = "";
    var hasilKeterangan = "";

    //Menentukan deskripsi berdasarkan kategori BMI
    if (bmi < 18.5) {
        hasilDeskripsi = "Kekurangan Berat Badan";
        hasilKeterangan = "Wah, kamu kurus banget! Jangan lupa makan yang banyak, ya!.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasilDeskripsi = "Normal (Ideal)";
        hasilKeterangan = "Mantap! Berat badanmu ideal, nih!.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        hasilDeskripsi = "Berat Badan Lebih";
        hasilKeterangan = "Hmm, sepertinya kamu perlu sedikit mengurangi asupan kalori.";
    } else if (bmi >= 30) {
        hasilDeskripsi = "Kegemukan (Obesitas)";
        hasilKeterangan = "Anda mengalami kegemukan (obesitas). Obesitas adalah kondisi medis yang serius yang dapat menyebabkan berbagai masalah kesehatan, termasuk penyakit jantung, stroke, diabetes, dan kanker. Jika Anda mengalami obesitas, penting untuk berbicara dengan dokter Anda tentang cara menurunkan berat badan dengan aman dan efektif.";
    }

    var keterangan = jenisKelamin.value === "Laki-laki" ? "Laki-laki" : "Perempuan";
    keterangan += ", usia " + usia + " tahun";

    //Menampilkan deskripsi hasil BMI
    document.getElementById("hasil-deskripsi").textContent = hasilDeskripsi;
    document.getElementById("hasil-keterangan").textContent = hasilKeterangan;
    document.getElementById("hasil-keterangan-detail").textContent = "Hasil BMI: " + bmi + " - " + keterangan;

    //Menampilkan hasil BMI jika belum ditampilkan sebelumnya
    if (!tampilHasilBMI) {
        var hasilBMI = document.getElementById("hasilBMI");
        hasilBMI.style.display = "block";
        tampilHasilBMI = true;
        
}
}

//Fungsi untuk mereset formulir input dari hasil BMI
function resetForm() {
    //Mereset nilai input dari hasil BMI
    document.getElementById("beratBadan").value = "";
    document.getElementById("tinggiBadan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("hasil-bmi").textContent = "";
    document.getElementById("hasil-deskripsi").textContent = "";
    document.getElementById("hasil-keterangan").textContent = "";
    document.getElementById("hasil-keterangan-detail").textContent = "";
    document.getElementById("hasil-judul").textContent = "Hasil"; 

    //Menyembunyikan hasil BMI
    var hasilBMI = document.getElementById("hasilBMI");
    hasilBMI.style.display = "none";
    tampilHasilBMI = false;

    //Mereset pilihan radio button jenis kelamin
    var radioButtons = document.getElementsByName("Jenis-kelamin");
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
}
}


