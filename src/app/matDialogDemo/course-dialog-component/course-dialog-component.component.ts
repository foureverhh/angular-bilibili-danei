import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';










@Component({
  selector: 'app-course-dialog-component',
  templateUrl: './course-dialog-component.component.html',
  styleUrls: ['./course-dialog-component.component.scss']
})
export class CourseDialogComponentComponent implements OnInit {
  title: string;
  description:string;
  newId: string;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef:MatDialogRef<CourseDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA){ description, title, id } : any
    ) { 
      this.description = description;
      this.title = title;
      this.newId = id;
      this.form = fb.group({
        description :[ description, Validators.required ],
        myId : [id, Validators.required ],
      });
    }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
