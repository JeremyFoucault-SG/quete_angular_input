import { Skill } from './skill.model';

export class Developer {


    constructor(public lastName: string, public firstName: string, public age: number, public sexe: string, public bio: string,public skills: Skill[]) {
        this.lastName = lastName
        this.firstName= firstName
        this.age= age
        this.sexe=sexe
        this.bio=bio
        this.skills=skills
    }


}