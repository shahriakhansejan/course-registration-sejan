import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])

    return (
        <div className="w-2/3">
            <h2 className="text-2xl font-semibold">Card:{cards.length}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                cards.map(card => <Card key={card.id} card={card}>

                </Card>)
            }
            </div>
        </div>
    );
};

Cards.propTypes = {
    
};

export default Cards;