// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/from';
//
// import { Practise }from './practise';
//
// const practises:Practise[] = [
//   {
//     id:11,
//     title:'Упражнения за горна част на тялото',
//     description:'Описание',
//     duration:'50 мин.',
//     exercises:'Упражнения'
//   },
//   {
//     id:12,
//     title:'Упражнения за долна част на тялото',
//     description:'Описание',
//     duration:'50 мин.',
//     exercises:'Упражнения'
//   },
//   {
//     id:13,
//     title:'Кардио упражнения',
//     description:'Описание',
//     duration:'60 мин.',
//     exercises:'Упражнения'
//   },
//   {
//     id:14,
//     title:'Допълнителни упражнения за жени',
//     description:'Описание',
//     duration:'40 мин.',
//     exercises:'Упражнения'
//   },
//   {
//     id:15,
//     title:'Допълнителни упражнения за мъже',
//     description:'Описание',
//     duration:'40 мин.',
//     exercises:'Упражнения'
//   }
// ];
//
// @Injectable(
// //  {
// //  providedIn: 'root'
// //}
// )
// export class StaticDatasourceService {
//
//   constructor() { }
//
//   getPractiseList():Observable<Practise[]>{
//     return Observable.of(practises);
//   }
//
//   getPractiseById(id:number):Observable<Practise>{
//     let practise:Practise = practises.filter((practise)=>practise.id === id).pop();
//     return Observable.from([practise]);
//   }
//
//   deletePractise(id:number):void{
//     practises.splice(practises.findIndex((practise)=>practise.id === id),1);
//   }
//
//   savePractise(practise:Practise):void{
//     if( practise.id){
//       practises.forEach((pract)=>{
//         if(pract.id === practise.id){
//           pract = practise;
//         }
//       });
//     }
//     else{
//       practise.id = practises[practises.length-1].id + 1;
//       practises.push(practise);
//       console.log(practise);
//     }
//   }
// }
