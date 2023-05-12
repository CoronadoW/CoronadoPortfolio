import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formInicio: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router

  ) {
    this.formInicio = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.inicio(this.formInicio.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/portfolio']);
      })
      .catch(error => console.log(error));
  }



}
