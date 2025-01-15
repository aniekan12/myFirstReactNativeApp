import { View, Text } from "react-native";

interface Props {
  name: string;
}

export default function Grid({ props }: { props: Props }) {
  return (
    <View>
      <Text>hello, {props.name}</Text>
    </View>
  );
}
