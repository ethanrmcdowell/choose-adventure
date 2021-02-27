import React from "react";
import plot from '../../utils/plot';
import './style.css';

function Story(){
    const [node, setNode] = React.useState(0);
    const [target, setTarget] = React.useState(plot[0].target);
    
    var currentNode = plot[node];

    function getCurrentNode() {
        return currentNode;
    }

    function setCurrentNode(targetId) {
        currentNode = plot.find(x => x.id === targetId);
        return currentNode;
    }

    function onClick(choice) {
        console.log(choice.text);
        console.log("Target: " + choice.target);
        setNode(choice.target);
        setCurrentNode(choice.target);
        console.log(currentNode);
        setTarget(currentNode.id);
        getCurrentNode();
    }

    return(
        <div className='story-container'>
            <div className="story-div">
                <h2 id="plotTitle">{currentNode.title}</h2>
                <p id="plotContent">{currentNode.content}</p>
                <div className="choice-div">
                    {currentNode.choices.map(choice => (
                        <button value={choice.id} onClick={() => onClick(choice)}>{choice.text}</button>
                    ))}
                </div>
                <div className='monitor-div'></div>
            </div>
        </div>
    )
}

export default Story;