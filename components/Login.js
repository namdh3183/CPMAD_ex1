import { ImageBackground, StyleSheet, Text, TextInput, View } from "react-native"

const Login = () => {
    return (
        //     <ImageBackground
        //         source={require("../image/background.png")}
        //         style={{flex: 1}}>
        //     </ImageBackground>
        <View style={styles.container}>
            <Text style={styles.header}>Sign up with your account</Text>
            <TextInput style={styles.txtInput}></TextInput>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "aqua"
    },

    image: {
        
    },

    text: {
        flex: 1
    }
})