import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownInput = props => (
  <div>
    <Dropdown
      placeholder="Select a Range"
      fluid
      selection
      options={props.range}
    />
  </div>
);

export default DropdownInput;
