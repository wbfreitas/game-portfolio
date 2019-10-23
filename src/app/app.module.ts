import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ControllerComponent } from './components/controller/controller.component';
import { GameOverComponent } from './components/game-over/game-over.component';
import { GameComponent } from './components/game/game.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NextLevelComponent } from './components/next-level/next-level.component';
import { GameConfigService } from './services/game/game-config.service';



@NgModule({
  declarations: [
    GameComponent,
    LoadingComponent,
    NextLevelComponent,
    GameOverComponent,
    ControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GameConfigService ],
  bootstrap: [ GameComponent]
})
export class AppModule { }
