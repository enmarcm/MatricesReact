const Button = ({ children, onClick, color = "#000" }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="flex content-center items-center font-bold font-Sora w-full transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
