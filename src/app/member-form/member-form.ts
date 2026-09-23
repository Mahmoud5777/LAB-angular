import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MemeberService } from '../../services/memeber-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule,ReactiveFormsModule],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  constructor(private memberService: MemeberService,private router: Router) {}

  memberForm !: FormGroup;
 
  ngOnInit() {
    this.memberForm = new FormGroup({
      cin: new FormControl(null),
      name: new FormControl(null),
      type: new FormControl(null),
      created: new FormControl(null),
    });
  }

  onSubmit() {
    this.memberService.addMember(this.memberForm.value).subscribe(() => {
      this.router.navigate(['']);
     });
  }

}
