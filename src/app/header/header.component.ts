import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() activeSection = new EventEmitter<string>();

  onNavigate(page:string){
    this.activeSection.emit(page);
  }
}
