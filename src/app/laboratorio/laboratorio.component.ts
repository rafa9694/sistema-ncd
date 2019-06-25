import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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

@Component({
  selector: 'acoes',
  templateUrl: 'acoes.html',
})
export class Acoes {

  constructor(
    public dialogRef: MatDialogRef<Acoes>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}