import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Spell } from 'src/app/model/spell';

@Component({
  selector: 'app-spell-card',
  templateUrl: './spell-card.component.html',
  styleUrls: ['./spell-card.component.scss']
})
export class SpellCardComponent {
  @Input() spellData?: Spell;
  @Output() spellSelected = new EventEmitter<Spell>();

  selectSpell(){
    this.spellSelected.emit(this.spellData);
  }
}
