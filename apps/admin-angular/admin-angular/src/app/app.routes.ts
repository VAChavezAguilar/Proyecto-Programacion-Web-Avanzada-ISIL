import { Routes } from '@angular/router';
import { ListaProducto } from './components/lista-producto/lista-producto';
import { Validar } from './components/validar/validar';
import { authGuardGuard } from './guard/auth-guard-guard';
import { Usuario } from './components/usuario/usuario';
import { Cursos } from './components/cursos/cursos';
import { AdminDashboard } from './components/admin-dashboard/admin-dashboard';


export const routes: Routes = [
    {path: 'producto', component: ListaProducto},
    {path: 'cursos', component: Cursos},
    {path: 'admin-dashboard', component: AdminDashboard},
    {path: 'usuario', component: Usuario },
    {path: '', redirectTo: 'validar', pathMatch: 'full'}



];
