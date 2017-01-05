import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

export const AppRouter = RouterModule.forRoot(appRoutes);