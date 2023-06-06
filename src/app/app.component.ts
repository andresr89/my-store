import { Expansion } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'tuto';
  age = 33;
  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2WjdhMiqnUiCACM2rVHhgMbASutf8639bw&usqp=CAU';
  img2= 'https://skinsdefortnite.com/wp-content/uploads/2022/04/Skin-Jill-Valentine.png';
  btnDisabled = true;
  
  person ={
    name:'andres',
    age: 33,
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2WjdhMiqnUiCACM2rVHhgMbASutf8639bw&usqp=CAU',

  }
   toggleButton(){
    this.btnDisabled = !this.btnDisabled;
   }

   increseage(){
    this.person.age += 1;
   }

    decreaseage(){
      this.person.age -= 1;
    } 

    onscroll(event: Event){
      const element = event.target as HTMLElement;
      console.log(element.scrollTop);

    }

    changeName(event: Event){
      const element = event.target as HTMLInputElement;
      this.person.name = element.value;
    }
    
  
}


