interface IBet {
  game_id: number;
  type: string;
  numbers: number[];
  price: number;
  date?: string;
  color: string;
}

export default IBet;
