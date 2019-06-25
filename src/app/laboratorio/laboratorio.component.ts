import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent implements OnInit {

  numero : string;
  mensagem : string; 

  constructor(public dialog: MatDialog) { }

  openDialog(num) {
    
    const dialogRef = this.dialog.open(LaboratorioComponent,{
      data: {
        numero : num,
        mensagem : this.mensagem
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

    
  }

  ngOnInit() {
  }

}
