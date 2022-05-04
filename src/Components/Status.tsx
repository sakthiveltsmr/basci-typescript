type statusprops = {
  status: string;
};

export const Status = (props: statusprops) => {
  let message;
  if (props.status === "loading") {
    message = "loading...";
  } else if (props.status === "success") {
    message = "Data fetch successfully";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};
