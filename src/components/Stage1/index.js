import { Component } from 'react'
import './index.css'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

import Discover from '../Discover/index'

class Stage1 extends Component {
    state = { checkIn:'', checkOut: '', room: 1 }


    handleSubmit = (event) => {
        event.preventDefault();
        const{checkIn,checkOut,room}=this.state
        const { onChangeStage } = this.props
        onChangeStage(checkIn,checkOut,room)

    }

    onChangeIn = (event) => {
        this.setState({ checkIn: event.target.value })

    }

    onChangeOut = (event) => {
        this.setState({ checkOut: event.target.value })

    }

    increament = () => {
        this.setState((prev) => ({ room: prev.room + 1 }))
    }

    decreament = () => {
        this.setState((prev) => ({ room: prev.room - 1 }))
    }

    render() {
        const { checkIn, checkOut, room } = this.state

        return <><div className='stage0'>
            <div className='box1'>
                <h1 className='heading'>Work from ladakh</h1>
                <p>India's first true digital tourism ecosystem</p>
                <span ><FaFacebook size={30} style={{marginRight:'10px'}} /></span><span><RiInstagramFill size={30} /></span>
            </div>
            <div className='box2'></div>
        </div>
            <div className='form-container'>
                <form onSubmit={this.handleSubmit} className='form'>
                    <div className='check'><p>CHECK-IN</p>
                        <input value={checkIn} type="date" className='date' onChange={this.onChangeIn} /></div>
                    <div className='check'><p>CHECK-OUT</p>
                        <input value={checkOut} type="date" className='date' onChange={this.onChangeOut} /></div>
                    <div className='check'><p>ROOMS</p><span style={{marginRight:'5px'}}><IoMdArrowDropleftCircle onClick={this.decreament} /></span><span>{room}</span><span style={{marginLeft:'5px'}}><IoMdArrowDroprightCircle onClick={this.increament} /></span></div>
                    <button className='btn' type="submit">BOOK</button>

                </form>
            </div>
            <Discover />

        </>
    }


}
export default Stage1