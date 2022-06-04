export type CardType = 'community' | 'camp';
export interface ICamp {
  // id: number;
  name: string;
  status: string;
  // field: string;
  // skill: string;
  startDate: string;
  thumbnail: string;
}

export interface ICommunity {
  id: number;
  labels: string[];
  title: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  profile: string;
  nickname: string;
  content: string;
}
