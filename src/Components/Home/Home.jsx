import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card/Card";
import PropTypes from "prop-types";

const Home = ({handleSelect}) => {

    const [actors,setActors] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActors(data))
    },[])

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
            {
                actors.map(actor=> 
                    (actor.id !== 10) && (actor.id !== 12 ) && (actor.id !==15) &&
                <Card 
                    key={actor.id} 
                    actor={actor}
                    handleSelect={handleSelect}
                />)
            }
        </div>
    );
};

export default Home;


Home.propTypes = {
    handleSelect: PropTypes.func.isRequired
  };