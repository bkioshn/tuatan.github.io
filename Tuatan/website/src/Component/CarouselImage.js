import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View} from "mdbreact";

class CarouselImage extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "slideshow",
            image: [
                {pic: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/11.png?raw=true", id: 1}, 
                {pic: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/11.png?raw=true", id: 2},
                {pic: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/header/11.png?raw=true", id: 3}
            ]
        }
    }

    slide = () => {
        const itemList = this.state.image.map((img) => {
            return(
                <CarouselItem itemId={img.id} key={img.id}>
                    <View>
                        <img className="d-block w-100" src={img.pic} alt="First slide" />
                    </View>
                    <CarouselCaption>
                        <h3 className="h3-responsive">Image</h3>
                    </CarouselCaption>
                </CarouselItem>
            );
        });

        return( 
            <CarouselInner>
                {itemList}
            </CarouselInner>
        );
    }

    render() {
        return(
          <Carousel activeItem={1} length={this.state.image.length} showControls={true} showIndicators={true} className="z-depth-1">
            {this.slide()}
          </Carousel>
        );
    
    }
}

export default CarouselImage;

