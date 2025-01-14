import { View, Text, Image, ImageBackground } from "react-native";
const myImage = require("@/assets/images/icon.png");

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 60,
        backgroundColor: "white",
      }}
    >
      <Text>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Home Screen
        </Text>
      </Text>
      <ImageBackground
        source={{ uri: "https://picsum.photos/200" }}
        alt="Logo"
        style={{
          marginTop: 10,
          flex: 2,
          width: 300,
          height: 300,
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
            textAlign: "right",
          }}
        >
          hello
        </Text>
      </ImageBackground>
      <Image
        source={myImage}
        style={{
          flex: 1,
          width: 300,
          height: 300,
        }}
      />
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        alt="Logo"
        style={{
          width: 300,
          height: 300,
        }}
      ></Image>
    </View>
  );
}
