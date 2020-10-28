class Club {
  readonly sport: string;
  readonly name: string;

  constructor (clubName: string) {
    this.name = clubName;
  }
}

class Club2 {
  readonly sport: string;

  constructor(readonly name: string) {}
}


//abstract classes

abstract class Music {
  abstract showGenre(genre: string): void;
  abstract showSong(song: string): void;
}

class Rock extends Music {
  showGenre(genre: string): void {
    console.log(genre);
  }
  showSong(song: string) {
    console.log(song);
    return song;
  }
}