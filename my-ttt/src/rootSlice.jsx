import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    board:[
        ["-","-","-"],
        ["-","-","-"],
        ["-","-","-"]
    ],
    turn : "X",
    winner : "-",
}

export const rootSlice = createSlice({
    name: "Root",
    initialState,
    reducers: {
        playRoot: (state, action) => {

            let coordinate = action.payload.split("-");
            let row = coordinate[0];
            let col = coordinate[1];
            if(state.board[row][col] === "-") {
                if(state.turn === "X") {
                    state.board[row][col] = "X";
                    state.turn = "Y";
                }else {
                    state.board[row][col] = "Y";
                    state.turn = "X";
                }
            }
        },
        scoreCheck: (state,action) => {
            let br = state.board;
            const rowCheck = () => {
                for(let r = 0; r < br.length; r++) {
                    let current = br[r][0];
                    if(current !== "-") {
                        let score = 1;
                        for(let c = 1; c < br[r].length; c++) {
                            if(current === br[r][c]) score++;
                        }
                        if(score === 3) {
                            state.winner = current === "X" ? "X" : "Y";
                        }
                    }
                }
                return state.winner;
            }
            const colCheck = () => {
                for(let c = 0; c < br[0].length; c++) {
                    let current = br[0][c];
                    if(current !== "-") {
                        let score = 1;
                        for(let r = 1; r < br.length; r++) {
                            if(current === br[r][c]) score++;
                        }
                        if(score === 3) {
                             state.winner = current === "X" ? "X" : "Y";
                            
                        }
                    }
                }
                return state.winner;
            }
            const diagonal = () => {
                if(br[0][0] === br[1][1] && br[1][1] === br[2][2]) {
                    state.winner = br[0][0];
                }
                if(br[0][2] === br[1][1] && br[1][1] === br[2][0]) {
                    state.winner = br[0][2];
                }
                return state.winner;
            }
            rowCheck();
            colCheck();
            diagonal();
            if(state.winner === "X" || state.winner === "Y") {
                console.log("HERE IS THE WINNER===>",state.winner);   
                //stope the game, put a reset button.
                
            }
        },
        // If we defined the initial state outside of the function, we can use reset function to reset the current state
        // to initial state.
        reset : () => initialState,
    }
})
export const {
    playRoot,
    scoreCheck,
    reset,
} = rootSlice.actions;
export const selectBoard = (state) => state.board.board;
export const stateTurn = (state) => state.board.turn;
export const stateWinner = (state) => state.board.winner;

export default rootSlice.reducer;