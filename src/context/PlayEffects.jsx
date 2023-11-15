
    import React, { createContext, useMemo, useState } from "react";
    import useSound from "use-sound";


export const PlayEffectsContext = createContext();

export const PlayEffectsProvider = ({ children }) => {
    const [playClickEf, {stopClickEf}] = useSound('/mixkit-cool-interface-click-tone-2568.wav', { volume: 0.2 })
    const [PlayBoardClickEf, {stopPlayBoardClickEf}] = useSound('/mixkit-game-click-1114.wav', { volume: 0.2 })
    const [PlayDrawEf, {stopPlayDrawEf}] = useSound('/mixkit-slow-sad-trombone-fail-472.wav', { volume: 0.2 })
    const [PlayWinEf, {stopPlayWinEf}] = useSound('/mixkit-male-crowd-cheering-short-459.wav', { volume: 0.2 })

    const playClickEffect = () => {
        playClickEf()
    }

    const playBoardClickEffect = () => {
        PlayBoardClickEf()
    }

    const playDrawEffect = () => {
        PlayDrawEf()
    }

    const playWinEffect = () => {
        PlayWinEf()
    }

    return (
        <PlayEffectsContext.Provider value={{ playClickEffect, playBoardClickEffect, playDrawEffect, playWinEffect }}>
            {children}
        </PlayEffectsContext.Provider>
    );
};