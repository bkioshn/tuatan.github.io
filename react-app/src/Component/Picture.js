import React, {Component} from 'react';
import {Row} from 'reactstrap';
import {MdCrop, MdDelete, MdAdd} from 'react-icons/lib/md'
import './pictureStyle.css';

class Picture extends Component {
    render() {
        return(
            <Row>
                <div className="box">
                    <img src="https://ih1.redbubble.net/image.423810642.5712/ap,550x550,12x12,1,transparent,t.u3.png" alt=""/>
                    <div className="icon"><MdCrop /> <MdDelete /></div>
                    <div className="text"><p>ภาพปก</p></div>
                </div> 
                
                <div className="boxAdd">
                    <div className="add">
                        <MdAdd />
                        <p>เพิ่มรูปภาพใหม่</p>
                    </div>
                </div>
            </Row>
        );
    }
}
export default Picture;