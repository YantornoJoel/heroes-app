import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';

import queryString from 'query-string'


import { HeroCard } from './../heroes/HeroCard';
import { useForm } from './../../hooks/useForm';
import { getHeroesByName } from './../../selectors/getHeroesByName';


export const SearchScreen = ({ history }) => {

    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)


    const [formValues, handleInputChange] = useForm({
        searchText: q
    })


    const { searchText } = formValues

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1 className="text-center">Search</h1>
            <hr />


            <div className="row mt-5">

                <div className="col-5">
                    <h4 className="text-center">Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            autoComplete="off"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            placeholder="Search"
                            type="text"
                            value={searchText}
                        />
                        <button
                            type="submit"
                            className="btn mt-3 btn-block btn-outline-secondary"
                            // style={{color: "black"}}
                        >
                            Search
                        </button>
                    </form>
                </div>


                <div className="col-7">
                    <h4 className="text-center">Results</h4>
                    <hr />


                    {
                        (q === '') &&
                        <div className="alert alert-warning">
                            Search a hero
                            </div>
                    }


                    {
                        (q !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                            There is no a hero with {q}
                        </div>
                    }


                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
