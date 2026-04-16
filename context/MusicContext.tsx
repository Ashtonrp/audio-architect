import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";
import {
  songs as musicSongs,
  albums as musicAlbums,
  playlists as musicPlaylists,
  Song,
  Album,
  Playlist,
} from "../data/musicData";

type MusicContextType = {
  songs: Song[];
  albums: Album[];
  playlists: Playlist[];
  likedSongIds: Set<string>;
  likedSongs: Song[];
  currentSong: Song | null;
  shuffleOn: boolean;
  repeatOn: boolean;
  setCurrentSong: (song: Song) => void;
  toggleLikedSong: (songId: string) => void;
  isSongLiked: (songId: string) => boolean;
  playNextSong: () => void;
  playPreviousSong: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
};

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [likedSongIds, setLikedSongIds] = useState<Set<string>>(
    new Set(["1", "2", "3"])
  );

  const [currentSong, setCurrentSong] = useState<Song | null>(musicSongs[0]);
  const [shuffleOn, setShuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);

  const toggleLikedSong = (songId: string) => {
    setLikedSongIds((prev) => {
      const next = new Set(prev);

      if (next.has(songId)) {
        next.delete(songId);
      } else {
        next.add(songId);
      }

      return next;
    });
  };

  const isSongLiked = (songId: string) => likedSongIds.has(songId);

  const likedSongs = useMemo(() => {
    return musicSongs.filter((song) => likedSongIds.has(song.id));
  }, [likedSongIds]);

  const playNextSong = () => {
    if (!currentSong || musicSongs.length === 0) return;

    if (shuffleOn) {
        if(musicSongs.length === 1) {
            setCurrentSong(musicSongs[0]);
            return;
        }

        let randomSong = currentSong;

        while (randomSong.id === currentSong.id) {
            const randomIndex = Math.floor(Math.random() * musicSongs.length)
            randomSong = musicSongs[randomIndex];
        }

        setCurrentSong(randomSong);
        return;
    }

    const currentIndex = musicSongs.findIndex((song) => song.id === currentSong.id)

    if (currentIndex === -1) return;

    if (currentIndex === musicSongs.length - 1) {
      setCurrentSong(repeatOn ? musicSongs[0] : musicSongs[currentIndex]);
      return;
    }

    setCurrentSong(musicSongs[currentIndex + 1])
  }

  const playPreviousSong = () => {
    if (!currentSong || musicSongs.length === 0) return;

    if (shuffleOn) {
      if (musicSongs.length === 1) {
        setCurrentSong(musicSongs[0]);
        return;
      }

      let randomSong = currentSong;

      while (randomSong.id === currentSong.id) {
        const randomIndex = Math.floor(Math.random() * musicSongs.length);
        randomSong = musicSongs[randomIndex];
      }

      setCurrentSong(randomSong);
      return;
    }

    const currentIndex = musicSongs.findIndex((song) => song.id === currentSong.id);

    if (currentIndex === -1) return;

    if (currentIndex === 0) {
      setCurrentSong(repeatOn ? musicSongs[musicSongs.length - 1] : musicSongs[0]);
      return;
    }

    setCurrentSong(musicSongs[currentIndex - 1]);
  };

  const toggleShuffle = () => {
    setShuffleOn((prev) => !prev);
  };

  const toggleRepeat = () => {
    setRepeatOn((prev) => !prev);
  };

  return (
    <MusicContext.Provider
      value={{
        songs: musicSongs,
        albums: musicAlbums,
        playlists: musicPlaylists,
        likedSongIds,
        likedSongs,
        currentSong,
        shuffleOn,
        repeatOn,
        setCurrentSong,
        toggleLikedSong,
        isSongLiked,
        playNextSong,
        playPreviousSong,
        toggleShuffle,
        toggleRepeat,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);

  if (!context) {
    throw new Error("useMusic must be used within a MusicProvider");
  }

  return context;
}