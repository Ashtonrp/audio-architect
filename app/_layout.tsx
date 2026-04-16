import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
import { LibraryProvider } from "../context/LibraryContext";
import { MusicProvider } from "../context/MusicContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <MusicProvider>
        <LibraryProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </LibraryProvider>
      </MusicProvider>
    </AuthProvider>
  );
}