const Rental = require('./models/rental');
const User = require('./models/user');

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
      }];

    this.users = [{
      username: "Test User",
      email: "test@gmail.com",
      password: "testtest"
    }]


  }

  async cleanDb() {
    await User.remove({});
    await Rental.remove({});
  }

  pushRentalsToDb() {
    const user = new User(this.users[0]);

    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);
      newRental.user = user;

      user.rentals.push(newRental);
      newRental.save();
    });

    user.save();
  }

  async seedDb() {
    await this.cleanDb();
    this.pushRentalsToDb();
  }
}

module.exports = FakeDb;
