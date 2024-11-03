import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pythonLogo from '../assets/img/python.svg';
import reactLogo from '../assets/img/react.svg';
import sqliteLogo from '../assets/img/sqlite.svg';
// import arrow1 from '../assets/img/arrow1.svg';
// import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tech Stack</h2>
              <p>
                Turning ambitious visions into seamless, high-performing
                solutions—my tech stack is the toolkit that transforms
                inspiration into interactive, engaging realities.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {/* <div className="item">
                  <img
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3e%3cg fill='none'%3e%3cpath d='M64 0a16 16 0 1 1 0 32H48a16 16 0 0 1 0-32h16zm16 32a16 16 0 1 1 0 32H48a16 16 0 1 1 0-32h32z' fill='%2300bc9a'/%3e%3cpath d='M64 64a16 16 0 1 1 0 32 16 16 0 0 1 0-32z' fill='%23ff7262'/%3e%3cpath d='M16 0a16 16 0 1 1 0 32H0a16 16 0 0 1 0-32h16zm0 64a16 16 0 1 1 0 32H0a16 16 0 0 1 0-32h16z' fill='%23ff7262'/%3e%3cpath d='M16 64a16 16 0 1 1 0 32H0a16 16 0 0 1 0-32h16z' fill='%23a259ff'/%3e%3c/g%3e%3c/svg%3e"
                    alt="Figma"
                  />
                  <h5>Figma</h5>
                </div> */}
                <div className="item">
                  <img
                    src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20630%20630'%3e%3crect%20width='630'%20height='630'%20fill='%23f7df1e'/%3e%3cpath%20d='m423.2%20492.19c12.69%2020.72%2029.2%2035.95%2058.4%2035.95%2024.53%200%2040.2-12.26%2040.2-29.2%200-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2%200-44.4%2033.83-78.2%2086.7-78.2%2037.64%200%2064.7%2013.1%2084.2%2047.4l-46.1%2029.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34%200-28.33%2011-28.33%2025.37%200%2017.76%2011%2024.95%2036.4%2035.95l14.8%206.34c50.3%2021.57%2078.7%2043.56%2078.7%2093%200%2053.3-41.87%2082.5-98.1%2082.5-54.98%200-90.5-26.2-107.88-60.54zm-209.13%205.13c9.3%2016.5%2017.76%2030.45%2038.1%2030.45%2019.45%200%2031.72-7.61%2031.72-37.2v-201.3h59.2v202.1c0%2061.3-35.94%2089.2-88.4%2089.2-47.4%200-74.85-24.53-88.81-54.075z'/%3e%3c/svg%3e"
                    alt="JavaScript"
                  />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img
                    src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20width='97'%20height='97'%3e%3cpath%20fill='%23F05133'%20d='M92.71%2044.408%2052.591%204.291c-2.31-2.311-6.057-2.311-8.369%200l-8.33%208.332L46.459%2023.19c2.456-.83%205.272-.273%207.229%201.685%201.969%201.97%202.521%204.81%201.67%207.275l10.186%2010.185c2.465-.85%205.307-.3%207.275%201.671%202.75%202.75%202.75%207.206%200%209.958-2.752%202.751-7.208%202.751-9.961%200-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997c.67.332%201.303.774%201.861%201.332%202.75%202.75%202.75%207.206%200%209.959-2.75%202.749-7.209%202.749-9.957%200-2.75-2.754-2.75-7.21%200-9.959.68-.679%201.467-1.193%202.307-1.537v-25.23c-.84-.344-1.625-.853-2.307-1.537-2.083-2.082-2.584-5.14-1.516-7.698L31.798%2016.715%204.288%2044.222c-2.311%202.313-2.311%206.06%200%208.371l40.121%2040.118c2.31%202.311%206.056%202.311%208.369%200L92.71%2052.779c2.311-2.311%202.311-6.06%200-8.371z'/%3e%3c/svg%3e"
                    alt="Git"
                  />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={pythonLogo} alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={sqliteLogo} alt="Sqlite" />
                  <h5>SQLite</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt={colorSharp} />
    </section>
  );
};
