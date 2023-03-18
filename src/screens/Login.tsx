import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { auth, app } from "../../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Divider from "../components/Divider";
import Header from "../components/Header";
import InputBox from "../components/InputBox";


const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const loginWithGoogle = () => {
    console.log("backkk")
    // createUserWithEmailAndPassword(auth, "test@test.com", "test@123")
    //   .then((userCredential) => {
    //     // Signed in  
    //     console.log("success")
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {

    //     console.log("failing")
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
    const db = getFirestore(app);
    const dbRef = collection(db, "visitors");
    const data = {
      license_plate_number:"ABSG",
      car_make: "steel",
      car_model: "Audi",
      state_registered:"Telangana",
      unit:"2",
      year:"2023"
    };
    addDoc(dbRef, data)
      .then(docRef => {
        console.log("Document has been added successfully");
      })
      .catch(error => {
        console.log(error);
      })

  };


  return (
    <SafeAreaView style={styles.container}>
      <Header title="Login" goBack={loginWithGoogle} />
      <Divider height={50} />
      <InputBox placeholder="email" value={email} onChangeText={setEmail} />
      <Divider height={30} />
      <InputBox placeholder="password" value={password} onChangeText={setPassword} type="password" />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 60,
  },
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",

    paddingLeft: 10,
    paddingRight: 10,
  },
  headerText: {
    width: "100%",
    fontFamily: "PTMono-Regular",
    fontSize: 30,
    textAlign: "center",
  },
  topLeft: {
    position: "absolute",
    left: 10,
    top: 5,
    zIndex: 10,
  },
});

export default Login;
