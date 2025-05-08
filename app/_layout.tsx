
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="(tabs)/Home" options={{ title: "Home", headerShown: false }} />
      <Tabs.Screen name="(tabs)/ChatAI" options={{ title: "Chat AI", headerShown: false }} />
      <Tabs.Screen name="(tabs)/ImageAnalysis" options={{ title: "Análise de Imagem", headerShown: false }} />
      <Tabs.Screen name="(tabs)/Developers" options={{ title: "Desenvolvedores", headerShown: false }} />
    </Tabs>
  );
}
