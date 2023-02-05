import React from "react";
import { selectBoard } from "./rootSlice";
import "./App.css"
import { useSelector } from "react-redux";
import Box from "./box";

const RowDisplay = () => {
    const board = useSelector(selectBoard);
    const boxes = [];
    const col = board[0].length;
    for(let c = 0 ; c < col ; c++) {
        const boxid = `${c}`;
        boxes.push(<Box />)
    }
}