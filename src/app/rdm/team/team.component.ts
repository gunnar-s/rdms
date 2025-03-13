import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'team',
  imports: [NgForOf],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  datastewards: Datasteward[] = [
    {
      name: "Daniela Wagner",
      description: "Daniela Wagner ist eine führende Expertin für Datenintegration und Datenbankmanagement. Sie hat mehrere preisgekrönte Konzepte zur Verbesserung der Datenqualität und -verfügbarkeit in großen Forschungseinrichtungen entwickelt.",
      special: ["Datenqualität", "Datenverfügbarkeit"],
      email: "daniela.wagner@bu.com",
      pic: "ds/daniela_wagner.png"
    }, 
    {
      name: "Thomas Bergmann",
      description: "Thomas Bergmann spezialisiert sich auf Datenvisualisierung und wissenschaftliche Kommunikation. Er ist bekannt für seine interaktiven Dashboards, die komplexe Forschungsdaten verständlich und ansprechend präsentieren.",
      special: ["Datenvisualisierung"],
      email: "thomas.bergmann@bu.com",
      pic: "ds/thomas_bergmann.png"
    },
    {
      name: "Lena Hoffmann",
      description: "Lena Hoffmann ist eine renommierte Forscherin im Bereich Datenmining und Datenanalyse. Ihre Arbeit hat zu bedeutenden Fortschritten in der Vorhersage und Modellierung von Forschungsdaten geführt.",
      special: ["Data Mining", "Datenanalyse"],
      email: "lena.hoffmann@bu.com",
      pic: "ds/lena_hoffmann.png"
    },
    {
      name: "Michael Schröder",
      description: "Michael Schröder ist ein Pionier im Bereich der Cloud-Datenspeicherung und -sicherung. Er hat innovative Lösungen zur sicheren und effizienten Speicherung großer Datenmengen in der Cloud entwickelt.",
      special: ["Big Data", "Datenspeicherung"],
      email: "michael.schroeder@bu.com",
      pic: "ds/michael_schroeder.png"
    },
    {
      name: "Jan Bauer",
      description: "Jan Bauer ist Experte für maschinelles Lernen und künstliche Intelligenz im Forschungsdatenmanagement. Er entwickelt intelligente Algorithmen, die die Analyse und Interpretation von Forschungsdaten revolutionieren.",
      special: ["Machine Learning", "Künstliche Intelligenz"],
      email: "jan.bauer@bu.com",
      pic: "ds/jan_bauer.png"
    },
    {
      name: "Oliver Becker",
      description: "Oliver Becker ist ein Fachmann für Open-Data-Initiativen und Forschungsdatenpublikation. Er setzt sich für den freien Zugang zu wissenschaftlichen Daten und die Förderung der Open-Science-Bewegung ein.",
      special: ["Open-Data"],
      email: "oliver.becker@bu.com",
      pic: "ds/oliver_becker.png"
    },
    {
      name: "Felix Weber",
      description: "Felix Weber ist Spezialist für Datenethik und Governance im Forschungsdatenmanagement. Seine Arbeit konzentriert sich auf die Erstellung von ethischen Rahmenbedingungen und Best Practices für den verantwortungsvollen Umgang mit Forschungsdaten.",
      special: ["Datenethik", "Governance"],
      email: "felix.weber@bu.com",
      pic: "ds/felix_weber.png"
    },
    {
      name: "Sebastian Müller",
      description: "Sebastian Müller ist ein Experte für Metadaten-Management und Datenstandardisierung. Er leitet mehrere Projekte zur Erstellung von Richtlinien für die Datenverwaltung und zur Förderung der Interoperabilität zwischen verschiedenen Forschungseinrichtungen.",
      special: ["Metadatenmanagement"],
      email: "sebastian.mueller@bu.com",
      pic: "ds/sebastian_mueller.png"
    },
    {
      name: "Markus Becker",
      description: "Markus Becker ist ein promovierter Informatiker mit einem Schwerpunkt auf Open-Access-Datenbanken und Data-Sharing-Initiativen. Er hat bahnbrechende Algorithmen entwickelt, um die Effizienz und Sicherheit bei der Datenverarbeitung zu verbessern.",
      special: ["Open Access", "Data Sharing"],
      email: "markus.becker@bu.com",
      pic: "ds/markus_becker.png"
    },
    {
      name: "David Scholz",
      description: "David Scholz ist ein Spezialist für Data Governance und Datenschutz. Er berät weltweit führende Forschungsinstitute in Fragen der Datenpolitik und -sicherheit.",
      special: ["Data Governance", "Datenschutz"],
      email: "david.scholz@bu.com",
      pic: "ds/david_scholz.png"
    },
    {
      name: "Monika Lange",
      description: "Monika Lange ist eine erfahrene Beraterin für Datenmanagement in der Biowissenschaft. Sie arbeitet an der Entwicklung von Standards und Best Practices für die Handhabung sensibler biomedizinischer Daten.",
      special: ["Datenmanagement"],
      email: "monika.lange@bu.com",
      pic: "ds/monika_lange.png"
    },
    {
      name: "Niklas Frank",
      description: "Niklas Frank ist ein erfahrener Projektmanager im Bereich Forschungsdatenmanagement mit einem Fokus auf Datenarchivierung und Langzeitverfügbarkeit. Er hat erfolgreich mehrere große internationale Projekte geleitet, die darauf abzielen, die Nachhaltigkeit und Zugänglichkeit von Forschungsdaten zu gewährleisten.",
      special: ["Datenarchivierung"],
      email: "niklas.frank@bu.com",
      pic: "ds/niklas_frank.png"
    },
    {
      name: "Hanna Richter",
      description: "Hanna Richter ist eine Data Scientist mit einem Fokus auf Machine Learning und Big Data Analysen im Forschungsdatenmanagement. Sie hat zahlreiche Publikationen zu innovativen Methoden der Datenanalyse veröffentlicht und arbeitet an der Entwicklung von Tools zur Datenvisualisierung.",
      special: ["Big Data Analysen", "Machine Learning"],
      email: "hanna.richter@bu.com",
      pic: "ds/hanna_richter.png"
    }
  ]
}

type Datasteward = {
  name: string,
  description: string,
  special: string[],
  email: string,
  pic: string
}
