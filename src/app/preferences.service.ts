import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  public loggedIn: boolean = false;

  public preferences: Preferences = {
    groups: [
      {
        id: 1,
        name: "welcome",
        label: "Willkommensnachricht",
        entries: [
          {
            id: 1,
            label: "BU - Willkommensnachricht",
            description: "Willkommensnachricht",
            link: "",
            active: false
          }
        ],
        type: "comp"
      },
      {
        id: 1,
        name: "news",
        label: "Neuigkeiten",
        entries: [
          {
            id: 1,
            label: "BU - Neuigkeiten",
            description: "Neuigkeiten",
            link: "",
            active: false
          }
        ],
        type: "comp"
      },
      {
        id: 1,
        name: "events",
        label: "Events und Termine",
        entries: [
          {
            id: 1,
            label: "BU - Events und Termine",
            description: "Events und Termine",
            link: "",
            active: false
          }
        ],
        type: "comp"
      },
      {
        id: 1,
        name: "datarepos",
        label: "Datenrepositorien",
        entries: [
          {
            id: 1,
            label: "BU - Allgemeines Repositorium",
            description: "Das allgemeine Repositorium der BU. Zu nutzen, wenn sich kein spezifischeres Repositorium anbietet.",
            link: "#",
            active: true
          },
          {
            id: 2,
            label: "BU - Repositorium des Fachbereichs Physik",
            description: "",
            link: "#",
            active: false
          },
          {
            id: 3,
            label: "re3data",
            description: "re3data ist eine Suchmaschine für Forschungsdatenrepositorien.",
            link: "https://www.re3data.org/",
            active: true
          },
          {
            id: 4,
            label: "Harvard Dataverse",
            description: "Harvard Dataverse ist ein für Forschende aller Disziplinen offenes Datenrepositorium.",
            link: "https://dataverse.harvard.edu/",
            active: true
          }]
      },
      {
        id: 2,
        name: "dmp",
        label: "Datenmanagementpläne",
        entries: [
          {
            id: 1,
            label: "BU - RDMO",
            description: "Die RDMO Instanz der BU",
            link: "",
            active: true
          },
          {
            id: 2,
            label: "BU - Guidelines zu Förderorganisationen (One-Step-Funderpages)",
            description: "Die One-Step-Funderpages bieten eine Übersicht über und Anleitungen für die spezifischen Anforderungen an DMPs einzelner Förderorganisationen.",
            link: "",
            active: true
          },
          {
            id: 3,
            label: "DMP-Toolguide",
            description: "Der DMP-Toolguide.",
            link: "https://zenodo.org/records/4632308",
            active: true
          },
        ]
      },
      {
        id: 3,
        name: "publication",
        label: "Publikationsserver",
        entries: [
          {
            id: 1,
            label: "BU - Publikationsserver",
            description: "Der Publikationsserver der BU.",
            link: "",
            active: true
          },
        ]
      },
      {
        id: 4,
        name: "sourcerepos",
        label: "Quellcoderepositorien",
        entries: [
          {
            id: 1,
            label: "BU - Gitlab des Fachbereichs Informatik",
            description: "Das Gitlab des Fachbereichs Informatik.",
            link: "#",
            active: true
          },
        ]
      },
      {
        id: 5,
        name: "ontologies",
        label: "Ontologien",
        entries: [
          {
            id: 1,
            label: "ACM Computing Classification System",
            description: "Das ACM CCS ist ein Standard Klassifikationssystem im Bereich des Computing.",
            link: "https://dl.acm.org/ccs",
            active: true
          },
          {
            id: 2,
            label: "Algorithm Knowledge Graph Ontology (AlgoData)",
            description: "AlgoData",
            link: "https://algodata.mardi4nfdi.de/static/widoco/v1/index-en.html",
            active: true
          }
        ]
      },
      {
        id: 6,
        name: "metadata",
        label: "Metadatenstandards",
        entries: [
          {
            id: 1,
            label: "DDI",
            description: "Erstellung und Strukturierung von Metadaten",
            link: "#",
            active: true
          },
          {
            id: 2,
            label: "METS",
            description: "Metadata Encoding and Transmission Standard",
            link: "#",
            active: true
          },
          {
            id: 3,
            label: "MODS",
            description: "Metadata Object Description Schema",
            link: "#",
            active: true
          },
          {
            id: 4,
            label: "DataCite",
            description: "Metadatenstandard",
            link: "#",
            active: true
          },
          {
            id: 5,
            label: "DublinCore",
            description: "Metadatenstandard",
            link: "#",
            active: true
          },
        ]
      },
      {
        id: 7,
        name: "initiatives",
        label: "Initiativen",
        entries: [
          {
            id: 1,
            label: "NFDI",
            description: "Verein Nationale Forschungsdateninfrastruktur e.V.",
            link: "https://www.nfdi.de",
            active: true
          },
          {
            id: 2,
            label: "EOSC",
            description: "european Open Science Cloud",
            link: "https://eosc-portal.eu",
            active: true
          },
          {
            id: 3,
            label: "Base4NFDI",
            description: "Basisdienste für NFDI",
            link: "https://base4nfdi.de",
            active: true
          },
          {
            id: 4,
            label: "NFDI4DataScience",
            description: "NFDI für Datenwissenschaft und Künstliche Intelligenz",
            link: "https://base4nfdi.de",
            active: true
          },
          {
            id: 5,
            label: "NFDIxCS",
            description: "NFDI für Computer Science",
            link: "https://base4nfdi.de",
            active: true
          },
          {
            id: 6,
            label: "MaRDI",
            description: "Mathematische Forschungsdateninitiative",
            link: "https://base4nfdi.de",
            active: true
          },
        ]
      }
    ],
  }

  constructor() {
    // if (localStorage.getItem("prefs") != null) {
    //   this.preferences = JSON.parse(localStorage.getItem("prefs")!);
    // } 
  }

  groupNotEmpty(group: Group): boolean {
    return group.entries.filter(entry => entry.active).length > 0;
  }

  getGroup(name: string): Entry[] {
    return this.preferences.groups.filter(g => g.name == name).at(0)?.entries!;
  }

  savePreferences(): void {
    localStorage.setItem("prefs", JSON.stringify(this.preferences));
  }

  logout(): void {
    this.loggedIn = false
  }

  login(): void {
    this.loggedIn = true
  }
}

export type Preferences = {
  groups: Group[]
}

export type Group = {
  id: number,
  name: string,
  label: string,
  entries: Entry[],
  type?: string
}

export type Entry = {
  id: number,
  label: string,
  description: string,
  link: string,
  active: boolean,
}
