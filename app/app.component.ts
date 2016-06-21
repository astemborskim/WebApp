import { Component } from '@angular/core';
import { ListComponent } from './list.component';
@Component({
  selector: 'my-app',
  template: `<h1>{{ title }}</h1>
             <objectList></objectList>
            `,
  directives : [ListComponent]
})
export class AppComponent { 
    title = "This is a Title!";
}
