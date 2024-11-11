
import './index.css'
import { HiOutlineArrowRight } from "react-icons/hi2";

const Stage2=(props)=>{
    const{userDetails,onChangeStage}=props
    const{checkIn,checkOut,room}=userDetails

    
    const handleSubmit = (event) => {
        event.preventDefault();
        onChangeStage(checkIn,checkOut,room)

    }

    const onChangeIn = (event) => {
        this.setState({ checkIn: event.target.value })

    }

    const onChangeOut = (event) => {
        this.setState({ checkOut: event.target.value })

    }


    return <><div className='stage1'>
    <div className='box12'>
        <p style={{backgroundColor:'white',padding:'14px',borderRadius:'10px',width:'40%'}}>Amit jha</p>
        <p style={{backgroundColor:'white',padding:'14px',borderRadius:'10px',width:'40%'}}>amit.jha6700@gamil.com</p>
        <p style={{backgroundColor:'white',padding:'4px',borderRadius:'10px',width:'40%'}}>+91 987654321</p>
        <p style={{backgroundColor:'white',padding:'4px',borderRadius:'10px',width:'20%'}}>2 Adult</p>
        <p style={{backgroundColor:'white',padding:'4px',borderRadius:'10px',width:'20%'}}>1 Children</p>
        
    </div>
</div>
<div className='form-container'>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='check'><p>CHECK-IN</p>
                        <input value={checkIn} type="date" className='date' onChange={onChangeIn} /></div>
                    <div className='check'><p>CHECK-OUT</p>
                        <input value={checkOut} type="date" className='date' onChange={onChangeOut} /></div>
                    <div className='check'><p>ROOMS</p><span style={{marginRight:'5px'}}></span><span>{room}</span><span style={{marginLeft:'5px'}}></span></div>
                    <button className='btn' type="submit">Rs.12,430/- <HiOutlineArrowRight size={14}/>
                    </button>

                </form>
            </div>
 

</>

}

export default Stage2