const DrawDot = (canvasRef, width, height) => {
  // globals
  const DOT_COUNT = 8;
  const MIN_DOT_SIZE = 5;
  const DOT_SIZE_RANGE = 25;
  const MAX_VELOCITY = 2;
  const MOUSE_DISTANCE = 50;
  const BORDER_GROW_SPEED = 1;
  let linkDot = null;

  //   set up canvas
  const canvas = canvasRef.current;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvasRef.current.getContext("2d");

  window.addEventListener("resize", (e) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });

  //   set up start
  let dotArray = [];
  let linksArray = [];

  // track mouse
  let mouse = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  //    track click
  let click = {
    x: undefined,
    y: undefined,
  };

  window.addEventListener("mousedown", (e) => {
    click.x = e.x;
    click.y = e.y;
  });

  function init() {
    dotArray = [];
    linksArray = [];

    for (let i = 0; i < DOT_COUNT; i++) {
      // set up dot radius
      let radius = Math.random() * DOT_SIZE_RANGE + MIN_DOT_SIZE;
      let x = Math.random() * (window.innerWidth - radius * 2) + radius;
      let y = Math.random() * (window.innerHeight - radius * 2) + radius;
      let dx = (Math.random() - 0.5) * MAX_VELOCITY;
      let dy = (Math.random() - 0.5) * MAX_VELOCITY;

      let border = new Border(x, y, radius);
      dotArray.push(new Dot(radius, x, y, dx, dy, border));
    }
    animate();
  }
  // function drawBlock() {
  //   let x = (window.innerWidth - 150) / 2;
  //   let aa = document.body.scrollTop + window.innerHeight / 1.33;
  //   let y = aa - 150 / 2;

  //   ctx.fillStyle = "#080808";
  //   ctx.shadowBlur = 0;
  //   ctx.fillRect(x, y, 150, 150);
  // }

  // Border class
  class Border {
    constructor(x, y, radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      //for resizing
      this.initialRadius = radius;
      this.radiusTarget = radius + radius / 2;
      this.counted = false;
    }

    draw = () => {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.shadowBlur = 10;
      // 0pi ~ 2pi (startAngle)
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      ctx.strokeStyle = "#D4D4D4";
      ctx.stroke();
    };

    update = (newX, newY) => {
      this.x = newX;
      this.y = newY;
      this.draw();
    };

    expand = () => {
      this.radius += BORDER_GROW_SPEED;
    };

    shrink = () => {
      this.radius -= BORDER_GROW_SPEED;
    };
  }

  //   Dot class
  class Dot {
    constructor(radius, x, y, dx, dy, border) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.minRadius = radius;
      this.border = border;
      this.color = "#D4D4D4";

      this.border.draw();
    }
    draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fill();
    };
    update() {
      if (
        this.x + this.radius >= window.innerWidth ||
        this.x - this.radius <= 0
      ) {
        // to make the dots bounce off wall
        this.dx = -this.dx;
      }

      if (
        this.y + this.radius >= window.innerHeight ||
        this.y - this.radius <= 0
      ) {
        // to make the dots bounce off wall
        this.dy = -this.dy;
      }

      //move the dots
      this.x += this.dx;
      this.y += this.dy;

      //mouse interactivity

      if (
        mouse.x - this.x < MOUSE_DISTANCE &&
        mouse.x - this.x > -MOUSE_DISTANCE &&
        mouse.y - this.y < MOUSE_DISTANCE &&
        mouse.y - this.y > -MOUSE_DISTANCE &&
        this.border.radius < this.border.radiusTarget
      ) {
        this.border.expand();
      } else if (this.border.radius > this.border.initialRadius) {
        this.border.shrink();
      }

      //mouse click
      if (
        click.x < this.x + this.radius &&
        click.x > this.x - this.radius &&
        click.y < this.y + this.radius &&
        click.y > this.y - this.radius
      ) {
        if (linkDot) {
          createLink(this);
        } else {
          linkDot = this;
        }
        click.x = undefined;
        click.y = undefined;
      }
      this.draw();
      this.border.update(this.x, this.y);
    }
  }

  function renderActiveLink() {
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.shadowBlur = 0;
    ctx.moveTo(linkDot.x, linkDot.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.strokeStyle = "#D4D4D4";
    ctx.stroke();
  }

  function createLink(target) {
    linksArray.push(new Link(linkDot, target));
    linkDot = null;
  }

  class Link {
    constructor(start, end) {
      this.start = start;
      this.end = end;

      // countEnd(this.end);
    }
    draw() {
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.shadowBlur = 10;
      ctx.moveTo(this.start.x, this.start.y);
      ctx.lineTo(this.end.x, this.end.y);
      ctx.strokeStyle = "#D4D4D4";
      ctx.stroke();
    }
  }

  // let num = 0;
  // function countEnd(end) {
  //   if (end) {
  //     num++;
  //     if (num >= 3) {
  //       showtext();
  //     }
  //   }
  // }

  // function showText() {
  //   const next = document.querySelector(".next");
  //   next.classList.add("show");
  // }

  function animate() {
    requestAnimationFrame(animate);
    // to make the dots look like circles
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < dotArray.length; i++) {
      dotArray[i].update();
    }

    for (let i = 0; i < linksArray.length; i++) {
      linksArray[i].draw();
    }
    if (linkDot) {
      renderActiveLink();
    }
    // drawBlock();
  }
  init();
};
export default DrawDot;
