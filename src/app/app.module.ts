import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './components/game/game.component';
import { GameConfigService } from './services/game/game-config.service';
import { LoadingComponent } from './components/loading/loading.component';
import { NextLevelComponent } from './components/next-level/next-level.component';
import { GameOverComponent } from './components/game-over/game-over.component';

@NgModule({
  declarations: [
    GameComponent,
    LoadingComponent,
    NextLevelComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [GameConfigService],
  bootstrap: [GameComponent]
})
export class AppModule { }
