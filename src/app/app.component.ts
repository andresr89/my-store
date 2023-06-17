import { Expansion } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivationStart } from '@angular/router';
import {product}from'./product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'tuto';
  age = 33;
  img = 'https://progameguides.com/wp-content/uploads/2023/03/fortnite-outfit-Leon-S-Kennedy.jpg?fit=875%2C915';
  img2= 'https://skinsdefortnite.com/wp-content/uploads/2022/04/Skin-Jill-Valentine.png';
  img3='https://img.freepik.com/vector-premium/nueva-notificacion_585024-45.jpg';
  img4='https://www.shutterstock.com/image-vector/ladybug-ladybird-vector-graphic-illustration-600w-1040847991.jpg'
  btnDisabled = true;
  register ={
    name:'',
    email:'',
    password:'',

  }
  
  person ={
    name:'andres',
    age: 33,
    avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2WjdhMiqnUiCACM2rVHhgMbASutf8639bw&usqp=CAU',
  }

  names: string[]= ['Andres','lizamar','salome']
  newName =""
  box={
    width:100,
    height:100,
    background:'red'
  };
  products: product[]=[
    {
      name: 'empanadas',
      price: 1000,
      image:'./assets/images/empanadas.jpg',
      category: 'food'
    },
    {
      name: 'pizza',
      price: 20000,
      image:'./assets/images/pizza.jpg'
    },
    {
      name: 'ramen',
      price: 15000,
      image:'./assets/images/ramen.jpg'
    },{
      name: 'tacos',
      price: 18000,
      image:'./assets/images/tacos.jpg'
    },
  ]


   
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
   
    addName(){
      this.names.push(this.newName);
      this.newName = '';
    }

    deleteName(index: number) {
     this.names.splice(index,1);
}
   
   onRegister(){
   console.log (this.register);
   }
}
