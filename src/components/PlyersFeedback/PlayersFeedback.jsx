import { useContext } from "react"
import { playersContext } from "../../context/playersContext"
import style from './PlayersFeedback.module.css'


const PlayersFeedback = () => {

    const { players } = useContext(playersContext)

    return (
        <div className={style.container}>
            <div className={`${style.player_container} ${style.watermelon}`}>
                <h2 className={`${players[0].turn ? style.isTurnWatermelon : ''}`}>{players[0].name}</h2>
            </div>
            <div className={`${style.player_container} ${style.melon}`}>
                <h2 className={`${players[1].turn ? style.isTurnMelon : ''}`}>{players[1].name}</h2>
            </div>
        </div>
    )
}

export default PlayersFeedback
