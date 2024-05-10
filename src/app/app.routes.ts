import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';


export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'albums', component: AlbumsComponent }
];
