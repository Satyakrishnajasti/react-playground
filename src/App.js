import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./shared/shared";

function App() {
  return (
    <>
      <RouterProvider router={ROUTES}>
        <div className="App"></div>;
      </RouterProvider>
      ;
    </>
  );
}

export default App;
