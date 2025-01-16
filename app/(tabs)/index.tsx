import Grid from "@/components/Grid";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
// import { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Image,
  Pressable,
  ImageBackground,
  ScrollView,
  Modal,
  Button,
  ActivityIndicator,
  Alert,
  Dimensions,
  StyleSheet,
} from "react-native";
import StylingTryOut from "../stylingTryOut";
import Box from "@/components/Box";
const myImage = require("@/assets/images/icon.png");

export default function HomeScreen() {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [statusBarVisible, setStatusBarVisible] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const props = {
    name: "anii, react native engineer",
  };

  const { width, height } = useWindowDimensions();

  // const [dimensions, setDimensionsSize] = useState({
  //   width: Dimensions.get("window").width,
  //   height: Dimensions.get("window").height,
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensionsSize({
  //       width: window.width,
  //       height: window.height,
  //     });
  //     return () => {
  //       subscription?.remove();
  //     };
  //   });
  // });

  // const { width, height } = dimensions;

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: width > 500 ? "70%" : "90%",
            height: height > 600 ? "60%" : "90%",
          },
        ]}
      >
        <Text
          style={[
            {
              color: "white",
            },
            {
              fontSize: width > 500 ? 50 : 24,
            },
          ]}
        >
          {props.name}
        </Text>
      </View>
      {/* <Box
        style={{
          backgroundColor: "cyan",

          // flexShrink: 1,
        }}
      >
        Box 1
      </Box>
      <Box
        style={{
          backgroundColor: "green",

          // flexShrink: 5,
        }}
      >
        Box 2
      </Box>
      <Box style={{ backgroundColor: "orange" }}>Box 3</Box>
      <Box
        style={{
          backgroundColor: "pink",
          // alignSelf: "auto",
          // flexBasis: 300,
          // flex: 1,
        }}
      >
        Box 4
      </Box>
      <Box
        style={{
          backgroundColor: "blue",
          position: "absolute",
          top: 100,
          left: 100,
          // alignSelf: "auto",
          // flexBasis: 300,
          // flex: 1,
        }}
      >
        Box 4
      </Box>
      <Box style={{ backgroundColor: "orange" }}>Box 4</Box>
      <Box style={{ backgroundColor: "yellow" }}>Box 4</Box>
      <Box style={{ backgroundColor: "red" }}>Box 4</Box> */}
      {/* <StatusBar
        backgroundColor={Colors.dark.tint}
        barStyle="default"
        hidden={statusBarVisible}
      />
      {/* <StylingTryOut /> */}

      {/* {isLoading && (
        <ActivityIndicator
          size="small"
          color={Colors.light.tint}
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        />
      )}
      <Button
        title="press me to activate loader"
        color="black"
        onPress={() => {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        }}
      />
      <Button
        title="next page"
        color="black"
        onPress={() => {
          <Link href="/stylingTryOut" />;
        }}
      />
      <Grid props={props} />
      <Button
        title="alert"
        color="red"
        onPress={() => {
          // Alert.alert("my first alert and its not money", "heyyyy");
          Alert.alert("my first alert and its not money", "", [
            {
              text: "cancel",
              onPress: () => {
                console.log("canceled");
              },
            },
            {
              text: "ok",
              onPress: () => {
                console.log("ok");
              },
            },
          ]);
        }}
      />
      <ScrollView
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={true}
      >
        <Button
          title="Press"
          color={Colors.light.tint}
          onPress={() => {
            setModalVisible(true);
          }}
        />
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
        <Pressable
          onLongPress={() => {
            console.log("long pressed");
          }}
          onPress={() => {
            setStatusBarVisible(!statusBarVisible);
          }}
        >
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
                color: "red",
                fontWeight: "bold",
                fontSize: 30,
                textAlign: "right",
              }}
            >
              hello
            </Text>
          </ImageBackground>
        </Pressable>
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
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
          laoreet tellus, ullamcorper lobortis ante. Vivamus interdum neque eu
          rhoncus pulvinar. Praesent molestie fermentum placerat. Pellentesque
          ac orci imperdiet, consectetur ex ut, tristique mi. Suspendisse
          elementum in ipsum ac ultrices. Nam maximus vulputate nisi, a blandit
          ligula aliquet vitae. Curabitur at turpis dolor. Sed blandit gravida
          ex in lobortis. Praesent pellentesque vel lacus vel vehicula. Sed
          laoreet fermentum mi gravida sagittis. Fusce ut libero id dolor
          maximus faucibus non quis eros. Proin venenatis justo at nibh congue
          viverra. Fusce accumsan bibendum velit, vel tincidunt enim pretium in.
          Donec quis velit vel orci lacinia finibus. Maecenas dapibus rhoncus
          scelerisque. Nulla at maximus felis. Integer nec cursus lorem, at
          dictum nisi. Duis interdum rhoncus nulla at condimentum. Ut interdum
          consequat nisi vel sagittis. Sed imperdiet convallis sagittis. Nulla
          commodo malesuada rutrum. Integer at dictum eros, vel tincidunt orci.
          Donec et lorem ac nulla tincidunt bibendum in a magna. Sed sit amet
          purus dolor. Aenean congue magna ac tincidunt viverra. Duis id
          consectetur metus. Fusce ullamcorper accumsan tellus sit amet
          consectetur.
        </Text>
      </ScrollView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.light.tint,
            justifyContent: "center",
            height: 300,
            alignItems: "center",
          }}
        >
          <Text>my first successful modal lol!</Text>
          <Button
            title="close"
            onPress={() => setModalVisible(false)}
            color={"black"}
          />
        </View>
      </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    // fontSize: width > 500 ? 50 : 24,
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginTop: 64,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // alignContent: "center",
    // borderWidth: 4,/
    backgroundColor: "plum",
    // rowGap: 20,
    // columnGap: 10,
    // gap: 20,
    flex: 1,
    // width: 300,
    // height: 300,
    // height: 200,
  },
});
