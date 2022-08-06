import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NhatkydetailComponent } from './nhatkydetail/nhatkydetail.component';
import { NhatkytuanComponent } from './nhatkytuan/nhatkytuan.component';
import { NhatkytheodoiComponent } from './nhatkytheodoi/nhatkytheodoi.component';
import{HttpClientModule} from '@angular/common/http'
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AddworkComponent } from './addwork/addwork.component';
import { RestApiService } from './Service/rest-api.service';
import { DataServiceService } from './Service/data-service.service';
import { MessageComponent } from './message/message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes =[
  { path: 'nhatkytuan', component: NhatkytuanComponent },
  { path: 'nhatkydetail', component: NhatkydetailComponent },
  { path: 'nhatkytheodoi', component: NhatkytheodoiComponent },
  { path: 'addwork', component: AddworkComponent },
  

]
@NgModule({
  declarations: [		
    AppComponent,
    NhatkydetailComponent,
    NhatkytuanComponent,
    NhatkytheodoiComponent,
    AddworkComponent,
    MessageComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestApiService,DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
