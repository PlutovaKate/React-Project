import { ThemeProvider, createTheme } from "@mui/material/styles";
import LoginForm from "./Components/LoginForm";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(68, 178, 111, 1)",
    },
    background: {
      default: "rgba(245, 245, 245, 1)",
    },
    custom: {
      greyBackground: "rgba(217, 217, 217, 1)",
      lightText: " rgba(255, 255, 255, 1)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginForm />
    </ThemeProvider>
  );
}

export default App;
