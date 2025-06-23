import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginForm from "./Components/LoginForm";
import ProductsPage from "./Components/ProductsPage";
import ModalEditProduct from "./Components/ModalEditProduct";

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
    },
    custom: {
      lightText: " rgba(255, 255, 255, 1)",
      greenText: "rgba(5, 188, 82, 1)",
      darkGreyText: "rgba(114, 105, 105, 1)",
      lightGreyText: "rgba(165, 143, 143, 1)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <LoginForm /> */}
      {/* <ProductsPage /> */}
      <ModalEditProduct />
    </ThemeProvider>
  );
}

export default App;
