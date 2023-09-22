import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Stack } from "@mui/system";
import { NavLink } from "react-router-dom";
function SideBar() {
  const cn = {
    height: "40px",
    display: "flex",
    flexDirection: "column",
    mb: 6,
    "& > .active": {
      color: "#0085e5 !important",
      backgroundColor: "#ebf5fd",
    },
  };
  return (
    <>
      <Box style={{ height: "90vh" }}>
        <Stack sx={{ gap: 2 }}>
          <Box sx={cn}>
            <NavLink
              to=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
                padding: "16px",
                marginTop: "16px",
                marginLeft: "16px",
                marginRight: "16px",
                borderRadius: "20px",
                textDecoration: "none",
                color: "#999",
                fontSize: "1rem",
              }}>
              <PersonIcon sx={{ pl: "6px", color: "#999" }} />
              الصفحة الرئيسية
            </NavLink>
          </Box>
          <Box sx={cn}>
            <NavLink
              to="Classes"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
                padding: "16px",
                marginTop: "16px",
                marginLeft: "16px",
                marginRight: "16px",
                borderRadius: "20px",
                textDecoration: "none",
                color: "#999",
                fontSize: "1rem",
              }}>
              <MailOutlineIcon sx={{ paddingLeft: "6px", color: "#999" }} />
              الحصص الدرسية
            </NavLink>
          </Box>
          <Box sx={cn}>
            <NavLink
              to="Exams"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
                padding: "16px",
                marginTop: "16px",
                marginLeft: "16px",
                marginRight: "16px",
                borderRadius: "20px",
                textDecoration: "none",
                color: "#999",
                fontSize: "1rem",
              }}>
              <HomeOutlinedIcon sx={{ pl: 2, color: "#999" }} />
              الامتحانات
            </NavLink>
          </Box>
          <Box sx={cn}>
            <NavLink
              to="Certificates"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
                padding: "16px",
                marginTop: "16px",
                marginLeft: "16px",
                marginRight: "16px",
                borderRadius: "20px",
                textDecoration: "none",
                color: "#999",
                fontSize: "1rem",
              }}>
              <NoteOutlinedIcon sx={{ paddingLeft: "6px", color: "#999" }} />
              الشهادات
            </NavLink>
          </Box>
          <Box sx={cn}>
            <NavLink
              to="Setting"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
                padding: "16px",
                marginTop: "16px",
                marginLeft: "16px",
                marginRight: "16px",
                borderRadius: "20px",
                textDecoration: "none",
                color: "#999",
                fontSize: "1rem",
              }}>
              <SettingsOutlinedIcon
                sx={{ paddingLeft: "6px", color: "#999" }}
              />
              الإعدادات
            </NavLink>
          </Box>

          <Box sx={cn}>
            <NavLink
              to="Seting"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                gap: "20px",
                padding: "16px",
                marginTop: "16px",
                marginLeft: "16px",
                marginRight: "16px",
                borderRadius: "20px",
                textDecoration: "none",
                color: "#999",
                fontSize: "1rem",
              }}>
              <SettingsOutlinedIcon
                sx={{ paddingLeft: "6px", color: "#0085E5" }}
              />
              Log out
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default SideBar;
