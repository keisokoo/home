import { appStyles } from "~/styles/helper.css";
import { vars } from "~/styles/theme.css";
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
    padding: `${vars.space[2]} ${vars.space[4]}`,
  },
});
export default styles;
