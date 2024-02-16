import { useRef } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

export default function App() {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  return (
    <>
      <View style={styles.container}>
        <View>
          <Button
            title="Open sheet"
            onPress={() => {
              actionSheetRef.current?.show();
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
                actionSheetRef.current?.hide();
              }}
            />
          </View>
        </View>
      </View>
      <ActionSheet
        useBottomSafeAreaPadding
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}
        backgroundInteractionEnabled={true}
        ref={actionSheetRef}
      >
        <View
          style={{
            height: 100,
          }}
        >
          <Text>Hello from Sheet</Text>
        </View>
      </ActionSheet>
    </>
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
