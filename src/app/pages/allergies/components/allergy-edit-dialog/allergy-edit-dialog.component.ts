import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Allergy } from 'src/app/store/allergy/allergy.model';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-allergy-edit-dialog',
  templateUrl: './allergy-edit-dialog.component.html',
  styleUrls: ['./allergy-edit-dialog.component.scss']
})
export class AllergyEditDialogComponent implements OnInit {

	formData: Allergy;
	title: string;
	editMode: boolean;

	constructor(
		public dialogRef: MatDialogRef<AllergyEditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public allergy: Allergy,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit() {
		this.editMode = !!this.allergy;

		if (this.editMode) {
			this.formData = { ...this.allergy };
			this.title = 'Edit Allergy';
		} else { 
			this.formData = {
				id: '',
				source: '',
				type: null,
				diagnosed_at: new Date(),
				patient_id: ''
			}
			this.title = 'Create new Allergy';
		}
	}

	onSubmit(form: NgForm) {
		if (form.valid) {
			this.dialogRef.close({
				id: this.formData.id,
				...form.value
			});
		} else {
			this._snackBar.open('Fill all required fields.', '', {
				duration: 2000
			});
		}
	}
}
