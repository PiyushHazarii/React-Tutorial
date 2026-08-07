import './card.css'
import {Bookmark} from 'lucide-react'

const card = (props) => {
  return (
    <div className='top'>
      <div className= "card">  
      <div className="cardHeader">
        <img src={props.image} className='imageClass'></img>
        <button> Save <Bookmark size={12}/> </button>
      </div>

      <div className="cardBody">
        <h3>{props.companyName} <span>5 days ago</span></h3>
        <h2>{props.designation}</h2>
        <div className='cardBodyDiv'>
          <h4>{props.time}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>

      <div className="cardFooter">
        <div>
          <h5>{props.price}</h5>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
    </div>
  )
}

export default card