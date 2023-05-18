import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_600SemiBold } from '@expo-google-fonts/bai-jamjuree'
import { Text, View } from 'react-native'

export default function App() {
  const [] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_600SemiBold,
  })
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-4xl font-bold text-zinc-50">Hello World</Text>
      <StatusBar style="light" />
    </View>
  )
}
