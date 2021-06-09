// Option 1. Create a class as a model.
// A class has to be instantiated (eg const city = new City(...)).
export class City {
  constructor(
    public id: number,
    public name: string,
    public province: string
  ) {}
}

// Option 2. Create an interface as a model.
// An interface just describes the shape of the data.
interface ICity {
  id: number;
  name: string;
  province: string;
}

// You can use the interface as const city: ICity = { ... }.
// No need to instantiate or use the new() keyword.
