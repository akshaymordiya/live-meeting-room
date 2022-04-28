import { REGISTERED_COMPONENTS } from "./container"

const Test = () => {
  return (
    <div>Heelo Login page</div>
  )
}

export const routes = [
  {
    key: 'main',
    path: '/',
    element: REGISTERED_COMPONENTS.DefaultLayout,
    childRoutes: [
      {
        key: 'home',
        index: true,
        element: REGISTERED_COMPONENTS.HomePage,     
      },
      {
        key: 'login',
        path: "login",
        element: Test,     
      }
    ]
  }
]