import React from "react"
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetRefProps } from "./components/BottomSheet"

interface RenderAppProps {
  children: React.ReactNode
}

const App = () => {
  const ref = React.useRef<BottomSheetRefProps>(null)
  const onPress = React.useCallback(() => {
    const isActive = ref?.current?.isActive();
    ref?.current?.scrollTo(isActive ? 0 : -100)
  }, [])

  const RenderApp: React.FC<RenderAppProps> = ({ children }) => (
    <GestureHandlerRootView style={{ flex: 1 }}>{children}</GestureHandlerRootView>
  )

  return (
    <RenderApp>
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref} />
      </View>
    </RenderApp>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#111"
  },
  button: {
    height: 50,
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 25,
    opacity: 0.6
  }
})

export default App