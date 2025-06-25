/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck

import { BigDecimal } from './shims/BigDecimal'

export function Lohnsteuer2021(params = {}) {
  /* Input variables */

  /**
   * 1, wenn die Anwendung des Faktorverfahrens gewählt wurden (nur in Steuerklasse IV)
   */
  this.af = 1
  if (params['af'] !== undefined) {
    this.setAf(params['af'])
  }

  /**
   * Auf die Vollendung des 64. Lebensjahres folgende
   * Kalenderjahr (erforderlich, wenn ALTER1=1)
   */
  this.AJAHR = 0
  if (params['AJAHR'] !== undefined) {
    this.setAjahr(params['AJAHR'])
  }

  /**
   * 1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
   * der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0
   */
  this.ALTER1 = 0
  if (params['ALTER1'] !== undefined) {
    this.setAlter1(params['ALTER1'])
  }

  /**
   * in VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent
   */
  this.ENTSCH = new BigDecimal(0)
  if (params['ENTSCH'] !== undefined) {
    this.setEntsch(params['ENTSCH'])
  }

  /**
   * eingetragener Faktor mit drei Nachkommastellen
   */
  this.f = 1.0
  if (params['f'] !== undefined) {
    this.setF(params['f'])
  }

  /**
   * Jahresfreibetrag nach Maßgabe der Eintragungen auf der
   * Lohnsteuerkarte in Cents (ggf. 0)
   */
  this.JFREIB = new BigDecimal(0)
  if (params['JFREIB'] !== undefined) {
    this.setJfreib(params['JFREIB'])
  }

  /**
   * Jahreshinzurechnungsbetrag in Cents (ggf. 0)
   */
  this.JHINZU = new BigDecimal(0)
  if (params['JHINZU'] !== undefined) {
    this.setJhinzu(params['JHINZU'])
  }

  /**
   * Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent.
   * Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingabe „sonsti-ger Bezüge“ (Feld SONSTB)
   * oder bei Eingabe der „Vergütung für mehrjährige Tätigkeit“ (Feld VMT).
   * Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem
   * voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrere Jahres aus einem vorangegangenen
   * Abrechnungszeitraum sind in voller Höhe hinzuzurechnen.
   */
  this.JRE4 = new BigDecimal(0)
  if (params['JRE4'] !== undefined) {
    this.setJre4(params['JRE4'])
  }

  /**
   * In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
   */
  this.JVBEZ = new BigDecimal(0)
  if (params['JVBEZ'] !== undefined) {
    this.setJvbez(params['JVBEZ'])
  }

  /**
   * Merker für die Vorsorgepauschale
   * 2 = der Arbeitnehmer ist NICHT in der gesetzlichen Rentenversicherung versichert.
   *
   * 1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
   * Beitragsbemessungsgrenze OST.
   *
   * 0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
   * Beitragsbemessungsgrenze WEST.
   */
  this.KRV = 0
  if (params['KRV'] !== undefined) {
    this.setKrv(params['KRV'])
  }

  /**
   * Einkommensbezogener Zusatzbeitragssatz eines gesetzlich krankenversicherten Arbeitnehmers,
   * auf dessen Basis der an die Krankenkasse zu zahlende Zusatzbeitrag berechnet wird,
   * in Prozent (bspw. 0,90 für 0,90 %) mit 2 Dezimalstellen.
   * Der von der Kranken-kasse festgesetzte Zusatzbeitragssatz ist bei Abweichungen unmaßgeblich.
   */
  this.KVZ = new BigDecimal(0)
  if (params['KVZ'] !== undefined) {
    this.setKvz(params['KVZ'])
  }

  /**
   * Lohnzahlungszeitraum:
   * 1 = Jahr
   * 2 = Monat
   * 3 = Woche
   * 4 = Tag
   */
  this.LZZ = 0
  if (params['LZZ'] !== undefined) {
    this.setLzz(params['LZZ'])
  }

  /**
   * In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für
   * den Lohnzahlungszeitraum in Cent
   */
  this.LZZFREIB = new BigDecimal(0)
  if (params['LZZFREIB'] !== undefined) {
    this.setLzzfreib(params['LZZFREIB'])
  }

  /**
   * In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
   * für den Lohnzahlungszeitraum in Cent
   */
  this.LZZHINZU = new BigDecimal(0)
  if (params['LZZHINZU'] !== undefined) {
    this.setLzzhinzu(params['LZZHINZU'])
  }

  /**
   * Dem Arbeitgeber mitgeteilte Zahlungen des Arbeitnehmers zur privaten
   * Kranken- bzw. Pflegeversicherung im Sinne des §10 Abs. 1 Nr. 3 EStG 2010
   * als Monatsbetrag in Cent (der Wert ist inabhängig vom Lohnzahlungszeitraum immer
   * als Monatsbetrag anzugeben).
   */
  this.PKPV = new BigDecimal(0)
  if (params['PKPV'] !== undefined) {
    this.setPkpv(params['PKPV'])
  }

  /**
   * Krankenversicherung:
   * 0 = gesetzlich krankenversicherte Arbeitnehmer
   * 1 = ausschließlich privat krankenversicherte Arbeitnehmer OHNE Arbeitgeberzuschuss
   * 2 = ausschließlich privat krankenversicherte Arbeitnehmer MIT Arbeitgeberzuschuss
   */
  this.PKV = 0
  if (params['PKV'] !== undefined) {
    this.setPkv(params['PKV'])
  }

  /**
   * 1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw.
   * zu berücksichtigen wären, sonst 0.
   */
  this.PVS = 0
  if (params['PVS'] !== undefined) {
    this.setPvs(params['PVS'])
  }

  /**
   * 1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung
   * zu zahlen hat, sonst 0.
   */
  this.PVZ = 0
  if (params['PVZ'] !== undefined) {
    this.setPvz(params['PVZ'])
  }

  /**
   * Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
   * keiner Religionszugehoerigkeit = 0)
   */
  this.R = 0
  if (params['R'] !== undefined) {
    this.setR(params['R'])
  }

  /**
   * Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
   * fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
   * der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
   * Freibetrags in Cents.
   */
  this.RE4 = new BigDecimal(0)
  if (params['RE4'] !== undefined) {
    this.setRe4(params['RE4'])
  }

  /**
   * Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
   * Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
   * soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0)
   */
  this.SONSTB = new BigDecimal(0)
  if (params['SONSTB'] !== undefined) {
    this.setSonstb(params['SONSTB'])
  }

  /**
   * Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
   * soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
   * (in SONSTB enthalten) in Cents
   */
  this.STERBE = new BigDecimal(0)
  if (params['STERBE'] !== undefined) {
    this.setSterbe(params['STERBE'])
  }

  /**
   * Steuerklasse:
   * 1 = I
   * 2 = II
   * 3 = III
   * 4 = IV
   * 5 = V
   * 6 = VI
   */
  this.STKL = 0
  if (params['STKL'] !== undefined) {
    this.setStkl(params['STKL'])
  }

  /**
   * In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
   */
  this.VBEZ = new BigDecimal(0)
  if (params['VBEZ'] !== undefined) {
    this.setVbez(params['VBEZ'])
  }

  /**
   * Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
   * in Cents
   */
  this.VBEZM = new BigDecimal(0)
  if (params['VBEZM'] !== undefined) {
    this.setVbezm(params['VBEZM'])
  }

  /**
   * Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
   * bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
   * bei Versorgungsbezuegen in Cents
   */
  this.VBEZS = new BigDecimal(0)
  if (params['VBEZS'] !== undefined) {
    this.setVbezs(params['VBEZS'])
  }

  /**
   * In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
   * in Cents (ggf. 0)
   */
  this.VBS = new BigDecimal(0)
  if (params['VBS'] !== undefined) {
    this.setVbs(params['VBS'])
  }

  /**
   * Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
   * mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug
   */
  this.VJAHR = 0
  if (params['VJAHR'] !== undefined) {
    this.setVjahr(params['VJAHR'])
  }

  /**
   * Kapitalauszahlungen / Abfindungen / Nachzahlungen bei Versorgungsbezügen
   * für mehrere Jahre in Cent (ggf. 0)
   */
  this.VKAPA = new BigDecimal(0)
  if (params['VKAPA'] !== undefined) {
    this.setVkapa(params['VKAPA'])
  }

  /**
   * Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen
   * bei Versorgungsbezügen in Cent (ggf. 0)
   */
  this.VMT = new BigDecimal(0)
  if (params['VMT'] !== undefined) {
    this.setVmt(params['VMT'])
  }

  /**
   * Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
   * I, II, III und IV)
   */
  this.ZKF = new BigDecimal(0)
  if (params['ZKF'] !== undefined) {
    this.setZkf(params['ZKF'])
  }

  /**
   * Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
   * erforderlich bei Jahresberechnung (LZZ = 1)
   */
  this.ZMVB = 0
  if (params['ZMVB'] !== undefined) {
    this.setZmvb(params['ZMVB'])
  }

  /**
   * In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
   */
  this.JRE4ENT = BigDecimal.ZERO()
  if (params['JRE4ENT'] !== undefined) {
    this.setJre4ent(params['JRE4ENT'])
  }

  /**
   * In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
   */
  this.SONSTENT = BigDecimal.ZERO()
  if (params['SONSTENT'] !== undefined) {
    this.setSonstent(params['SONSTENT'])
  }

  /* Output variables */

  /**
   * Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents
   */
  this.BK = new BigDecimal(0)

  /**
   * Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
   * fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents
   */
  this.BKS = new BigDecimal(0)
  this.BKV = new BigDecimal(0)

  /**
   * Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents
   */
  this.LSTLZZ = new BigDecimal(0)

  /**
   * Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
   * in Cents
   */
  this.SOLZLZZ = new BigDecimal(0)

  /**
   * Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
   * Taetigkeit) in Cents
   */
  this.SOLZS = new BigDecimal(0)

  /**
   * Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
   * Cents
   */
  this.SOLZV = new BigDecimal(0)

  /**
   * Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
   * Taetigkeit) in Cents
   */
  this.STS = new BigDecimal(0)

  /**
   * Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents
   */
  this.STV = new BigDecimal(0)

  /**
   * Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur
   * privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch
   * die Mindestvorsorgepauschale) in Cent beim laufenden Arbeitslohn. Für Zwecke der Lohn-
   * steuerbescheinigung sind die einzelnen Ausgabewerte außerhalb des eigentlichen Lohn-
   * steuerbescheinigungsprogramms zu addieren; hinzuzurechnen sind auch die Ausgabewerte
   * VKVSONST
   */
  this.VKVLZZ = new BigDecimal(0)

  /**
   * Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers
   * zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf.
   * auch die Mindestvorsorgepauschale) in Cent bei sonstigen Bezügen. Der Ausgabewert kann
   * auch negativ sein. Für tarifermäßigt zu besteuernde Vergütungen für mehrjährige
   * Tätigkeiten enthält der PAP keinen entsprechenden Ausgabewert.
   */
  this.VKVSONST = new BigDecimal(0)

  /**
   * Verbrauchter Freibetrag bei Berechnung des laufenden Arbeitslohns, in Cent
   */
  this.VFRB = new BigDecimal(0)

  /**
   * Verbrauchter Freibetrag bei Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent
   */
  this.VFRBS1 = new BigDecimal(0)

  /**
   * Verbrauchter Freibetrag bei Berechnung der sonstigen Bezüge, in Cent
   */
  this.VFRBS2 = new BigDecimal(0)

  /**
   * Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über
   * dem Grundfreibetrag bei der Berechnung des laufenden Arbeitslohns, in Cent
   */
  this.WVFRB = new BigDecimal(0)

  /**
   * Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über dem Grundfreibetrag
   * bei der Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent
   */
  this.WVFRBO = new BigDecimal(0)

  /**
   * Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE
   * über dem Grundfreibetrag bei der Berechnung der sonstigen Bezüge, in Cent
   */
  this.WVFRBM = new BigDecimal(0)

  /* Internal variables */

  /**
   * Altersentlastungsbetrag nach Alterseinkünftegesetz in €,
   * Cent (2 Dezimalstellen)
   */
  this.ALTE = new BigDecimal(0)

  /**
   * Arbeitnehmer-Pauschbetrag in EURO
   */
  this.ANP = new BigDecimal(0)

  /**
   * Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
   * auf ganze Cents abgerundet
   */
  this.ANTEIL1 = new BigDecimal(0)

  /**
   * Bemessungsgrundlage für Altersentlastungsbetrag in €, Cent
   * (2 Dezimalstellen)
   */
  this.BMG = new BigDecimal(0)

  /**
   * Beitragsbemessungsgrenze in der gesetzlichen Krankenversicherung
   * und der sozialen Pflegeversicherung in Euro
   */
  this.BBGKVPV = new BigDecimal(0)

  /**
   * Nach Programmablaufplan 2019
   */
  this.bd = new BigDecimal(0)

  /**
   * allgemeine Beitragsbemessungsgrenze in der allgemeinen Renten-versicherung in Euro
   */
  this.BBGRV = new BigDecimal(0)

  /**
   * Differenz zwischen ST1 und ST2 in EURO
   */
  this.DIFF = new BigDecimal(0)

  /**
   * Entlastungsbetrag fuer Alleinerziehende in EURO
   */
  this.EFA = new BigDecimal(0)

  /**
   * Versorgungsfreibetrag in €, Cent (2 Dezimalstellen)
   */
  this.FVB = new BigDecimal(0)

  /**
   * Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) für die Berechnung
   * der Lohnsteuer für den sonstigen Bezug
   */
  this.FVBSO = new BigDecimal(0)

  /**
   * Zuschlag zum Versorgungsfreibetrag in EURO
   */
  this.FVBZ = new BigDecimal(0)

  /**
   * Zuschlag zum Versorgungsfreibetrag in EURO fuer die Berechnung
   * der Lohnsteuer beim sonstigen Bezug
   */
  this.FVBZSO = new BigDecimal(0)

  /**
   * Grundfreibetrag in Euro
   */
  this.GFB = new BigDecimal(0)

  /**
   * Maximaler Altersentlastungsbetrag in €
   */
  this.HBALTE = new BigDecimal(0)

  /**
   * Massgeblicher maximaler Versorgungsfreibetrag in €
   */
  this.HFVB = new BigDecimal(0)

  /**
   * Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €,Cent
   * (2 Dezimalstellen)
   */
  this.HFVBZ = new BigDecimal(0)

  /**
   * Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €, Cent
   * (2 Dezimalstellen) für die Berechnung der Lohnsteuer für den
   * sonstigen Bezug
   */
  this.HFVBZSO = new BigDecimal(0)

  /**
   * Nummer der Tabellenwerte fuer Versorgungsparameter
   */
  this.J = 0

  /**
   * Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
   * Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO
   */
  this.JBMG = new BigDecimal(0)

  /**
   * Auf einen Jahreslohn hochgerechneter LZZFREIB in €, Cent
   * (2 Dezimalstellen)
   */
  this.JLFREIB = new BigDecimal(0)

  /**
   * Auf einen Jahreslohn hochgerechnete LZZHINZU in €, Cent
   * (2 Dezimalstellen)
   */
  this.JLHINZU = new BigDecimal(0)

  /**
   * Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
   * UPANTEIL errechnet werden soll in Cents
   */
  this.JW = new BigDecimal(0)

  /**
   * Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag
   */
  this.K = 0

  /**
   * Merker für Berechnung Lohnsteuer für mehrjährige Tätigkeit.
   * 0 = normale Steuerberechnung
   * 1 = Steuerberechnung für mehrjährige Tätigkeit
   * 2 = entfällt
   */
  this.KENNVMT = 0

  /**
   * Summe der Freibetraege fuer Kinder in EURO
   */
  this.KFB = new BigDecimal(0)

  /**
   * Beitragssatz des Arbeitgebers zur Krankenversicherung
   */
  this.KVSATZAG = new BigDecimal(0)

  /**
   * Beitragssatz des Arbeitnehmers zur Krankenversicherung
   */
  this.KVSATZAN = new BigDecimal(0)

  /**
   * Kennzahl fuer die Einkommensteuer-Tabellenart:
   * 1 = Grundtabelle
   * 2 = Splittingtabelle
   */
  this.KZTAB = 0

  /**
   * Jahreslohnsteuer in EURO
   */
  this.LSTJAHR = new BigDecimal(0)

  /**
   * Zwischenfelder der Jahreslohnsteuer in Cent
   */
  this.LST1 = new BigDecimal(0)
  this.LST2 = new BigDecimal(0)
  this.LST3 = new BigDecimal(0)
  this.LSTOSO = new BigDecimal(0)
  this.LSTSO = new BigDecimal(0)

  /**
   * Mindeststeuer fuer die Steuerklassen V und VI in EURO
   */
  this.MIST = new BigDecimal(0)

  /**
   * Beitragssatz des Arbeitgebers zur Pflegeversicherung
   */
  this.PVSATZAG = new BigDecimal(0)

  /**
   * Beitragssatz des Arbeitnehmers zur Pflegeversicherung
   */
  this.PVSATZAN = new BigDecimal(0)

  /**
   * Beitragssatz des Arbeitnehmers in der allgemeinen gesetzlichen Rentenversicherung (4 Dezimalstellen)
   */
  this.RVSATZAN = new BigDecimal(0)

  /**
   * Rechenwert in Gleitkommadarstellung
   */
  this.RW = new BigDecimal(0)

  /**
   * Sonderausgaben-Pauschbetrag in EURO
   */
  this.SAP = new BigDecimal(0)

  /**
   * Freigrenze fuer den Solidaritaetszuschlag in EURO
   */
  this.SOLZFREI = new BigDecimal(0)

  /**
   * Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen)
   */
  this.SOLZJ = new BigDecimal(0)

  /**
   * Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
   * in EURO, C (2 Dezimalstellen)
   */
  this.SOLZMIN = new BigDecimal(0)

  /**
   * Neu ab 2021: Bemessungsgrundlage des Solidaritätszuschlags zur Prüfung der Freigrenze beim Solidaritätszuschlag für sonstige Bezüge (ohne Vergütung für mehrjährige Tätigkeit) in Euro
   */
  this.SOLZSBMG = new BigDecimal(0)

  /**
   * Neu ab 2021: Zu versteuerndes Einkommen für die Ermittlung der Bemessungsgrundlage des Solidaritätszuschlags zur Prüfung der Freigrenze beim Solidaritätszuschlag für sonstige Bezüge (ohne Vergütung für mehrjährige Tätigkeit) in Euro, Cent (2 Dezimalstellen)
   */
  this.SOLZSZVE = new BigDecimal(0)

  /**
   * Neu ab 2021: Bemessungsgrundlage des Solidaritätszuschlags für die Prüfung der Freigrenze beim Solidaritätszuschlag für die Vergütung für mehrjährige Tätigkeit in Euro
   */
  this.SOLZVBMG = new BigDecimal(0)

  /**
   * Tarifliche Einkommensteuer in EURO
   */
  this.ST = new BigDecimal(0)

  /**
   * Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO
   */
  this.ST1 = new BigDecimal(0)

  /**
   * Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO
   */
  this.ST2 = new BigDecimal(0)

  /**
   * Zwischenfeld zur Ermittlung der Steuer auf Vergütungen für mehrjährige Tätigkeit
   */
  this.STOVMT = new BigDecimal(0)

  /**
   * Teilbetragssatz der Vorsorgepauschale für die Rentenversicherung (2 Dezimalstellen)
   */
  this.TBSVORV = new BigDecimal(0)

  /**
   * Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents
   */
  this.VBEZB = new BigDecimal(0)

  /**
   * Bemessungsgrundlage für den Versorgungsfreibetrag in Cent für
   * den sonstigen Bezug
   */
  this.VBEZBSO = new BigDecimal(0)

  /**
   * Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
   */
  this.VHB = new BigDecimal(0)

  /**
   * Vorsorgepauschale in EURO, C (2 Dezimalstellen)
   */
  this.VSP = new BigDecimal(0)

  /**
   * Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
   */
  this.VSPN = new BigDecimal(0)

  /**
   * Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
   * dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
   */
  this.VSP1 = new BigDecimal(0)

  /**
   * Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
   * dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
   */
  this.VSP2 = new BigDecimal(0)

  /**
   * Vorsorgepauschale mit Teilbeträgen für die gesetzliche Kranken- und
   * soziale Pflegeversicherung nach fiktiven Beträgen oder ggf. für die
   * private Basiskrankenversicherung und private Pflege-Pflichtversicherung
   * in Euro, Cent (2 Dezimalstellen)
   */
  this.VSP3 = new BigDecimal(0)

  /**
   * Erster Grenzwert in Steuerklasse V/VI in Euro
   */
  this.W1STKL5 = new BigDecimal(0)

  /**
   * Zweiter Grenzwert in Steuerklasse V/VI in Euro
   */
  this.W2STKL5 = new BigDecimal(0)

  /**
   * Dritter Grenzwert in Steuerklasse V/VI in Euro
   */
  this.W3STKL5 = new BigDecimal(0)

  /**
   * Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO
   */
  this.VSPMAX1 = new BigDecimal(0)

  /**
   * Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO
   */
  this.VSPMAX2 = new BigDecimal(0)

  /**
   * Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
   * in EURO, C (2 Dezimalstellen)
   */
  this.VSPO = new BigDecimal(0)

  /**
   * Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
   * Rest von VSPO in EURO, C (2 Dezimalstellen)
   */
  this.VSPREST = new BigDecimal(0)

  /**
   * Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
   * in EURO, C (2 Dezimalstellen)
   */
  this.VSPVOR = new BigDecimal(0)

  /**
   * Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG €, C
   * (2 Dezimalstellen)
   */
  this.X = new BigDecimal(0)

  /**
   * gem. § 32a Abs. 1 EStG (6 Dezimalstellen)
   */
  this.Y = new BigDecimal(0)

  /**
   * Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
   * nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4.
   */
  this.ZRE4 = new BigDecimal(0)

  /**
   * Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
   */
  this.ZRE4J = new BigDecimal(0)

  /**
   * Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
   * nach Abzug des Versorgungsfreibetrags und des Alterentlastungsbetrags
   * zur Berechnung der Vorsorgepauschale in €, Cent (2 Dezimalstellen)
   */
  this.ZRE4VP = new BigDecimal(0)

  /**
   * Feste Tabellenfreibeträge (ohne Vorsorgepauschale) in €, Cent
   * (2 Dezimalstellen)
   */
  this.ZTABFB = new BigDecimal(0)

  /**
   * Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
   * EURO, C (2 Dezimalstellen)
   */
  this.ZVBEZ = new BigDecimal(0)

  /**
   * Auf einen Jahreslohn hochgerechnetes VBEZ in €, C (2 Dezimalstellen)
   */
  this.ZVBEZJ = new BigDecimal(0)

  /**
   * Zu versteuerndes Einkommen in €, C (2 Dezimalstellen)
   */
  this.ZVE = new BigDecimal(0)

  /**
   * Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
   * Abs. 2 Satz 7 EStG in €
   */
  this.ZX = new BigDecimal(0)
  this.ZZX = new BigDecimal(0)
  this.HOCH = new BigDecimal(0)
  this.VERGL = new BigDecimal(0)

  /**
   * Jahreswert der berücksichtigten Beiträge zur privaten Basis-Krankenversicherung und
   * privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent.
   */
  this.VKV = new BigDecimal(0)
}

/* Constants */

/**
 * Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags
 */
Object.defineProperty(Lohnsteuer2021, 'TAB1', {
  value: [
    BigDecimal.valueOf(0.0),
    BigDecimal.valueOf(0.4),
    BigDecimal.valueOf(0.384),
    BigDecimal.valueOf(0.368),
    BigDecimal.valueOf(0.352),
    BigDecimal.valueOf(0.336),
    BigDecimal.valueOf(0.32),
    BigDecimal.valueOf(0.304),
    BigDecimal.valueOf(0.288),
    BigDecimal.valueOf(0.272),
    BigDecimal.valueOf(0.256),
    BigDecimal.valueOf(0.24),
    BigDecimal.valueOf(0.224),
    BigDecimal.valueOf(0.208),
    BigDecimal.valueOf(0.192),
    BigDecimal.valueOf(0.176),
    BigDecimal.valueOf(0.16),
    BigDecimal.valueOf(0.152),
    BigDecimal.valueOf(0.144),
    BigDecimal.valueOf(0.136),
    BigDecimal.valueOf(0.128),
    BigDecimal.valueOf(0.12),
    BigDecimal.valueOf(0.112),
    BigDecimal.valueOf(0.104),
    BigDecimal.valueOf(0.096),
    BigDecimal.valueOf(0.088),
    BigDecimal.valueOf(0.08),
    BigDecimal.valueOf(0.072),
    BigDecimal.valueOf(0.064),
    BigDecimal.valueOf(0.056),
    BigDecimal.valueOf(0.048),
    BigDecimal.valueOf(0.04),
    BigDecimal.valueOf(0.032),
    BigDecimal.valueOf(0.024),
    BigDecimal.valueOf(0.016),
    BigDecimal.valueOf(0.008),
    BigDecimal.valueOf(0.0),
  ],
})

/**
 * Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags
 */
Object.defineProperty(Lohnsteuer2021, 'TAB2', {
  value: [
    BigDecimal.valueOf(0),
    BigDecimal.valueOf(3000),
    BigDecimal.valueOf(2880),
    BigDecimal.valueOf(2760),
    BigDecimal.valueOf(2640),
    BigDecimal.valueOf(2520),
    BigDecimal.valueOf(2400),
    BigDecimal.valueOf(2280),
    BigDecimal.valueOf(2160),
    BigDecimal.valueOf(2040),
    BigDecimal.valueOf(1920),
    BigDecimal.valueOf(1800),
    BigDecimal.valueOf(1680),
    BigDecimal.valueOf(1560),
    BigDecimal.valueOf(1440),
    BigDecimal.valueOf(1320),
    BigDecimal.valueOf(1200),
    BigDecimal.valueOf(1140),
    BigDecimal.valueOf(1080),
    BigDecimal.valueOf(1020),
    BigDecimal.valueOf(960),
    BigDecimal.valueOf(900),
    BigDecimal.valueOf(840),
    BigDecimal.valueOf(780),
    BigDecimal.valueOf(720),
    BigDecimal.valueOf(660),
    BigDecimal.valueOf(600),
    BigDecimal.valueOf(540),
    BigDecimal.valueOf(480),
    BigDecimal.valueOf(420),
    BigDecimal.valueOf(360),
    BigDecimal.valueOf(300),
    BigDecimal.valueOf(240),
    BigDecimal.valueOf(180),
    BigDecimal.valueOf(120),
    BigDecimal.valueOf(60),
    BigDecimal.valueOf(0),
  ],
})

/**
 * Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag
 */
Object.defineProperty(Lohnsteuer2021, 'TAB3', {
  value: [
    BigDecimal.valueOf(0),
    BigDecimal.valueOf(900),
    BigDecimal.valueOf(864),
    BigDecimal.valueOf(828),
    BigDecimal.valueOf(792),
    BigDecimal.valueOf(756),
    BigDecimal.valueOf(720),
    BigDecimal.valueOf(684),
    BigDecimal.valueOf(648),
    BigDecimal.valueOf(612),
    BigDecimal.valueOf(576),
    BigDecimal.valueOf(540),
    BigDecimal.valueOf(504),
    BigDecimal.valueOf(468),
    BigDecimal.valueOf(432),
    BigDecimal.valueOf(396),
    BigDecimal.valueOf(360),
    BigDecimal.valueOf(342),
    BigDecimal.valueOf(324),
    BigDecimal.valueOf(306),
    BigDecimal.valueOf(288),
    BigDecimal.valueOf(270),
    BigDecimal.valueOf(252),
    BigDecimal.valueOf(234),
    BigDecimal.valueOf(216),
    BigDecimal.valueOf(198),
    BigDecimal.valueOf(180),
    BigDecimal.valueOf(162),
    BigDecimal.valueOf(144),
    BigDecimal.valueOf(126),
    BigDecimal.valueOf(108),
    BigDecimal.valueOf(90),
    BigDecimal.valueOf(72),
    BigDecimal.valueOf(54),
    BigDecimal.valueOf(36),
    BigDecimal.valueOf(18),
    BigDecimal.valueOf(0),
  ],
})

/**
 * Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags
 */
Object.defineProperty(Lohnsteuer2021, 'TAB4', {
  value: [
    BigDecimal.valueOf(0.0),
    BigDecimal.valueOf(0.4),
    BigDecimal.valueOf(0.384),
    BigDecimal.valueOf(0.368),
    BigDecimal.valueOf(0.352),
    BigDecimal.valueOf(0.336),
    BigDecimal.valueOf(0.32),
    BigDecimal.valueOf(0.304),
    BigDecimal.valueOf(0.288),
    BigDecimal.valueOf(0.272),
    BigDecimal.valueOf(0.256),
    BigDecimal.valueOf(0.24),
    BigDecimal.valueOf(0.224),
    BigDecimal.valueOf(0.208),
    BigDecimal.valueOf(0.192),
    BigDecimal.valueOf(0.176),
    BigDecimal.valueOf(0.16),
    BigDecimal.valueOf(0.152),
    BigDecimal.valueOf(0.144),
    BigDecimal.valueOf(0.136),
    BigDecimal.valueOf(0.128),
    BigDecimal.valueOf(0.12),
    BigDecimal.valueOf(0.112),
    BigDecimal.valueOf(0.104),
    BigDecimal.valueOf(0.096),
    BigDecimal.valueOf(0.088),
    BigDecimal.valueOf(0.08),
    BigDecimal.valueOf(0.072),
    BigDecimal.valueOf(0.064),
    BigDecimal.valueOf(0.056),
    BigDecimal.valueOf(0.048),
    BigDecimal.valueOf(0.04),
    BigDecimal.valueOf(0.032),
    BigDecimal.valueOf(0.024),
    BigDecimal.valueOf(0.016),
    BigDecimal.valueOf(0.008),
    BigDecimal.valueOf(0.0),
  ],
})

/**
 * Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags
 */
Object.defineProperty(Lohnsteuer2021, 'TAB5', {
  value: [
    BigDecimal.valueOf(0),
    BigDecimal.valueOf(1900),
    BigDecimal.valueOf(1824),
    BigDecimal.valueOf(1748),
    BigDecimal.valueOf(1672),
    BigDecimal.valueOf(1596),
    BigDecimal.valueOf(1520),
    BigDecimal.valueOf(1444),
    BigDecimal.valueOf(1368),
    BigDecimal.valueOf(1292),
    BigDecimal.valueOf(1216),
    BigDecimal.valueOf(1140),
    BigDecimal.valueOf(1064),
    BigDecimal.valueOf(988),
    BigDecimal.valueOf(912),
    BigDecimal.valueOf(836),
    BigDecimal.valueOf(760),
    BigDecimal.valueOf(722),
    BigDecimal.valueOf(684),
    BigDecimal.valueOf(646),
    BigDecimal.valueOf(608),
    BigDecimal.valueOf(570),
    BigDecimal.valueOf(532),
    BigDecimal.valueOf(494),
    BigDecimal.valueOf(456),
    BigDecimal.valueOf(418),
    BigDecimal.valueOf(380),
    BigDecimal.valueOf(342),
    BigDecimal.valueOf(304),
    BigDecimal.valueOf(266),
    BigDecimal.valueOf(228),
    BigDecimal.valueOf(190),
    BigDecimal.valueOf(152),
    BigDecimal.valueOf(114),
    BigDecimal.valueOf(76),
    BigDecimal.valueOf(38),
    BigDecimal.valueOf(0),
  ],
})

/**
 * Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte
 */
Object.defineProperty(Lohnsteuer2021, 'ZAHL1', { value: BigDecimal.ONE() })
Object.defineProperty(Lohnsteuer2021, 'ZAHL2', { value: new BigDecimal(2) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL5', { value: new BigDecimal(5) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL7', { value: new BigDecimal(7) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL12', { value: new BigDecimal(12) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL100', { value: new BigDecimal(100) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL360', { value: new BigDecimal(360) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL500', { value: new BigDecimal(500) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL700', { value: new BigDecimal(700) })
Object.defineProperty(Lohnsteuer2021, 'ZAHL1000', {
  value: new BigDecimal(1000),
})
Object.defineProperty(Lohnsteuer2021, 'ZAHL10000', {
  value: new BigDecimal(10000),
})

Lohnsteuer2021.prototype.setAf = function (value) {
  this.af = value
}

Lohnsteuer2021.prototype.setAjahr = function (value) {
  this.AJAHR = value
}

Lohnsteuer2021.prototype.setAlter1 = function (value) {
  this.ALTER1 = value
}

Lohnsteuer2021.prototype.setEntsch = function (value) {
  this.ENTSCH = value
}

Lohnsteuer2021.prototype.setF = function (value) {
  this.f = value
}

Lohnsteuer2021.prototype.setJfreib = function (value) {
  this.JFREIB = value
}

Lohnsteuer2021.prototype.setJhinzu = function (value) {
  this.JHINZU = value
}

Lohnsteuer2021.prototype.setJre4 = function (value) {
  this.JRE4 = value
}

Lohnsteuer2021.prototype.setJvbez = function (value) {
  this.JVBEZ = value
}

Lohnsteuer2021.prototype.setKrv = function (value) {
  this.KRV = value
}

Lohnsteuer2021.prototype.setKvz = function (value) {
  this.KVZ = value
}

Lohnsteuer2021.prototype.setLzz = function (value) {
  this.LZZ = value
}

Lohnsteuer2021.prototype.setLzzfreib = function (value) {
  this.LZZFREIB = value
}

Lohnsteuer2021.prototype.setLzzhinzu = function (value) {
  this.LZZHINZU = value
}

Lohnsteuer2021.prototype.setPkpv = function (value) {
  this.PKPV = value
}

Lohnsteuer2021.prototype.setPkv = function (value) {
  this.PKV = value
}

Lohnsteuer2021.prototype.setPvs = function (value) {
  this.PVS = value
}

Lohnsteuer2021.prototype.setPvz = function (value) {
  this.PVZ = value
}

Lohnsteuer2021.prototype.setR = function (value) {
  this.R = value
}

Lohnsteuer2021.prototype.setRe4 = function (value) {
  this.RE4 = value
}

Lohnsteuer2021.prototype.setSonstb = function (value) {
  this.SONSTB = value
}

Lohnsteuer2021.prototype.setSterbe = function (value) {
  this.STERBE = value
}

Lohnsteuer2021.prototype.setStkl = function (value) {
  this.STKL = value
}

Lohnsteuer2021.prototype.setVbez = function (value) {
  this.VBEZ = value
}

Lohnsteuer2021.prototype.setVbezm = function (value) {
  this.VBEZM = value
}

Lohnsteuer2021.prototype.setVbezs = function (value) {
  this.VBEZS = value
}

Lohnsteuer2021.prototype.setVbs = function (value) {
  this.VBS = value
}

Lohnsteuer2021.prototype.setVjahr = function (value) {
  this.VJAHR = value
}

Lohnsteuer2021.prototype.setVkapa = function (value) {
  this.VKAPA = value
}

Lohnsteuer2021.prototype.setVmt = function (value) {
  this.VMT = value
}

Lohnsteuer2021.prototype.setZkf = function (value) {
  this.ZKF = value
}

Lohnsteuer2021.prototype.setZmvb = function (value) {
  this.ZMVB = value
}

Lohnsteuer2021.prototype.setJre4ent = function (value) {
  this.JRE4ENT = value
}

Lohnsteuer2021.prototype.setSonstent = function (value) {
  this.SONSTENT = value
}

Lohnsteuer2021.prototype.getBk = function () {
  return this.BK
}

Lohnsteuer2021.prototype.getBks = function () {
  return this.BKS
}

Lohnsteuer2021.prototype.getBkv = function () {
  return this.BKV
}

Lohnsteuer2021.prototype.getLstlzz = function () {
  return this.LSTLZZ
}

Lohnsteuer2021.prototype.getSolzlzz = function () {
  return this.SOLZLZZ
}

Lohnsteuer2021.prototype.getSolzs = function () {
  return this.SOLZS
}

Lohnsteuer2021.prototype.getSolzv = function () {
  return this.SOLZV
}

Lohnsteuer2021.prototype.getSts = function () {
  return this.STS
}

Lohnsteuer2021.prototype.getStv = function () {
  return this.STV
}

Lohnsteuer2021.prototype.getVkvlzz = function () {
  return this.VKVLZZ
}

Lohnsteuer2021.prototype.getVkvsonst = function () {
  return this.VKVSONST
}

Lohnsteuer2021.prototype.getVfrb = function () {
  return this.VFRB
}

Lohnsteuer2021.prototype.getVfrbs1 = function () {
  return this.VFRBS1
}

Lohnsteuer2021.prototype.getVfrbs2 = function () {
  return this.VFRBS2
}

Lohnsteuer2021.prototype.getWvfrb = function () {
  return this.WVFRB
}

Lohnsteuer2021.prototype.getWvfrbo = function () {
  return this.WVFRBO
}

Lohnsteuer2021.prototype.getWvfrbm = function () {
  return this.WVFRBM
}

/**
 * PROGRAMMABLAUFPLAN, PAP Seite 14
 */
Lohnsteuer2021.prototype.MAIN = function () {
  this.MPARA()
  this.MRE4JL()
  this.VBEZBSO = BigDecimal.ZERO()
  this.KENNVMT = 0
  this.MRE4()
  this.MRE4ABZ()
  this.MBERECH()
  this.MSONST()
  this.MVMT()
}

/**
 * Zuweisung von Werten für bestimmte Sozialversicherungsparameter  PAP Seite 15
 */
Lohnsteuer2021.prototype.MPARA = function () {
  if (this.KRV < 2) {
    if (this.KRV == 0) {
      this.BBGRV = new BigDecimal(85200)
    } else {
      this.BBGRV = new BigDecimal(80400)
    }
    this.RVSATZAN = BigDecimal.valueOf(0.093)
    this.TBSVORV = BigDecimal.valueOf(0.84)
  }
  this.BBGKVPV = new BigDecimal(58050)
  this.bd = new BigDecimal(2)
  this.KVSATZAN = this.KVZ.divide(this.bd)
    .divide(Lohnsteuer2021.ZAHL100)
    .add(BigDecimal.valueOf(0.07))
  this.KVSATZAG = BigDecimal.valueOf(0.0065 + 0.07)
  if (this.PVS == 1) {
    this.PVSATZAN = BigDecimal.valueOf(0.02025)
    this.PVSATZAG = BigDecimal.valueOf(0.01025)
  } else {
    this.PVSATZAN = BigDecimal.valueOf(0.01525)
    this.PVSATZAG = BigDecimal.valueOf(0.01525)
  }
  if (this.PVZ == 1) {
    this.PVSATZAN = this.PVSATZAN.add(BigDecimal.valueOf(0.0025))
  }
  this.W1STKL5 = new BigDecimal(11237)
  this.W2STKL5 = new BigDecimal(28959)
  this.W3STKL5 = new BigDecimal(219690)
  this.GFB = new BigDecimal(9744)
  this.SOLZFREI = new BigDecimal(16956)
}

/**
 * Ermittlung des Jahresarbeitslohns nach § 39 b Abs. 2 Satz 2 EStG, PAP Seite 16
 */
Lohnsteuer2021.prototype.MRE4JL = function () {
  if (this.LZZ == 1) {
    this.ZRE4J = this.RE4.divide(
      Lohnsteuer2021.ZAHL100,
      2,
      BigDecimal.ROUND_DOWN,
    )
    this.ZVBEZJ = this.VBEZ.divide(
      Lohnsteuer2021.ZAHL100,
      2,
      BigDecimal.ROUND_DOWN,
    )
    this.JLFREIB = this.LZZFREIB.divide(
      Lohnsteuer2021.ZAHL100,
      2,
      BigDecimal.ROUND_DOWN,
    )
    this.JLHINZU = this.LZZHINZU.divide(
      Lohnsteuer2021.ZAHL100,
      2,
      BigDecimal.ROUND_DOWN,
    )
  } else {
    if (this.LZZ == 2) {
      this.ZRE4J = this.RE4.multiply(Lohnsteuer2021.ZAHL12).divide(
        Lohnsteuer2021.ZAHL100,
        2,
        BigDecimal.ROUND_DOWN,
      )
      this.ZVBEZJ = this.VBEZ.multiply(Lohnsteuer2021.ZAHL12).divide(
        Lohnsteuer2021.ZAHL100,
        2,
        BigDecimal.ROUND_DOWN,
      )
      this.JLFREIB = this.LZZFREIB.multiply(Lohnsteuer2021.ZAHL12).divide(
        Lohnsteuer2021.ZAHL100,
        2,
        BigDecimal.ROUND_DOWN,
      )
      this.JLHINZU = this.LZZHINZU.multiply(Lohnsteuer2021.ZAHL12).divide(
        Lohnsteuer2021.ZAHL100,
        2,
        BigDecimal.ROUND_DOWN,
      )
    } else {
      if (this.LZZ == 3) {
        this.ZRE4J = this.RE4.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL700,
          2,
          BigDecimal.ROUND_DOWN,
        )
        this.ZVBEZJ = this.VBEZ.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL700,
          2,
          BigDecimal.ROUND_DOWN,
        )
        this.JLFREIB = this.LZZFREIB.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL700,
          2,
          BigDecimal.ROUND_DOWN,
        )
        this.JLHINZU = this.LZZHINZU.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL700,
          2,
          BigDecimal.ROUND_DOWN,
        )
      } else {
        this.ZRE4J = this.RE4.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL100,
          2,
          BigDecimal.ROUND_DOWN,
        )
        this.ZVBEZJ = this.VBEZ.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL100,
          2,
          BigDecimal.ROUND_DOWN,
        )
        this.JLFREIB = this.LZZFREIB.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL100,
          2,
          BigDecimal.ROUND_DOWN,
        )
        this.JLHINZU = this.LZZHINZU.multiply(Lohnsteuer2021.ZAHL360).divide(
          Lohnsteuer2021.ZAHL100,
          2,
          BigDecimal.ROUND_DOWN,
        )
      }
    }
  }
  if (this.af == 0) {
    this.f = 1
  }
}

/**
 * Freibeträge für Versorgungsbezüge, Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 17
 */
Lohnsteuer2021.prototype.MRE4 = function () {
  if (this.ZVBEZJ.compareTo(BigDecimal.ZERO()) == 0) {
    this.FVBZ = BigDecimal.ZERO()
    this.FVB = BigDecimal.ZERO()
    this.FVBZSO = BigDecimal.ZERO()
    this.FVBSO = BigDecimal.ZERO()
  } else {
    if (this.VJAHR < 2006) {
      this.J = 1
    } else {
      if (this.VJAHR < 2040) {
        this.J = this.VJAHR - 2004
      } else {
        this.J = 36
      }
    }
    if (this.LZZ == 1) {
      this.VBEZB = this.VBEZM.multiply(BigDecimal.valueOf(this.ZMVB)).add(
        this.VBEZS,
      )
      this.HFVB = Lohnsteuer2021.TAB2[this.J]
        .divide(Lohnsteuer2021.ZAHL12)
        .multiply(BigDecimal.valueOf(this.ZMVB))
      this.FVBZ = Lohnsteuer2021.TAB3[this.J]
        .divide(Lohnsteuer2021.ZAHL12)
        .multiply(BigDecimal.valueOf(this.ZMVB))
        .setScale(0, BigDecimal.ROUND_UP)
    } else {
      this.VBEZB = this.VBEZM.multiply(Lohnsteuer2021.ZAHL12)
        .add(this.VBEZS)
        .setScale(2, BigDecimal.ROUND_DOWN)
      this.HFVB = Lohnsteuer2021.TAB2[this.J]
      this.FVBZ = Lohnsteuer2021.TAB3[this.J]
    }
    this.FVB = this.VBEZB.multiply(Lohnsteuer2021.TAB1[this.J])
      .divide(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_UP)
    if (this.FVB.compareTo(this.HFVB) == 1) {
      this.FVB = this.HFVB
    }
    if (this.FVB.compareTo(this.ZVBEZJ) == 1) {
      this.FVB = this.ZVBEZJ
    }
    this.FVBSO = this.FVB.add(
      this.VBEZBSO.multiply(Lohnsteuer2021.TAB1[this.J]).divide(
        Lohnsteuer2021.ZAHL100,
      ),
    ).setScale(2, BigDecimal.ROUND_UP)
    if (this.FVBSO.compareTo(Lohnsteuer2021.TAB2[this.J]) == 1) {
      this.FVBSO = Lohnsteuer2021.TAB2[this.J]
    }
    this.HFVBZSO = this.VBEZB.add(this.VBEZBSO)
      .divide(Lohnsteuer2021.ZAHL100)
      .subtract(this.FVBSO)
      .setScale(2, BigDecimal.ROUND_DOWN)
    this.FVBZSO = this.FVBZ.add(
      this.VBEZBSO.divide(Lohnsteuer2021.ZAHL100),
    ).setScale(0, BigDecimal.ROUND_UP)
    if (this.FVBZSO.compareTo(this.HFVBZSO) == 1) {
      this.FVBZSO = this.HFVBZSO.setScale(0, BigDecimal.ROUND_UP)
    }
    if (this.FVBZSO.compareTo(Lohnsteuer2021.TAB3[this.J]) == 1) {
      this.FVBZSO = Lohnsteuer2021.TAB3[this.J]
    }
    this.HFVBZ = this.VBEZB.divide(Lohnsteuer2021.ZAHL100)
      .subtract(this.FVB)
      .setScale(2, BigDecimal.ROUND_DOWN)
    if (this.FVBZ.compareTo(this.HFVBZ) == 1) {
      this.FVBZ = this.HFVBZ.setScale(0, BigDecimal.ROUND_UP)
    }
  }
  this.MRE4ALTE()
}

/**
 * Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 18
 */
Lohnsteuer2021.prototype.MRE4ALTE = function () {
  if (this.ALTER1 == 0) {
    this.ALTE = BigDecimal.ZERO()
  } else {
    if (this.AJAHR < 2006) {
      this.K = 1
    } else {
      if (this.AJAHR < 2040) {
        this.K = this.AJAHR - 2004
      } else {
        this.K = 36
      }
    }
    this.BMG = this.ZRE4J.subtract(this.ZVBEZJ)
    this.ALTE = this.BMG.multiply(Lohnsteuer2021.TAB4[this.K]).setScale(
      0,
      BigDecimal.ROUND_UP,
    )
    this.HBALTE = Lohnsteuer2021.TAB5[this.K]
    if (this.ALTE.compareTo(this.HBALTE) == 1) {
      this.ALTE = this.HBALTE
    }
  }
}

/**
 * Ermittlung des Jahresarbeitslohns nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4 EStG, PAP Seite 20
 */
Lohnsteuer2021.prototype.MRE4ABZ = function () {
  this.ZRE4 = this.ZRE4J.subtract(this.FVB)
    .subtract(this.ALTE)
    .subtract(this.JLFREIB)
    .add(this.JLHINZU)
    .setScale(2, BigDecimal.ROUND_DOWN)
  if (this.ZRE4.compareTo(BigDecimal.ZERO()) == -1) {
    this.ZRE4 = BigDecimal.ZERO()
  }
  this.ZRE4VP = this.ZRE4J
  if (this.KENNVMT == 2) {
    this.ZRE4VP = this.ZRE4VP.subtract(
      this.ENTSCH.divide(Lohnsteuer2021.ZAHL100),
    ).setScale(2, BigDecimal.ROUND_DOWN)
  }
  this.ZVBEZ = this.ZVBEZJ.subtract(this.FVB).setScale(2, BigDecimal.ROUND_DOWN)
  if (this.ZVBEZ.compareTo(BigDecimal.ZERO()) == -1) {
    this.ZVBEZ = BigDecimal.ZERO()
  }
}

/**
 * Berechnung fuer laufende Lohnzahlungszeitraueme Seite 21
 */
Lohnsteuer2021.prototype.MBERECH = function () {
  this.MZTABFB()
  this.VFRB = this.ANP.add(this.FVB.add(this.FVBZ))
    .multiply(Lohnsteuer2021.ZAHL100)
    .setScale(0, BigDecimal.ROUND_DOWN)
  this.MLSTJAHR()
  this.WVFRB = this.ZVE.subtract(this.GFB)
    .multiply(Lohnsteuer2021.ZAHL100)
    .setScale(0, BigDecimal.ROUND_DOWN)
  if (this.WVFRB.compareTo(BigDecimal.ZERO()) == -1) {
    this.WVFRB = BigDecimal.valueOf(0)
  }
  this.LSTJAHR = this.ST.multiply(BigDecimal.valueOf(this.f)).setScale(
    0,
    BigDecimal.ROUND_DOWN,
  )
  this.UPLSTLZZ()
  this.UPVKVLZZ()
  if (this.ZKF.compareTo(BigDecimal.ZERO()) == 1) {
    this.ZTABFB = this.ZTABFB.add(this.KFB)
    this.MRE4ABZ()
    this.MLSTJAHR()
    this.JBMG = this.ST.multiply(BigDecimal.valueOf(this.f)).setScale(
      0,
      BigDecimal.ROUND_DOWN,
    )
  } else {
    this.JBMG = this.LSTJAHR
  }
  this.MSOLZ()
}

/**
 * Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 22
 */
Lohnsteuer2021.prototype.MZTABFB = function () {
  this.ANP = BigDecimal.ZERO()
  if (
    this.ZVBEZ.compareTo(BigDecimal.ZERO()) >= 0 &&
    this.ZVBEZ.compareTo(this.FVBZ) == -1
  ) {
    this.FVBZ = BigDecimal.valueOf(this.ZVBEZ.longValue())
  }
  if (this.STKL < 6) {
    if (this.ZVBEZ.compareTo(BigDecimal.ZERO()) == 1) {
      if (
        this.ZVBEZ.subtract(this.FVBZ).compareTo(BigDecimal.valueOf(102)) == -1
      ) {
        this.ANP = this.ZVBEZ.subtract(this.FVBZ).setScale(
          0,
          BigDecimal.ROUND_UP,
        )
      } else {
        this.ANP = BigDecimal.valueOf(102)
      }
    }
  } else {
    this.FVBZ = BigDecimal.valueOf(0)
    this.FVBZSO = BigDecimal.valueOf(0)
  }
  if (this.STKL < 6) {
    if (this.ZRE4.compareTo(this.ZVBEZ) == 1) {
      if (
        this.ZRE4.subtract(this.ZVBEZ).compareTo(Lohnsteuer2021.ZAHL1000) == -1
      ) {
        this.ANP = this.ANP.add(this.ZRE4)
          .subtract(this.ZVBEZ)
          .setScale(0, BigDecimal.ROUND_UP)
      } else {
        this.ANP = this.ANP.add(Lohnsteuer2021.ZAHL1000)
      }
    }
  }
  this.KZTAB = 1
  if (this.STKL == 1) {
    this.SAP = BigDecimal.valueOf(36)
    this.KFB = this.ZKF.multiply(BigDecimal.valueOf(8388)).setScale(
      0,
      BigDecimal.ROUND_DOWN,
    )
  } else {
    if (this.STKL == 2) {
      this.EFA = BigDecimal.valueOf(1908)
      this.SAP = BigDecimal.valueOf(36)
      this.KFB = this.ZKF.multiply(BigDecimal.valueOf(8388)).setScale(
        0,
        BigDecimal.ROUND_DOWN,
      )
    } else {
      if (this.STKL == 3) {
        this.KZTAB = 2
        this.SAP = BigDecimal.valueOf(36)
        this.KFB = this.ZKF.multiply(BigDecimal.valueOf(8388)).setScale(
          0,
          BigDecimal.ROUND_DOWN,
        )
      } else {
        if (this.STKL == 4) {
          this.SAP = BigDecimal.valueOf(36)
          this.KFB = this.ZKF.multiply(BigDecimal.valueOf(4194)).setScale(
            0,
            BigDecimal.ROUND_DOWN,
          )
        } else {
          if (this.STKL == 5) {
            this.SAP = BigDecimal.valueOf(36)
            this.KFB = BigDecimal.ZERO()
          } else {
            this.KFB = BigDecimal.ZERO()
          }
        }
      }
    }
  }
  this.ZTABFB = this.EFA.add(this.ANP)
    .add(this.SAP)
    .add(this.FVBZ)
    .setScale(2, BigDecimal.ROUND_DOWN)
}

/**
 * Ermittlung Jahreslohnsteuer, PAP Seite 23
 */
Lohnsteuer2021.prototype.MLSTJAHR = function () {
  this.UPEVP()
  if (this.KENNVMT != 1) {
    this.ZVE = this.ZRE4.subtract(this.ZTABFB)
      .subtract(this.VSP)
      .setScale(2, BigDecimal.ROUND_DOWN)
    this.UPMLST()
  } else {
    this.ZVE = this.ZRE4.subtract(this.ZTABFB)
      .subtract(this.VSP)
      .subtract(this.VMT.divide(Lohnsteuer2021.ZAHL100))
      .subtract(this.VKAPA.divide(Lohnsteuer2021.ZAHL100))
      .setScale(2, BigDecimal.ROUND_DOWN)
    if (this.ZVE.compareTo(BigDecimal.ZERO()) == -1) {
      this.ZVE = this.ZVE.add(this.VMT.divide(Lohnsteuer2021.ZAHL100))
        .add(this.VKAPA.divide(Lohnsteuer2021.ZAHL100))
        .divide(Lohnsteuer2021.ZAHL5)
        .setScale(2, BigDecimal.ROUND_DOWN)
      this.UPMLST()
      this.ST = this.ST.multiply(Lohnsteuer2021.ZAHL5).setScale(
        0,
        BigDecimal.ROUND_DOWN,
      )
    } else {
      this.UPMLST()
      this.STOVMT = this.ST
      this.ZVE = this.ZVE.add(
        this.VMT.add(this.VKAPA).divide(Lohnsteuer2021.ZAHL500),
      ).setScale(2, BigDecimal.ROUND_DOWN)
      this.UPMLST()
      this.ST = this.ST.subtract(this.STOVMT)
        .multiply(Lohnsteuer2021.ZAHL5)
        .add(this.STOVMT)
        .setScale(0, BigDecimal.ROUND_DOWN)
    }
  }
}

/**
 * PAP Seite 24
 */
Lohnsteuer2021.prototype.UPVKVLZZ = function () {
  this.UPVKV()
  this.JW = this.VKV
  this.UPANTEIL()
  this.VKVLZZ = this.ANTEIL1
}

/**
 * PAP Seite 24
 */
Lohnsteuer2021.prototype.UPVKV = function () {
  if (this.PKV > 0) {
    if (this.VSP2.compareTo(this.VSP3) == 1) {
      this.VKV = this.VSP2.multiply(Lohnsteuer2021.ZAHL100)
    } else {
      this.VKV = this.VSP3.multiply(Lohnsteuer2021.ZAHL100)
    }
  } else {
    this.VKV = BigDecimal.ZERO()
  }
}

/**
 * PAP Seite 25
 */
Lohnsteuer2021.prototype.UPLSTLZZ = function () {
  this.JW = this.LSTJAHR.multiply(Lohnsteuer2021.ZAHL100)
  this.UPANTEIL()
  this.LSTLZZ = this.ANTEIL1
}

/**
 * Ermittlung der Jahreslohnsteuer aus dem Einkommensteuertarif. PAP Seite 26
 */
Lohnsteuer2021.prototype.UPMLST = function () {
  if (this.ZVE.compareTo(Lohnsteuer2021.ZAHL1) == -1) {
    this.ZVE = BigDecimal.ZERO()
    this.X = BigDecimal.ZERO()
  } else {
    this.X = this.ZVE.divide(BigDecimal.valueOf(this.KZTAB)).setScale(
      0,
      BigDecimal.ROUND_DOWN,
    )
  }
  if (this.STKL < 5) {
    this.UPTAB21()
  } else {
    this.MST5_6()
  }
}

/**
 * Vorsorgepauschale (§ 39b Absatz 2 Satz 5 Nummer 3 und Absatz 4 EStG) PAP Seite 27
 */
Lohnsteuer2021.prototype.UPEVP = function () {
  if (this.KRV > 1) {
    this.VSP1 = BigDecimal.ZERO()
  } else {
    if (this.ZRE4VP.compareTo(this.BBGRV) == 1) {
      this.ZRE4VP = this.BBGRV
    }
    this.VSP1 = this.TBSVORV.multiply(this.ZRE4VP).setScale(
      2,
      BigDecimal.ROUND_DOWN,
    )
    this.VSP1 = this.VSP1.multiply(this.RVSATZAN).setScale(
      2,
      BigDecimal.ROUND_DOWN,
    )
  }
  this.VSP2 = this.ZRE4VP.multiply(BigDecimal.valueOf(0.12)).setScale(
    2,
    BigDecimal.ROUND_DOWN,
  )
  if (this.STKL == 3) {
    this.VHB = BigDecimal.valueOf(3000)
  } else {
    this.VHB = BigDecimal.valueOf(1900)
  }
  if (this.VSP2.compareTo(this.VHB) == 1) {
    this.VSP2 = this.VHB
  }
  this.VSPN = this.VSP1.add(this.VSP2).setScale(0, BigDecimal.ROUND_UP)
  this.MVSP()
  if (this.VSPN.compareTo(this.VSP) == 1) {
    this.VSP = this.VSPN.setScale(2, BigDecimal.ROUND_DOWN)
  }
}

/**
 * Vorsorgepauschale (§39b Abs. 2 Satz 5 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 28
 */
Lohnsteuer2021.prototype.MVSP = function () {
  if (this.ZRE4VP.compareTo(this.BBGKVPV) == 1) {
    this.ZRE4VP = this.BBGKVPV
  }
  if (this.PKV > 0) {
    if (this.STKL == 6) {
      this.VSP3 = BigDecimal.ZERO()
    } else {
      this.VSP3 = this.PKPV.multiply(Lohnsteuer2021.ZAHL12).divide(
        Lohnsteuer2021.ZAHL100,
      )
      if (this.PKV == 2) {
        this.VSP3 = this.VSP3.subtract(
          this.ZRE4VP.multiply(this.KVSATZAG.add(this.PVSATZAG)),
        ).setScale(2, BigDecimal.ROUND_DOWN)
      }
    }
  } else {
    this.VSP3 = this.ZRE4VP.multiply(this.KVSATZAN.add(this.PVSATZAN)).setScale(
      2,
      BigDecimal.ROUND_DOWN,
    )
  }
  this.VSP = this.VSP3.add(this.VSP1).setScale(0, BigDecimal.ROUND_UP)
}

/**
 * Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 29
 */
Lohnsteuer2021.prototype.MST5_6 = function () {
  this.ZZX = this.X
  if (this.ZZX.compareTo(this.W2STKL5) == 1) {
    this.ZX = this.W2STKL5
    this.UP5_6()
    if (this.ZZX.compareTo(this.W3STKL5) == 1) {
      this.ST = this.ST.add(
        this.W3STKL5.subtract(this.W2STKL5).multiply(BigDecimal.valueOf(0.42)),
      ).setScale(0, BigDecimal.ROUND_DOWN)
      this.ST = this.ST.add(
        this.ZZX.subtract(this.W3STKL5).multiply(BigDecimal.valueOf(0.45)),
      ).setScale(0, BigDecimal.ROUND_DOWN)
    } else {
      this.ST = this.ST.add(
        this.ZZX.subtract(this.W2STKL5).multiply(BigDecimal.valueOf(0.42)),
      ).setScale(0, BigDecimal.ROUND_DOWN)
    }
  } else {
    this.ZX = this.ZZX
    this.UP5_6()
    if (this.ZZX.compareTo(this.W1STKL5) == 1) {
      this.VERGL = this.ST
      this.ZX = this.W1STKL5
      this.UP5_6()
      this.HOCH = this.ST.add(
        this.ZZX.subtract(this.W1STKL5).multiply(BigDecimal.valueOf(0.42)),
      ).setScale(0, BigDecimal.ROUND_DOWN)
      if (this.HOCH.compareTo(this.VERGL) == -1) {
        this.ST = this.HOCH
      } else {
        this.ST = this.VERGL
      }
    }
  }
}

/**
 * Unterprogramm zur Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 30
 */
Lohnsteuer2021.prototype.UP5_6 = function () {
  this.X = this.ZX.multiply(BigDecimal.valueOf(1.25)).setScale(
    2,
    BigDecimal.ROUND_DOWN,
  )
  this.UPTAB21()
  this.ST1 = this.ST
  this.X = this.ZX.multiply(BigDecimal.valueOf(0.75)).setScale(
    2,
    BigDecimal.ROUND_DOWN,
  )
  this.UPTAB21()
  this.ST2 = this.ST
  this.DIFF = this.ST1.subtract(this.ST2).multiply(Lohnsteuer2021.ZAHL2)
  this.MIST = this.ZX.multiply(BigDecimal.valueOf(0.14)).setScale(
    0,
    BigDecimal.ROUND_DOWN,
  )
  if (this.MIST.compareTo(this.DIFF) == 1) {
    this.ST = this.MIST
  } else {
    this.ST = this.DIFF
  }
}

/**
 * Solidaritaetszuschlag, PAP Seite 31
 */
Lohnsteuer2021.prototype.MSOLZ = function () {
  this.SOLZFREI = this.SOLZFREI.multiply(BigDecimal.valueOf(this.KZTAB))
  if (this.JBMG.compareTo(this.SOLZFREI) == 1) {
    this.SOLZJ = this.JBMG.multiply(BigDecimal.valueOf(5.5))
      .divide(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_DOWN)
    this.SOLZMIN = this.JBMG.subtract(this.SOLZFREI)
      .multiply(BigDecimal.valueOf(11.9))
      .divide(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_DOWN)
    if (this.SOLZMIN.compareTo(this.SOLZJ) == -1) {
      this.SOLZJ = this.SOLZMIN
    }
    this.JW = this.SOLZJ.multiply(Lohnsteuer2021.ZAHL100).setScale(
      0,
      BigDecimal.ROUND_DOWN,
    )
    this.UPANTEIL()
    this.SOLZLZZ = this.ANTEIL1
  } else {
    this.SOLZLZZ = BigDecimal.ZERO()
  }
  if (this.R > 0) {
    this.JW = this.JBMG.multiply(Lohnsteuer2021.ZAHL100)
    this.UPANTEIL()
    this.BK = this.ANTEIL1
  } else {
    this.BK = BigDecimal.ZERO()
  }
}

/**
 * Anteil von Jahresbetraegen fuer einen LZZ (§ 39b Abs. 2 Satz 9 EStG), PAP Seite 32
 */
Lohnsteuer2021.prototype.UPANTEIL = function () {
  if (this.LZZ == 1) {
    this.ANTEIL1 = this.JW
  } else {
    if (this.LZZ == 2) {
      this.ANTEIL1 = this.JW.divide(
        Lohnsteuer2021.ZAHL12,
        0,
        BigDecimal.ROUND_DOWN,
      )
    } else {
      if (this.LZZ == 3) {
        this.ANTEIL1 = this.JW.multiply(Lohnsteuer2021.ZAHL7).divide(
          Lohnsteuer2021.ZAHL360,
          0,
          BigDecimal.ROUND_DOWN,
        )
      } else {
        this.ANTEIL1 = this.JW.divide(
          Lohnsteuer2021.ZAHL360,
          0,
          BigDecimal.ROUND_DOWN,
        )
      }
    }
  }
}

/**
 * Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 8 EStG), PAP Seite 33
 */
Lohnsteuer2021.prototype.MSONST = function () {
  this.LZZ = 1
  if (this.ZMVB == 0) {
    this.ZMVB = 12
  }
  if (this.SONSTB.compareTo(BigDecimal.ZERO()) == 0) {
    this.VKVSONST = BigDecimal.ZERO()
    this.LSTSO = BigDecimal.ZERO()
    this.STS = BigDecimal.ZERO()
    this.SOLZS = BigDecimal.ZERO()
    this.BKS = BigDecimal.ZERO()
  } else {
    this.MOSONST()
    this.UPVKV()
    this.VKVSONST = this.VKV
    this.ZRE4J = this.JRE4.add(this.SONSTB)
      .divide(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_DOWN)
    this.ZVBEZJ = this.JVBEZ.add(this.VBS)
      .divide(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_DOWN)
    this.VBEZBSO = this.STERBE
    this.MRE4SONST()
    this.MLSTJAHR()
    this.WVFRBM = this.ZVE.subtract(this.GFB)
      .multiply(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_DOWN)
    if (this.WVFRBM.compareTo(BigDecimal.ZERO()) == -1) {
      this.WVFRBM = BigDecimal.ZERO()
    }
    this.UPVKV()
    this.VKVSONST = this.VKV.subtract(this.VKVSONST)
    this.LSTSO = this.ST.multiply(Lohnsteuer2021.ZAHL100)
    this.STS = this.LSTSO.subtract(this.LSTOSO)
      .multiply(BigDecimal.valueOf(this.f))
      .divide(Lohnsteuer2021.ZAHL100, 0, BigDecimal.ROUND_DOWN)
      .multiply(Lohnsteuer2021.ZAHL100)
    if (this.STS.compareTo(BigDecimal.ZERO()) == -1) {
      this.STS = BigDecimal.ZERO()
    }
    this.MSOLZSTS()
    if (this.R > 0) {
      this.BKS = this.STS
    } else {
      this.BKS = BigDecimal.ZERO()
    }
  }
}

/**
 * Berechnung des SolZ auf sonstige Bezüge, PAP Seite 34, Neu ab 2021
 */
Lohnsteuer2021.prototype.MSOLZSTS = function () {
  if (this.ZKF.compareTo(BigDecimal.ZERO()) == 1) {
    this.SOLZSZVE = this.ZVE.subtract(this.KFB)
  } else {
    this.SOLZSZVE = this.ZVE
  }
  if (this.SOLZSZVE.compareTo(BigDecimal.ONE()) == -1) {
    this.SOLZSZVE = BigDecimal.ZERO()
    this.X = BigDecimal.ZERO()
  } else {
    this.X = this.SOLZSZVE.divide(
      BigDecimal.valueOf(this.KZTAB),
      0,
      BigDecimal.ROUND_DOWN,
    )
  }
  if (this.STKL < 5) {
    this.UPTAB21()
  } else {
    this.MST5_6()
  }
  this.SOLZSBMG = this.ST.multiply(BigDecimal.valueOf(this.f)).setScale(
    0,
    BigDecimal.ROUND_DOWN,
  )
  if (this.SOLZSBMG.compareTo(this.SOLZFREI) == 1) {
    this.SOLZS = this.STS.multiply(BigDecimal.valueOf(5.5)).divide(
      Lohnsteuer2021.ZAHL100,
      0,
      BigDecimal.ROUND_DOWN,
    )
  } else {
    this.SOLZS = BigDecimal.ZERO()
  }
}

/**
 * Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 und 10 EStG), PAP Seite 35
 */
Lohnsteuer2021.prototype.MVMT = function () {
  if (this.VKAPA.compareTo(BigDecimal.ZERO()) == -1) {
    this.VKAPA = BigDecimal.ZERO()
  }
  if (this.VMT.add(this.VKAPA).compareTo(BigDecimal.ZERO()) == 1) {
    if (this.LSTSO.compareTo(BigDecimal.ZERO()) == 0) {
      this.MOSONST()
      this.LST1 = this.LSTOSO
    } else {
      this.LST1 = this.LSTSO
    }
    this.VBEZBSO = this.STERBE.add(this.VKAPA)
    this.ZRE4J = this.JRE4.add(this.SONSTB)
      .add(this.VMT)
      .add(this.VKAPA)
      .divide(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_DOWN)
    this.ZVBEZJ = this.JVBEZ.add(this.VBS)
      .add(this.VKAPA)
      .divide(Lohnsteuer2021.ZAHL100)
      .setScale(2, BigDecimal.ROUND_DOWN)
    this.KENNVMT = 2
    this.MRE4SONST()
    this.MLSTJAHR()
    this.LST3 = this.ST.multiply(Lohnsteuer2021.ZAHL100)
    this.MRE4ABZ()
    this.ZRE4VP = this.ZRE4VP.subtract(
      this.JRE4ENT.divide(Lohnsteuer2021.ZAHL100),
    ).subtract(this.SONSTENT.divide(Lohnsteuer2021.ZAHL100))
    this.KENNVMT = 1
    this.MLSTJAHR()
    this.LST2 = this.ST.multiply(Lohnsteuer2021.ZAHL100)
    this.STV = this.LST2.subtract(this.LST1)
    this.LST3 = this.LST3.subtract(this.LST1)
    if (this.LST3.compareTo(this.STV) == -1) {
      this.STV = this.LST3
    }
    if (this.STV.compareTo(BigDecimal.ZERO()) == -1) {
      this.STV = BigDecimal.ZERO()
    } else {
      this.STV = this.STV.multiply(BigDecimal.valueOf(this.f))
        .divide(Lohnsteuer2021.ZAHL100, 0, BigDecimal.ROUND_DOWN)
        .multiply(Lohnsteuer2021.ZAHL100)
    }
    this.SOLZVBMG = this.STV.divide(
      Lohnsteuer2021.ZAHL100,
      0,
      BigDecimal.ROUND_DOWN,
    ).add(this.JBMG)
    if (this.SOLZVBMG.compareTo(this.SOLZFREI) == 1) {
      this.SOLZV = this.STV.multiply(BigDecimal.valueOf(5.5)).divide(
        Lohnsteuer2021.ZAHL100,
        0,
        BigDecimal.ROUND_DOWN,
      )
    } else {
      this.SOLZV = BigDecimal.ZERO()
    }
    if (this.R > 0) {
      this.BKV = this.STV
    } else {
      this.BKV = BigDecimal.ZERO()
    }
  } else {
    this.STV = BigDecimal.ZERO()
    this.SOLZV = BigDecimal.ZERO()
    this.BKV = BigDecimal.ZERO()
  }
}

/**
 * Sonderberechnung ohne sonstige Bezüge für Berechnung bei sonstigen Bezügen oder Vergütung für mehrjährige Tätigkeit, PAP Seite 36
 */
Lohnsteuer2021.prototype.MOSONST = function () {
  this.ZRE4J = this.JRE4.divide(Lohnsteuer2021.ZAHL100).setScale(
    2,
    BigDecimal.ROUND_DOWN,
  )
  this.ZVBEZJ = this.JVBEZ.divide(Lohnsteuer2021.ZAHL100).setScale(
    2,
    BigDecimal.ROUND_DOWN,
  )
  this.JLFREIB = this.JFREIB.divide(
    Lohnsteuer2021.ZAHL100,
    2,
    BigDecimal.ROUND_DOWN,
  )
  this.JLHINZU = this.JHINZU.divide(
    Lohnsteuer2021.ZAHL100,
    2,
    BigDecimal.ROUND_DOWN,
  )
  this.MRE4()
  this.MRE4ABZ()
  this.ZRE4VP = this.ZRE4VP.subtract(
    this.JRE4ENT.divide(Lohnsteuer2021.ZAHL100),
  )
  this.MZTABFB()
  this.VFRBS1 = this.ANP.add(this.FVB.add(this.FVBZ))
    .multiply(Lohnsteuer2021.ZAHL100)
    .setScale(2, BigDecimal.ROUND_DOWN)
  this.MLSTJAHR()
  this.WVFRBO = this.ZVE.subtract(this.GFB)
    .multiply(Lohnsteuer2021.ZAHL100)
    .setScale(2, BigDecimal.ROUND_DOWN)
  if (this.WVFRBO.compareTo(BigDecimal.ZERO()) == -1) {
    this.WVFRBO = BigDecimal.ZERO()
  }
  this.LSTOSO = this.ST.multiply(Lohnsteuer2021.ZAHL100)
}

/**
 * Sonderberechnung mit sonstige Bezüge für Berechnung bei sonstigen Bezügen oder Vergütung für mehrjährige Tätigkeit, PAP Seite 37
 */
Lohnsteuer2021.prototype.MRE4SONST = function () {
  this.MRE4()
  this.FVB = this.FVBSO
  this.MRE4ABZ()
  this.ZRE4VP = this.ZRE4VP.subtract(
    this.JRE4ENT.divide(Lohnsteuer2021.ZAHL100),
  ).subtract(this.SONSTENT.divide(Lohnsteuer2021.ZAHL100))
  this.FVBZ = this.FVBZSO
  this.MZTABFB()
  this.VFRBS2 = this.ANP.add(this.FVB)
    .add(this.FVBZ)
    .multiply(Lohnsteuer2021.ZAHL100)
    .subtract(this.VFRBS1)
}

/**
 * Tarifliche Einkommensteuer §32a EStG, PAP Seite 38
 */
Lohnsteuer2021.prototype.UPTAB21 = function () {
  if (this.X.compareTo(this.GFB.add(Lohnsteuer2021.ZAHL1)) == -1) {
    this.ST = BigDecimal.ZERO()
  } else {
    if (this.X.compareTo(BigDecimal.valueOf(14754)) == -1) {
      this.Y = this.X.subtract(this.GFB).divide(
        Lohnsteuer2021.ZAHL10000,
        6,
        BigDecimal.ROUND_DOWN,
      )
      this.RW = this.Y.multiply(BigDecimal.valueOf(995.21))
      this.RW = this.RW.add(BigDecimal.valueOf(1400))
      this.ST = this.RW.multiply(this.Y).setScale(0, BigDecimal.ROUND_DOWN)
    } else {
      if (this.X.compareTo(BigDecimal.valueOf(57919)) == -1) {
        this.Y = this.X.subtract(BigDecimal.valueOf(14753)).divide(
          Lohnsteuer2021.ZAHL10000,
          6,
          BigDecimal.ROUND_DOWN,
        )
        this.RW = this.Y.multiply(BigDecimal.valueOf(208.85))
        this.RW = this.RW.add(BigDecimal.valueOf(2397))
        this.RW = this.RW.multiply(this.Y)
        this.ST = this.RW.add(BigDecimal.valueOf(950.96)).setScale(
          0,
          BigDecimal.ROUND_DOWN,
        )
      } else {
        if (this.X.compareTo(BigDecimal.valueOf(274613)) == -1) {
          this.ST = this.X.multiply(BigDecimal.valueOf(0.42))
            .subtract(BigDecimal.valueOf(9136.63))
            .setScale(0, BigDecimal.ROUND_DOWN)
        } else {
          this.ST = this.X.multiply(BigDecimal.valueOf(0.45))
            .subtract(BigDecimal.valueOf(17374.99))
            .setScale(0, BigDecimal.ROUND_DOWN)
        }
      }
    }
  }
  this.ST = this.ST.multiply(BigDecimal.valueOf(this.KZTAB))
}
