export class Hospital{
    
    hospitalName: string;
    hospitalId: number;
    hospitalAddress: string;
    hospitalCity: string;
    hospitalContactNo: string;
    hospitalEmailId: string;
    hospitalOwnerContactNo: string;
    hospitalOwnerName: string;
    password: string;
    userName: string;


    constructor(){
        
        this.hospitalName = "";
        this.hospitalId = 0;
        this.hospitalAddress = "";
        this.hospitalCity = "";
        this.hospitalContactNo = "";
        this.hospitalEmailId = "";
        this.hospitalOwnerContactNo = "";
        this.hospitalOwnerName = "";
        this.password = "";
        this.userName = "";

    }

    
      
}

export interface ApiResponseModel{
    message: string;
    result: boolean;
    data: any;

}

export class Login{
    userName: string;
    password: string;

    constructor(){
        this.userName = "";
        this.password = ""
    }
}

export class Appointmet{
    name: string
    mobileNo: string
    city: string
    age: number
    gender: string
    appointmentDate: Date
    appointmentTime: string
    isFirstVisit: boolean
    naration: string
    hospitalId: number

    constructor(){
        this.name = "";
        this.mobileNo = "";
        this.city = "";
        this.age = 0;
        this.gender = "";
        this.appointmentDate = new Date();
        this.appointmentTime = "";
        this.isFirstVisit = false;
        this.naration = "";
        this.hospitalId = 0;
    }
}