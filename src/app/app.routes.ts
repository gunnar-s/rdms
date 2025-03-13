import { Routes } from '@angular/router';
import { ServicesCompComponent } from './rdm/services-comp/services-comp.component';
import { PreferencesCompComponent } from './preferences-comp/preferences-comp.component';
import { UniHomeCompComponent } from './uni-home-comp/uni-home-comp.component';
import { StudiumHomeCompComponent } from './studium-home-comp/studium-home-comp.component';
import { ForschenHomeCompComponent } from './forschen-home-comp/forschen-home-comp.component';
import { ForschenCompComponent } from './forschen-comp/forschen-comp.component';
import { UniCompComponent } from './uni-comp/uni-comp.component';
import { StudiumCompComponent } from './studium-comp/studium-comp.component';
import { InitiativesComponent } from './rdm/standards/initiatives/initiatives.component';
import { NewsComponent } from './rdm/news/news.component';
import { EventsComponent } from './rdm/events/events.component';
import { DatareposComponent } from './rdm/services/datarepos/datarepos.component';
import { DmpComponent } from './rdm/services/dmp/dmp.component';
import { CodereposComponent } from './rdm/services/coderepos/coderepos.component';
import { PublicationComponent } from './rdm/services/publication/publication.component';
import { ElabComponent } from './rdm/services/elab/elab.component';
import { ServicesHomeComponent } from './rdm/services/services-home/services-home.component';
import { StandardsHomeComponent } from './rdm/standards/standards-home/standards-home.component';
import { GuidelinesComponent } from './rdm/standards/guidelines/guidelines.component';
import { PoliciesComponent } from './rdm/standards/policies/policies.component';
import { MetadatastandardsComponent } from './rdm/standards/metadatastandards/metadatastandards.component';
import { OntologiesComponent } from './rdm/standards/ontologies/ontologies.component';
import { RdmHomeComponent } from './rdm/rdm-home/rdm-home.component';
import { RdmCompComponent } from './rdm-comp/rdm-comp.component';
import { ReferenceManagementComponent } from './rdm/services/reference-management/reference-management.component';
import { WhatisitComponent } from './rdm/whatisit/whatisit.component';
import { WorkshopsComponent } from './rdm/workshops/workshops.component';
import { TeamComponent } from './rdm/team/team.component';
import { InfrastructureComponent } from './rdm/infrastructure/infrastructure.component';

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
                        component: RdmCompComponent,
                        title: 'RDMS - Start',
                        data: { breadcrumb: 'Forschungsdatenmanagement' },
                        children: [
                            {
                                path: '',
                                component: RdmHomeComponent,
                                data: { breadcrumb: 'Start' }
                            },
                            {
                                path: 'preferences',
                                component: PreferencesCompComponent,
                                title: 'RDMS - Einstellungen',
                                data: { breadcrumb: 'Einstellungen' }
                            },
                            {
                                path: 'events',
                                component: EventsComponent,
                                title: 'RDMS - Events und Termine',
                                data: { breadcrumb: 'Events und Termine' },
                            },
                            {
                                path: 'infrastructure',
                                component: InfrastructureComponent,
                                title: 'RDMS - Infrastruktur',
                                data: { breadcrumb: 'Infrastruktur' }
                            },
                            {
                                path: 'news',
                                component: NewsComponent,
                                title: 'RDMS - Neuigkeiten',
                                data: { breadcrumb: 'Neuigkeiten' },
                            },
                            {
                                path: 'services',
                                component: ServicesCompComponent,
                                title: 'RDMS - Services',
                                data: { breadcrumb: 'Services' },
                                children: [
                                    {
                                        path: '',
                                        component: ServicesHomeComponent,
                                        data: { breadcrumb: 'Start' }
                                    },
                                    {
                                        path: 'datarepos',
                                        component: DatareposComponent,
                                        title: 'RDMS - Datenrepositorien',
                                        data: { breadcrumb: 'Datenrepositorien' }
                                    },                                    
                                    {
                                        path: 'dmp',
                                        component: DmpComponent,
                                        title: 'RDMS - Datenmanagementpläne',
                                        data: { breadcrumb: 'Datenmanagementpläne' }
                                    },
                                    {
                                        path: 'coderepos',
                                        component: CodereposComponent,
                                        title: 'RDMS - Coderepositorien',
                                        data: { breadcrumb: 'Coderepositorien' }
                                    },
                                    {
                                        path: 'publication',
                                        component: PublicationComponent,
                                        title: 'RDMS - Publikation',
                                        data: { breadcrumb: 'Publikation' }
                                    },
                                    {
                                        path: 'elab',
                                        component: ElabComponent,
                                        title: 'RDMS - elektronisches Laborbuch',
                                        data: { breadcrumb: 'elektr. Laborbuch' }
                                    },
                                    {
                                        path: 'referencemanagement',
                                        component: ReferenceManagementComponent,
                                        title: 'RDMS - Literaturverwaltung',
                                        data: { breadcrumb: 'Literaturverwaltung' }
                                    },
                                ]
                            },
                            {
                                path: 'standards',
                                component: ServicesCompComponent,
                                title: 'RDMS - Anleitungen, Richtlinien und Standards',
                                data: { breadcrumb: 'Anleitungen, Richtlinien und Standards' },
                                children: [
                                    {
                                        path: '',
                                        component: StandardsHomeComponent,
                                        data: { breadcrumb: 'Start' }
                                    },
                                    {
                                        path: 'guidelines',
                                        component: GuidelinesComponent,
                                        title: 'RDMS - Anleitungen',
                                        data: { breadcrumb: 'Anleitungen' }
                                    },                                    
                                    {
                                        path: 'initiatives',
                                        component: InitiativesComponent,
                                        title: 'RDMS - Initiativen',
                                        data: { breadcrumb: 'Initiativen' }
                                    },
                                    {
                                        path: 'metadatastandards',
                                        component: MetadatastandardsComponent,
                                        title: 'RDMS - Metadatenstandards',
                                        data: { breadcrumb: 'Metadatenstandards' }
                                    },
                                    {
                                        path: 'ontologies',
                                        component: OntologiesComponent,
                                        title: 'RDMS - Ontologien',
                                        data: { breadcrumb: 'Ontologien' }
                                    },
                                    {
                                        path: 'policies',
                                        component: PoliciesComponent,
                                        title: 'RDMS - Richtlinien',
                                        data: { breadcrumb: 'Richtlinien' }
                                    },
                                ]
                            },
                            {
                                path: 'team',
                                component: TeamComponent,
                                title: 'RDMS - Team und Kontakt',
                                data: { breadcrumb: 'Team und Kontakt' }
                            },
                            {
                                path: 'whatisit',
                                component: WhatisitComponent,
                                title: 'RDMS - Was ist Forschungsdatenmanagement?',
                                data: { breadcrumb: 'Was ist Forschungsdatenmanagement?' }
                            },
                            {
                                path: 'workshops',
                                component: WorkshopsComponent,
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
