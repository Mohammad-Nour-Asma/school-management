import { Box, Button, Typography } from "@mui/material";
import landing from "../../assets/images/landing.jpg";
import logo from "../../assets/svgs/Logo.svg";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "99.4dvh",
        objectFit: "cover",
        position: "relative",
      }}>
      <img src={landing} alt="landing page" width="100%" height="100%" />
      <Box
        sx={{
          width: "450px",
          height: "60vh",
          position: "absolute",
          top: "calc((100% - 60vh)/2)",
          left: "calc((100% - 450px)/2)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#97c6ecb3",
          borderRadius: "20px",
          py: 4,
          gap: 8,
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 4,
          }}>
          <img src={logo} width="200px" />
          <Typography sx={{ fontSize: "20px" }}>
            مرحبا بكم في مدرسة المرفوع{" "}
          </Typography>
        </Box>
        <Button
          sx={{
            width: "200px",
            height: "50px",
            color: "blue",
            fontSize: "1rem",
          }}
          variant="outlined">
          <Link
            to="/login"
            style={{
              width: "100%",
              height: "100%",
              lineHeight: "38px",
              color: "#2e82d6",
            }}>
            تسجيل الدخول
          </Link>
        </Button>
        <Button
          sx={{
            width: "200px",
            height: "50px",
            fontSize: "1rem",
          }}
          variant="contained">
          <Link
            to="register"
            style={{
              color: "#fff",
              width: "100%",
              height: "100%",
              lineHeight: "38px",
            }}>
            إنشاء حساب
          </Link>
        </Button>
      </Box>
    </Box>
  );
}

export default LandingPage;
