import React from 'react'
import Header from './Header'
import Card from './Card'
import data from './data'
export default function App(){
    const cardData= data.map(item => {return(
        <Card 
         key={item.id}
         {...item} 
         />
    )
    })
    return(
        <div className='main'>
        <Header />
            {cardData}
        
       </div>
    )
}