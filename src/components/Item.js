import {Link} from "react-router-dom"

const Item = (props) => {
    return (
        <div className = "items">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <Link to = {`/item/${props.id}`}>ver mas</Link>
        </div>
    )
    
}

export default Item