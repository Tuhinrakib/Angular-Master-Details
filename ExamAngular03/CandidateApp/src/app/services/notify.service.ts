import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  notify(arg0: string, arg1: string) {
      throw new Error('Method not implemented.');
  }
  constructor(
    private snackBar: MatSnackBar
  ) { }
  message(message: string, actions: string) {
    let config: MatSnackBarConfig = {
      duration: 3000,
      panelClass: [],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    }
    this.snackBar.open(message, actions, config);
  }
}
