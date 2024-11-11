import {Component} from 'react'
import Header from './components/Header/index'
import Footer from './components/Footer/index'
import Stage1 from './components/Stage1/index'
import Stage2 from './components/Stage2/index'
import Stage3 from './components/Stage3/index'

import './App.css';

class App extends Component{
  state={stage:1,userDetails:{}}

  onChangeStage=(checkIn,checkOut,room)=>{
    console.log(checkIn,checkOut,room)
    this.setState((prev)=>({stage:prev.stage+1,userDetails:{...prev.userDetails,checkIn,checkOut,room}}))
  }

  render(){
    const {stage,userDetails}=this.state
    return <div className='main-container'>
      <div className='responsive-container'>
        <Header/>
        {stage===1 && <Stage1 onChangeStage={this.onChangeStage}/>}
        {stage===2 && <Stage2 onChangeStage={this.onChangeStage} userDetails={userDetails}/>}
        {stage===3 && <Stage3 userDetails={userDetails}/>}
        
        <Footer/>
        
      </div>
    </div>
  }
}




export default App;
