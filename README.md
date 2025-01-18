# E-Commerce Angular App

## Projektbeschreibung
Diese Anwendung ermöglicht es Nutzern, Produkte auszuwählen, in den Warenkorb zu legen und mit Gutscheinen beim Checkout Rabatte zu erhalten. Die App bietet grundlegende Funktionen wie einen Warenkorb mit bearbeitbaren Mengen und eine einfache Formularvalidierung.

## Live Demo
Eine Live-Demo der Anwendung ist unter folgendem Link erreichbar: [https://corestrength.andreas-lesovsky-web.dev](https://corestrength.andreas-lesovsky-web.dev)

## Features
- **Responsive Design** mit **Bootstrap**.
- **Warenkorb**: Produkte können hinzugefügt und die Quantität bearbeitet werden. Der Warenkorb wird mithilfe von **Angular Signals** im `CartService` verwaltet und der Gesamtpreis wird dynamisch angepasst.
- **Gutscheincodes**: Benutzer können Gutscheincodes beim Checkout einlösen und sehen den Rabatt sofort dank **Angular Signals**.
- **Validierungen**: Der Warenkorb, das Checkout-Formular und die Gutscheincodes werden validiert. Benutzer erhalten sofortige Rückmeldungen, z. B. bei einem leeren Warenkorb, unvollständigem Formular oder ungültigen Gutscheinen.
- **Darkmode**: Mit einem Button lässt sich der Darkmode ein- und ausschalten. Der Zustand wird im **localStorage** gespeichert, sodass beim nächsten Besuch automatisch der letzte Zustand wiederhergestellt wird.
- **Verwendung von SCSS** für das Styling, mit Hilfe von **Bootstrap**.

## Installation

1. Klone das Repository:
   ```bash
   git clone https://github.com/deinBenutzername/deinRepo.git
   ```

2. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

3. Starte den Entwicklungsserver:
   ```bash
   ng serve
   ```

4. Browser öffnen und [http://localhost:4200](http://localhost:4200) aufrufen.

## Technologien
- **Angular** 
- **TypeScript**
- **Bootstrap 5**
- **SCSS**

## Angular Features
- **Angular Signals**
- **Komponenten**
- **Services**
- **Dependency Injection**
- **Routing**
- **FormsModule**

## Funktionen im Detail

### Warenkorb
Der Warenkorb speichert die hinzugefügten Produkte im **CartService** als Signal. Benutzer können die Menge jedes Produkts bearbeiten, und der Gesamtpreis wird sofort angepasst.

### Gutscheincodes
Gutscheincodes können beim Checkout eingegeben werden, und der Rabatt wird sofort angezeigt. Die Gutscheincodes werden ebenfalls validiert.

### Validierung
- **Warenkorb**: Zeigt eine Warnung, wenn der Warenkorb leer ist.
- **Checkout-Formular**: Validiert alle erforderlichen Felder und gibt Rückmeldungen zu fehlenden oder ungültigen Eingaben.
- **Gutscheincodes**: Wird überprüft, ob der Gutscheincode gültig ist und ob er bereits verwendet wurde.

### Darkmode
Die Darkmode-Funktion wird über das `data-bs-theme`-Attribut von **Bootstrap** umgesetzt. Der Zustand des Darkmodes wird im **localStorage** gespeichert, und beim nächsten Laden der Seite wird der Zustand des Geräts oder des Nutzers übernommen.

## Lizenz
Dieses Projekt ist unter der [Lizenzname] lizenziert.