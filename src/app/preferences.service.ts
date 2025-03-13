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
          },
          {
            id: 3,
            label: "ChEBI",
            description: " Chemical Entities of Biological Interest",
            link: "",
            active: true
          },
          {
            id: 4,
            label: "RXNO",
            description: "RXNO",
            link: "",
            active: true
          },
          {
            id: 4,
            label: "CHMO",
            description: "Chemical Methods Ontology",
            link: "",
            active: true
          },
          {
            id: 5,
            label: "UO",
            description: "Units of measurement ontology",
            link: "",
            active: true
          },
          {
            id: 6,
            label: "EDAM-Ontology",
            description: "EDAM-Ontology",
            link: "",
            active: true
          },
          {
            id: 7,
            label: "GSSO",
            description: "Gender, Sex, and Sexual Orientation Ontology",
            link: "",
            active: false
          },
          {
            id: 8,
            label: "DUO",
            description: "Data Use Ontology",
            link: "",
            active: false
          },
          {
            id: 9,
            label: "Mondo",
            description: "Mondo Disease Ontology",
            link: "",
            active: false
          },
          {
            id: 10,
            label: "HPO",
            description: "Human Phenotype Ontology",
            link: "",
            active: false
          },
          {
            id: 11,
            label: "BTO",
            description: "BRENDA Tissue and Enzyme Source Ontology",
            link: "",
            active: false
          },
          {
            id: 12,
            label: "Uberon",
            description: "Uberon",
            link: "",
            active: false
          },
          {
            id: 13,
            label: "GenEpiO",
            description: "Genomic Epidemiology Ontology",
            link: "",
            active: false
          },
          {
            id: 14,
            label: "ATO",
            description: "Animal Trait Ontology",
            link: "",
            active: false
          },
          {
            id: 15,
            label: "EOL",
            description: "Enviroment Ontology for Livestock",
            link: "",
            active: false
          },
          {
            id: 16,
            label: "AHOL",
            description: "Animal Health Ontology for Livestock",
            link: "",
            active: false
          },
          {
            id: 16,
            label: "SNOMEDCT",
            description: "Systematized Nomenclature of Medicine-Clinical Terms",
            link: "",
            active: false
          },
          {
            id: 17,
            label: "ELLST",
            description: "European Language Social Science Thesaurus",
            link: "",
            active: false
          },
          {
            id: 18,
            label: "SMI",
            description: "Smart Musical Instruments Ontology",
            link: "",
            active: false
          },
          {
            id: 19,
            label: "CIDOC CRM",
            description: "CIDOC Conceptual Reference Model",
            link: "",
            active: false
          },
          {
            id: 20,
            label: "FRBR in OWL2 DL Ontology",
            description: "Functional Requirements for Bibliographic Record in OWL2 DL Ontology",
            link: "",
            active: false
          },
          {
            id: 21,
            label: "OntoSoft",
            description: "OntoSoft",
            link: "",
            active: false
          },
          {
            id: 22,
            label: "WikiProject Ontology",
            description: "WikiProject Ontology",
            link: "",
            active: false
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
          {
            id: 6,
            label: "LIDO",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 7,
            label: "EAD",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 8,
            label: "MARC21",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 9,
            label: "CIDOC CRM",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 10,
            label: "CodeMeta",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 11,
            label: "Citation CFF",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 12,
            label: "Darwin Core",
            description: "Metadatenstandard",
            link: "#",
            active: true
          },
          {
            id: 13,
            label: "EML",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 14,
            label: "Pangaea",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 15,
            label: "Bioschemas.org",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 16,
            label: "GND",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 17,
            label: "DCAT-AP",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 18,
            label: "Schema.org",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 19,
            label: "German Central Health Studyhub",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 20,
            label: "OAI-PMH",
            description: "Metadatenstandard",
            link: "#",
            active: false
          },
          {
            id: 7,
            label: "WikiData",
            description: "Metadatenstandard",
            link: "#",
            active: false
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
            description: "European Open Science Cloud",
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
            label: "BERD@MFDI",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 5,
            label: "KonsortSWD",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 6,
            label: "NFDI4Culture",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 7,
            label: "NFDI4Memory",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 8,
            label: "NFDI4Objects",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 9,
            label: "Text+",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 10,
            label: "NFDI4DataScience",
            description: "NFDI für Datenwissenschaft und Künstliche Intelligenz",
            link: "https://base4nfdi.de",
            active: true
          },
          {
            id: 11,
            label: "NFDI4Energy",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 12,
            label: "NFDI4Ing",
            description: "",
            link: "https://base4nfdi.de",
            active: true
          },
          {
            id: 13,
            label: "NFDI-MatWerk",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 14,
            label: "NFDIxCS",
            description: "NFDI für Computer Science",
            link: "https://base4nfdi.de",
            active: true
          },
          {
            id: 15,
            label: "DataPLANT",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 16,
            label: "FAIRagro",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 17,
            label: "NFDI4Immuno",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 18,
            label: "GHGA",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 19,
            label: "NFDI4Biodiversity",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 20,
            label: "NFDI4BIOIMAGE",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 21,
            label: "NFDI4Health",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 22,
            label: "NFDI4Micobiota",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 23,
            label: "DAPHNE4NFDI",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 24,
            label: "FAIRmat",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 25,
            label: "NFDI4Cat",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 26,
            label: "MaRDI",
            description: "Mathematische Forschungsdateninitiative",
            link: "https://base4nfdi.de",
            active: true
          },
          {
            id: 27,
            label: "NFDI4Chem",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 28,
            label: "NFDI4Earth",
            description: "",
            link: "https://base4nfdi.de",
            active: false
          },
          {
            id: 29,
            label: "PUNCH4NFDI",
            description: "",
            link: "https://base4nfdi.de",
            active: false
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
