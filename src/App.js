import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/nav";
import Footer from "./component/footer";
import "./App.css";
import Signup from "./component/signup";
import PrivateComponent from "./component/PrivateComponent";
import Login from "./component/login"
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Product Listing component</h1>} />
            <Route path="/add" element={<h1>Product Listing component</h1>} />
            <Route
              path="/update"
              element={<h1>update Product Listing component</h1>}
            />
            <Route path="/logout" element={<h1>logout Listing component</h1>} />
            <Route
              path="/profile"
              element={<h1>profile Listing component</h1>}
          />
          </Route>
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
