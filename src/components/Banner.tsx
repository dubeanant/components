
import headerImg from "../assets/img/header-img.svg";
import 'tailwindcss/tailwind.css';

export const Banner = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden w-80 h-80">
      <img src={headerImg} alt="Header Img" className="w-1/2 h-1/2 animate-zoomInOut" />
    </div>
  );
};


