import Snippet from './Snippet';
import ReactCarouselDemo from './ReactCarousel/CarouselDemo';

export default () => {
  return (
    <div>
      <section className="header">
        <div className="header__container">
          <h1>React Carousel</h1>
          <div className="header__desc">Highly composable & resusable carousel components</div>

          <div className="text-right">
            <a
              className="github-button"
              href="https://github.com/rajmichaels/react-carousel"
              data-show-count="true"
              aria-label="Star rajmichaels/react-carousel on GitHub"
            >
              Star
            </a>
          </div>
        </div>
      </section>
      <div className="container">
        <section>
          <h1>Carousel</h1>
          <div className="Section">
            <div className="Section__Demo">
              <ReactCarouselDemo />
            </div>
            <div className="Section__Code">
              <Snippet
                highlightLines={[[4, 25], [30, 30]]}
                snippetName="ReactCarouselCarouselDemo"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
