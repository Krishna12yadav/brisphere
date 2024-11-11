import { IoMdCheckmarkCircle } from "react-icons/io";
import './index.css'

const Stage3=(props)=>{
    const{userDetails}=props 
    const{checkIn,checkOut,room}=userDetails

    
    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return <><div className='stage1'>
    <div className='box1'>
        <h2>Amit jha</h2>
        <p>amit.jha@gmail.com</p>
        <p>+91 987654321</p>
        <p>2 Adults and 1 Children</p>

    </div>
    <div className='box21'><IoMdCheckmarkCircle size={100} style={{color:'green'}} /><div><h2>Order Complete</h2>
    <p>If you have any queries please Contact Us</p></div></div>
</div>
<div className='form-container'>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='check'><p>CHECK-IN</p>
                        <input value={checkIn} type="date" className='date' /></div>
                    <div className='check'><p>CHECK-OUT</p>
                        <input value={checkOut} type="date" className='date'  /></div>
                    <div className='check'><p>ROOMS</p><span style={{marginRight:'5px'}}></span><span>{room}</span><span style={{marginLeft:'5px'}}></span></div>
                    <button className='btn' type="submit">Rs.12,430/- 
                    </button>

                </form>
            </div></>
    

}
export default Stage3