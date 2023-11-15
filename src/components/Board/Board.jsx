import { useContext, useEffect, useState } from "react"
import './Board.css'
import { playersContext } from "../../context/playersContext"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { motion } from "framer-motion"
import { PlayEffectsContext } from "../../context/PlayEffects"

const Board = () => {

    const { playBoardClickEffect, playDrawEffect, playWinEffect } = useContext(PlayEffectsContext)
    const { changeTurn, checkWinner, checkDraw } = useContext(playersContext)
    let [board, setBoard] = useState(Array(9).fill({ value: null, visible: false }))
    useEffect(() => {
        createBoardValues();
    }, []);

    let MySwal = withReactContent(Swal)
    let displayWinner = (winner) => {
        MySwal.fire({
            iconHtml: `<img src="https://media.giphy.com/media/StKiS6x698JAl9d6cx/giphy.gif" width="100px" height="100px" />`,
            title: <p style={{ fontFamily: 'monospace' }}>Winner is <strong>{winner}</strong></p>,
            confirmButtonText: 'Play again',
            backdrop: `
                rgba(0,0,123,0.4)
                left top
                no-repeat
            `
        }).then(() => {
            createBoardValues()
        })
    }

    let displayDraw = () => {
        MySwal.fire({
            iconHtml: `<img src="https://media.giphy.com/media/Xm52bFHZwNDyhGqEVw/giphy.gif" width="150px" height="100px" />`,
            title: <p style={{fontFamily: 'fantasy'}}>Draw</p>,
            confirmButtonText: 'Play again',
            backdrop: `
                rgba(21,21,103,0.4)
                left top
                no-repeat
            `
        }).then(() => {
            createBoardValues()
        })
    }

    let createBoardValues = () => {
        let values = ['X','O']
        let boardValues = []
        for (let i = 0; i < 9; i++) {
            boardValues.push({
                value: values[Math.floor(Math.random() * values.length)],
                visible: false
            })
        }
        setBoard(boardValues)
    }

    let handleClick = (index) => {
        playBoardClickEffect()
        if (!board[index].visible) {
            let newBoard = [...board]
            newBoard[index].visible = true
            setBoard(newBoard)
            setTimeout(() => {
                let winner = checkWinner(board)
                let draw = checkDraw(board)
                if (winner) {
                    playWinEffect()
                    displayWinner(winner)
                    // createBoardValues()
                }else if(draw) {
                    playDrawEffect()
                    displayDraw()
                    // createBoardValues()
                }
            }, 20);
                
            changeTurn()
        }
    }

    return (
        <>
            <div className="board">
                {board.map((value, index) => {
                    return <motion.button
                    initial={{ scale: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    onClick={() => handleClick(index)} key={index} className="board_cell">{value.visible ? value.value : '?'}</motion.button>
                })}
            </div>
            <div className="game-rules">
                <p>
                    Players will not place <span className="x">X</span>s or <span className="o">O</span>s, instead they will choose random spot, the spot could be <span className="x">X</span> or <span className="o">O</span>, <br />the first player to get 3 <span className="x">X</span>s or <span className="o">O</span>s in a row, column or diagonal wins the game.
                </p>
            </div>
        </>
    )
}

export default Board
