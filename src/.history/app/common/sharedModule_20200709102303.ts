import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {SFBannerComponent} from './banner/banner.component';
import {SFBtnComponent} from './btn/btn.component';

@NgModule({
    declarations: [
        SFBtnComponent,
        SFBannerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
    ],
    providers: [],
    exports: [
        SFBtnComponent,
        SFBannerComponent
    ],
      entryComponents: [
        
    ],

})
export class SharedComponentModule {}