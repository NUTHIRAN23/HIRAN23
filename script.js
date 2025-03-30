let currentX = 0, currentY = 0, currentAngle = 0;

document.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let rocket = document.getElementById("paper-rocket");



// กำหนดจุดที่จรวดต้องไป
let keyframes = [
    { scrollStart: 0, scrollEnd: 300, target: { x: 400, y: 700 }, angle: 0 },  // what-i-do
    { scrollStart: 400, scrollEnd: 800, target: { x: -530, y: 1200 }, angle: 60 },  // program
    { scrollStart: 700, scrollEnd: 1400, target: { x: 350, y: 1400 }, angle: 0 },  // Education
    { scrollStart: 1400, scrollEnd: 1600, target: { x: -550, y: 1850 }, angle: 60 },  // Award
    { scrollStart: 1500, scrollEnd: 2650, target: { x: -350, y: 2550 }, angle: 330 }  // send-button
];

// ฟังก์ชันอัปเดตตำแหน่งของจรวด
function updateRocketPosition() {
    let scrollY = window.scrollY;

    // หาคีย์เฟรมที่ตรงกับช่วง scroll
    let currentFrame = keyframes.find(kf => scrollY >= kf.scrollStart && scrollY <= kf.scrollEnd);

    if (!currentFrame) {
        requestAnimationFrame(updateRocketPosition);
        return;
    }

    let progress = (scrollY - currentFrame.scrollStart) / (currentFrame.scrollEnd - currentFrame.scrollStart);
        let targetX = currentFrame.target.x;
        let targetY = currentFrame.target.y;
        let targetAngle = currentFrame.angle;

    // คำนวณเป้าหมายที่จรวดควรอยู่ตาม progress
    let newX = currentX + (targetX - currentX) * 0.1;
    let newY = currentY + (targetY - currentY) * 0.1;

    // คำนวณมุมหมุน
    let dx = newX - currentX;
    let dy = newY - currentY;
    currentAngle += (targetAngle - currentAngle) * 0.1;

    // อัปเดตตำแหน่งและหมุน
    rocket.style.transform = `translate(${newX}px, ${newY}px) rotate(${currentAngle}deg)`;

    currentX = newX;
    currentY = newY;

    // ทำให้ขยับตาม Scroll แบบ Smooth
    requestAnimationFrame(updateRocketPosition);
}

// เรียกฟังก์ชันครั้งแรกเพื่อเริ่มต้น
updateRocketPosition();
});
