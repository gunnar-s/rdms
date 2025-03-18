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
            link: "https://epub.uni-regensburg.de/cgi/latest_tool",
            active: true
          },
          {
            id: 2,
            label: "BU - Repositorium des Fachbereichs Physik",
            description: "Das Repositorium des Fachbereichs Physik",
            link: "https://epub.uni-regensburg.de/cgi/latest_tool",
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
            link: "https://rdmo.ur.de/",
            active: true
          },
          {
            id: 2,
            label: "BU - Guidelines zu Förderorganisationen (One-Step-Funderpages)",
            description: "Die One-Step-Funderpages bieten eine Übersicht über und Anleitungen für die spezifischen Anforderungen an DMPs einzelner Förderorganisationen.",
            link: "/forschen/forschungsdatenmanagement/standards/guidelines",
            internallink: true,
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
            link: "https://epub.uni-regensburg.de/",
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
            link: "https://www.uni-regensburg.de/rechenzentrum/serviceangebot/server-cloud-service/gitlab/index.html",
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
            category: "Ingenieurwissenschaften",
            active: true
          },
          {
            id: 2,
            label: "Algorithm Knowledge Graph Ontology (AlgoData)",
            description: "AlgoData",
            link: "https://algodata.mardi4nfdi.de/static/widoco/v1/index-en.html",
            category: "Naturwissenschaften",
            active: true
          },
          {
            id: 3,
            label: "ChEBI",
            description: "Chemical Entities of Biological Interest (ChEBI) is a freely available dictionary of molecular entities focused on ‘small’ chemical compounds. The term ‘molecular entity’ refers to any constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer, etc., identifiable as a separately distinguishable entity. The molecular entities in question are either products of nature or synthetic products used to intervene in the processes of living organisms.",
            link: "https://www.ebi.ac.uk/chebi/de/init.do",
            category: "Naturwissenschaften",
            active: true
          },
          {
            id: 4,
            label: "RXNO",
            description: "RXNO is the name reaction ontology. It contains more than 500 classes representing organic reactions such as the Diels–Alder cyclization.",
            link: "https://github.com/rsc-ontologies/rxno/",
            category: "Naturwissenschaften",
            active: true
          },
          {
            id: 4,
            label: "CHMO",
            description: "The Chemical Methods Ontology contains more than 3000 classes and describes methods.",
            link: "https://github.com/rsc-ontologies/rsc-cmo",
            category: "Naturwissenschaften",
            active: true
          },
          {
            id: 5,
            label: "UO",
            description: "Units of measurement ontology",
            link: "https://github.com/HajoRijgersberg/OM",
            category: "Naturwissenschaften",
            active: true
          },
          {
            id: 6,
            label: "EDAM-Ontology",
            description: "EDAM is a comprehensive ontology of well-established, familiar concepts that are prevalent within scientific data analysis and data management (both within and beyond life sciences and imaging). EDAM includes topics, operations, types of data and data identifiers, and data formats. EDAM provides a set of concepts with preferred terms and synonyms, related terms, definitions, and other information - organised into a simple and intuitive hierarchy for convenient use.",
            link: "https://edamontology.org/page",
            category: "Naturwissenschaften",
            active: true
          },
          {
            id: 7,
            label: "GSSO",
            description: "Gender, Sex, and Sexual Orientation Ontology",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 8,
            label: "DUO",
            description: "Data Use Ontology",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 9,
            label: "Mondo",
            description: "Mondo Disease Ontology",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 10,
            label: "HPO",
            description: "Human Phenotype Ontology",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 11,
            label: "BTO",
            description: "BRENDA Tissue and Enzyme Source Ontology",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 12,
            label: "Uberon",
            description: "Uberon",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 13,
            label: "GenEpiO",
            description: "Genomic Epidemiology Ontology",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 14,
            label: "ATO",
            description: "Animal Trait Ontology",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 15,
            label: "EOL",
            description: "Enviroment Ontology for Livestock",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 16,
            label: "AHOL",
            description: "Animal Health Ontology for Livestock",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 16,
            label: "SNOMEDCT",
            description: "Systematized Nomenclature of Medicine-Clinical Terms",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 17,
            label: "ELLST",
            description: "European Language Social Science Thesaurus",
            link: "",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 18,
            label: "SMI",
            description: "Smart Musical Instruments Ontology",
            link: "",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 19,
            label: "CIDOC CRM",
            description: "CIDOC Conceptual Reference Model",
            link: "",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 20,
            label: "FRBR in OWL2 DL Ontology",
            description: "Functional Requirements for Bibliographic Record in OWL2 DL Ontology",
            link: "",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 21,
            label: "OntoSoft",
            description: "OntoSoft",
            link: "",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 22,
            label: "WikiProject Ontology",
            description: "WikiProject Ontology",
            link: "",
            category: "Geistes- & Sozialwissenschaften",
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
            link: "https://ddialliance.org/",
            active: true
          },
          {
            id: 2,
            label: "METS",
            description: "The Metadata Encoding and Transmission Standard (METS) is a metadata standard for encoding descriptive, administrative, and structural metadata regarding objects within a digital library, expressed using the XML schema language of the World Wide Web Consortium (W3C).",
            link: "https://www.loc.gov/standards/mets/",
            active: true
          },
          {
            id: 3,
            label: "MODS",
            description: "The Metadata Object Description Schema (MODS) is an XML-based bibliographic description schema developed by the United States Library of Congress' Network Development and Standards Office.",
            link: "https://www.loc.gov/standards/mods/",
            active: true
          },
          {
            id: 4,
            label: "DataCite",
            description: "DataCite ist ein internationales Konsortium, das sich zum Ziel gemacht hat, einen einfachen Zugang zu wissenschaftlichen Forschungsdaten zu ermöglichen, die Akzeptanz von Forschungsdaten als legitime und zitierfähige Beiträge der wissenschaftlichen Forschung zu erhöhen und die Archivierung von Forschungsdaten zu unterstützen, um Transparenz und nachhaltige Nutzung für die Forschung zu gewährleisten.",
            link: "https://datacite.org/",
            active: true
          },
          {
            id: 5,
            label: "DublinCore",
            description: "Dublin Core ist ein Metadatenschema zur Beschreibung von elektronischen Ressourcen.",
            link: "http://dublincore.org/",
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
            category: "Allgemein",
            active: true
          },
          {
            id: 2,
            label: "EOSC",
            description: "European Open Science Cloud",
            link: "https://eosc-portal.eu",
            category: "Allgemein",
            active: true
          },
          {
            id: 3,
            label: "Base4NFDI",
            description: "Basisdienste für NFDI",
            link: "https://base4nfdi.de",
            category: "Allgemein",
            active: true
          },
          {
            id: 4,
            label: "BERD@MFDI",
            description: "BERD@NFDI is dedicated to establishing a research data infrastructure transforming the management of Business, Economic, and Related Data. Our mission is to empower researchers of the social sciences with the tools and services needed to harness the full potential of unstructured data, such as images, videos, audio, and text files.",
            link: "https://www.berd-nfdi.de/",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 5,
            label: "KonsortSWD",
            description: "KonsortSWD ist das Konsortium für die Sozial-, Verhaltens-, Bildungs- und Wirtschaftswissenschaften in der Nationalen Forschungsdateninfrastruktur (NFDI). Unsere Mission ist es, die Forschungsdateninfrastruktur zur Beforschung der Gesellschaft zu stärken, zu erweitern und zu vertiefen.",
            link: "https://www.konsortswd.de/",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 6,
            label: "NFDI4Culture",
            description: "",
            link: "https://base4nfdi.de",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 7,
            label: "NFDI4Memory",
            description: "",
            link: "https://base4nfdi.de",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 8,
            label: "NFDI4Objects",
            description: "",
            link: "https://base4nfdi.de",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 9,
            label: "Text+",
            description: "",
            link: "https://base4nfdi.de",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 10,
            label: "NFDI4DataScience",
            description: "The vision of NFDI4DataScience (NFDI4DS) is to support all steps of the complex and interdisciplinary research data lifecycle, including collecting/creating, processing, analyzing, publishing, archiving, and reusing resources in Data Science and Artificial Intelligence.",
            link: "https://www.nfdi4datascience.de/",
            category: "Ingenieurwissenschaften",
            active: true
          },
          {
            id: 11,
            label: "NFDI4Energy",
            description: "NFDI4Energy is a consortium under the umbrella of the National Research Data Infrastructure (NFDI) dedicated to building an Open Ecosystem for FAIR (Findable, Accessible, Interoperable, Reusable) Research Artefacts in Interdisciplinary Energy Systems Research.",
            link: "https://nfdi4energy.uol.de/",
            category: "Ingenieurwissenschaften",
            active: false
          },
          {
            id: 12,
            label: "NFDI4Ing",
            description: "The consorium is commited to become a central contact for the engineering community in all things related to professional research data management. To achieve this, we build up a long-term structure for inter-community communication, training and support",
            link: "https://nfdi4ing.de/",
            category: "Ingenieurwissenschaften",
            active: true
          },
          {
            id: 13,
            label: "NFDI-MatWerk",
            description: "The Vision of NFDI-MatWerk is to establish itself as the leading data infrastructure for Materials Science and Engineering (MSE), enabling seamless access to high-quality data and fostering a collaborative research environment.",
            link: "https://nfdi-matwerk.de/",
            category: "Ingenieurwissenschaften",
            active: false
          },
          {
            id: 14,
            label: "NFDIxCS",
            description: "NFDIxCS promotes the implementation of the FAIR Data Principles for computer science (CS) research data and software artifacts. Therefore, NFDIxCS will establish an organizational, technical, collaborative, and interoperable infrastructure to join the available forces of relevant services and actors from and for computer science.",
            link: "https://nfdixcs.org/",
            category: "Ingenieurwissenschaften",
            active: true
          },
          {
            id: 15,
            label: "DataPLANT",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 16,
            label: "FAIRagro",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 17,
            label: "NFDI4Immuno",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 18,
            label: "GHGA",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 19,
            label: "NFDI4Biodiversity",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 20,
            label: "NFDI4BIOIMAGE",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 21,
            label: "NFDI4Health",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 22,
            label: "NFDI4Micobiota",
            description: "",
            link: "https://base4nfdi.de",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 23,
            label: "DAPHNE4NFDI",
            description: "",
            link: "https://base4nfdi.de",
            category: "Naturwissenschaften",
            active: false
          },
          {
            id: 24,
            label: "FAIRmat",
            description: "",
            link: "https://base4nfdi.de",
            category: "Naturwissenschaften",
            active: false
          },
          {
            id: 25,
            label: "NFDI4Cat",
            description: "",
            link: "https://base4nfdi.de",
            category: "Naturwissenschaften",
            active: false
          },
          {
            id: 26,
            label: "MaRDI",
            description: "Mathematische Forschungsdateninitiative",
            link: "https://base4nfdi.de",
            category: "Naturwissenschaften",
            active: true
          },
          {
            id: 27,
            label: "NFDI4Chem",
            description: "",
            link: "https://base4nfdi.de",
            category: "Naturwissenschaften",
            active: false
          },
          {
            id: 28,
            label: "NFDI4Earth",
            description: "",
            link: "https://base4nfdi.de",
            category: "Naturwissenschaften",
            active: false
          },
          {
            id: 29,
            label: "PUNCH4NFDI",
            description: "",
            link: "https://base4nfdi.de",
            category: "Naturwissenschaften",
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

  getGroupAndCategory(name: string, category: string): Entry[] {
    return this.preferences.groups.filter(g => g.name == name).at(0)?.entries!.filter(e => e.category == category)!;
  }

  getCategories(): string[] {
    return ["Allgemein", "Ingenieurwissenschaften", "Naturwissenschaften", "Geistes- & Sozialwissenschaften", "Lebenswissenschaften"];
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
  internallink?: boolean,
  category?: string,
  active: boolean,
}
