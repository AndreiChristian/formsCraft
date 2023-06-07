import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { BuildComponent } from './build/build.component';
import { ViewComponent } from './view/view.component';
import { PreviewComponent } from './preview/preview.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildHeaderComponent } from './build/build-header/build-header.component';
import { BuildQuestionListComponent } from './build/build-question-list/build-question-list.component';
import { BuildQuestionItemComponent } from './build/build-question-item/build-question-item.component';
import { BuildActionsComponent } from './build/build-actions/build-actions.component';
import { BuildDrawerComponent } from './build/build-drawer/build-drawer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    UserComponent,
    BuildComponent,
    ViewComponent,
    PreviewComponent,
    BuildHeaderComponent,
    BuildQuestionListComponent,
    BuildQuestionItemComponent,
    BuildActionsComponent,
    BuildDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
