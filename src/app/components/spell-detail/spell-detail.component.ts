import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spell } from 'src/app/model/spell';
import { SpellsDataService } from 'src/app/services/spells-data.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.scss']
})
export class SpellDetailComponent implements OnInit {
  spellDetail?: Spell;

  constructor(public spellService: SpellsDataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.spellService.getSpellDetail().subscribe({
    //   next: detail => console.log(detail),
    //   error: error => console.log(error)
    // });

    // const params = new URLSearchParams(window.location.search);

    // if (params.get('spell')) {
    //   this.spellService.getSpellDetailWithIndex(params.get('spell')!)
    //   .subscribe({
    //     next: detail => console.log(detail),
    //     error: error => console.log(error)
    //   });
    // }

    if (this.route.snapshot.paramMap.get('index')) {
      this.spellService.getSpellDetailWithIndex(this.route.snapshot.paramMap.get('index')!)
      .subscribe({
        next: (detail) => this.spellDetail = detail,
        error: (error) => console.log(error)
      });
    }
  }
}