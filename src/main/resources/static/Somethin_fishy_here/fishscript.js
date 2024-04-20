/*Disco-music gjør det om til loop*/
/*Attribution: name and url*/
/*https://freesound.org/people/XHALE303/sounds/528849/*/
/*Tutorial*/
/*https://www.youtube.com/watch?v=ZFqtk0Tsnsc*/

/*Canvas (background) size*/
window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    console.log('here:', ctx);
    console.log('Window loaded!');

    class Fishe {
        /*Get canvas size*/
        constructor(canvasWidth, canvasHeight) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;

            /*Get fishe from html - specify sprite size*/
            this.image = document.getElementById('fishe');
            this.spriteWidth = 380;
            this.spriteHeight = 380;
            this.width = -this.spriteWidth;
            this.height = -this.spriteHeight;
            this.scale = 1;

            // Initial position to start from the top-left corner
            this.x = 0;
            this.y = 0;
            this.minFrame = 0;
            this.maxFrame = 13; // Ensure maxFrame is set to exclude the last frame
            this.frame = 0;
            this.frameX = 0;
            this.frameY = 0; // Adjusted to start from 0

            // Speed of movement
            this.speed = 2;
            // Direction of movement: 1 for down-right, -1 for up-left
            this.directionX = 2;
            this.directionY = 1.5;
        }



        /**/
        draw(context) {
            context.drawImage(this.image,
                this.frameX * this.spriteWidth, this.frameY * this.spriteHeight,
                this.spriteWidth, this.spriteHeight,
                this.x, this.y, this.width * this.scale, this.height * this.scale);
            function updateDiscoColors() {
                const discoDiv = document.getElementById('disco');
                const color1 = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
                const color2 = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
                discoDiv.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
            }
            setInterval(updateDiscoColors, 7000); // Changes the colors every 1000 milliseconds (1 second)

        }


            update() {
            // Sprite animation update logic
            if (this.frame < this.maxFrame) this.frame++;
            else this.frame = this.minFrame;
            this.frameX = this.frame % 4;
            this.frameY = Math.floor(this.frame / 4);


            // Update position for diagonal movement
            this.x += this.speed * this.directionX;
            this.y += this.speed * this.directionY;

            // Reverse direction if the sprite hits the canvas boundaries
            if (this.x + this.width * this.scale > this.canvasWidth || this.x < 0) {
                this.directionX *= -1;
            }
            if (this.y + this.height * this.scale > this.canvasHeight || this.y < 0) {
                this.directionY *= -1;
            }
        }

        setAnimation(newMinFrame, newMaxFrame) {
            this.minFrame = newMinFrame;
            this.maxFrame = newMaxFrame;
            this.frame = this.minFrame;
        }
    }

    const fishe = new Fishe(canvas.width, canvas.height);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fishe.draw(ctx);
        fishe.update();
        requestAnimationFrame(animate);
    }
    animate();

    const Zeroh = document.getElementById('zero');
    Zeroh.addEventListener('click', function() {
        fishe.setAnimation(0, 14);
    });
});

