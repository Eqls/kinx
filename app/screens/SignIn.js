import React from "react";
import { Actions } from "react-native-router-flux";
import { Login } from "./../api/Auth";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Platform,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white"
  },
  formField: {
    height: 50,
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 3,
    width: "100%",
    marginTop: 10
  },
  buttonWrapper: {
    width: "100%",
    height: 40,
    paddingTop: 10
  },
  avatar: {
    width: 80,
    height: 80
  },
  header: {
    fontSize: 46,
    fontStyle: "italic",
    color: "purple"
  }
});

class SignIn extends React.Component {
  state = {
    error: "",
    done: false,
    user: {
      username: "",
      password: ""
    }
  };

  sendLoginRequest = () => {
    const { user } = this.state;
    Login(user, res => {
      this.setState({
        ...res
      });
    });
  };

  handleChange = data => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        ...data
      }
    });
  };

  render() {
    const { user, error, done } = this.state;
    if (done) {
      Actions.profile();
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>KINX</Text>
        <Image style={styles.avatar} source={require("./../icons/wink.png")} />
        <Text>{error}</Text>
        <TextInput
          style={styles.formField}
          onChangeText={username => this.handleChange({ username: username })}
          value={user.name}
          placeholder="Enter Your username"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          textAlign={"center"}
        />
        <TextInput
          style={styles.formField}
          onChangeText={password => this.handleChange({ password: password })}
          value={user.password}
          type="password"
          placeholder="Enter Your password"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          textAlign={"center"}
          secureTextEntry
        />
        <View style={styles.buttonWrapper}>
          <Button
            onPress={this.sendLoginRequest}
            title="Login"
            color="#841584"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => Actions.signup()}
            title="Sign Up"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
