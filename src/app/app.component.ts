import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  activeSection: string = 'recipes';

  onNavigateTo(page: string){
    this.activeSection = page;
  }
 
}
