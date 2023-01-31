import "./Button.css";

interface ButtonReason {
  onClick: () => void;
  buttonInnerElement: JSX.Element;
}

const Button = (props: ButtonReason) => {
  return <button onClick={props.onClick}>{props.buttonInnerElement}</button>;
};

export default Button;
