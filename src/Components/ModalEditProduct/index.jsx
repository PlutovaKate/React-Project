import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

export default function EditProductModal({ open, onClose, product }) {
  const theme = useTheme();

  const inputStyle = {
    background: theme.palette.custom.lightText,
    borderRadius: 0,
    marginBottom: "20px",
    height: "30px",
    "& .MuiOutlinedInput-root": {
      height: "30px",
      padding: 0,
    },
    "& input": {
      height: "30px",
      padding: "0 8px",
      boxSizing: "border-box",
      color: theme.palette.custom.greenText,
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "430px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: theme.palette.custom.lightText,
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.background.grey,
              fontWeight: "700px",
              fontSize: "24px",
            }}
          >
            Edit product
          </Typography>
          <IconButton>
            <CloseIcon onClick={onClose} sx={{ color: "rgba(0, 0, 0, 1)" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            backgroundColor: theme.palette.background.grey,
            padding: "30px",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: theme.palette.custom.lightText,
                fontWeight: "700px",
                fontSize: "14px",
              }}
            >
              Category
            </Typography>
            <TextField
              defaultValue={product?.category || ""}
              variant="outlined"
              fullWidth
              hiddenLabel
              sx={inputStyle}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: theme.palette.custom.lightText,
                fontWeight: "700px",
                fontSize: "14px",
              }}
            >
              Name
            </Typography>
            <TextField
              defaultValue={product?.name || ""}
              variant="outlined"
              fullWidth
              hiddenLabel
              sx={inputStyle}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: theme.palette.custom.lightText,
                fontWeight: "700px",
                fontSize: "14px",
              }}
            >
              Quantity
            </Typography>
            <TextField
              defaultValue={product?.quantity || ""}
              type="number"
              variant="outlined"
              fullWidth
              hiddenLabel
              sx={inputStyle}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: theme.palette.custom.lightText,
                fontWeight: "700px",
                fontSize: "14px",
              }}
            >
              Price
            </Typography>
            <TextField
              defaultValue={product?.price || ""}
              type="number"
              variant="outlined"
              fullWidth
              hiddenLabel
              sx={inputStyle}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: theme.palette.custom.lightText,
                fontWeight: "700px",
                fontSize: "14px",
              }}
            >
              Description
            </Typography>
            <TextField
              multiline
              rows={5}
              fullWidth
              variant="outlined"
              hiddenLabel
              sx={{
                ...inputStyle,
                height: "auto",
                "& .MuiOutlinedInput-root": {
                  padding: 0,
                },
                "& textarea": {
                  color: theme.palette.custom.greenText,
                  fontWeight: "bold",
                  padding: "8px",
                },
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
              gap: "24px",
            }}
          >
            <Button
              onClick={onClose}
              variant="contained"
              sx={{
                minWidth: "115px",
                backgroundColor: theme.palette.custom.darkGreyText,
                color: theme.palette.custom.lightText,
                textTransform: "none",
                borderRadius: 0,
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              sx={{
                minWidth: "115px",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.custom.lightText,
                textTransform: "none",
                borderRadius: 0,
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
