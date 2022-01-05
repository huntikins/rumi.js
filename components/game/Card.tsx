import Image from "next/image";
import { useState } from "react";
import Draggable from 'react-draggable';

function Card({card, type, selectCard}: any){
    const height = type == 'player' ? 100 : 50;
    const width = type == 'player' ? 70 : 35;

    const [activeDrags, setActiveDrags] = useState(0)
    const [deltaPosition, setDeltaPosition] = useState({
        x: 0,
        y: 0
    })

    function handleCardSelection(){
        selectCard(card);
        console.log(card)
    }

    function onStart(){
        selectCard(card);
        let currentDragStart = activeDrags
        return setActiveDrags(++currentDragStart);
    };
    
    function onStop() {
        let currentDragStop = activeDrags
        return setActiveDrags(--currentDragStop);
    };

    function handleDrag(e, ui) {
        const {x, y} = deltaPosition;
        setDeltaPosition({x: x + ui.deltaX,y: y + ui.deltaY})
        console.log(deltaPosition.x.toFixed(0), deltaPosition.y.toFixed(0))
    }

    console.log(activeDrags)

    if(type == 'player'){
        const dragHandlers = {onStart, onStop};
        return (
            <li className="card-grid__list--item px-2">
                <Draggable onDrag={handleDrag} bounds=".player" {...dragHandlers}>
                    <img draggable="false" src={card.front ? card.front : ''} alt={card.alt} width={width} height={height} />
                </Draggable>
            </li>
        )
    }

    return (
        <li className="card-grid__list--item px-2">
            <Image src={card.front ? card.front : ''} alt={card.alt} width={width} height={height} onClick={handleCardSelection}/>
        </li>
    )
}

export default Card;