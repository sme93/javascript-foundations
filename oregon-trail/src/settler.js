class Settler {
  constructor(traveler) {
    this.name = traveler.name;
    this.age = traveler.age;
    this.nationality = traveler.nationality || "unknown";
    this.status = traveler.status || "healthy";
    this.ailments = [];
  }
  experienceDistress(ailments) {
    if (this.ailments.length > 3) {
      return;
    }
  }
//     } else {
//       if (this.ailments.length === 3) {
//         return this.status = "dead";
//       }
//       if (this.ailments.length === 2) {
//         return this.status = "poor";
//       }
//       if (this.ailments.length === 1) {
//         return this.status = "fair";
//       }
//     }
// }





module.exports = Settler;
