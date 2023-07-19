import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/firebase-authentication">
          <Route index element={<HomePage />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
