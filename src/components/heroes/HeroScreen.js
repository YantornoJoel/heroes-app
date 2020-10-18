import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from './../../selectors/getHeroesById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams()

    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])



    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push("/")
        } else {
            history.goBack()
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero

    return (
        <div className="row mt-5">


            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg `}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>


            <div className="col-8 mt-5 animate__animated animate__fadeInUp">
                <h3 className="text-center ">{superhero}</h3>
                <ul className="list-group list-group-flush mt-5">
                    <li className="list-group-item">   <b>Alter ego: </b>  {alter_ego}  </li>
                    <li className="list-group-item">   <b>Publisher: </b>  {publisher}  </li>
                    <li className="list-group-item">   <b>First appearance: </b>   {first_appearance}  </li>
                    <li className="list-group-item"> <b> Characters </b>  {characters}  </li>
                </ul>
                <button
                    className="btn btn-lg btn-outline-primary mt-5" style={{borderRadius: "10px"}}
                    onClick={handleReturn}
                >

                    Return
                </button>
            </div>


        </div>
    )
}



//  useParams() ::  EXTRAE LOS PARAMETROS QUE LLEGAN A LA URL