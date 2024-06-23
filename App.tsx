import { SafeAreaView, Text, View } from "react-native";
import { Main } from './src/screens/Main';
import { globalStyles } from "./src/styles/globalStyles.theme";
import { PaperProvider } from "react-native-paper";

import IonIcon from 'react-native-vector-icons/Ionicons'

export const App = () => {

    return (

        // <PaperProvider 
        //     settings={{
        //     icon: (props) => <IonIcon { ...props } /> 
        // }} >
            <SafeAreaView style={ globalStyles.mainView }>
                
                    <Main />

            </SafeAreaView>
        // </PaperProvider>

    )

};