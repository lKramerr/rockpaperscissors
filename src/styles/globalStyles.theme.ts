import { StyleSheet } from "react-native";

export const colors = {
    background: '#FDFCDC',

    titleText: '#d6a16f',
    buttonTexts: '#ffffff',

    button: '#00AFB9',
    paperButton: '#0081a7',
    rockButton: '#F07167',

    playAgain: '#2EC4B6'
}

export const globalStyles = StyleSheet.create({

    mainView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.background
    },

    title: {
        fontSize: 72,
        textAlign: 'center',
        color: colors.titleText
    },

    gameResultsView: {
        marginVertical: 24,
        alignSelf: 'center',
        alignItems: 'center'
    },

    gameLogic: {
        color: colors.titleText
    },

    buttonText: {
        color: colors.buttonTexts
    },

    machineText: {
        fontSize: 24,
    },

    electionText: {
        fontSize: 32,
        fontWeight: '700'
    },

    buttonsView: {
        alignSelf: 'center'
    },

    buttonStyle: {
        width: 128,
        height: 128,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },

    rockButton: {
        backgroundColor: colors.button
    },

    paperbutton: {
        backgroundColor: colors.rockButton,
        marginLeft: 96
    },

    scissorsButton: {
        backgroundColor: colors.paperButton
    },

    gameResult: {
        marginTop: 25,
        textAlign: 'center',
        fontSize: 24,
        fontStyle: 'italic'
    },

    playAgainButton: {
        backgroundColor: colors.playAgain,
        marginTop: 25,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: 55,
        borderRadius: 25
    },

    playAgainText: {
        fontSize: 18
    }

});