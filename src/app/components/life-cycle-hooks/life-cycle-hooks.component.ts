import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.scss']
})
export class LifeCycleHooksComponent implements OnInit {

  aquaticCreatures= ['shark', 'dolphin', 'octopus'];

  userName = 'Chris'
  isChildDestroyed = false;

  constructor() {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addAquaticCreature(newAquaticCreatures: any) {
    console.log(newAquaticCreatures)
    this.aquaticCreatures = [...this.aquaticCreatures, newAquaticCreatures];
    // this.aquaticCreatures.push(newAquaticCreatures)
  }

  updateUser() {
    this.userName = 'Arjun'
  }

  destroy() {
    this.isChildDestroyed = true;
  }

}
