import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _fighter1: Fighter;
  private _fighter2: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
  }

  public fight(): number {
    for (let challenge = 0; 
      this._fighter1.lifePoints > 0 && this._fighter2.lifePoints > 0; 
      challenge += 1) {
      this._fighter1.attack(this._fighter2);
      this._fighter2.attack(this._fighter1);
    }

    return this._fighter1.lifePoints === -1 ? -1 : 1;
  }
}