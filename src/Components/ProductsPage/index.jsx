import { useState } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import PreviewIcon from "@mui/icons-material/Preview";
import AddIcon from "@mui/icons-material/Add";
import SortIcon from "@mui/icons-material/Sort";
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../../store/slices/productsSlice.js";

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
import ModalAddProduct from "../ModalAddProduct/index";

const cellStyle = {
  width: "16.66%",
  textAlign: "center",
  verticalAlign: "middle",
  fontWeight: "700",
  fontSize: "16px",
};

function ProductsPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const handleAdd = (product) => {
    console.log("Dispatching add", product);
    dispatch(addProduct(product));
  };
  const handleEdit = (product) => dispatch(updateProduct(product));
  const handleDelete = (id) => dispatch(deleteProduct(id));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        padding: "20px",
        flexDirection: "column",
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
          padding: "30px 50px 0",
        }}
      >
        <Button
          onClick={() => navigate("/preview")}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.custom.lightText,
            color: theme.palette.custom.greenText,
            minWidth: 180,
            minHeight: 50,
            gap: "10px",
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 0,
            textTransform: "none",
          }}
        >
          <PreviewIcon sx={{ color: "black" }} />
          Preview
        </Button>

        <Button
          onClick={() => {
            setSelectedProduct(null);
            setOpenAdd(true);
          }}
          variant="contained"
          sx={{
            backgroundColor: theme.palette.custom.lightText,
            color: theme.palette.custom.greenText,
            minWidth: 180,
            minHeight: 50,
            gap: "10px",
            fontWeight: 700,
            fontSize: 16,
            borderRadius: 0,
            textTransform: "none",
          }}
        >
          <AddIcon sx={{ color: "black" }} />
          Add product
        </Button>
      </Box>

      <Typography
        variant="h2"
        sx={{
          color: theme.palette.custom.lightText,
          mt: 1,
          fontWeight: "bold",
        }}
      >
        Products
      </Typography>

      <Table sx={{ marginTop: "75px", maxWidth: "870px" }}>
        <TableHead
          sx={{ backgroundColor: theme.palette.background.brightGreen }}
        >
          <TableRow>
            {["ID", "Category", "Name", "Quantity", "Price (₴)", ""].map(
              (col) => (
                <TableCell
                  key={col}
                  sx={{
                    ...cellStyle,
                    color: theme.palette.custom.darkGreyText,
                  }}
                >
                  {col}
                  {col && (
                    <SortIcon
                      sx={{ transform: "rotate(90deg)", fontSize: 16 }}
                    />
                  )}
                </TableCell>
              )
            )}
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
              {[row.id, row.category, row.name, row.quantity, row.price].map(
                (value, i) => (
                  <TableCell
                    key={i}
                    sx={{
                      ...cellStyle,
                      color:
                        index % 2 === 0
                          ? theme.palette.custom.lightText
                          : theme.palette.custom.lightGreyText,
                    }}
                  >
                    {value}
                  </TableCell>
                )
              )}
              <TableCell>
                <IconButton
                  onClick={() => {
                    setSelectedProduct(row);
                    setOpenEdit(true);
                  }}
                >
                  <EditIcon sx={{ color: "black" }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setSelectedProduct(row);
                    setOpenDelete(true);
                  }}
                >
                  <DeleteIcon sx={{ color: "black" }} />
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
        onSubmit={handleEdit}
      />
      <ModalDeleteConfirmation
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        product={selectedProduct}
        onConfirm={handleDelete}
      />
      <ModalAddProduct
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onSubmit={handleAdd}
      />
    </Box>
  );
}

export default ProductsPage;
