import { Component } from '@angular/core'

@Component({
    selector : 'objectList',
    template : `
    <ul>
        <li *ngFor= "#object of list">
            {{object}}
        </li>
    </ul>
    `
})

export class ListComponent{
    list = ["Object1", "Object2", "Object3"];

}