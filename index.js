const { labels, allornothing } = require('./data');

function findAllPaths(lessonJson, tag) {
  
  const paths = [];

  // find key with the tag "labels-start" or "allornothing-start"
  const startOfRoute = Object.values(lessonJson).find(
      (route) => route.tag === tag
  );

  if (!startOfRoute) {
      console.log(`Tag '${tag}' was not found in the JSON data.`);
      return paths;
  }

  const startOfRouteId = startOfRoute.id;

  console.log("Starting Route ID:", startOfRouteId);

  function traverseRoute(routeId, currentPath, visitedRoutes) {
      if (visitedRoutes.has(routeId)) {
          // Already visited this route, return to avoid infinite loop
          return;
      }

      visitedRoutes.add(routeId);

      const currentRoute = lessonJson[routeId];

      if (currentRoute.tag === "bye") {
          paths.push([...currentPath, routeId]);
          return;
      }

      const nextRoutes = currentRoute.routes.split("|");
      for (const nextRoute of nextRoutes) {
          traverseRoute(nextRoute, [...currentPath, routeId], new Set(visitedRoutes));
      }
  }

  traverseRoute(startOfRouteId, [], new Set());
  return paths;
}

function hasReachedEndpoint(lessonJson, routeId) {
  const currentRoute = lessonJson[routeId];
  return currentRoute.stage === "endpoint";
  }

module.exports = {
  findAllPaths,
  hasReachedEndpoint,
};


// Get all conversation paths for labels.json with the tag "labels-start"
const labelsPath = findAllPaths(labels, "labels-start");
console.log("Conversation path for labels:", labelsPath);

// Get all conversation paths for allornothing.json with the tag "allornothing-start"
const allOrNothingPath = findAllPaths(allornothing, "allornothing-start");
console.log("Conversation path for allornothing:", allOrNothingPath);

// Check if the user has reached an endpoint for labels.json
const userHasReachedEndpoint = hasReachedEndpoint(labels, "EQC");
console.log("Endpoint Reached:", userHasReachedEndpoint);
