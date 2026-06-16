const canvas = document.getElementById("spiral");
const ctx = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

let angle = 0;

// Spiral keluar lalu kembali
let maxPoints = 0;
let growing = true;
let pause = 0;

// Ukuran spiral saat muncul
let scale = 1;

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spiral tumbuh
    if (growing) {

        maxPoints += 1;

        if (maxPoints >= 150) {
            maxPoints = 150;
            growing = false;
            pause = 60; // diam 1 detik
        }

    } else {

        // Tunggu sebentar sebelum mundur
        if (pause > 0) {

            pause--;

        } else {

            maxPoints -= 0.2;

            if (maxPoints <= 1) {
                maxPoints = 1;
                growing = true;
            }

        }

    }

    ctx.save();

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(scale, scale);
    ctx.rotate(angle);

    for (let i = 0; i < maxPoints; i++) {

        let r = i * 1.2;

        let x = Math.cos(i * 0.25) * r;
        let y = Math.sin(i * 0.25) * r;

        let size = 3 - (i / 80);

        if (size < 0.5) {
            size = 0.5;
        }

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);

        ctx.fillStyle = "cyan";
        ctx.fill();
    }

    ctx.restore();

    angle += 0.005;

    requestAnimationFrame(animate);
}

animate();

setTimeout(() => {
    window.location.href = "index.html";
}, 6000);