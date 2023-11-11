type GreetProps = {
  name?: string;
};

export const GreetTdd = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};
