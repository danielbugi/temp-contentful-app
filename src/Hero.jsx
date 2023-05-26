import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS - Daniel Bogatko</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
            impedit, soluta provident dolorem amet, mollitia autem, in officiis
            aliquam voluptatem consequatur ex. Ipsum officia veritatis ab
            distinctio aliquid quibusdam obcaecati.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
