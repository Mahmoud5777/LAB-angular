import { Routes } from '@angular/router';
import { MemberForm } from './member-form/member-form';
import { Member } from './member/member';

export const routes: Routes = [
    {
        path: 'create',
        component:MemberForm
    },
    {
        path: '',
        component: Member
    }

];
