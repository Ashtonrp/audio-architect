export type Song = {
  id: string;
  title: string;
  artist: string;
  image: string;
};

export type Album = {
  id: string;
  title: string;
  artist: string;
  image: string;
};

export type Playlist = {
  id: string;
  title: string;
  subtitle?: string;
  image?: string;
};

export const songs: Song[] = [
  {
    id: "1",
    title: "Blue Light",
    artist: "Mazzy Star",
    image: "https://picsum.photos/200/200?21",
  },
  {
    id: "2",
    title: "Summer Night",
    artist: "Miles Davis",
    image: "https://picsum.photos/200/200?22",
  },
  {
    id: "3",
    title: "Place to Be",
    artist: "Nick Drake",
    image: "https://picsum.photos/200/200?23",
  },
  {
    id: "4",
    title: "Cherry Wine",
    artist: "Hozier",
    image: "https://picsum.photos/200/200?31",
  },
  {
    id: "5",
    title: "Pink Moon",
    artist: "Nick Drake",
    image: "https://picsum.photos/200/200?32",
  },
  {
    id: "6",
    title: "Space Song",
    artist: "Beach House",
    image: "https://picsum.photos/200/200?33",
  },
  {
    id: "7",
    title: "Nights",
    artist: "Frank Ocean",
    image: "https://picsum.photos/200/200?34",
  },
];

export const albums: Album[] = [
  {
    id: "a1",
    title: "Amethyst of Morning",
    artist: "Medhane",
    image: "https://picsum.photos/200/200?11",
  },
  {
    id: "a2",
    title: "Meddle",
    artist: "Pink Floyd",
    image: "https://picsum.photos/200/200?12",
  },
  {
    id: "a3",
    title: "Learn 2 Swim",
    artist: "Redveil",
    image: "https://picsum.photos/200/200?13",
  },
  {
    id: "a4",
    title: "After Hours",
    artist: "The Weeknd",
    image: "https://picsum.photos/200/200?14",
  },
];

export const playlists: Playlist[] = [
  {
    id: "p1",
    title: "Relaxing Mix",
    subtitle: "12 songs",
    image: "https://picsum.photos/200/200?41",
  },
  {
    id: "p2",
    title: "Upbeat Mix",
    subtitle: "18 songs",
    image: "https://picsum.photos/200/200?42",
  },
  {
    id: "p3",
    title: "Late Night Drive",
    subtitle: "24 songs",
    image: "https://picsum.photos/200/200?43",
  },
];