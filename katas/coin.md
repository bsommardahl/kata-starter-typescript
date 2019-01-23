## The Coin Kata

We will develop a new type of crypto-currency and exchange (minus the cryto).

### Requirements

1. Coin farm can conjure a new coin out of thin air and put it in Mikes pocket.
2. For any coin Mike has in his pocket, he can give it to Juan.
3. Juan can calculate the value of the coins in his pocket.
4. For any coin in his pocket, Juan can deposit it in a bank account (still Juan's coin, just not in his pocket anymore).
5. For any coin in Juan's bank account, he can withdraw a coin and put it back in his pocket.
6. Juan can calculate the value of the coins in his bank account.
7. For any coin in his pocket, Juan can find out who has owned the coin since it was conjured.
8. For any coin in his pocket, Juan can find out which coin farm conjured the coin.
9. For any coin conjured by the coin farm, it can find out who is the coin's current owner.
10. For any coin conjured by the coin farm, it can find out who the coin's owner was at any given moment in time.

### Rules

1. Strict Red-Green-Refactor
2. Dueling Devs Pairing Pattern
3. Outside-in testing
4. Limit sesson to 30 minutes
5. Your level is determined by how many requirements you are able to complete in the time limit.

### Hints

- The first test should be an outside in test that results in a person entity and a coin entity where the person has a method like `person.generateCoin`.
