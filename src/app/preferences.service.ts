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
            label: "UR - Willkommensnachricht",
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
            label: "UR - Neuigkeiten",
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
            label: "UR - Events und Termine",
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
            label: "UR - Allgemeines Repositorium",
            description: "Das allgemeine Repositorium der UR. Zu nutzen, wenn sich kein spezifischeres Repositorium anbietet.",
            link: "https://epub.uni-regensburg.de/cgi/latest_tool",
            active: true
          },
          {
            id: 2,
            label: "UR - Repositorium des Fachbereichs Physik",
            description: "Das Repositorium des Fachbereichs Physik",
            link: "https://epub.uni-regensburg.de/cgi/latest_tool",
            active: false
          },
          {
            id: 3,
            label: "UR - Repositorium des Fachbereichs Lebenswissenschaften",
            description: "Das Repositorium des Fachbereichs Lebenswissenschaften",
            link: "https://epub.uni-regensburg.de/cgi/latest_tool",
            active: false
          },
          {
            id: 4,
            label: "UR - Repositorium des Fachbereichs Geistes- und Sozialwissenschaften",
            description: "Das Repositorium des Fachbereichs Geistes- und Sozialwissenschaften",
            link: "https://epub.uni-regensburg.de/cgi/latest_tool",
            active: false
          },
          {
            id: 5,
            label: "re3data",
            description: "re3data ist eine Suchmaschine für Forschungsdatenrepositorien.",
            link: "https://www.re3data.org/",
            active: true
          },
          {
            id: 6,
            label: "Harvard Dataverse",
            description: "Harvard Dataverse ist ein für Forschende aller Disziplinen offenes Datenrepositorium.",
            link: "https://dataverse.harvard.edu/",
            active: true
          }
        ]
      },
      {
        id: 2,
        name: "dmp",
        label: "Datenmanagementpläne",
        entries: [
          {
            id: 1,
            label: "UR - RDMO",
            description: "Die RDMO Instanz der UR",
            link: "https://rdmo.ur.de/",
            active: true
          },
          {
            id: 2,
            label: "UR - Guidelines zu Förderorganisationen (One-Step-Funderpages)",
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
            label: "UR - Publikationsserver",
            description: "Der Publikationsserver der UR.",
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
            label: "UR - Gitlab des Fachbereichs Informatik",
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
            description: "Polyhierarchische Ontologie für die Verwendung in semantischen Webanwendungen. Semantisches Vokabular als einzige Quelle von Kategorien & Konzepten, die den Stand der Technik in der Informatik widerspiegeln.",
            link: "https://dl.acm.org/ccs",
            category: "Ingenieurwissenschaften",
            active: true
          },
          {
            id: 2,
            label: "Algorithm Knowledge Graph Ontology (AlgoData)",
            description: "Definiert, welche Arten von Objekten im Algorithmus-Wissensgraphen zulässig sind & mit welchen Eigenschaften sie in Beziehung stehen können. Verlässt sich auf die strikte Einhaltung der Ontologie, um eine zuverlässige, maschinenlesbare Datenbank für (numerisches) Algorithmenwissen bereitzustellen. Definition von fünf Klassen, „Problem“, „Algorithmus“, „Benchmark“, „Software“, „Publikation“, sowie eine minimale, aber intuitiv verständliche Anzahl von Eigenschaften.",
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
            description: "Beschreibt Methoden, die zur Datenerfassung in chemischen Experimenten verwendet werden. Beschreibt auch die bei diesen Experimenten verwendeten Instrumente.",
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
            description: "Zielt darauf ab, Krankheitsdefinitionen weltweit zu harmonisieren.",
            link: "https://mondo.monarchinitiative.org/",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 10,
            label: "Human Phenotype Ontology (HPO)",
            description: "Bietet ein standardisiertes Vokabular für phänotypische Anomalien, die bei menschlichen Krankheiten auftreten",
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
            label: "Animal Trait Ontology (ATO)",
            description: "Standardisierte Merkmalsontologie für Nutztiere.",
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
            label: "Systematized Nomenclature of Medicine-Clinical Terms (SNOMED CT)",
            description: "Medizinische Terminologie, zur Standardisierung von Speicherung, Abruf & Austausch von elektronischen Gesundheitsdaten.",
            link: "",
            category: "Lebenswissenschaften",
            active: false
          },
          {
            id: 17,
            label: "European Language Social Science Thesaurus (ELLST)",
            description: "In 16 Sprachen verfügbarer europäischsprachiger Thesaurus der Sozialwissenschaften. Deckt folgende Disziplinen ab: Politik, Soziologie, Wirtschaft, Bildung, Recht, Kriminalität, Demografie, Gesundheit, Beschäftigung, Informations- & Kommunikationstechnologie & Umweltwissenschaft.",
            link: "https://elsst.cessda.eu/about/",
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
            label: "CIDOC Conceptual Reference Model (CIDOC CRM)",
            description: "Basisontologie für Daten des kulturellen Erbes mit Erweiterungen für bibliographische Dokumentation oder Geoinformatik. Integration von Daten aus verschiedenen Quellen auf eine software- und schemaunabhängige Weise.",
            link: "https://www.cidoc-crm.org/",
            category: "Geistes- & Sozialwissenschaften",
            active: false
          },
          {
            id: 20,
            label: "Functional Requirements for Bibliographic Record in OWL2 DL Ontology (FRBR in OWL2 DL Ontology)",
            description: "Funktionale Anforderungen für bibliografische Datensätze.",
            link: "https://sparontologies.github.io/frbr/current/frbr.html",
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
            description: "Beschäftigt sich mit der Natur des Seins, des Werdens, der Existenz und der Realität. Anwendung dieser Erkenntnisse bei der Pflege von Wikidata. Unterstützung einer breiten semantischen Interoperabilität zwischen bekannten Ontologien.",
            link: "https://www.wikidata.org/wiki/Wikidata:WikiProject_Ontology",
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
            description: "Bereitstellung von Metadaten.",
            link: "https://cidoc.mini.icom.museum/working-groups/lido/lido-overview/about-lido/what-is-lido/",
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
            description: "RDF-Schema zur Kodierung von Metadaten.",
            link: "https://www.cidoc-crm.org/crmdig/home-2",
            active: false
          },
          {
            id: 10,
            label: "CodeMeta",
            description: "Austausch von Software-Metadaten zw. Repositories & Organisationen.",
            link: "https://github.com/codemeta/codemeta",
            active: false
          },
          {
            id: 11,
            label: "Citation CFF",
            description: "Speicherung von Metadaten über Softwarezitationen.",
            link: "https://citation-file-format.github.io/",
            active: false
          },
          {
            id: 12,
            label: "Darwin Core",
            description: "Glossar mit Begriffen für den Austausch von Informationen über die biologische Vielfalt.",
            link: "https://dwc.tdwg.org/",
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
            description: "Umfassende Metadatenbeschreibung.",
            link: "#",
            active: false
          },
          {
            id: 15,
            label: "Bioschemas.org",
            description: "Strukturierung & Beschreibung biologischer Daten.",
            link: "https://bioschemas.org/",
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
            description: "Definition eines Vokabulars für die Bereitstellung von Metadaten zu Datensätzen.",
            link: "https://schema.org/docs/data-and-datasets.html",
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
            link: "https://www.openarchives.org/pmh/",
            active: false
          },
          {
            id: 7,
            label: "WikiData",
            description: "WikiCite: Zum Import & der Erfassung von Metadaten aus verschiedenen Quellen, z.B. Wikisource.",
            link: "https://www.wikidata.org/wiki/Wikidata:WikiCite",
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
            id: 0,
            label: "RDA",
            description: "Research Data Alliance",
            link: "https://www.rd-alliance.org/",
            category: "Allgemein",
            active: true
          },
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

  setAllClear(): void {
    this.preferences.groups.flatMap(g => g.entries).forEach(e => e.active = false);
  }

  setDefaultInformatikUser(): void {
    this.setAllClear();
    this.preferences.groups.filter(g => g.name == "events").at(0)!.entries.at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 6).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "dmp").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "sourcerepos").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "metadata").at(0)!.entries.filter(e => e.id == 11).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 10).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 14).at(0)!.active = true;
  }

  setDefaultPhysikUser(): void {
    this.setAllClear();
    this.preferences.groups.filter(g => g.name == "events").at(0)!.entries.at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 2).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 5).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "dmp").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 5).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "metadata").at(0)!.entries.filter(e => e.id == 4).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "metadata").at(0)!.entries.filter(e => e.id == 5).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 29).at(0)!.active = true;
  }

  setDefaultGeistesSozialUser(): void {    
    this.setAllClear();
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 5).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "dmp").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "publication").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 17).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 18).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 19).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 20).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 21).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "ontologies").at(0)!.entries.filter(e => e.id == 22).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "metadata").at(0)!.entries.filter(e => e.id == 4).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "metadata").at(0)!.entries.filter(e => e.id == 5).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 4).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 5).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 6).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 7).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 8).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "initiatives").at(0)!.entries.filter(e => e.id == 9).at(0)!.active = true;
  }

  setDefaultAdmin(): void {
    this.setAllClear();
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 2).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 3).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "datarepos").at(0)!.entries.filter(e => e.id == 4).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "dmp").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "publication").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
    this.preferences.groups.filter(g => g.name == "sourcerepos").at(0)!.entries.filter(e => e.id == 1).at(0)!.active = true;
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
