import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CananolabClientComponent } from './cananolab-client/cananolab-client.component';
import { HeaderComponent } from './cananolab-client/header/header.component';
import { TopKeywordSearchComponent } from './cananolab-client/header/top-keyword-search/top-keyword-search.component';
import { TopMainMenuComponent } from './cananolab-client/top-main-menu/top-main-menu.component';
import { MainDisplayComponent } from './cananolab-client/main-display/main-display.component';
import { HomeComponent } from './cananolab-client/main-display/home/home.component';
import { WorkflowComponent } from './cananolab-client/main-display/workflow/workflow.component';
import { ProtocolsComponent } from './cananolab-client/main-display/protocols/protocols.component';
import { SamplesComponent } from './cananolab-client/main-display/samples/samples.component';
import { PublicationsComponent } from './cananolab-client/main-display/publications/publications.component';
import { GroupsComponent } from './cananolab-client/main-display/groups/groups.component';
import { CurationComponent } from './cananolab-client/main-display/curation/curation.component';
import { MyWorkspaceComponent } from './cananolab-client/main-display/my-workspace/my-workspace.component';
import { MyFavoritesComponent } from './cananolab-client/main-display/my-favorites/my-favorites.component';
import { LogoutComponent } from './cananolab-client/main-display/logout/logout.component';
import { LeftStaticMenuComponent } from './cananolab-client/left-static-menu/left-static-menu.component';
import { MainDisplayHeadingComponent } from './cananolab-client/main-display/main-display-heading/main-display-heading.component';
import { RightSideBarComponent } from './cananolab-client/main-display/home/right-side-bar/right-side-bar.component';
import { HomeUserActionsComponent } from './cananolab-client/main-display/home/right-side-bar/home-user-actions/home-user-actions.component';
import { HomeFeaturesComponent } from './cananolab-client/main-display/home/right-side-bar/home-features/home-features.component';
import { HomeHowToComponent } from './cananolab-client/main-display/home/right-side-bar/home-how-to/home-how-to.component';
import { HomeWhatsNewComponent } from './cananolab-client/main-display/home/right-side-bar/home-whats-new/home-whats-new.component';
import { HomeKeepingUpWithCananolabComponent } from './cananolab-client/main-display/home/right-side-bar/home-keeping-up-with-cananolab/home-keeping-up-with-cananolab.component';
import { LoginComponent } from './cananolab-client/main-display/home/right-side-bar/home-user-actions/login/login.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './cananolab-client/common/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { LeftNavigationMenuComponent } from './cananolab-client/left-navigation-menu/left-navigation-menu.component';
import { TestComponent } from './cananolab-client/main-display/test/test.component';
import { BrowseCananolabComponent } from './cananolab-client/main-display/home/browse-cananolab/browse-cananolab.component';

@NgModule({
  declarations: [
    AppComponent,
    CananolabClientComponent,
    HeaderComponent,
    TopKeywordSearchComponent,
    TopMainMenuComponent,
    MainDisplayComponent,
    HomeComponent,
    WorkflowComponent,
    ProtocolsComponent,
    SamplesComponent,
    PublicationsComponent,
    GroupsComponent,
    CurationComponent,
    MyWorkspaceComponent,
    MyFavoritesComponent,
    LogoutComponent,
    LeftStaticMenuComponent,
    MainDisplayHeadingComponent,
    RightSideBarComponent,
    HomeUserActionsComponent,
    HomeFeaturesComponent,
    HomeHowToComponent,
    HomeWhatsNewComponent,
    HomeKeepingUpWithCananolabComponent,
    LoginComponent,
    LeftNavigationMenuComponent,
    TestComponent,
    BrowseCananolabComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
