import React,{ createContext } from "react";




export const playersContext = createContext();


export const PlayersProvider = ({ children }) => {
    
        const [players, setPlayers] = React.useState([
            { name: 'Watermelon', turn: true },
            { name: 'Melon', turn: false }
        ])

        let changeTurn = () => {
            let newPlayers = [...players]
            newPlayers[0].turn = !newPlayers[0].turn
            newPlayers[1].turn = !newPlayers[1].turn
            setPlayers(newPlayers)
        }

        let checkDraw = (board) => {
            let draw = true
            board.forEach((cell) => {
                if (!cell.visible) {
                    draw = false
                }
            })
            draw && setPlayers([
                { name: 'Watermelon', turn: true },
                { name: 'Melon', turn: false }
            ])
            return draw
        }

        let checkWinner = (board) => {
            
            let winner = null
            let winningCombinations = [
                [0, 1, 2],
                [0, 4, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 4, 6],
                [2, 5, 8],
                [3, 4, 5],
                [6, 7, 8]
            ]
            winningCombinations.forEach((combination) => {
                // console.log("checking combination", combination);
                let [a, b, c] = combination
                console.log((board[a].visible && board[b].visible && board[c].visible) && (board[a].value === board[b].value && board[b].value === board[c].value));
                if ((board[a].visible && board[b].visible && board[c].visible) && (board[a].value === board[b].value && board[b].value === board[c].value)) {

                    if (players[0].turn){
                        winner = players[1].name
                    }else {
                        winner = players[0].name
                    }
                    setPlayers([
                        { name: 'Watermelon', turn: true },
                        { name: 'Melon', turn: false }
                    ])
                }
            })
            return winner
        }
    
        return (
            <playersContext.Provider value={{players, changeTurn, checkWinner, checkDraw}}>
                {children}
            </playersContext.Provider>
        )
}