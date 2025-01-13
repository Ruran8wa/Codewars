// Imperfect Rabbits
// In this kata, our rabbits are sadly imperfect, they only live for a few months, and then they die! As in the previous kata however, our rabbits:

// Take one month to mature.
// Always birth equal numbers of male and female offspring.
// Never have to compete for resources.
// Have no predators.
// At the start of the first month you start with one pair of immature rabbits.

// Kata
// In this kata you must implement the method provided to you with arguments n, b, l, where:

// n is the number of the months to simulate,
// b is the number of pairs each adult pair gives birth to, and,
// l is the lifespan in months of a rabbit.
// Examples
// n = 6, b = 3, l = 6
// return 96

// n = 8, b = 3, l = 4
// return 423

function imperfectFibRabbits(n, b, l) {
    let ageGroups = new Array(l).fill(0n);
     ageGroups[0] = 1n;
 
     for (let month = 1; month <= n; month++) {
         let newBorns = 0n;
         for (let i = 1; i < l; i++) {
             newBorns += ageGroups[i];
         }
         newBorns *= BigInt(b);
 
         for (let i = l - 1; i > 0; i--) {
             ageGroups[i] = ageGroups[i - 1];
         }
         ageGroups[0] = newBorns;
     }
 
     return ageGroups.reduce((sum, count) => sum + count, 0n);
 }ko