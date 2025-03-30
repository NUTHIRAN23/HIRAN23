let currentX = 0, currentY = 0, currentAngle = 0;
let rocket = document.getElementById("paper-rocket");

let keyframes = [
  { scrollStart: 0, scrollEnd: 300, target: { x: 400, y: 700 }, angle: 0 },
  { scrollStart: 400, scrollEnd: 800, target: { x: -530, y: 1200 }, angle: 60 },
  { scrollStart: 700, scrollEnd: 1400, target: { x: 350, y: 1400 }, angle: 0 },
  { scrollStart: 1400, scrollEnd: 1600, target: { x: -550, y: 1850 }, angle: 60 },
  { scrollStart: 1500, scrollEnd: 2650, target: { x: -350, y: 2550 }, angle: 330 }
];

function updateRocketPosition() {
  let scrollY = window.scrollY;

  let currentFrame = keyframes.find(kf => scrollY >= kf.scrollStart && scrollY <= kf.scrollEnd);
  if (!currentFrame) {
    requestAnimationFrame(updateRocketPosition);
    return;
  }

  let progress = (scrollY - currentFrame.scrollStart) / (currentFrame.scrollEnd - currentFrame.scrollStart);
  let targetX = currentFrame.target.x;
  let targetY = currentFrame.target.y;
  let targetAngle = currentFrame.angle;

  let newX = currentX + (targetX - currentX) * 0.05; // ปรับให้เคลื่อนนุ่มขึ้น
  let newY = currentY + (targetY - currentY) * 0.05;
  currentAngle += (targetAngle - currentAngle) * 0.05;

  rocket.style.transform = `translate(${newX}px, ${newY}px) rotate(${currentAngle}deg)`;

  currentX = newX;
  currentY = newY;

  requestAnimationFrame(updateRocketPosition);
}

// เริ่ม animation loop
updateRocketPosition();
