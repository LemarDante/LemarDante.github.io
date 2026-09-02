$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(200, 625, 50, 50, "green");
   createPlatform(400, 500, 100, 10);
   createPlatform(700, 500, 100, 10, "blue");
   createPlatform(900, 400, 100, 10, "red");
   createPlatform(1100, 300, 100, 10, "yellow");
   createPlatform(1350, 200, 50, 10, "pink");
   createPlatform(1300, 450, 100, 10, "purple");
   createPlatform(900, 225, 100, 10, "cyan");
   createPlatform(675, 175, 100, 10, "hotpink");
   createPlatform(450, 275, 100, 10, "royalblue");
   createPlatform(325, 175, 50, 10, "maroon");

    // TODO 3 - Create Collectables
   createCollectable("diamond", 1350, 150, 0.1, 0.1);
   createCollectable("max", 1350, 400, 0.1, 0.1);
   createCollectable("grace", 300, 140, 0.1, 0.1);
    
    // TODO 4 - Create Cannons
   createCannon("left", 275, 700);
   createCannon("bottom", 1250, 700);
   createCannon("right", 95, 400); 
   createCannon("bottom", 600, 800);
   createCannon("right", 200, 2500); 
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
