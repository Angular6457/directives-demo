import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { FormsModule } from '@angular/forms';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { NgforPropertiesComponent } from './ngfor-properties/ngfor-properties.component';
import { NasaComponent } from './nasa/nasa.component';
import { TrackbyComponent } from './trackby/trackby.component';
import { SwitchDemoComponent } from './switch-demo/switch-demo.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { NgclassDemoComponent } from './ngclass-demo/ngclass-demo.component';
import { NgstyleDemoComponent } from './ngstyle-demo/ngstyle-demo.component';
import { HelloDirective } from 'projects/event-binding-demos/src/app/custum directives/hello.directive';
import { SampleComponent } from './sample/sample.component';
import { CustomStrDirective } from './custum-str.directive';

//import { MobileComponent } from './mobile/mobile.component';
@NgModule({
  declarations: [
    AppComponent,
    NgIfDemoComponent,
    NgforDemoComponent,
    NgforPropertiesComponent,
    NasaComponent,
    TrackbyComponent,
    SwitchDemoComponent,
    ContentProjectionComponent,
    MobilesComponent,
    NgclassDemoComponent,
    NgstyleDemoComponent,
    HelloDirective,
    SampleComponent,
    CustomStrDirective
    // MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap:[NgIfDemoComponent]
  // bootstrap:[MobileComponent]
  //  bootstrap:[NgforDemoComponent]
  //  bootstrap:[NgforPropertiesComponent]
  // bootstrap:[NasaComponent]
  //bootstrap:[TrackbyComponent]
 // bootstrap:[SwitchDemoComponent]
//  bootstrap:[ContentProjectionComponent]
// bootstrap:[MobilesComponent]
// bootstrap:[ NgclassDemoComponent]
// bootstrap:[SampleComponent]
})
export class AppModule { }
