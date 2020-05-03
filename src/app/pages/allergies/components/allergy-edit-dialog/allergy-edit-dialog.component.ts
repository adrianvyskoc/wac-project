import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Allergy } from 'src/app/models/allergy.model';

@Component({
  selector: 'app-allergy-edit-dialog',
  templateUrl: './allergy-edit-dialog.component.html',
  styleUrls: ['./allergy-edit-dialog.component.scss']
})
export class AllergyEditDialogComponent implements OnInit {

  constructor(
	public dialogRef: MatDialogRef<AllergyEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public allergy: Allergy
  ) { }

  ngOnInit() {
  }

}
