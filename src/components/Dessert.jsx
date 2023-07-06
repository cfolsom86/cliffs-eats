import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom'



function Dessert() {

  const [dessert, setDessert] = useState([]);

    useEffect(() => {
        getDessert();
    },[]);

    const getDessert = async () => {

        const check = localStorage.getItem("dessert");

        if (check){
            setDessert(JSON.parse(check));
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=200&tags=dessert`);

            const data = await api.json();

            localStorage.setItem('dessert', JSON.stringify(data.recipes));

            setDessert(data.recipes);
            console.log(data.recipes);
         } 
    };

  return (
    
    <div>
            <Wrapper>
                <h3>Popular Desserts</h3>
                
                <Splide options={{
                    perPage: 3,
                    arrows: true,
                    pagination: false,
                    drag: "false",
                    gap: '5rem',
                    addRecipeInformation: true,
                }}>


                {dessert.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.id}>
                            <Card>
                                <Link to={"/recipe/" + recipe.id} >
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                <Gradient />
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
                </Splide>
            </Wrapper>
        </div>
      )
    }

const Wrapper = styled.div`
    margin: 4rem 0rem;

    @media screen and (min-width 340px) {
        display: clear;
        grid-template-rows: fit content;    
    }
`

const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img{
        border-radius: 3rem;
        width: 350px;
        position: absolute;
        left: 0;
        width: 100%;
        height: 80%;
        object-fit: cover;
    }

    p {
        position: absolute;
        z-index: 15;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: #425B91;
        background: #F0F8FF;
        width: 70%;
        border-radius: 25px;
        text-align: center;
        font-weight: 600;
        font-size: 1.2rem;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const Gradient = styled.div `
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 12));
`


export default Dessert