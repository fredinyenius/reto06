import logoEAKON from '../../../assets/image/yoda1.webp';
const HeroBanner = ({ image, title }) => {
  return (
    <section
      className="hero d-flex a-items-center min-h-25vh"
      style={{
        backgroundImage: `url(${image ? image : logoEAKON})`
      }}
    >
      <div className="container">
        <h1 className="section__title section__title--lg color-dark-primary">{title}</h1>
      </div>
    </section>
  );
};

export default HeroBanner;