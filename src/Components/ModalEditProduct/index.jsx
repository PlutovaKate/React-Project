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
import { useState, useEffect } from "react";

function ModalEditProduct({ open, onClose, product, onSubmit }) {
  const theme = useTheme();
  const [form, setForm] = useState({});

  useEffect(() => {
    if (product) setForm(product);
  }, [product]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 430,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme.palette.background.grey,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            backgroundColor: theme.palette.custom.lightText,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.background.grey,
              fontWeight: "700",
              fontSize: "24px",
            }}
          >
            Edit product
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>

        <Box sx={{ padding: "30px" }}>
          {[
            "category",
            "name",
            "quantity",
            "price",
            "description",
            "photo",
          ].map((field) => (
            <Box key={field} sx={{ mb: 2 }}>
              <Typography
                sx={{
                  color: theme.palette.custom.lightText,
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                {field[0].toUpperCase() + field.slice(1)}
              </Typography>
              <TextField
                name={field}
                value={form[field] || ""}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                hiddenLabel
                multiline={field === "description"}
                rows={field === "description" ? 4 : 1}
                sx={{
                  backgroundColor: theme.palette.custom.lightText,
                  borderRadius: 0,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            </Box>
          ))}

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              onClick={onClose}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.custom.darkGreyText,
                color: theme.palette.custom.lightText,
                borderRadius: 0,
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.custom.lightText,
                borderRadius: 0,
                textTransform: "none",
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

export default ModalEditProduct;
