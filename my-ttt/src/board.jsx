import React from "react";
import { selectBoard, playRoot, scoreCheck, reset, stateWinner } from "./rootSlice";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";

// const Box = () => {
//     return (
//         <button className="xbtn">
//             Y
//         </button>
//     )
// }

const BoardDisplay = () => {
    let board = useSelector(selectBoard);
    let winner = useSelector(stateWinner);
    if(winner !== "-") {
        
    }
    const dispatch = useDispatch();
    const handlePlay = (e) => {
        // To get the id of the clicked box, we should use e.target.id. So that we can get the address for the box and manipulate it.
        // At the same time, each box should have a unique key, dont forget to add key.
        dispatch(playRoot(e.target.id));
        dispatch(scoreCheck());
    }
    // console.log("HERE IS YOUR INITIAL BOARD",board);
    const boxes = []
    const row = board.length;
    const col = board[0].length;
    let rows = [];
    for(let r = 0; r < row; r++) {
        rows = []
        for(let c = 0; c < col; c++) {
            const boxid = `${r}-${c}`;
            const boxValue = board[r][c];
            rows.push(<button className="xbtn" key={boxid} id={boxid} onClick={handlePlay}>{boxValue}</button>)
        }
        boxes.push(rows)
    }
    const resetGame = () => {
        dispatch(reset());
    }
    // console.log("HERE IS YOUR ROWS",boxes)
    return (
        <div>
            <button onClick={resetGame}>Reset</button>
            <br></br>
            {boxes[0]}
            <br></br>
            {boxes[1]}
            <br></br>
            {boxes[2]}
        </div>
    )
}

export default BoardDisplay;
