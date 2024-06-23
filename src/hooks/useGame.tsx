import { useState } from "react";

export const useGame = () => {

    const options = [ 'rock', 'paper', 'scissor' ];

    const [ playerSelection, setPlayerSelection ] = useState( '' );
    const [ machineSelection, setMachineSelection ] = useState( '' );
    const [ gameResult, setGameResult ] = useState('');

    const gameLogic = () => {
        
        if ( playerSelection === '' ) return;

        setGameResult( 'calculating' );
        
        
        setTimeout( () => {
            
            if ( playerSelection === 'rock' && machineSelection === 'rock' ) return setGameResult( 'Tie!' );
            if ( playerSelection === 'paper' && machineSelection === 'rock' ) return setGameResult( 'You Win!' );
            if ( playerSelection === 'scissor' && machineSelection === 'rock' ) return setGameResult( 'You Loose!' );
            if ( playerSelection === 'rock' && machineSelection === 'paper' ) return setGameResult( 'You Loose!' );
            if ( playerSelection === 'paper' && machineSelection === 'paper' ) return setGameResult( 'Tie!' );
            if ( playerSelection === 'scissor' && machineSelection === 'paper' ) return setGameResult( 'You Win!' );
            if ( playerSelection === 'rock' && machineSelection === 'scissor' ) return setGameResult( 'You Win!' );
            if ( playerSelection === 'paper' && machineSelection === 'scissor' ) return setGameResult( 'You Loose!' );
            if ( playerSelection === 'scissor' && machineSelection === 'scissor' ) return setGameResult( 'Tie!' );

        }, 3000 );

        // setMachineSelection(options[ ( Math.floor( Math.random() * options.length ) ) ] );


    };

    const resetGame = () => {
        setPlayerSelection('');
        setMachineSelection('');
        setGameResult('');

        setMachineSelection( options[ ( Math.floor( Math.random() * options.length ) ) ] );
    }

    const onRockPressed = () => setPlayerSelection( 'rock' )

    const onPaperPressed = () => setPlayerSelection( 'paper' );

    const onScissorPressed = () => setPlayerSelection( 'scissor' );

    return {

        machineSelection,
        playerSelection,
        gameResult,

        gameLogic,
        resetGame,
        onRockPressed,
        onPaperPressed,
        onScissorPressed,

    };

}