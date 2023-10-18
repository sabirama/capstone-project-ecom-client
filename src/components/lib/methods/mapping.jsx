import { Routes, Route, Link } from "react-router-dom";

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

const ObjectMapping = (items, display, containerClass) => {
  return items.map((item, index) => {
    {
      <div key={index} className={containerClass}>
        {display}
      </div>;
    }
  });
};

export { LinkMapping, RouteMapping, ObjectMapping };
