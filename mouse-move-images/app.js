const cursorRounded = document.querySelector('.rounded');
const emoji = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

window.addEventListener('mousemove', (e)=>{
  cursorRounded.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

let lastUpdate = 0; // Track the last update time.

const animateCursor = (timestamp) => {
  if (timestamp - lastUpdate > 200) { // Update every 200ms.
    cursorRounded.textContent = emoji[Math.floor(Math.random() * emoji.length)];
    console.log(cursorRounded.textContent);

    lastUpdate = timestamp;
  }

  requestAnimationFrame(animateCursor); // Smooth animations.
};

requestAnimationFrame(animateCursor);