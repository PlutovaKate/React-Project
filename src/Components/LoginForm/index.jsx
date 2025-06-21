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

import { useState } from "react";

import logo from "../../assets/logo.png";
import hideImg from "../../assets/hide.png";

function LoginForm() {
  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleLogin() {
    if (!username.trim() || !password.trim()) {
      setError("Both fields are required");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    setError("");
    alert("Logged in successfully!");
    // setUsername("");
    // setPassword("");

    // const savedUser = JSON.parse(localStorage.getItem("user"));
    // console.log(savedUser.username, savedUser.password);
  }

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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  <img
                    src={hideImg}
                    alt="eye icon"
                    style={{ width: 34, height: 24 }}
                  />
                  {!showPassword && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: theme.palette.primary.main,
                        transform: "translateY(-50%) rotate(-15deg)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {error && (
          <Typography
            color="error"
            sx={{ marginBottom: "16px", textAlign: "center" }}
          >
            {error}
          </Typography>
        )}

        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
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
