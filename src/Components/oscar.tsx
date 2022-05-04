import React from "react";
type oscarprops = {
  children: React.ReactNode;
};

export const Oscar = (props: oscarprops) => {
  return <div>{props.children}</div>;
};
