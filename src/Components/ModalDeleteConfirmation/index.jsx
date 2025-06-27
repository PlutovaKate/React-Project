import { Box, Button, Typography, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const buttonStyle = {
  minWidth: "115px",
  textTransform: "none",
  borderRadius: 0,
  fontWeight: "700",
  fontSize: "16px",
};

function ModalDeleteConfirmation({ open, onClose, product, onConfirm }) {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: "430px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: theme.palette.custom.lightText,
          padding: "10px",
        }}
      >
        <Typography
          sx={{
            color: theme.palette.custom.greenText,
            fontWeight: "700",
            fontSize: "16px",
            textAlign: "center",
            marginTop: "35px",
          }}
        >
          Are you sure you want to delete <strong>{product?.name}</strong>?
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "45px",
            marginRight: "10px",
            gap: "24px",
          }}
        >
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              ...buttonStyle,
              backgroundColor: theme.palette.background.lightGrey,
              color: theme.palette.custom.lightText,
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              onConfirm(product.id);
              onClose();
            }}
            sx={{
              ...buttonStyle,
              backgroundColor: theme.palette.background.red,
              color: theme.palette.custom.lightText,
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalDeleteConfirmation;
