import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { LibraryProvider } from "../context/LibraryContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <LibraryProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </LibraryProvider>
    </AuthProvider>
  );
}