import React from "react";

export const navRef = React.createRef();

const navigate = (name, params) => navRef.current?.navigate(name, params);

export default {
  navigate,
};
