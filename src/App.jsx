import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginForm from "./Components/LoginForm";
import ProductsPage from "./Components/ProductsPage";
import ProductPreview from "./Components/ProductPreview";
import { Route, Routes, Navigate } from "react-router";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(68, 178, 111, 1)",
    },
    background: {
      default: "rgba(245, 245, 245, 1)",
      brightGreen: "rgba(14, 200, 111, 1)",
      lightGreen: "rgba(60, 215, 140, 1)",
      grey: "rgba(217, 217, 217, 1)",
      lightGrey: "rgba(216, 213, 213, 1)",
      red: "rgba(251, 0, 0, 1)",
    },
    custom: {
      lightText: " rgba(255, 255, 255, 1)",
      greenText: "rgba(5, 188, 82, 1)",
      darkGreyText: "rgba(114, 105, 105, 1)",
      lightGreyText: "rgba(165, 143, 143, 1)",
      redText: "rgba(252, 91, 0, 1)",
    },
  },
});

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/products"
          element={user ? <ProductsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/preview"
          element={user ? <ProductPreview /> : <Navigate to="/" />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
