import React from 'react'

export default function Card(props){
    return(
        <div>
        <div className='card-div'>
            <img src={props.imageUrl} className='card-img'/>
           <div className='card-img-details'>
                <img src={"./images/map.png"} className='img-map'/>
                <span className='img-location'>
                    {props.location}
                </span>
                <span className='map-google'>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1 className='img-name'>
                    {props.title}
                </h1>
                <h4 className='date'>
                    {props.startDate} - {props.endDate}
                </h4>
                <p className='img-desc'>
                    {props.description}
                </p>
           </div>
        </div>
           <hr className='line'/>
        </div>
    )
}