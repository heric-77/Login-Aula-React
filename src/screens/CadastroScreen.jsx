import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
    const [nome, setNome] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onLoginPressed = () => {
    console.log("LoginIniciado");
    // navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setNome({ value: text, error: "" })}
        error={!!nome.error}
        errorText={nome.error}
        autoCapitalize="none"
        autoCompleteType="nome"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={styles.input}
      />
      <br></br>
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

<TextInput
        label="Confirmar Senha"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        style={styles.input}
      />

      <br></br>

      <Button onPress={LoginScreen} mode="contained">
        Cadastrar
      </Button>
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
});
