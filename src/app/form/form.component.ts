import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "../my-validators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @ViewChild('city') city!: ElementRef

  // @ts-ignore
  emailControl = new FormControl('', [
    Validators.email,
    Validators.required,
    MyValidators.restrictedEmails
  ], [
    MyValidators.uniqueEmail2
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4)
  ])
  skillsArray = new FormArray<any>([])

  countryControl = new FormControl('ru')
  cityControl = new FormControl('Moscow', Validators.required)

  addressGroup = new FormGroup({
    country: this.countryControl,
    city: this.cityControl
  })

  form = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    address: this.addressGroup,
    skills: this.skillsArray
  })

  get skillControls() {
    return this.skillsArray.controls as FormControl[]
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value}
      console.log(formData)
      this.form.reset()
    }
  }

  selectCapital() {
    const cityMap = {
      ru: 'Moscow',
      by: 'Minsk',
      ua: 'Kiev'
    }

    const cityKey = this.countryControl.value


    // @ts-ignore
    const city = cityMap[cityKey]

    this.form.patchValue({address: {city}})

  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    this.skillsArray?.push(control);
  }

}
