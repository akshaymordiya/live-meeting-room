import { useCallback } from "react";
import { Routes, Route } from "react-router-dom"
import { routes } from "./config/routes"
//lodash
import has from "lodash/has";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";


export const AppRoutes = () => {
  
  const prepareRoute = useCallback(({ element: Element, ...route }) => {
    return (
      <Route
        key={route?.key}
        path={route?.path}
        index={has(route, "index")}
        element={<Element />}
      >
        {!isEmpty(route?.childRoutes) && mappedRoutes(route?.childRoutes)}
      </Route>
    )
  },[]);

  const mappedRoutes = useCallback((routes) => {
    return map(routes, (route) => {
      return prepareRoute(route)
    })
  },[]);

  return (
    <Routes>
      {!isEmpty(routes) && mappedRoutes(routes)}
    </Routes>
  ) 
}