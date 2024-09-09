import { useState } from "react"
import { Alert, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <ImageBackground
      source={require("./image/background.png")}
      style={styles.bgImg}>
            
      <View style={styles.container}>
        <Image source={require("./image/moon.png")} style={styles.image}/>
        <View style={styles.form}>
          
          <Text style={styles.header}>Sign up with your account</Text>
          <Text style={styles.text}>Email address</Text>
          <TextInput 
            placeholder="Enter your email..."
            style={styles.txtInput}
            onChangeText={(text) => (setEmail(text))}
            value={email}/>
          <Text style={styles.text}>Password</Text>
          <TextInput 
            placeholder="Enter your password..."
            secureTextEntry
            style={styles.txtInput}
            onChangeText={(text) => (setPassword(text))}
            value={password}/>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert("Hello!", `Email: ${email}\nPassword: ${password}`)
              setEmail("")
              setPassword("")
            }}
            >
              <Text style={styles.btnTxt}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default App

const styles = StyleSheet.create({
  bgImg:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -20,
    marginBottom: 20
  },
  form: {
    backgroundColor: "white", 
    padding: 30,
    borderRadius: 20
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#243b54"
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20
  },

  txtInput: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 5
  },

  button: {
    backgroundColor: "#415e80",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 100,
    alignSelf: "center",
    borderRadius: 20,
    marginTop: 20
  },

  btnTxt: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
})