document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("cube").appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();

    const showApp = () => {
        loader.classList.add("hidden");
        app.classList.remove("hidden")
    };

    const minimumLoaderTime = 1000;
    const startTime = new Date().getTime();

    window.addEventListener("load", () => {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;

        if (elapsedTime < minimumLoaderTime) {
            setTimeout(showApp, minimumLoaderTime - elapsedTime);
        } else {
            showApp();
        }
    });
});

document.querySelectorAll(".parallax-card").forEach((card) => {
    VanillaTilt.init(card, {
        max: 25,
        reverse: true,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
    });
});
document.querySelectorAll('.parallax-card').forEach(card => {
    card.addEventListener('click', (event) => {
        const url = event.currentTarget.dataset.href;
        if (url) {
            window.open(url, '_blank');
        }
    });
});

var c = document.getElementById("c");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++)
    drops[x] = 1;


function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0";
    ctx.font = font_size + "px PxPlus IBM VGA8";
    for (var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

setInterval(draw, 25);

const sequences = [['z', 'x', 'c'], ['я', 'ч', 'с']];
let currentPos = 0;
let currentSeq = null;

function handleKeyPress(event) {
  const keyPressed = event.key.toLowerCase();
  if (currentSeq === null) {
    currentSeq = sequences.find(seq => seq[currentPos] === keyPressed);
    if (!currentSeq) {
      currentPos = 0;
      currentSeq = null
      return;
    }
  }
  if (keyPressed === currentSeq[currentPos]) {
    currentPos++;
    if (currentPos === currentSeq.length) {
      window.open('https://youtu.be/pd7_MGAiD6c?t=15', '_blank');
      currentPos = 0;
      currentSeq = null;
    }
  } else {
    currentPos = 0;
    currentSeq = null;
  }
}

document.addEventListener('keydown', handleKeyPress);
function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
  

  function updateTitle() {
    const randomString = generateRandomString(64);
    document.title = randomString;
  }
  
  setInterval(updateTitle, 50);
  