import { useState } from "react";
import articuno from '../../../assets/image/articuno.png';

const ContainersImage = ({ src, alt, className = '' }) => {
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const handleLoadImg = (e) => {
    e.target.style.animation = 'none';
  };

  const handleErrorImg = (e) => {
    if (numberOfErrors === 0) {
      setNumberOfErrors(1);
      e.target.src = articuno;
    }
  };

  return (
    <img
      src={src}
      alt={articuno}
      className={`section__img ${className}`}
      loading="lazy"
      onLoad={handleLoadImg}
      onError={handleErrorImg}
      width="1"
      height="1"
    />
  );
};

export default ContainersImage;