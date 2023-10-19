import { Routes, Route, Link } from "react-router-dom";

// mapping links to page also able to exlude links by name and add classes to list container and link container
const LinkMapping = (routes, exclude, ListClass, LinkClass) => {
  const newRoute = routes.filter((route) => {
    return exclude.every((name) => name !== route.name);
  });

  return newRoute.map((route, index) => {
    return (
      <li key={index} className={ListClass}>
        <Link to={route.path} className={LinkClass}>
          {route.name}
        </Link>
      </li>
    );
  });
};

// mapping routes and adding exlusion incase a route will be put to other group or needs passable data
const RouteMapping = (routes, exclude) => {
  const newRoute = routes.filter((route) => {
    return exclude.every((name) => name !== route.name);
  });

  return (
    <Routes>
      {newRoute.map((route, index) => {
        return <Route key={index} path={route.path} element={route.element} />;
      })}
    </Routes>
  );
};

// for mapping multiple items into the display
const ObjectMapping = (objectsToMap, DisplayObject) => {
  objectsToMap.map((object, index) => {
    return (
      <div key={index}>
        <DisplayObject props={object} />
      </div>
    );
  });
};

export { LinkMapping, RouteMapping, ObjectMapping };
