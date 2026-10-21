function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
for (var i = 0; i < scenery.building.instances.length; i++) {
 var buildingInstance = scenery.building.instances[i];
buildingInstance.x += buildingInstance.speedX + currentLevel.speed;
if (buildingInstance.x + buildingInstance.width < 0) {
buildingInstance.x = scenery.building.loopWidth;
}
}

for (var j = 0; j < scenery.lamp.instances.length; j++) {
var lampInstance = scenery.lamp.instances[j];
lampInstance.x += lampInstance.speedX + currentLevel.speed;
if (lampInstance.x + lampInstance.width < 0) {
  lampInstance.x = scenery.lamp.loopWidth;
        }
    }
  }
function generateLevel() {
  // TODO 3: Generate the current level's game objects
function generateLevel() {
    for (var i = 0; i < currentLevel.gameObjects.length; i++) {
        var currentObject = currentLevel.gameObjects[i];

        create(currentObject);
        
        console.log("Object Type: " + currentObject.type + ", Kind: " + currentObject.kind);
    }
}
}
function create(obj) {
  // TODO 4: Create a game object based on its type and kind
function create(gameObject) {
  switch (obj.type) {
    case "obstacle":
      makeObstacle(obj);
      break;
    case "enemy":
      makeEnemy(obj);
      break;
    case "powerup":
      makePowerup(obj);
      break;
    case "goal":
      makeGoal(obj);
      break;
    case "platform":
      makePlatform(obj);
      break;
    default:
      console.warn("Unknown object type:", obj.type);
  }
}
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  const matchedObjects = [];

  for (let i = 0; i < gameObjects.length; i++) {
    const currentObject = gameObjects[i];

    if (currentObject.type === type) {

      matchedObjects.push(currentObject);
    }
  }

  return matchedObjects;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
function moveGameObjects(objectsArray) {
  for (let i = 0; i < objectsArray.length; i++) {
    
    const currentObject = objectsArray[i];

    currentObject.position = currentObject.position + currentObject.speed - level.speed;
  }
}
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
   for (var i = 0; i < gameObjects.length; i++) {

        var currentObject = gameObjects[i];

        for (var j = 0; j < projectiles.length; j++) {

            var currentProjectile = projectiles[j];

            if (isCollidingWithProjectile(currentProjectile, currentObject) === true) {

                handleProjectileCollisions(i, j);
            }
        }
    }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
    for (var i = 0; i < gameObjects.length; i++) {
        // Store the current game object
        var currentObject = gameObjects[i];

        // Skip platforms (only run if the object type is NOT "platform")
        if (currentObject.type !== "platform") {
            // Check for a generic collision
            if (isGenericCollision(currentObject) === true) {
                // Handle the collision
                handleHallebotGenericCollisions(i);
            }
        }
    }
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
    currentLevelIndex += 1;

    gameObjects = [];

    if (currentLevelIndex >= levels.length) {
        player.winConditionMet = true;
    } else {
        currentLevel = levels[currentLevelIndex];
    }
}
