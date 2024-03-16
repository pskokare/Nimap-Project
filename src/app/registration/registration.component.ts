import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnDestroy{
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  uploadedImage: string | ArrayBuffer | null = null; // Change type to string | ArrayBuffer | null
  isPopupVisible: boolean | undefined;
   submitForm() {
    throw new Error('Method not implemented.');
}

  ageValue: number = 18;
state: any;
country: any;
selectedAddressType: any;
homeAddress: any;
companyAddress: any;
subscribeNewsletter: any;


  updateAgeValue(event: any) {
    this.ageValue = event.target.value;
  }
  
  selectedInterest: string = '';
  interests: string[] = [];

  addInterest() {
    if (this.selectedInterest.trim() !== '') {
      this.interests.push(this.selectedInterest.trim());
      this.selectedInterest = '';
    }
  }

  removeInterest(interest: string) {
    const index = this.interests.indexOf(interest);
    if (index !== -1) {
      this.interests.splice(index, 1);
    }
  }

  previewImage(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  // Method to open the popup form

  openPopup() {
    
    this.isPopupVisible = true;
  }

  // Method to close the popup form
  closePopup() {
    this.isPopupVisible = false;
  }
  myForm: FormGroup |any ={};
  userForm: any;

  
  }


    
    

