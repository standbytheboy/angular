import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestritoComponent } from './restrito/restrito.component';
import { ListaProdutoComponent } from './restrito/lista-produto/lista-produto.component';
import { CadastroProdutoComponent } from './restrito/cadastro-produto/cadastro-produto.component';
import { AtualizaProdutoComponent } from './restrito/atualiza-produto/atualiza-produto.component';
import { RestritoRoutingModule } from './restrito/restrito-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    MenuComponent,
    RodapeComponent,
    RestritoComponent,
    ListaProdutoComponent,
    CadastroProdutoComponent,
    AtualizaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestritoRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
