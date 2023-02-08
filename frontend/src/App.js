// import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import SignupPage from "./Pages/Auth/SignupPage";
import Dashboard from "./Pages/Dashboard";
import AddProductForm from "./Components/AddProductForm";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import Cart from "./Components/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="addproduct" element={<AddProductForm />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route
          path="/auth/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />
      </Routes>
      {/* <SignupPage /> */}
    </div>
  );
}

export default App;
