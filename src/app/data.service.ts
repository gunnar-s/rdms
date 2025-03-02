import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  news: News[] = [
    {
      title: "Der Teilchenbeschleuniger ist da",
      text: "Unser neuer Teilchenbeschleuniger ist endlich eingetroffen und bereit für bahnbrechende Experimente. Mit dieser hochmodernen Technologie können unsere Wissenschaftler tiefere Einblicke in die Grundlagen der Materie und des Universums gewinnen.",
      date: "31.03.2025"
    },
    {
      title: "Die neuste Veröffentlichung des FDM-Teams",
      text: "Das Forschungsdatenmanagement Team hat eine neue Veröffentlichung herausgebracht, die innovative Ansätze zur Verwaltung und Sicherung wissenschaftlicher Daten präsentiert. Diese Arbeit wird Forschern helfen, ihre Daten effizienter zu nutzen und zu schützen.",
      date: "21.03.2025"
    },
    {
      title: "Irgendeine Auszeichnung für irgendwen",
      text: "Wir freuen uns, bekannt zu geben, dass einer unserer herausragenden Forscher für seine bedeutenden Beiträge zur Wissenschaft mit einem renommierten Preis ausgezeichnet wurde. Diese Anerkennung unterstreicht die Exzellenz und das Engagement unserer Universität im Bereich der Forschung.",
      date: "15.03.2025"
    },
    {
      title: "Auszeichnung für herausragende Forschung",
      text: "Ein Professor unserer Universität wurde mit dem renommierten Gottfried Wilhelm Leibniz-Preis für seine herausragenden Forschungsleistungen ausgezeichnet",
      date: "01.03.2025"
    },
    {
      title: "Liturgiewissenschaftliche Erkenntnisse",
      text: "Ein neues Buch beleuchtet die Wechselwirkungen zwischen Liturgie und Kirchenkrisen und bietet Impulse für eine Erneuerung der Kirche",
      date: "26.02.2025"
    },
    {
      title: "Neue Veröffentlichung zur Multiverse-Arbeit",
      text: "Unsere Forscher haben eine neue Studie veröffentlicht, die zeigt, wie Multiverse-Apps die Produktivität steigern können, indem sie Ablenkungen minimieren",
      date: "25.02.2025",
    },
    {
      title: "Philosophische Veröffentlichungen",
      text: "Die Philosophische Fakultät hat mehrere neue Artikel veröffentlicht, darunter Arbeiten zu Klimaschutz und Selbstbetrug",
      date: "21.02.2025"
    }
  ]

  events: News[] = [
    {
      title: "Save the date: eLabFTW Networking Event",
      text: "Markiere dir den Termin im Kalender! Unser eLabFTW Networking Event bietet die perfekte Gelegenheit, sich mit anderen Forschern und Entwicklern auszutauschen, Ideen zu teilen und neue Partnerschaften zu knüpfen. Sei dabei und erlebe inspirierende Vorträge und spannende Diskussionen.",
      date: "10.04.2025 14:00 irgendwo auf dem Campus und online",
    },    
    {
      title: "Workcafé: Wie nenne ich meine Excel-Dateien",
      text: "Komm zu unserem Workcafe und erfahre, wie du deine Excel-Dateien effektiv benennen und organisieren kannst. Wir teilen bewährte Praktiken und hilfreiche Tipps, um die Verwaltung deiner Daten zu vereinfachen und die Produktivität zu steigern.",
      date: "05.04.2025 12:30 in der Mensa",
    },    
    {
      title: "Open Lab: Vorstellung des Teilchenbeschleunigers",
      text: "Besuche unser Open Lab und erhalte einen exklusiven Einblick in unseren neuen Teilchenbeschleuniger. Unsere Wissenschaftler werden die Funktionsweise und die Forschungsziele dieses beeindruckenden Geräts erläutern. Lass dir diese Gelegenheit nicht entgehen!",
      date: "05.04.2025 12:30 in der Mensa",
    },
    {
      title: "Konferenz: Zukunft des Forschungsdatenmanagements",
      text: "Eine zweitägige Konferenz, bei der Experten aus verschiedenen Disziplinen die neuesten Entwicklungen und Trends im Forschungsdatenmanagement präsentieren und diskutieren. Networking-Sessions und Posterpräsentationen runden das Programm ab.",
      date: "20.03.2025 in der Kongresshalle"
    },
    {
      title: "Hackathon: Innovative Lösungen für Datenmanagement",
      text: "Ein spannender Hackathon, bei dem Teams aus Studierenden und Forschenden zusammenarbeiten, um innovative Lösungen für aktuelle Herausforderungen im Forschungsdatenmanagement zu entwickeln. Preise und Anerkennung für die besten Ideen sind zu gewinnen.",
      date: "15.03.2025 in den Computer Labs"
    }
  ]
}

export type News = {
  title: string,
  text: string,
  date: string,
}
