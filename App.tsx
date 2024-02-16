import { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ActionSheet, {
  ActionSheetRef,
  SheetManager,
  SheetProvider,
  registerSheet,
} from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AppInner = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button
          title="Open sheet"
          onPress={() => {
            SheetManager.show("test");
          }}
        />
        <View
          style={{
            paddingTop: 30,
          }}
        >
          <Button
            title="Close Sheet"
            onPress={() => {
              SheetManager.hide("test");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const TestSheet = () => {
  return (
    <ActionSheet isModal={false} backgroundInteractionEnabled={true}>
      <View
        style={{
          height: 100,
        }}
      >
        <Text>Hello from Sheet</Text>
      </View>
    </ActionSheet>
  );
};

registerSheet("test", TestSheet);

export default function App() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <SheetProvider context="global">
        <AppInner />
      </SheetProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
