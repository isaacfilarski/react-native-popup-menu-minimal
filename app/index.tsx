
import { Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import { View, Text, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

const ScreenWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={{ flex: 1, backgroundColor: "#fff" }}>{children}</View>
);

export default function Home() {
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home Page</Text>
        <Menu>
          <MenuTrigger >
            <Text style={{ color: 'blue', fontSize: 50 }}>Open Menu</Text>
          </MenuTrigger>
          <MenuOptions customStyles={{ optionsContainer: [styles.optionsContainer] }}>
            <MenuOption onSelect={() => alert("Option 1")} text="Option 1" />
            <MenuOption onSelect={() => alert("Option 2")} text="Option 2" />
          </MenuOptions>
        </Menu>
        <Link href="/modal" asChild>
          <Button title="Go to Modal" />
        </Link>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    borderRadius: 12,
    elevation: 4,
    width: 180,
    paddingVertical: 8,
    backgroundColor: "white",
  },
});