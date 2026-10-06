import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MemeberService } from '../../services/memeber-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule,ReactiveFormsModule],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  constructor(private memberService: MemeberService,private router: Router,private route: ActivatedRoute) {}

  memberForm !: FormGroup;
  currentID !: String;
 
  ngOnInit() {
    //recupérer la route active pour savoir si on est dans le mode update ou create
    //chercher id dans la route active
    this.currentID = this.route.snapshot.params['id'];
    //si id existe => mode update => recupérer le membre par id et remplir le formulaire
    if (this.currentID) {
      this.memberService.getMemberById(this.currentID).subscribe((member) => {
        this.memberForm = new FormGroup({
          cin: new FormControl(member.cin),
          name: new FormControl(member.name),
          type: new FormControl(member.type),
          created: new FormControl(member.created),
        });
      });
    }
    //si id n'existe pas => mode create => formulaire vide
    else {
      this.memberForm = new FormGroup({
        cin: new FormControl(null),
        name: new FormControl(null),
        type: new FormControl(null),
        created: new FormControl(null),
      });
    }
  }

  onSubmit() {
    if (this.currentID) {
      this.memberService.updateMember(this.currentID, this.memberForm.value).subscribe(() => {
        this.router.navigate(['/members']);
      });
    } else {
      this.memberService.addMember(this.memberForm.value).subscribe(() => {
        this.router.navigate(['/members']);
      });
    }
  }

}
