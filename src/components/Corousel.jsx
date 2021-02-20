import React,{Fragment} from 'react'
import Carousel from 'react-elastic-carousel'


const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550, itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200, itemsToShow:4},
    {width:1550, itemsToShow:5},
]
function Corousel() {
    return (
        <Fragment>
            <h1 style={{textAlign:'center'}}>KaziPool Carousel</h1>
            <Carousel breakPoints={breakPoints}>
            <h1>One</h1>
            <h1>Two</h1>
            <h1>Three</h1>
            <h1>Four</h1>
            <h1>Five</h1>
            <h1>Six</h1>
            </Carousel>
        </Fragment>
    )
}

export default Corousel
