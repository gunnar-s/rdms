import { Routes } from '@angular/router';
import { ServicesCompComponent } from './services-comp/services-comp.component';
import { StartCompComponent } from './start-comp/start-comp.component';
import { WhatisitCompComponent } from './whatisit-comp/whatisit-comp.component';
import { TeamCompComponent } from './team-comp/team-comp.component';
import { WorkshopsCompComponent } from './workshops-comp/workshops-comp.component';
import { PreferencesCompComponent } from './preferences-comp/preferences-comp.component';
import { ContactCompComponent } from './contact-comp/contact-comp.component';
import { GuidelinesCompComponent } from './guidelines-comp/guidelines-comp.component';
import { PoliciesCompComponent } from './policies-comp/policies-comp.component';
import { InfrastructureCompComponent } from './infrastructure-comp/infrastructure-comp.component';
import { NewsCompComponent } from './news-comp/news-comp.component';
import { EventsCompComponent } from './events-comp/events-comp.component';

export const routes: Routes = [
    {
        path: '',
        component: StartCompComponent,
        title: 'RDMS - Start',
        data: { breadcrumb: 'Forschungsdatenmanagement' },
    },
    {
        path: 'preferences',
        component: PreferencesCompComponent,
        title: 'RDMS - Einstellungen',
        data: { breadcrumb: 'Einstellungen' }
    },
    {
        path: 'news',
        component: NewsCompComponent,
        title: 'RDMS - Neuigkeiten',
        data: { breadcrumb: 'Neuigkeiten' },
    },
    {
        path: 'events',
        component: EventsCompComponent,
        title: 'RDMS - Events und Termine',
        data: { breadcrumb: 'Events und Termine' },
    },
    {
        path: 'services',
        component: ServicesCompComponent,
        title: 'RDMS - Services',
        data: { breadcrumb: 'Services' },
    },
    {
        path: 'guidelines',
        component: GuidelinesCompComponent,
        title: 'RDMS - Anleitungen',
        data: { breadcrumb: 'Anleitungen' }
    },
    {
        path: 'policies',
        component: PoliciesCompComponent,
        title: 'RDMS - Richtlinien',
        data: { breadcrumb: 'Richtlinien' }
    },
    {
        path: 'infrastructure',
        component: InfrastructureCompComponent,
        title: 'RDMS - Infrastruktur',
        data: { breadcrumb: 'Infrastruktur' }
    },
    {
        path: 'contact',
        component: ContactCompComponent,
        title: 'RDMS - Kontakt',
        data: { breadcrumb: 'Kontakt' }
    },
    {
        path: 'team',
        component: TeamCompComponent,
        title: 'RDMS - Team',
        data: { breadcrumb: 'Team' }
    },
    {
        path: 'whatisit',
        component: WhatisitCompComponent,
        title: 'RDMS - Was ist Forschungsdatenmanagement?',
        data: { breadcrumb: 'Was ist Forschungsdatenmanagement?' }
    },
    {
        path: 'workshops',
        component: WorkshopsCompComponent,
        title: 'RDMS - Kurse und Workshops',
        data: { breadcrumb: 'Kurse und Workshops' }
    },
    
];
