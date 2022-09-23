import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _enemy: SimpleFighter[];

  constructor(fighter: Fighter, enemy: SimpleFighter[] | Fighter[]) {
    super(fighter);
    this._fighter = fighter;
    this._enemy = enemy;
  }

  public fight(): number {
    let enemyRound = 0;
    for (let challenge = 0;
      this._fighter.lifePoints > 0 && this._enemy.length !== enemyRound; 
      challenge += 1) {
      this._fighter.attack(this._enemy[enemyRound]);
      this._enemy[enemyRound].attack(this._fighter);

      if (this._enemy[enemyRound].lifePoints === -1) {
        enemyRound += 1;
      }
    }

    return this._fighter.lifePoints === -1 ? -1 : 1;
  }
}