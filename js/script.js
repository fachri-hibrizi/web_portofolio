// Function untuk menyapa user
function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName && userName.trim() !== '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

// Event listener untuk form submission
document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk refresh halaman

    // Mengambil nilai dari setiap input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi Sederhana
    if (name === '' || email === '' || phone === '' || message === '') {
        alert("Please fill in all fields.");
        return; // Menghentikan fungsi jika ada field yang kosong
    }

    // Validasi format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Menampilkan nilai yang disubmit
    const outputContent = `
Name: ${name}
Email: ${email}
Phone Number: ${phone}
Message: ${message}
    `;

    document.getElementById('output-content').textContent = outputContent;
    document.getElementById('form-output').classList.remove('hidden');

    // Menghapus nilai form setelah sukses
    this.reset();
});


// Logic untuk Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Opsional: Tutup menu saat link diklik
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Memanggil fungsi sapaan saat halaman dimuat
    welcomeSpeech();
});