import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(5),
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "red",
  },
  input: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
