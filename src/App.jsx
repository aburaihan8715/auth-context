import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import UserAuthContextProvider from "./contexts/UserAuthContext";

const App = () => {
  return (
    <>
      <UserAuthContextProvider>
        <RouterProvider router={router} />
      </UserAuthContextProvider>
    </>
  );
};

export default App;
