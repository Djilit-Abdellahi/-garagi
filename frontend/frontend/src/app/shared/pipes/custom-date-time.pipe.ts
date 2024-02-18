// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'customDateTime'
// })
// export class CustomDateTimePipe implements PipeTransform {

//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }

// }

import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDateTime'
})
export class CustomDateTimePipe implements PipeTransform {
  transform(value: string | null): string {
    if (!value) {
      // Handle null or undefined value by returning an empty string
      return '';
    }

    // Use 'en-US' locale or consider making it dynamic based on your app's needs
    const datePipe = new DatePipe('en-US');
    // Use a variable to hold the transformed date and check for null
    const transformedDate = datePipe.transform(value, 'dd/MM/yyyy (HH:mm:ss)');

    // Check if the transformation was successful; otherwise, return a default string or log an error
    return transformedDate ?? 'Invalid date'; // Fallback text for invalid dates
  }
}



