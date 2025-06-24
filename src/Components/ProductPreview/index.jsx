import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logo-white-color.png";
import cartIcon from "../../assets/cart.svg";
import products from "../../data.json";

function ProductPreview() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Box sx={{ marginLeft: "10px", alignSelf: "flex-start" }}>
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
              sx={{
                objectFit: "contain",
                marginBottom: "25px",
                // maxWidth: "210px",
              }}
            />

            <CardContent sx={{ p: 0 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "500",
                  fontSize: "16px",
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                {product.name}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "35px",
                }}
              >
                <Typography
                  sx={{
                    color: theme.palette.custom.redText,
                    fontWeight: "700",
                  }}
                >
                  {product.price}₴
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Кількість: {product.quantity}
                </Typography>
              </Box>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img src={cartIcon} alt="cart" width={28} height={28} />

              <Typography
                sx={{
                  color: theme.palette.custom.greenText,
                  fontSize: "15px",
                  fontWeight: "500",
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
