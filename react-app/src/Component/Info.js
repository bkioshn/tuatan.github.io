import React, {Component} from 'react';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './infoStyle.css';

class Info extends Component{
    constructor() {
        super();
        this.state = {
            name: "",
            detail: "",
            cat: "",
            cancelButton: false,
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleHiddenButton = () => {
        // handle บันทึกและซ่อน button
    }

    handleSubmit = () => {
        // handle บันทึกและเผยแพร่ button
    }

    handleCancelButton = () => {
        this.setState({cancelButton: true});
        console.log(this.state.cancelButton);
    }

    render() {
        return(
            <div id="infoDiv">
                <h5>ข้อมูลทั่วไป</h5>
                <form onSubmit={this.handleSubmit}>
                    <div id="form">
                        {/*-----------ชื่อสินค้า------------*/}
                        <label className="info">ชื่อสินค้า</label>
                        <input type="text" 
                            value={this.state.name} 
                            name="name" placeholder="" 
                            maxLength="120" size="80" 
                            onChange={this.handleChange}
                        /> 
                        <label className="count">{this.state.name.length}/120</label>

                        {/*-----------รายละเอียด------------*/}
                        <label className="info">รายละเอียดสินค้า</label>
                        <input text="text" 
                            value={this.state.detail} 
                            name="detail" 
                            placeholder="รายละเอียดสินค้าและแฮชแท็ก"
                            maxLength="5000" 
                            size="80" 
                            onChange={this.handleChange}
                        />
                        <label className="count">{this.state.detail.length}/5000</label>

                        {/*-----------หมวดหมู่------------*/}
                        <label className="info">หมวดหมู่</label>
                        <select value={this.state.cat} 
                            name="cat" 
                            onChange={this.handleChange}
                            id="select"
                        >
                            <option value="" defaultValue disabled hidden>เลือกหมวดหมู่</option>
                            <option value="cosmetic">cosmetic</option>
                            <option value="shoe">shoe</option>
                            <option value="window">window</option>
                        </select>
                        <br/>
                    </div>
                        <Button className="button" color="success" type="submit">บันทึกและเผยแพร่</Button>
                        <Button className="button" color="danger" onClick={this.handleHiddenButton}>บันทึกและซ่อน</Button>
                        <Button className="button" color="light" onClick={this.handleCancelButton}>ยกเลิก</Button>
                </form>
            </div>
        );
    }
}

export default Info;