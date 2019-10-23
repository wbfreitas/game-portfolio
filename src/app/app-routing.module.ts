import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { NextLevelComponent } from './components/next-level/next-level.component';
import { GameOverComponent } from './components/game-over/game-over.component';


const routes: Routes = [
  {
  path: '', component: LoadingComponent,  
}, {
  path: 'next-level', component: NextLevelComponent
}, {
  path: 'game-over', component: GameOverComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
