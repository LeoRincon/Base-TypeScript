(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAddress(id: number): string; // EL metodo de declara pero no se implementa no tiene la logica para saber que ejecuta.
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'leo',
    age: 31,
    address: {
      id: 125,
      zip: 'HYG',
      city: 'Ottawa',
    },
    getFullAddress(id: number) {
      return `id ${this.address?.city}`;
    },
  };

  const client2: Client = {
    name: 'Isa',
    age: 4,
    address: {
      id: 125,
      zip: 'HYG',
      city: 'Ottawa',
    },
    getFullAddress(id: number) {
      return `id ${this.address?.city}`;
    },
  };

  // console.log(client.getFullAddress(2), client2);
})();
