import { appStyles } from "~/styles/helper.css";
import { vars } from "~/styles/theme.css";

const styles = appStyles({
  wrap: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "16px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: vars.color.warning,
  },
});

export default styles;
