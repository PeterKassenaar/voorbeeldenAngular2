export class City {
  constructor(
    public id: number,
    public name: string,
    public province: string,
    public rating: number,
    public highlights?: string[],
    public favorite?: boolean
  ) {}
}
