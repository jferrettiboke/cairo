/** @jsx jsx */
import { jsx } from "theme-ui";

import Input from "./Input";

function Textarea(props) {
  return <Input as="textarea" {...props} />;
}

export default Textarea;
