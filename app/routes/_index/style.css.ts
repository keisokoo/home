import { appStyles } from "~/styles/helper.css";
import { vars } from "~/styles/theme.css";

const styles = appStyles({
  wrap: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: vars.color.warning,
  },
});

export default styles;
