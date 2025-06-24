import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const buttonStyle = {
  minWidth: "115px",
  textTransform: "none",
  borderRadius: 0,
  fontWeight: "700",
  fontSize: "16px",
};

function ModalDeleteConfirmation() {
  const theme = useTheme();

  return (
    //  <Modal >
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
        Are u sure you want to delete this product?
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
    //   </Modal>
  );
}

export default ModalDeleteConfirmation;
