import { appStyles } from "~/styles/helper.css";
import { flex } from "~/utils/styles";

const styles = appStyles({
  wrap: {
    ...flex("row"),
    height: "60px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    userSelect: "none",
  },
  list: {
    ...flex("row"),
  },
  item: {
    padding: `8px 16px`,
  },
});
export default styles;
