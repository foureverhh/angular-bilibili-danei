import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponentComponent } from './matDialogDemo/course-dialog-component/course-dialog-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myngapp01';
  constructor(private dialog: MatDialog) {

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };
    //this.dialog.open(CourseDialogComponentComponent, dialogConfig);

    const dialogRef = this.dialog.open(CourseDialogComponentComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      console.log('dialog output', data);
    })
  }
}
