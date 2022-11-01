import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CananolabClientComponent } from './cananolab-client/cananolab-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './cananolab-client/header/header.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavigationMenuComponent } from './cananolab-client/left-navigation-menu/left-navigation-menu.component';
import { LeftStaticMenuComponent } from './cananolab-client/left-static-menu/left-static-menu.component';
import { NgModule } from '@angular/core';
import { SetObjectValueModule } from './cananolab-client/common/modules/set-object-value/set-object-value.module';
import { StatusDisplayComponent } from './cananolab-client/status-display/status-display.component';
import { TopKeywordSearchComponent } from './cananolab-client/header/top-keyword-search/top-keyword-search.component';
import { TopMainMenuComponent } from './cananolab-client/top-main-menu/top-main-menu.component';
import { DisclaimerModule } from './cananolab-client/common/components/disclaimer/disclaimer.module';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { IdleDialog} from "./cananolab-client/common/components/idle-dialog/idle.dialog.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    CananolabClientComponent,
    HeaderComponent,
    LeftStaticMenuComponent,
    LeftNavigationMenuComponent,
    StatusDisplayComponent,
    TopKeywordSearchComponent,
    TopMainMenuComponent,
    IdleDialog
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        SetObjectValueModule,
        DisclaimerModule,
        BrowserAnimationsModule,
        NgIdleKeepaliveModule.forRoot(),
        NgbModule
    ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
