import { AbstractControl, ValidationErrors } from "@angular/forms";
import { NullAstVisitor } from "@angular/compiler";

export class UsernameValidators{
     static cannotContainSpace(c: AbstractControl): ValidationErrors | null {
            if((c.value as string).indexOf('') >=0)
               return { cannotContainSpace :true };

               return null;
    }
    static shouldBeUnique(c:AbstractControl): ValidationErrors | null {
        setTimeout(()=>{
            if(c.value== 'mosh')
              return {shouldBeUnique: true};
            return null;
        },2000);
        return null;
        }
    
}