import { Routes } from '@angular/router';
import {  } from '@angular/router';
import { PresentationComponent } from '../../../ejercicios_Iniciales/src/app/presentation/presentation.component';
import { Ex01Component } from '../../../ejercicios_Iniciales/src/app/ex01/ex01.component';
import { Ex02Component } from '../../../ejercicios_Iniciales/src/app/ex02/ex02.component';
import { Ex03Component } from '../../../ejercicios_Iniciales/src/app/ex03/ex03.component';
import { Ex04Component } from '../../../ejercicios_Iniciales/src/app/ex04/ex04.component';
import { Ex05Component } from '../../../ejercicios_Iniciales/src/app/ex05/ex05.component';
import { Ex06Component } from '../../../ejercicios_Iniciales/src/app/ex06/ex06.component';
import { Ex07Component } from '../../../ejercicios_Iniciales/src/app/ex07/ex07.component';
import { Ex08Component } from '../../../ejercicios_Iniciales/src/app/ex08/ex08.component';
import { Ex09Component } from '../../../ejercicios_Iniciales/src/app/ex09/ex09.component';
import { Ex10Component } from '../../../ejercicios_Iniciales/src/app/ex10/ex10.component';

export const routes: Routes = [
    {path:'', component:PresentationComponent },
    {path:'ex01', component:Ex01Component },
    {path:'ex02', component:Ex02Component },
    {path:'ex03', component:Ex03Component },
    {path:'ex04', component:Ex04Component },
    {path:'ex05', component:Ex05Component },
    {path:'ex06', component:Ex06Component },
    {path:'ex07', component:Ex07Component },
    {path:'ex08', component:Ex08Component },
    {path:'ex09', component:Ex09Component },
    {path:'ex10', component:Ex10Component },

];
