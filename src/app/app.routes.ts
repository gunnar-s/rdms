import { Routes } from '@angular/router';
import { ServicesCompComponent } from './services-comp/services-comp.component';
import { StartCompComponent } from './start-comp/start-comp.component';
import { WhatisitCompComponent } from './whatisit-comp/whatisit-comp.component';
import { TeamCompComponent } from './team-comp/team-comp.component';
import { WorkshopsCompComponent } from './workshops-comp/workshops-comp.component';
import { PreferencesCompComponent } from './preferences-comp/preferences-comp.component';
import { GuidelinesCompComponent } from './guidelines-comp/guidelines-comp.component';
import { PoliciesCompComponent } from './policies-comp/policies-comp.component';
import { InfrastructureCompComponent } from './infrastructure-comp/infrastructure-comp.component';
import { UniHomeCompComponent } from './uni-home-comp/uni-home-comp.component';
import { StudiumHomeCompComponent } from './studium-home-comp/studium-home-comp.component';
import { ForschenHomeCompComponent } from './forschen-home-comp/forschen-home-comp.component';
import { ForschenCompComponent } from './forschen-comp/forschen-comp.component';
import { UniCompComponent } from './uni-comp/uni-comp.component';
import { FdmsCompComponent } from './fdms-comp/fdms-comp.component';
import { StudiumCompComponent } from './studium-comp/studium-comp.component';
import { InitiativesComponent } from './rdm/initiatives/initiatives.component';
import { OntologiesComponent } from './rdm/ontologies/ontologies.component';
import { MetadatastandardsComponent } from './rdm/metadatastandards/metadatastandards.component';
import { NewsComponent } from './rdm/news/news.component';
import { EventsComponent } from './rdm/events/events.component';

export const routes: Routes = [
    {
        path: '',
        component: UniCompComponent,
        title: 'Beliebige Universität - Start',
        data: { breadcrumb: 'Beliebige Universität' },
        children: [
            {
                path: '',
                component: UniHomeCompComponent,
                data: { breadcrumb: 'Start' }
            },
            {
                path: 'studium',
                component: StudiumCompComponent,
                title: 'Studium',
                data: { breadcrumb: 'Studium' },
                children: [
                    {
                        path: '',
                        component: StudiumHomeCompComponent,
                        data: { breadcrumb: 'Start' }
                    },   
                ]
            },
            {
                path: 'forschen',
                component: ForschenCompComponent,
                title: 'Forschen',
                data: { breadcrumb: 'Forschen' },
                children: [
                    {
                        path: '',
                        component: ForschenHomeCompComponent,
                        data: { breadcrumb: 'Start' }
                    },                         
                    {
                        path: 'forschungsdatenmanagement',
                        component: FdmsCompComponent,
                        title: 'RDMS - Start',
                        data: { breadcrumb: 'Forschungsdatenmanagement' },
                        children: [
                            {
                                path: '',
                                component: StartCompComponent,
                                data: { breadcrumb: 'Start' }
                            },
                            {
                                path: 'preferences',
                                component: PreferencesCompComponent,
                                title: 'RDMS - Einstellungen',
                                data: { breadcrumb: 'Einstellungen' }
                            },
                            {
                                path: 'services',
                                component: ServicesCompComponent,
                                title: 'RDMS - Services',
                                data: { breadcrumb: 'Services' },
                            },
                            {
                                path: 'events',
                                component: EventsComponent,
                                title: 'RDMS - Events und Termine',
                                data: { breadcrumb: 'Events und Termine' },
                            },
                            {
                                path: 'guidelines',
                                component: GuidelinesCompComponent,
                                title: 'RDMS - Anleitungen',
                                data: { breadcrumb: 'Anleitungen' }
                            },
                            {
                                path: 'infrastructure',
                                component: InfrastructureCompComponent,
                                title: 'RDMS - Infrastruktur',
                                data: { breadcrumb: 'Infrastruktur' }
                            },
                            {
                                path: 'initiatives',
                                component: InitiativesComponent,
                                title: 'RDMS - Initiativen',
                                data: { breadcrumb: 'Initiativen' }
                            },
                            {
                                path: 'metadata',
                                component: MetadatastandardsComponent,
                                title: 'RDMS - Metadatenstandards',
                                data: { breadcrumb: 'Metadatenstandards' }
                            },
                            {
                                path: 'news',
                                component: NewsComponent,
                                title: 'RDMS - Neuigkeiten',
                                data: { breadcrumb: 'Neuigkeiten' },
                            },
                            {
                                path: 'ontologies',
                                component: OntologiesComponent,
                                title: 'RDMS - Ontologien',
                                data: { breadcrumb: 'Ontologien' }
                            },
                            {
                                path: 'policies',
                                component: PoliciesCompComponent,
                                title: 'RDMS - Richtlinien',
                                data: { breadcrumb: 'Richtlinien' }
                            },
                            {
                                path: 'team',
                                component: TeamCompComponent,
                                title: 'RDMS - Team und Kontakt',
                                data: { breadcrumb: 'Team und Kontakt' }
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
                        ]
                    },
                ]
            },
        ]
    }
];
