import { Carousel } from 'react-responsive-carousel';

export default (props) => (
    <Carousel>
        <div>
            <img src="./static/assets/caroussel/1.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="./static/assets/caroussel/2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="./static/assets/caroussel/3.jpg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>)
