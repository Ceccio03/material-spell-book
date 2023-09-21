import { Component } from '@angular/core';
import { Spell } from 'src/app/model/spell';
import { SpellsDataService } from 'src/app/services/spells-data.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent {
  myparam="";

  constructor(public spellData: SpellsDataService ){

  }

  ngOnInit(): void {
    this.spellData.getSpellDetail(this.myparam);
  }

  
}
