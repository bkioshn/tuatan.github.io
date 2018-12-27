import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Info from './Component/Info';
import Picture from './Component/Picture';
import './App.css';

class App extends Component{
  render() {
    return(
      <Container>
        <h5>แก้ไขรูปภาพสินค้า</h5>
        <p id="text">ลากรูปเพื่อเรียงลำดับใหม่ สินค้าแต่ละชิ้นสามารถมีรูปได้สูงสุด 9 รูป 
          <a id="link" href="#">(ทิปการถ่ายรูปให้น่าสนใจ)</a>
        </p>
        <Picture />
        <Info />
      </Container>
    ); 
  }
}

export default App;