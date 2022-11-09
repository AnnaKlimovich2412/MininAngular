import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {AboutComponent} from "./about/about.component";
import {AboutExtraComponent} from "./about-extra/about-extra.component";
import {HomeComponent} from "./home/home.component";


@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'about', component: AboutComponent, children: [
        {path: 'extra', component: AboutExtraComponent}
      ]},
    {path: '', component: HomeComponent, pathMatch: 'full'}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
