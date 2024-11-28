import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
  message?: string;
}

export default function LoadingComponent({ message = "Loading..." }: Props) {
  return (
    <Backdrop
      open={true}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: "rgba(0, 0, 0, 0.7)",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100vw",
          height: "100vh",
          animation: "fadeIn 1s ease-in-out",
        }}
      >
        <CircularProgress
          size={80}
          thickness={4}
          sx={{
            color: "linear-gradient(to right, #ff4081, #ff6e40)",
            animation: "spinner 1.5s linear infinite",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            mt: 3,
            background: "linear-gradient(90deg, #ff6e40, #ff4081)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
