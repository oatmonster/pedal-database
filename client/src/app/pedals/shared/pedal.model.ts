export interface IPedal {
  id: number;
  name: string;
  img?: string;
  videoUrl?: string;
  desc?: string;
}

export interface IPart {
  id: number;
  type: string;
  value: string;
  count: number;
}