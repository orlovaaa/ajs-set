import Team from '../set';

test('create new team', () => {
  const heroDaemon = {
    name: 'Elusiv',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const heroSwordsman = {
    name: 'Elusiv',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const comparisonAdd = new Set().add(heroDaemon);
  const resultAdd = new Team();
  resultAdd.add(heroDaemon);

  const comparisonAddAll = new Set().add(heroDaemon).add(heroSwordsman);
  const resultAddAll = new Team();
  resultAddAll.addAll(heroDaemon, heroSwordsman);

  const comparisonToArray = Array.from(new Set().add(heroDaemon).add(heroSwordsman));
  const resultToArray = new Team();
  resultToArray.addAll(heroDaemon, heroSwordsman);
  resultToArray.toArray();

  expect(resultAdd.member).toEqual(comparisonAdd);
  expect(resultAddAll.member).toEqual(comparisonAddAll);
  expect(resultToArray.member).toEqual(comparisonToArray);
  expect(() => resultAdd.add(heroDaemon)).toThrow();
});