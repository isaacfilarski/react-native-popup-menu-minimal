import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from 'react-native-popup-menu';

export default function ModalPage() {
  const router = useRouter();

  return (
    <MenuProvider skipInstanceCheck>
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', gap:20, alignItems: 'center' }}>
        <Text>Modal Page</Text>
        <Menu>
          <MenuTrigger >
            <Text style={{ color: 'blue', fontSize: 50 }}>Open Menu</Text>
          </MenuTrigger>
          <MenuOptions customStyles={{ optionsContainer: [styles.optionsContainer] }}>
            <MenuOption onSelect={() => alert('Modal Option 1')} text="Option 1" />
            <MenuOption onSelect={() => alert('Modal Option 2')} text="Option 2" />
          </MenuOptions>
        </Menu>
        <Button title="Close Modal" onPress={() => router.back()} />
      </View>
    </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    borderRadius: 12,
    elevation: 4,
    width: 180,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
});