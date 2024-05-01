
export interface SongProp {
    index: number;
    songName: string;
    artistName: string;
    songsrc : string;
    imageUrl: string;
    photoUrl?: string; 
  }
  
export  const songs: SongProp[] = [
    {
      index: 1,
      songName: "katha",
      artistName: "sant gurbachan singh khalsa",
      songsrc: "./audio.mp3" ,
      imageUrl: "https://images.pexels.com/photos/20364978/pexels-photo-20364978/free-photo-of-beautiful-woman-in-dress-posing-by-white-flowers-in-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      index: 2,
      songName: "Agape",
      artistName: "Nicholas Britell",
      songsrc: "./track-2.mp3",
      imageUrl: "https://images.pexels.com/photos/20778163/pexels-photo-20778163/free-photo-of-a-rocking-chair-on-a-porch-overlooking-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      index: 3,
      songName: "Flower & Saints",
      artistName: "Prem Dhillon",
      songsrc: "./track-3.mp3",
      imageUrl: "https://images.pexels.com/photos/17365912/pexels-photo-17365912/free-photo-of-birds-flying-on-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      photoUrl: "https://example.com/photo3.jpg", 
    },
    {
      index: 4,
      songName: "Resonance",
      artistName: "Home",
      songsrc: "./track-4.mp3",
      imageUrl: "https://images.pexels.com/photos/19845821/pexels-photo-19845821/free-photo-of-sheep-on-a-hillside-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      index: 5,
      songName: "Stille",
      artistName: "Thomas Riedel",
      songsrc: "./track-5.mp3",
      imageUrl: "https://images.pexels.com/photos/17125135/pexels-photo-17125135/free-photo-of-a-cup-of-tea-and-a-bunch-of-chamomile-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  
  
  