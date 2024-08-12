// Ini JavaScript
var tampilHasilBMI = false; // Variabel untuk menyimpan status tampilan hasil BMI

function hitungBMI() {
    var beratBadan = parseFloat(document.getElementById("beratBadan").value);
    var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);
    
    var bmi = (beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100))).toFixed(2);

    document.getElementById("hasil-bmi").textContent = bmi;
    

    if (!tampilHasilBMI) {
        var hasilBMI = document.getElementById("hasilBMI");
        hasilBMI.style.display = "block"; // Menampilkan hasil BMI
        tampilHasilBMI = true; // Mengubah status tampilan menjadi true
    }

    if (bmi < 18.5) {
        document.getElementById("hasil-deskripsi").textContent = "Kekurangan Berat Badan";
        document.getElementById("hasil-keterangan").textContent = "Anda mengalami kekurangan berat badan.";
        document.getElementById("hasil-keterangan-detail").textContent = "Hasil BMI di antara 18.5 dan 22.9";
        document.getElementById("hasil-judul").textContent = "Hasil";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("hasil-deskripsi").textContent = "Normal (Ideal)";
        document.getElementById("hasil-keterangan").textContent = "Anda memiliki berat badan normal (ideal).";
        document.getElementById("hasil-keterangan-detail").textContent = "Hasil BMI di antara 18.5 dan 24.9";
        document.getElementById("hasil-judul").textContent = "Hasil";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("hasil-deskripsi").textContent = "Berat Badan Lebih";
        document.getElementById("hasil-keterangan").textContent = "Anda mengalami kelebihan berat badan.";
        document.getElementById("hasil-keterangan-detail").textContent = "Hasil BMI di antara 25 dan 29.9";
        document.getElementById("hasil-judul").textContent = "Hasil";
    } else if (bmi >= 30) {
        document.getElementById("hasil-deskripsi").textContent = "Kegemukan (Obesitas)";
        document.getElementById("hasil-keterangan").textContent = "Anda mengalami kegemukan (obesitas). Obesitas adalah kondisi medis yang serius yang dapat menyebabkan berbagai masalah kesehatan, termasuk penyakit jantung, stroke, diabetes, dan kanker. Jika Anda mengalami obesitas, penting untuk berbicara dengan dokter Anda tentang cara menurunkan berat badan dengan aman dan efektif.";
        document.getElementById("hasil-keterangan-detail").textContent = "Hasil BMI di antara 30 dan lebih";
        document.getElementById("hasil-judul").textContent = "Hasil";
    }
}

function resetForm() {
    document.getElementById("beratBadan").value = "";
    document.getElementById("tinggiBadan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("hasil-bmi").textContent = "";
    document.getElementById("hasil-deskripsi").textContent = "";
    document.getElementById("hasil-keterangan").textContent = "";
    document.getElementById("hasil-keterangan-detail").textContent = "";
    document.getElementById("hasil-judul").textContent = "Hasil";

    // Hide the result only when the reset button is clicked
    if (tampilHasilBMI) {
        var hasilBMI = document.getElementById("hasilBMI");
        hasilBMI.style.display = "none"; // Sembunyikan hasil BMI hanya saat tombol reset ditekan
        tampilHasilBMI = false; // Mengubah status tampilan menjadi false
    }
}
