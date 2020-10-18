import React from 'react'


import { HeroList } from './../heroes/HeroList';




export const DcScreen = () => {
    return (
        <div>
            <h1>Dc screen</h1>
            <hr className="mb-5"/>

            <HeroList publisher= "DC Comics" />
        </div>
    )
}
