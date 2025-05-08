import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ title: "Início" }} />
      <Tabs.Screen name="ChatAI" options={{ title: "Chat IA" }} />
      <Tabs.Screen name="ImageAnalysis" options={{ title: "Análise de Imagem" }} />
      <Tabs.Screen name="Developers" options={{ title: "Desenvolvedores" }} />
    </Tabs>
  );
}
