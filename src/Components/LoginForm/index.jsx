import {
  Box,
  Button,
  Paper,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import logo from "../../assets/logo.png";
import hideImg from "../../assets/hide.png";

function LoginForm() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "rgba(68, 178, 111, 1)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 15,
          width: 500,
          alignSelf: "center",
          //   height: "60vh",
          backgroundColor: "rgba(245, 245, 245, 1)",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "85px" }}>
          <img src={logo} alt="Rozetka Logo" style={{ height: "40px" }} />
        </Box>

        <TextField
          sx={{
            marginBottom: "40px",
            backgroundColor: "rgba(217, 217, 217, 1)",
          }}
          label="User Name"
          name="userName"
          fullWidth
          variant="outlined"
          //   color="rgba(68, 178, 111, 1)"
          onChange={() => {}}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          variant="outlined"
          onChange={() => {}}
          sx={{
            marginBottom: "40px",
            backgroundColor: "rgba(217, 217, 217, 1)",
          }}
        />

        <img src={hideImg} />

        {/* <FormControl
          fullWidth
          sx={{
            marginBottom: "40px",
            backgroundColor: "rgba(217, 217, 217, 1)",
            borderRadius: "8px",
          }}
        >
          <InputLabel
            sx={{ color: "rgba(68, 178, 111, 1)" }}
            htmlFor="user-name"
          >
            User Name
          </InputLabel>
          <OutlinedInput
            id="user-name"
            label="User Name"
            sx={{
              color: "rgba(68, 178, 111, 1)",
            }}
          />
        </FormControl>

        <FormControl
          fullWidth
          sx={{
            marginBottom: "40px",
            backgroundColor: "rgba(217, 217, 217, 1)",
            borderRadius: "8px",
          }}
        >
          <InputLabel
            sx={{ color: "rgba(68, 178, 111, 1)" }}
            htmlFor="password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            type="password"
            label="Password"
            sx={{
              color: "rgba(68, 178, 111, 1)",
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <img
                    src={hideImg}
                    alt="eye icon"
                    style={{ width: 24, height: 24 }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}

        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "rgba(68, 178, 111, 1)",
              height: "56px",
              marginBottom: "90px",
            }}
            onClick={() => {}}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default LoginForm;
