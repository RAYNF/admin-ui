import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function CustomizedSnackbars(props) {
  const { open, setOpen, severity, message } = props;

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={300}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert severity={severity} variant="filled" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
