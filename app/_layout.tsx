
import * as React from 'react';
import { Stack } from 'expo-router';
import { MenuProvider } from 'react-native-popup-menu';

export default function Layout() {
  return (
    <MenuProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home Page' }} />
        <Stack.Screen name="modal" options={{ title: 'Modal Page', presentation: 'modal' }} />
      </Stack>
    </MenuProvider>
  );
}
