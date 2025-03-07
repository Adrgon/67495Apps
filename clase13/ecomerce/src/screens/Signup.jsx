import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, {useState} from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
 import { colors } from "../global/color";

const Signup = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMail, setErrorMail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
  
  
    const onSubmit = () => {}

    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>Signup</Text>
          <InputForm label={"email"} onChange={setEmail} error={errorMail} />
          <InputForm
            label={"password"}
            onChange={setPassword}
            error={errorPassword}
            isSecure={true}
          />
          <InputForm
            label={"confirm password"}
            onChange={setConfirmPassword}
            error={errorConfirmPassword}
            isSecure={true}
          />
          <SubmitButton onPress={onSubmit} title="Send" />
          <Text style={styles.sub}>Already have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.subLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    );
}

export default Signup

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    gap: 15,
    paddingVertical: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "Josefin",
  },
  sub: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: "black",
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Josefin",
    color: "blue",
  },
});
