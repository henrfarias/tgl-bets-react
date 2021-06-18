import IGame from "./IGame";

interface IBet {
  id?: number;
  game_id: number;
  type: string;
  numbers: number[];
  current_price: number;
  created_at?: string;
  color: string;
  game?: IGame;
}

export default IBet;
