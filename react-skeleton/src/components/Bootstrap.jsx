import React from 'react';
import Navbar from './Navbar/index';
import Image from "./Images/index"
import Card from "./Cards/index"
import cardimages from "../cardimages.json"

function Bootstrap() {
    return ( <>
        <Navbar />
        <Image />
        <Card image={cardimages[0].image} name={cardimages[0].name}/>   
        <Card image={cardimages[1].image} name={cardimages[1].name}/>
        <Card image={cardimages[2].image} name={cardimages[2].name}/>
        <Card image={cardimages[3].image} name={cardimages[3].name}/>
        <Card image={cardimages[4].image} name={cardimages[4].name}/>
        </>
        )
}
export default Bootstrap