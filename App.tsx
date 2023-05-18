import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_600SemiBold } from '@expo-google-fonts/bai-jamjuree'
import { ImageBackground } from 'react-native'
import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_600SemiBold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-950"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <Stripes />
      <StatusBar style="light" />
    </ImageBackground>
  )
}
