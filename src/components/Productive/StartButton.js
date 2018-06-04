import React from "react";

import logo from "../../lobster.svg";
import { Button } from "semantic-ui-react";

const StartButton = () => (
  <Button color="red">
    <img src={logo} className="lobster-logo" alt="lobster-logo" />
  </Button>
);

export default StartButton;
