export class City {
  constructor(public id: number = -1,
              public name: string,
              public province: string = 'N/A',
              public highlights: string[] = ['N/A']) {
  }
}
