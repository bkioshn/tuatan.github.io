import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Top10 extends React.Component {
    constructor() {
        super();
        /* เครื่องสำอาง เครื่องประดับ อาหารเสริม 
            รองเท้า electronic แม่และเด็ก 
            เสื้อผ้า กระเป๋า ประดับยนต์
            บำรุงผิว อาหารและเครื่องดื่ม เสรืมความงาม
        */

        /* อาหารเสริม ประดับยนต์ 
           เสริมความงาม แม่และเด็ก 
        */

        this.state = {
            cat: [
                {id: 1, cat1: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB1.png?raw=true",
                        cat2: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB2.png?raw=true",
                        cat3: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB12.png?raw=true"},
                {id: 2, cat1: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB3.png?raw=true",
                        cat2: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB4.png?raw=true",
                        cat3: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB13.png?raw=true"},
                {id: 3, cat1: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB6.png?raw=true",
                        cat2: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB10.png?raw=true",
                        cat3: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB11.png?raw=true"},
                {id: 4, cat1: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB8.png?raw=true",
                        cat2: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB7.png?raw=true",
                        cat3: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB9.png?raw=true"}
                
                
            ],
            addCat: [
                {id: 1, cat1: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB12.png?raw=true",
                        cat2: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB11.png?raw=true"},
                {id: 2, cat1: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB9.png?raw=true",
                        cat2: "https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB13.png?raw=true"}
            ]
        }
    }
    
    list = () => {
        const listItem = this.state.cat.map((item) => {
            return(
                <div className="row" key={item.id}>
                    <div className="col">
                        <a className="nav-link" href="#">
                            <img src={item.cat1}  style={{height:"1.7em"}} />
                        </a>
                    </div>
                    <div className="col">
                        <a className="nav-link" href="#">
                            <img src={item.cat2} style={{height:"1.7em"}}/>
                        </a>
                    </div>
                    <div className="col d-xl-none d-lg-none">
                        <a className="nav-link" href="#">
                            <img src={item.cat3} style={{height:"1.7em"}}/>
                        </a>
                    </div>
                </div>
            );
        });

        return(
            <ul class="navbar-nav mr-auto">
                {listItem}
            </ul>
        );
    }

    list2 = () => {
        const listItem = this.state.addCat.map((item) => {
            return(
                <div className="row">
                    <div class="col d-none d-lg-block" style={{marginTop:"0.01em"}}>
                        <a class="nav-link" href="#">
                            <img src={item.cat1} style={{height:"1.5em"}} />
                        </a>
                    </div>
                    <div class="col d-none d-lg-block">
                        <a class="nav-link" href="#">
                            <img src={item.cat2} style={{height:"1.5em"}} />
                        </a>
                    </div>
                </div>
            );
        });
        return(
            <ul class="navbar-nav mr-auto">
                {listItem}
            </ul>
        );
    }

    render() {
        return(
            <nav class="navbar navbar-expand-xl navbar-expand-lg navbar-expand-md">
                <a class="navbar-brand" href="#"> <img id="top10logo" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/1.png?raw=true" /> </a>
                
                {/*<!-- Toggle button -->*/}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#top10" aria-controls="top10" aria-expanded="false" aria-label="Toggle navigation">
                    <span><img id="toggleIcon" src="https://github.com/bkioshn/bkioshn.github.io/blob/master/Tuatan/other/CB+.png?raw=true" /></span>
                </button>

                {/*<!-- List -->*/}
                <div class="collapse navbar-collapse" id="top10">
                    {this.list()}
                    {this.list2()}
                </div>
            </nav>
        );
    }
}

export default Top10;

