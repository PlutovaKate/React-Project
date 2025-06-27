import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import logo from "../../assets/logo-white-color.png";
import cartIcon from "../../assets/cart.svg";

function ProductPreview() {
  const theme = useTheme();

  const products = useSelector((state) => state.products);

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Box sx={{ marginLeft: "10px" }}>
        <img src={logo} alt="Rozetka Logo" style={{ height: "40px" }} />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(344px, 1fr))",
          padding: "60px",
          gap: "60px",
          justifyItems: "center",
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: 270,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "30px",
              borderRadius: 0,
              boxShadow: 3,
              backgroundColor: theme.palette.custom.lightText,
            }}
          >
            <CardMedia
              component="img"
              image={product.photo}
              alt={product.name}
              sx={{ objectFit: "contain", mb: 3 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  textAlign: "center",
                  mb: 2,
                  color: "black",
                }}
              >
                {product.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 3,
                  gap: 5,
                }}
              >
                <Typography
                  sx={{ color: theme.palette.custom.redText, fontWeight: 700 }}
                >
                  {product.price}₴
                </Typography>
                <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                  Кількість: {product.quantity}
                </Typography>
              </Box>
            </CardContent>

            <CardActions
              sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
            >
              <img src={cartIcon} alt="cart" width={28} height={28} />
              <Typography
                sx={{
                  color: theme.palette.custom.greenText,
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                Готовий до відправки
              </Typography>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
export default ProductPreview;
