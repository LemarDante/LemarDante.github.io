// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }], 
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [{ x: 400, width: 100, height: 300, speedX: -2 }, { x: 200, width: 100, height: 250, speedX: -2}, { x: 800, width: 90, height: 200, speedX: -2}, { x: 1000, width: 100, height: 250, speedX: -2}, { x: 1200, width: 90, height: 300, speedX: -2}, {x: 1105, width: 90, height: 200, speedX: -2}, { x: 1295, width: 100, height: 250, speedX: -2}, { x: 900, width: 90, height: 225, speedX: -2}, { x: 600, width: 100, height: 300, speedX: -2}, { x: 705, width: 90, height: 250, speedX: -2}, { x: 305, width: 90, height: 275, speedX: -2}, { x: 505, width: 90, height: 275, speedX: -2}, { x: 105, width: 90, height: 225, speedX: -2}, { x: 0, width: 100, height: 200, speedX: -2}] 
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [{ x: 525, width: 50, height: 150, speedX: 0 }, { x: 650, width: 50, height: 150, speedX: 0}, { x: 775, width: 50, height: 150, speedX: 0}, { x: 900, width: 50, height: 150, speedX: 0}, { x: 400, width: 50, height: 150, speedX: 0 }, { x: 275, width: 50, height: 150, speedX: 0}, { x: 150, width: 50, height: 150, speedX: 0}, { x: 25, width: 50, height: 150, speedX: 0}, { x: 1025, width: 50, height: 150, speedX: 0}, { x: 1150, width: 50, height: 150, speedX: 0}, { x: 1275, width: 50, height: 150, speedX: 0}]
  },
};
