type heading = {
  children: string;
};

export const Heading = (props: heading) => {
  return <div>{props.children}</div>;
};
