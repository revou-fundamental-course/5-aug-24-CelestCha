function hitungBMI() {
    var beratBadan = parseFloat(document.getElementById("beratBadan").value);
    var tinggiBadan = parseFloat(document.getElementById("tinggiBadan").value);
    var jenisKelamin = document.querySelector('input[name="Jenis-kelamin"]:checked');
    var usia = parseFloat(document.getElementById("usia").value);

    if (!jenisKelamin) {
        alert("Silakan pilih jenis kelamin.");
        return;
    }

    var bmi = (beratBadan / ((tinggiBadan / 100) * (tinggiBadan / 100))).toFixed(2);

    document.getElementById("hasil-bmi").textContent = bmi;

    var hasilDeskripsi = "";
    var hasilKeterangan = "";

    if (bmi < 18.5) {
        hasilDeskripsi = "Kekurangan Berat Badan";
        hasilKeterangan = "Anda mengalami kekurangan berat badan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        hasilDeskripsi = "Normal (Ideal)";
        hasilKeterangan = "Anda memiliki berat badan normal (ideal).";
    } else if (bmi >= 25 && bmi <= 29.9) {
        hasilDeskripsi = "Berat Badan Lebih";
        hasilKeterangan = "Anda mengalami kelebihan berat badan.";
    } else if (bmi >= 30) {
        hasilDeskripsi = "Kegemukan (Obesitas)";
        hasilKeterangan = "Anda mengalami kegemukan (obesitas). Obesitas adalah kondisi medis yang serius yang dapat menyebabkan berbagai masalah kesehatan, termasuk penyakit jantung, stroke, diabetes, dan kanker. Jika Anda mengalami obesitas, penting untuk berbicara dengan dokter Anda tentang cara menurunkan berat badan dengan aman dan efektif.";
    }

    var keterangan = jenisKelamin.value === "Laki-laki" ? "Laki-laki" : "Perempuan";
    keterangan += ", usia " + usia + " tahun";

    document.getElementById("hasil-deskripsi").textContent = hasilDeskripsi;
    document.getElementById("hasil-keterangan").textContent = hasilKeterangan;
    document.getElementById("hasil-keterangan-detail").textContent = "Hasil BMI: " + bmi + " - " + keterangan;

    if (!tampilHasilBMI) {
        var hasilBMI = document.getElementById("hasilBMI");
        hasilBMI.style.display = "block";
        tampilHasilBMI = true;
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
    document.getElementById("hasil-judul").textContent = "Hasil"; // Add this line to reset the title too

    var hasilBMI = document.getElementById("hasilBMI");
    hasilBMI.style.display = "none";
    tampilHasilBMI = false;

    // Reset radio button
    var radioButtons = document.getElementsByName("Jenis-kelamin");
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}