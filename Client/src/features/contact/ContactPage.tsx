import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Paper,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Thêm state loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Bắt đầu tải
    console.log("Form Data:", formData);

    // Giả lập gửi form với thời gian chờ (có thể thay bằng API gọi thực tế)
    setTimeout(() => {
      setLoading(false); // Dừng tải sau khi gửi xong
      alert("Your message has been sent!");
    }, 2000); // Giả lập mất 2 giây để gửi
  };

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: "bold" }}
      >
        Contact Us
      </Typography>
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          borderRadius: 3,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
              Send us a Message
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#888", // Màu nhạt cho label
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#ddd",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0073e6", // Màu border khi hover
                    },
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#888",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#ddd",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0073e6",
                    },
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                sx={{
                  "& .MuiInputLabel-root": {
                    color: "#888",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#ddd",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0073e6",
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading} // Vô hiệu hóa nút khi đang gửi
                sx={{
                  mt: 2,
                  backgroundColor: "#0073e6",
                  color: "#fff",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#005bb5",
                  },
                  "&:disabled": {
                    backgroundColor: "#cce0ff",
                    color: "#aaa",
                  },
                }}
              >
                {loading ? (
                  <CircularProgress
                    size={24}
                    color="inherit"
                    sx={{ marginRight: 2 }}
                  />
                ) : (
                  "Send Message"
                )}
              </Button>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
              Get in Touch
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email color="primary" />
                <Typography>support@restore.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone color="primary" />
                <Typography>+0123 456 789</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocationOn color="primary" />
                <Typography>123 Main Street, City, Country</Typography>
              </Box>

              {/* Social Media Links */}
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <IconButton
                  color="primary"
                  href="https://facebook.com"
                  sx={{ "&:hover": { backgroundColor: "#e6f2ff" } }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://instagram.com"
                  sx={{ "&:hover": { backgroundColor: "#e6f2ff" } }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://twitter.com"
                  sx={{ "&:hover": { backgroundColor: "#e6f2ff" } }}
                >
                  <Twitter />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Contact;
