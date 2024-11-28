import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Email,
  Phone,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const footerLinks = [
  { title: "Catalog", path: "/catalog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const policies = [
  { title: "Privacy Policy", path: "/privacy" },
  { title: "Terms of Service", path: "/terms" },
];

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        color: "white",
        width: "100%",
        padding: "3rem 0",
        background: "linear-gradient(145deg, #333, #111)",
      }}
    >
      <Grid container spacing={4} sx={{ padding: "0 10%", margin: 0 }}>
        {/* Logo và mô tả */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "#ffcc00",
              letterSpacing: "1px",
            }}
          >
            RE-STORE
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.8,
            }}
          >
            Khám phá bộ sưu tập giày mới nhất với phong cách độc đáo. Hệ thống
            cửa hàng giày thể thao chính hãng dành cho mọi đối tượng yêu giày.
          </Typography>
        </Grid>

        {/* Liên kết nhanh */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#ffcc00",
            }}
          >
            Quick Links
          </Typography>
          <List>
            {footerLinks.map(({ title, path }) => (
              <ListItem
                key={path}
                component={NavLink}
                to={path}
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  padding: "0.5rem 0",
                  "&:hover": { color: "#ffcc00" },
                }}
              >
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Thông tin liên hệ */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#ffcc00",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <Email sx={{ mr: 1 }} /> support@restore.com
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            <Phone sx={{ mr: 1 }} /> 0123-456-789
          </Typography>
          <Box>
            <IconButton
              sx={{
                color: "white",
                mx: 0.5,
                "&:hover": { color: "#ffcc00" },
              }}
              href="https://facebook.com"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                mx: 0.5,
                "&:hover": { color: "#ffcc00" },
              }}
              href="https://instagram.com"
              target="_blank"
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{
                color: "white",
                mx: 0.5,
                "&:hover": { color: "#ffcc00" },
              }}
              href="https://twitter.com"
              target="_blank"
            >
              <Twitter />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider
        sx={{
          borderColor: "rgba(255, 255, 255, 0.2)",
          my: 3,
          width: "90%",
          margin: "0 auto",
        }}
      />

      <Grid container justifyContent="center">
        {policies.map(({ title, path }) => (
          <Typography
            key={path}
            component={NavLink}
            to={path}
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mx: 2,
              textDecoration: "none",
              "&:hover": { color: "#ffcc00", textDecoration: "underline" },
            }}
          >
            {title}
          </Typography>
        ))}
      </Grid>

      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: 3,
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        © {new Date().getFullYear()} RE-STORE. All rights reserved.
      </Typography>
    </Box>
  );
}
