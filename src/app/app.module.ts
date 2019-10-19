import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { GameConfigService } from './services/game/game-config.service';
import { LoadingComponent } from './components/loading/loading.component';
import { HomeComponent } from './pages/home/home.component';
import { NextLevelComponent } from './components/next-level/next-level.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoadingComponent,
    HomeComponent,
    NextLevelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
