# Acklen Avenue/HeroUnit Kata Starter

## Installation

```
npm i -g typescript
npm i
```

## The Acklen Coin Kata

We will develop a new type of crypto-currency and exchange (minus the cryto).

### Requirements
1. Mike can generate a new coin with immutable id.
2. Mike can give a specific coin that he owns to Juan.
3. Juan can put the coin in a bank account (does not change ownership).
4. Juan can withdraw coin from the bank account.
5. Every movement of a coin is recorded to a coin's history.
6. Juan can undo a coin movement within 10 seconds of transaction (returns the coin to previous state).

### Rules
1. Strict Red-Green-Refactor
2. Dueling Devs Pairing Pattern
3. Outside-in testing
4. Limit sesson to 30 minutes
5. Your level is determined by how many requirements you are able to complete in the time limit.

### Hints
* The first test should be an outside in test that results in a person entity and a coin entity where the person has a method like `person.generateCoin`.