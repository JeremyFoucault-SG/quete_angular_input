import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  public developer= new Developer("Jeremy", 'Foucault', 23, "M", "jhoivshihv", [
      new Skill ('NodeJS', 'N', 'www.nodejs.com'),
      new Skill ('Angular', 'A', 'www.angular.io'),
      new Skill ('TypeScript', 'tS', 'www.type-script.fr')
        ])
  
  constructor() { }

  ngOnInit() {
}

}