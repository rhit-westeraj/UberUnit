//Base Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

//External Dependencies
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { KatexModule } from 'ng-katex';
import { NgSelectModule } from '@ng-select/ng-select';

//Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

//Internal Components
import { AppComponent } from './app.component';
import { ConvertFormComponent } from './convert-form/convert-form.component';

@NgModule({
	declarations: [AppComponent, ConvertFormComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		KatexModule,
		MatInputModule,
		FormsModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		NgSelectModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
