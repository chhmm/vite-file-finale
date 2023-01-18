import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { fileModel } from './file.model';

@Component({
  selector: 'app-ajouter-file',
  templateUrl: './ajouter-file.component.html',
  styleUrls: ['./ajouter-file.component.css']
})
export class AjouterFileComponent {

  constructor(private myService : ApiServiceService){}

  file = new fileModel()

  onClickSubmit(){
    console.log(this.file);
    this.myService.addFile(this.file);
  }
  

}
