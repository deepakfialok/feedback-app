import './Card.css';
import { Head } from './Head';

function Card({name,price,variant,rating,features,features2}){
    console.log(features2);
    return(
        <div>
            <Head title={name}/>
            <div className="box">
                <h1>Product Name :{name}</h1>
                <h1>Product Details :{price+10000}</h1>
                <h1>Product Variant :{variant}</h1>
                <h1>Product Rating :{rating+1}</h1>
                <h1>Specification : {features}</h1>
                <h1>Specification 1: {features2}</h1>
            </div>
        </div>
    )
}

export default Card;