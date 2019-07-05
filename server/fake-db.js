const Rental = require('./models/rental');

class FakeDb {
  constructor() {
    this.rentals = [
      {
        title: "Nice view on ocean",
        city: "Jaffna",
        street: "Thirunelvely",
        catergory: "Condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 4,
        shared: true,
        description: "very nice apartment",
        dailyRate: 43
      },
      {
        title: "Nice house",
        city: "Vavuniya",
        street: "School street",
        catergory: "Small",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        shared: false,
        description: "very nice apartment",
        dailyRate: 43
      },
      {
        title: "Nice Place",
        city: "Jaffna",
        street: "School street",
        catergory: "Small",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        shared: true,
        description: "very nice apartment",
        dailyRate: 43
      }]


  }

  async cleanDb() {
    await Rental.remove({});
  }

  pushRentalsToDb() {
    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);

      newRental.save();
    })
  }

  seedDb() {
    this.cleanDb();
    this.pushRentalsToDb();
  }
}

module.exports = FakeDb;
