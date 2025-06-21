import {
  Box,
  Button,
  Paper,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import logo from "../../assets/logo.png";
import hideImg from "../../assets/hide.png";

function LoginForm() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 14,
          width: 500,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "85px" }}>
          <img src={logo} alt="Rozetka Logo" style={{ height: "40px" }} />
        </Box>

        <FormControl
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: "40px",
            backgroundColor: theme.palette.custom.greyBackground,
          }}
        >
          <InputLabel
            htmlFor="user-name"
            sx={{ color: theme.palette.primary.main }}
          >
            User Name
          </InputLabel>
          <OutlinedInput
            id="user-name"
            label="User Name"
            sx={{
              height: "56px",
              color: theme.palette.primary.main,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.custom.greyBackground,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            }}
          />
        </FormControl>

        <FormControl
          fullWidth
          variant="outlined"
          sx={{
            marginBottom: "40px",
            backgroundColor: theme.palette.custom.greyBackground,
          }}
        >
          <InputLabel
            htmlFor="password"
            sx={{ color: theme.palette.primary.main }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type="password"
            label="Password"
            sx={{
              height: "56px",
              color: theme.palette.primary.main,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.custom.greyBackground,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <img
                    src={hideImg}
                    alt="eye icon"
                    style={{ width: 34, height: 24 }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.custom.lightText,
              height: "56px",
              marginBottom: "90px",
              fontWeight: "bold",
              fontSize: "24px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginForm;
