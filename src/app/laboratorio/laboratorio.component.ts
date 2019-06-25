import { Component, OnInit, Inject } from '@angular/core';
import {Acoes} from './acoes'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';

export interface DialogData {
  numero: string;
  mensagem: string;
}

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
  styleUrls: ['./laboratorio.component.scss']
})
export class LaboratorioComponent implements OnInit {

  numero : string;
  mensagem : string; 

  constructor(public dialog: MatDialog) { }

  openDialog() {
    
    const dialogRef = this.dialog.open(Acoes,{
      data: {
        numero : "1",
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

