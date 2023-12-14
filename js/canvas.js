
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];



class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speed = Math.random() * 1 + 1;
    }
    update() {
        this.y -= this.speed;
        if(this.y < 0){
            this.y = canvas.height + 10;
            this.x = Math.random() * canvas.width;
        }
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fill();
    }
}


for (let i = 0; i < 10; i++) {
    particleArray.push(new Particle());
}

function manageParticles() {
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        for (let j = 0; j < particleArray.length; j++) {
            const dx = particleArray[i].x - particleArray[j].x;
            const dy = particleArray[i].y - particleArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 500) {
                ctx.beginPath();
                ctx.strokeStyle = "#fff";
                ctx.lineWidth = 0.1;
                ctx.moveTo(particleArray[i].x, particleArray[i].y);
                ctx.lineTo(particleArray[j].x, particleArray[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    manageParticles();
    requestAnimationFrame(animate);
}
animate();