import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Button, Snackbar, TextInput } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onLoginPressed = () => {
    console.log("LoginIniciado");
    // navigation.navigate("Dashboard");

    if (email.value === "" || password.value === "") {
      setEmail({ ...email, error: "Entre com um e-mail válido" });
      setPassword({ ...password, error: "Entre com uma senha" });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Digite seu E-mail"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        style={styles.input}
        /* não essenciais  */
        returnKeyType="next"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.esqueceuSenha}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EsqueceuSenhaScreen")}
        >
          <Text style={styles.label}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.row}>
        <Text style={styles.label}>Não possui uma conta? </Text>
        <Button
          onPress={() => navigation.navigate("Cadastro")}> Cadastro
        </Button>
      
      </View>
      <Snackbar visible={!!email.error}>{email.error}</Snackbar>
      <Snackbar visible={!!password.error}>{password.error}</Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 26,
    flex: 1,
    justifyContent: "center",
  },
  esqueceuSenha: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  input: {
    width: "100%",
  },
  label: {
    color: "black",
  },
  link: {
    fontWeight: "bold",
    color: "black",
  },
})