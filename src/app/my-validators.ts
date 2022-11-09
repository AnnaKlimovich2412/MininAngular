import {FormControl, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";

const RESTRICTED_EMAILS = ['anna@test.ru']

export class MyValidators {
  static restrictedEmails (control: FormControl): {'restrictedEmail': boolean} | null {
    if (RESTRICTED_EMAILS.includes(control.value)) {
      return {restrictedEmail: true}
    }
    return null
  }

  static uniqueEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({
            uniqueEmail: true
          })
        } else {
          resolve(null)
        }
      }, 1000)
    })
  }

  static uniqueEmail2 (control: FormControl): Observable<ValidationErrors|null> | null {

    if (control.value === 'async@mail.ru') {
      return of({uniqueEmail: true})
    } else {
      return of (null)
    }
  }
}


