import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownInput = props => (
  <div>
    <Dropdown
      placeholder="Select a Range"
      fluid
      selection
      options={props.options}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);

export default DropdownInput;
