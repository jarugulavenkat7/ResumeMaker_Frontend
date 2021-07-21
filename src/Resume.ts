import { Byte } from "@angular/compiler/src/util";


export class Resume {
  constructor(
   public id: number,
   public academicDetailsList?: (AcademicDetails | null)[] | null,
   public workExperienceDetailsList?: (WorkExperienceDetails | null)[] | null,
   public personalDetails?: PersonalDetails | null,
   public addressDetails?: AddressDetails | null,
   public contactDetails?: ContactDetails | null,
   public image?:Image | null
   ){

   }
  }
  export class AcademicDetails {
    constructor(
    public id: number,
    public courseName: string,
    public institutionName: string,
    public universityOrBoard: string,
    public yearOfPassing?: string,
    public gpaOrPercentage?: number,
    public degree?:string,
    public state?:string,
    public country?:string
    ){

    }
  }
  export class WorkExperienceDetails {
    constructor(
    public id: number,
    public startDate: string,
    public endDate: string,
    public employeer: string
    ){

    }
  }
  export class PersonalDetails {
    constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    ){

    }
  }
  export class AddressDetails {
    constructor(
      public id: number,
      public addressLine1: string,
      public addressLine2: string,
      public city: string,
      public state: string,
      public country: string,
      public pincode: string
    ){

    }
  }
  export class ContactDetails {
    constructor(
      public id: number,
      public email: string,
      public phoneNumber: string,
    ){

    }
  }
    export class Image {
      constructor(
        public id: number,
        public name: string,
        public type: string,
        public picByte: Byte,
      ){
  
      }
  }
  
  
  