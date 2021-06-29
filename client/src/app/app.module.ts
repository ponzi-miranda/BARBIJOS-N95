import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { NewDeliveryPage } from './pages/new-delivery/new-delivery.page';
import { MenuComponent } from './components/menu/menu.component';
import { MainPage } from './pages/main/main.page';
import { DeliveriesService } from './services/deliveries.service';
import { HttpClientModule } from '@angular/common/http';
import { DeliveriesListComponent } from './components/deliveries-list/deliveries-list.component';
import { DeliveriesListPage } from './pages/deliveries-list/deliveries-list.page';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    NewDeliveryPage,
    MenuComponent,
    MainPage,
    DeliveriesListComponent,
    DeliveriesListPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DeliveriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
