import { FaArrowRight } from 'react-icons/fa';

interface ButtonTypeProp{
    text:string,
    showIcon:React.ReactNode
}
const Button:React.FC<ButtonTypeProp> = ({ text, showIcon = false }) => {
  return (
    <a
      href="#"
      className="bg-gradient-to-r from-[#38C682] to-[#00796D] hover:bg-gradient-to-l text-white px-4 py-2 rounded-full flex items-center justify-center"
    >
      {text}
      {showIcon && <FaArrowRight className="ml-2" />}
    </a>
  );
}
export default Button;
