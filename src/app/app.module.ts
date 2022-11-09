import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StyleDirective} from "./directives/style.directive";
import { IfNotDirective } from './directives/if-not.directive';
import { AntiTitleCasePipe } from './pipes/anti-title-case.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {AppCounterService} from "./services/app-counter.service";
import { PartOneComponent } from './part-one/part-one.component';
import { FormComponent } from './form/form.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ColorDirective } from './shared/color.directive';
import { PageNamePipe } from './shared/page-name.pipe';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective,
    IfNotDirective,
    AntiTitleCasePipe,
    FilterPipe,
    PartOneComponent,
    FormComponent,
    TodoComponent,
    HomeComponent,
    AboutComponent,
    PostsComponent,
    AboutExtraComponent,
    ErrorPageComponent,
    ColorDirective,
    PageNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppCounterService, HttpClient, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
