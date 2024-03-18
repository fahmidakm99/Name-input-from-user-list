import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-person-input',
    templateUrl: './person-input.component.html'
})
export class PersonInputComponent{
    eneteredPersonName =  '';

    @Output() personCreate = new EventEmitter<string>();

    onCreatePerson() {
        console.log("Created a person: ",this.eneteredPersonName);
        this.personCreate.emit(this.eneteredPersonName);
        this.eneteredPersonName= '';
    }
}