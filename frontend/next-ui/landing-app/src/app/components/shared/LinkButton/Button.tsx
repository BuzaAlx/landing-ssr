import * as Styles from "./Button.style";

const Button: React.FC<{ link: string; text: string; small?: boolean }> = ({
  link,
  text,
  small = false,
}) => {
  return (
    <Styles.Button small={small} href={link}>
      {text}
    </Styles.Button>
  );
};

export default Button;
