import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logo-white-color.png";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SyncAltOutlinedIcon from "@mui/icons-material/SyncAltOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import ModalEditProduct from "../ModalEditProduct/index";
import ModalDeleteConfirmation from "../ModalDeleteConfirmation/index";

import products from "../../data.json";

const cellStyle = {
  width: "16.66%",
  textAlign: "center",
  verticalAlign: "middle",
  fontWeight: "700",
  fontSize: "16px",
};

function ProductsPage() {
  const theme = useTheme();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        padding: "20px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ marginLeft: "10px", alignSelf: "flex-start" }}>
        <img src={logo} alt="Rozetka Logo" style={{ height: "40px" }} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "30px",
          paddingLeft: "50px",
          paddingRight: "50px",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.custom.lightText,
            color: theme.palette.custom.greenText,
            minWidth: "180px",
            minHeight: "50px",
            gap: "10px",
            fontWeight: "700",
            fontSize: "16px",
            borderRadius: 0,
            textTransform: "none",
          }}
        >
          <PersonOutlineOutlinedIcon sx={{ color: "rgba(0, 0, 0, 1)" }} />
          Preview
        </Button>

        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.custom.lightText,
            color: theme.palette.custom.greenText,
            minWidth: "180px",
            minHeight: "50px",
            gap: "10px",
            fontWeight: "700",
            fontSize: "16px",
            borderRadius: 0,
            textTransform: "none",
          }}
        >
          <AddOutlinedIcon sx={{ color: "rgba(0, 0, 0, 1)" }} />
          Add product
        </Button>
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.custom.lightText,
          marginTop: "5px",
          fontWeight: "bold",
        }}
      >
        Products
      </Typography>

      <Table sx={{ marginTop: "75px", maxWidth: "870px" }}>
        <TableHead
          sx={{
            backgroundColor: theme.palette.background.brightGreen,
          }}
        >
          <TableRow>
            <TableCell
              sx={{ ...cellStyle, color: theme.palette.custom.darkGreyText }}
            >
              ID
              <SyncAltOutlinedIcon
                sx={{
                  transform: "rotate(90deg)",
                  maxHeight: "14px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{
                color: theme.palette.custom.darkGreyText,
                width: "16.66%",
                textAlign: "center",
                verticalAlign: "middle",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              Category
              <SyncAltOutlinedIcon
                sx={{
                  transform: "rotate(90deg)",
                  maxHeight: "14px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{ ...cellStyle, color: theme.palette.custom.darkGreyText }}
            >
              Name
              <SyncAltOutlinedIcon
                sx={{
                  transform: "rotate(90deg)",
                  maxHeight: "14px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{ ...cellStyle, color: theme.palette.custom.darkGreyText }}
            >
              Quantity
              <SyncAltOutlinedIcon
                sx={{
                  transform: "rotate(90deg)",
                  maxHeight: "14px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{ ...cellStyle, color: theme.palette.custom.darkGreyText }}
            >
              Price (₴)
              <SyncAltOutlinedIcon
                sx={{
                  transform: "rotate(90deg)",
                  maxHeight: "14px",
                }}
              />
            </TableCell>
            <TableCell
              sx={{ ...cellStyle, color: theme.palette.custom.darkGreyText }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{
                backgroundColor:
                  index % 2 === 0
                    ? theme.palette.background.grey
                    : theme.palette.background.lightGreen,
              }}
            >
              <TableCell
                sx={{
                  ...cellStyle,
                  color:
                    index % 2 === 0
                      ? theme.palette.custom.lightText
                      : theme.palette.custom.lightGreyText,
                }}
              >
                {row.id}
              </TableCell>
              <TableCell
                sx={{
                  ...cellStyle,
                  color:
                    index % 2 === 0
                      ? theme.palette.custom.lightText
                      : theme.palette.custom.lightGreyText,
                }}
              >
                {row.category}
              </TableCell>
              <TableCell
                sx={{
                  ...cellStyle,
                  color:
                    index % 2 === 0
                      ? theme.palette.custom.lightText
                      : theme.palette.custom.lightGreyText,
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  ...cellStyle,
                  color:
                    index % 2 === 0
                      ? theme.palette.custom.lightText
                      : theme.palette.custom.lightGreyText,
                }}
              >
                {row.quantity}
              </TableCell>
              <TableCell
                sx={{
                  ...cellStyle,
                  color:
                    index % 2 === 0
                      ? theme.palette.custom.lightText
                      : theme.palette.custom.lightGreyText,
                }}
              >
                {row.price}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    setSelectedProduct(row);
                    setOpenEdit(true);
                  }}
                >
                  {<EditIcon sx={{ color: "rgba(0, 0, 0, 1)" }} />}
                </IconButton>
                <IconButton
                  onClick={() => {
                    setSelectedProduct(row);
                    setOpenDelete(true);
                  }}
                >
                  {<DeleteIcon sx={{ color: "rgba(0, 0, 0, 1)" }} />}
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ModalEditProduct
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        product={selectedProduct}
      />
      <ModalDeleteConfirmation
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        product={selectedProduct}
      />
    </Box>
  );
}

export default ProductsPage;
