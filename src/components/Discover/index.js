import {Component} from 'react'
import './index.css'


const data=[
    {
      "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg",
      "username": "JohnDoe123",
      "reviewStars": 5,
      "review": "Had an amazing experience! The scenery was breathtaking and the staff was incredibly friendly. Highly recommended for anyone looking for a great vacation spot!"
    },
    {
      "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg",
      "username": "JaneTraveller",
      "reviewStars": 4,
      "review": "A beautiful destination with lots to explore. The accommodations were comfortable and the food was great. Would visit again and recommend to others!"
    },
    {
      "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg",
      "username": "AdventureGuy",
      "reviewStars": 4,
      "review": "A great place for adventure lovers. Had fun hiking and exploring the local culture. Could improve on the transportation facilities though. Overall, a memorable experience!"
    },
    {
      "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg",
      "username": "TravelQueen",
      "reviewStars": 5,
      "review": "Absolutely loved it! The natural beauty is unparalleled and there are so many activities to keep you busy. Would definitely recommend to friends and family. Can't wait to visit again!"
    },
    {
      "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg",
      "username": "GlobeTrotter",
      "reviewStars": 3,
      "review": "The place is beautiful, but I found the services to be lacking. There’s a lot of potential if improvements are made in terms of customer service. Overall, it was an okay experience."
    }
  ]

class Discover extends Component{
    state={isLoading:false,reviews:[]}

    componentDidMount(){
            this.setState({isLoading:true})
            this.setState({reviews:data,isLoading:false})

        
    }

 renderData=()=>{
    const{reviews}=this.state
    if (reviews.length===0){
        return <h3>Fetching Data</h3>
    }

    return <ul className='reviews'>{reviews.map((item)=><li style={{padding:'8px',listStyleType:'none',margin:'10px',width:'25%',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} key={item.username}><div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'8px'}}><img className="profile" src={item.profilePhoto} alt="photo"/><span>{item.username}</span></div>
    <div style={{textAlign:'left'}}>
    <p>{item.review}</p></div></li>)}</ul>
 }


    render(){
        const{isLoading}=this.state

        return<><h2>Discover</h2>
        <div className='reviews-container'>{isLoading? <h3>Loading...</h3>:this.renderData()}</div></>
    }

}

export default Discover
