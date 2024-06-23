import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles.theme";
import { GameButton } from '../components/GameButton';
import { useState } from "react";
import { useGame } from "../hooks/useGame";

import Icon from 'react-native-vector-icons/Ionicons';

export const Main = () => {

    const { machineSelection, playerSelection, gameResult, gameLogic, resetGame, onRockPressed, onPaperPressed, onScissorPressed } = useGame();

    return (
        <View 
            // style={ { ...globalStyles.mainView, flex:1 } }
        >
            <Text style={ globalStyles.title }>Rock Paper Scissors!</Text>

            <View style={ globalStyles.gameResultsView }>

                <Text style={ [ globalStyles.gameLogic, globalStyles.machineText ] }>Machine:</Text>
                <Text style={ [ globalStyles.gameLogic, globalStyles.electionText ] }>
                {
                    ( gameResult === '' || gameResult === 'calculating' )
                    ? ''
                    : machineSelection
                }
                    {/* { machineSelection } */}
                </Text>

                <Text>VS</Text>

                <Text style={ [ globalStyles.gameLogic, globalStyles.electionText ] }> { playerSelection } </Text>

            </View>

            <View style={ globalStyles.buttonsView }>

                <GameButton 
                    icon="barbell-outline"
                    type={ globalStyles.rockButton }
                    // label="Rock!"
                    onPress={ () => onRockPressed() }
                />

                <GameButton 
                    icon="document-outline"
                    type={ globalStyles.paperbutton }
                    label="camera"
                    onPress={ () => onPaperPressed() }
                />

                <GameButton 
                    icon="cut-outline"
                    type={ globalStyles.scissorsButton }
                    label="camera"
                    onPress={ () => onScissorPressed() }
                />

            </View>

            <Text 
                style={ globalStyles.gameResult }
            > 
                { ( gameResult === 'calculating' ) ? '' : gameResult } 
            </Text>


            {
                ( gameResult === '' || gameResult === 'calculating' )
                    ? <GameButton
                        icon="play-forward-outline"
                        label='Play!'
                        state={ gameResult }
                        type={ globalStyles.playAgainButton } 
                        onPress={ gameLogic }
                    />
                    : <GameButton 
                        icon="play-back-outline"
                        label='Play Again!'
                        type={ globalStyles.playAgainButton } 
                        onPress={ resetGame }
                    />
                
            }

        </View>
    )

};