import { createContext, useContext, useState } from "react";
import { savedPlaylists as initialPlaylists } from "../data/libraryData";

export type Playlist = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
};

type LibraryContextType = {
  playlists: Playlist[];
  addPlaylist: (title: string) => void;
};

const LibraryContext = createContext<LibraryContextType | null>(null);

export function LibraryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playlists, setPlaylists] = useState<Playlist[]>(initialPlaylists);

  const addPlaylist = (title: string) => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    const newPlaylist: Playlist = {
      id: Date.now().toString(),
      title: trimmedTitle,
      subtitle: "0 songs",
      image: `https://picsum.photos/200/200?playlist-${Date.now()}`,
    };

    setPlaylists((prev) => [newPlaylist, ...prev]);
  };

  return (
    <LibraryContext.Provider value={{ playlists, addPlaylist }}>
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibrary must be used within LibraryProvider");
  }

  return context;
}