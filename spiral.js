const canvas = document.getElementById("spiralCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let t = 0;

function animate() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  for(let i = 0; i < 180; i++) {

    const r = i * 3.5;

    ctx.beginPath();

    for(let a = 0; a <= 360; a += 60) {

      const ang = (a * Math.PI / 180) + t + i * 0.08;

      const x = cx + Math.cos(ang) * r;
      const y = cy + Math.sin(ang) * r;

      if(a === 0){
        ctx.moveTo(x,y);
      }else{
        ctx.lineTo(x,y);
      }
    }

    ctx.closePath();

    ctx.strokeStyle =
      `hsl(${(i * 4 + t * 200) % 360},100%,60%)`;

    ctx.lineWidth = 1;
    ctx.stroke();
  }

  t += 0.01;

  requestAnimationFrame(animate);
}

animate();