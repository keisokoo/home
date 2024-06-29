import { appStyles } from "~/styles/helper.css";
import { flex } from "~/utils/styles";

const styles = appStyles({
  wrap: {
    ...flex("row"),
    overflow: "hidden",
    whiteSpace: "nowrap",
    userSelect: "none",
    fontSize: "1.4rem",
  },
  list: {
    ...flex("row"),
  },
  item: {
    padding: `1rem 1.2rem`,
    display: "block",
  },
});

export default styles;
