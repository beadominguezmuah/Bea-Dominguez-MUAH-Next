import './button.scss'

interface ButtonProps {
    icon: JSX.Element;
    type: string;
}

export const Button = ({icon, type }: ButtonProps) => {
  return (
    <>
        <span className={`button_${type}`}>
            { icon }
        </span>
    </>
  )
}
