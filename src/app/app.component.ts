import { Component, ViewChild  } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dropdownlist';  
  @ViewChild('dropdownlistelement')
  public dropDownListObject: DropDownListComponent;
  private addButtonElement: HTMLElement | null;
  private clearButtonElement: HTMLElement | null;
  private removeButtonElement: HTMLElement | null;

  onAddItems() {
    this.addButtonElement = document.getElementById('addbutton');
    this.dropDownListObject.addItem({Id: 'game4', Game: 'Hockey'});
    this.dropDownListObject.addItem({Id: 'game0', Game: 'Hockey'}, 0);   
  };
  onClearItems() {
    this.clearButtonElement = document.getElementById('clearbutton');
    (this.dropDownListObject.value as any) = null;
    this.dropDownListObject.dataBind();
    
  };
  onRemoveItems() {
    this.removeButtonElement = document.getElementById('removebutton');
    if(this.dropDownListObject.getItems().length > 1) {
      this.dropDownListObject.getItems()[0].remove();
      (this.dropDownListObject.dataSource as any).splice(0, 1);
      } 
  };


  public dataFields: Object = {text: 'Game', value: 'Id' };
  public localData: Object[] = [
    { Id: 'game1', Game: 'Football' },
    { Id: 'game2', Game: 'Basketball' },
    { Id: 'game3', Game: 'Volleyball' }
  ];


}
