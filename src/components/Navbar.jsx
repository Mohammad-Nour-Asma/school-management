import logo from "../assets/svgs/Logo.svg";
import avatar from "../assets/images/avatar.jpg";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Tooltip } from "@mui/material";
function Navbar() {
  return (
    <>
      <Stack
        container
        sx={{ backgroundColor: "#0085E5", padding: "10px 5%", Width: "90%" }}
        direction="row"
        justifyContent="space-around"
        alignItems="center">
        <Box width="20%">
          <img src={logo}></img>
        </Box>
        <Box width="35%">
          <input
            type="serach"
            placeholder="ابحث عن ماتريد"
            style={{
              borderRadius: "20px",
              outline: "none",
              padding: "10px 14px",
              border: "none",
              width: "70%",
            }}
          />
          <SearchIcon
            sx={{ position: "relative", left: "30px", top: "8px" }}
            color="primary"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}>
          <Avatar alt="test" src={avatar} sx={{ objectFit: "cover" }} />
          <Tooltip title="الرسائل">
            <SmsIcon
              sx={{
                paddingBottom: "6px",
                paddingLeft: "6px",
                color: "#FFF",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip title="الاشعارات">
            <NotificationsIcon
              sx={{ paddingBottom: "6px", color: "#FFF", cursor: "pointer" }}
            />
          </Tooltip>
        </Box>
      </Stack>
    </>
  );
}

export default Navbar;
