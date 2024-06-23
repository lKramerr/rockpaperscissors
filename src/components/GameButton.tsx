import { Pressable, Text } from "react-native";
import { globalStyles } from "../styles/globalStyles.theme";

import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    label?: string,
    icon: string,
    type: object,
    state?: string,
    onPress: () => void
}

export const GameButton = ( { label, icon, type, state, onPress }:Props ) => {

    return (
        <Pressable
            onPress={ onPress }
            disabled={ ( state === 'calculating' ) ? true : false }
            style={ ( { pressed } ) => ({
                ...globalStyles.buttonStyle, ...type, opacity: ( pressed ) ? 0.5 : 1
            })  }
        >
             <Icon name={ icon } size={ 54 }/>
             {/* <Text> { label } </Text> */}
        </Pressable>
    )

};