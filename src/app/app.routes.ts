import { Routes } from '@angular/router';
import { ServicesCompComponent } from './services-comp/services-comp.component';
import { StartCompComponent } from './start-comp/start-comp.component';
import { WhatisitCompComponent } from './whatisit-comp/whatisit-comp.component';
import { TeamCompComponent } from './team-comp/team-comp.component';
import { WorkshopsCompComponent } from './workshops-comp/workshops-comp.component';
import { PreferencesCompComponent } from './preferences-comp/preferences-comp.component';

export const routes: Routes = [
    {
        path: '',
        component: StartCompComponent,
        title: 'RDMS - Start',
    },
    {
        path: 'preferences',
        component: PreferencesCompComponent,
        title: 'RDMS - Einstellungen',
    },
    {
        path: 'services',
        component: ServicesCompComponent,
        title: 'RDMS - Services',
    },
    {
        path: 'team',
        component: TeamCompComponent,
        title: 'RDMS - Team',
    },
    {
        path: 'whatisit',
        component: WhatisitCompComponent,
        title: 'RDMS - What is Forschungsdatenmanagement?',
    },
    {
        path: 'workshops',
        component: WorkshopsCompComponent,
        title: 'RDMS - Kurse und Workshops',
    },
];
