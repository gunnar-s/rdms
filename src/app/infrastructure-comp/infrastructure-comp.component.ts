import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'infrastructure-comp',
  imports: [NgForOf],
  templateUrl: './infrastructure-comp.component.html',
  styleUrl: './infrastructure-comp.component.css'
})
export class InfrastructureCompComponent {
  infrastructures: Infrastructures = {
    laboratories: [
      {
        name: "Chemielabor",
        description: "Dieses Labor ist mit modernsten Geräten für die Analyse von chemischen Verbindungen ausgestattet. Studenten und Forscher können hier Experimente zur Synthese und Charakterisierung neuer Substanzen durchführen. Die Sicherheitsvorkehrungen gewährleisten einen sicheren Umgang mit gefährlichen Chemikalien.",
        room: "Gebäude C Raum 143",
        link: "https://bu.com/chemie/chemielabor",
        contact: "chemielabor@bu.com"
      },
      {
        name: "Physiklabor",
        description: "Im Physiklabor können Studierende Experimente zu grundlegenden und angewandten physikalischen Phänomenen durchführen. Die Ausstattung umfasst Hochgeschwindigkeitskameras, Laser und Vakuumkammern. Das Labor unterstützt sowohl theoretische als auch experimentelle Physikprojekte.",
        room: "Gebäude D Raum 121",
        link: "https://bu.com/physik/physiklabor",
        contact: "physiklabor@bu.com"
      },
      {
        name: "Biologielabor",
        description: "Das Biologielabor bietet die Möglichkeit, mikroskopische und molekularbiologische Untersuchungen durchzuführen. Es ist mit Mikroskopen, Zentrifugen und PCR-Geräten ausgestattet. Hier werden Projekte zur Zellbiologie, Genetik und Ökologie realisiert.",
        room: "Gebäude B Raum 213",
        link: "https://bu.com/biologie/biolabor",
        contact: "biolabor@bu.com"
      },
      {
        name: "Elektrotechniklabor",
        description: "Im Elektrotechniklabor können Studierende Schaltungen entwickeln und testen sowie praktische Erfahrungen in der Elektronik und Signalverarbeitung sammeln. Die Ausstattung umfasst Oszilloskope, Funktionsgeneratoren und Lötkolben. Das Labor unterstützt Projekte zur Entwicklung von Sensoren, Aktoren und eingebetteten Systemen.",
        room: "Gebäude E Raum 425",
        link: "https://bu.com/etechnik/etechniklabor",
        contact: "etechnik@bu.com"
      },
      {
        name: "Sozialwissenschaftliches Forschungslabor",
        description: "In diesem Labor können qualitative Forschungsstudien mittels Interviews und Fokusgruppen durchgeführt werden. Es ist mit Aufnahmegeräten, schallisolierten Räumen und moderner Software zur Transkription und Analyse von Interviews ausgestattet. Das Labor bietet eine ruhige und professionelle Umgebung für die Durchführung sozialwissenschaftlicher Untersuchungen und die Erhebung tiefgehender Einblicke in menschliches Verhalten und Einstellungen.",
        room: "Gebäude A Räume 110-120",
        link: "https://bu.com/sowi/forschungslabor",
        contact: "sowi@bu.com"
      }
    ],
    facilities: [
      {
        name: "Teilchenbeschleuniger",
        description: "Dieses Labor ist mit einem Teilchenbeschleuniger ausgestattet, der zur Erforschung subatomarer Teilchen und hochenergetischer Phänomene verwendet wird. Hier können Wissenschaftler Experimente durchführen, um die Grundbausteine der Materie zu untersuchen und neue Teilchen zu entdecken. Die Einrichtung umfasst leistungsstarke Detektoren und umfangreiche Sicherheitssysteme, um präzise und sichere Messungen zu gewährleisten.",
        room: "Gebäude D Raum 001",
        link: "https://bu.com/physik/shc",
        contact: "shc@bu.com"
      },
      {
        name: "Großrechner",
        description: "In diesem Labor steht ein Hochleistungsrechner zur Verfügung, der zur Durchführung komplexer Berechnungen und Datenanalysen genutzt wird. Forschende und Studierende können hier anspruchsvolle Simulationen und Modellierungen in Bereichen wie Klimaforschung, Genomik und künstliche Intelligenz durchführen. Die Infrastruktur umfasst fortschrittliche Speichersysteme und spezielle Kühlvorrichtungen, um die optimale Leistung des Großrechners zu gewährleisten.",
        room: "Gebäude E Raum 143",
        link: "https://bu.com/informatik/großrechner",
        contact: "cruncher@bu.com"
      },
      {
        name: "Windkanal",
        description: "Dieses Labor verfügt über einen Windkanal, der zur Untersuchung der aerodynamischen Eigenschaften von Objekten und Strömungsphänomenen eingesetzt wird. Forschende können hier Modelle von Flugzeugen, Fahrzeugen und Bauwerken unter kontrollierten Bedingungen testen. Der Windkanal ist mit modernster Messtechnik ausgestattet, um genaue Daten zur Strömungsdynamik und zum Luftwiderstand zu erfassen.",
        room: "Gebäude F Raum 001",
        link: "https://bu.com/maschinenbau/windkanal",
        contact: "maschinenbau@bu.com"
      }
    ]
  }
}

type Infrastructures = {
  laboratories: Infrastructure[],
  facilities: Infrastructure[]
}
type Infrastructure = {
  name: string,
  description: string,
  room: string,
  link: string,
  contact: string
}
