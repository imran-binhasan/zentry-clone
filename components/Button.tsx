type Button = {
  id: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode, 
  containerClass: string;
};
const Button = ({ id, title, leftIcon, containerClass, rightIcon }) => {
  return (
    <button
      className={`${containerClass} group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black`}
      id={id}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
