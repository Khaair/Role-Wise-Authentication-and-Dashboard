import "./App.css";
import { Provider } from "react-redux";
import reduxStore from "./store/store";
import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/signup";
import User from "./pages/user";
import PrivateRoute from "./auth/private-route";

const store = reduxStore.store;


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>

          <Routes>
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>

          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;


