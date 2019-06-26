import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    numero: string;
    mensagem: string;
  }
@Component({
    selector: 'acoes',
    templateUrl: 'acoes.html',
  })
  export class Acoes {
  
    constructor(
      public dialogRef: MatDialogRef<Acoes>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    desligarPC(): void {
      this.dialogRef.close("Desligado");
    }
    enviaMensagem(){
      console.log(this.data.mensagem);
    }
  
  }