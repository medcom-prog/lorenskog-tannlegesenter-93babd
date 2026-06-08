/**
 * Lørenskog Tannlegesenter — NO/EN dictionary.
 * Norwegian Bokmål is canonical (sourced verbatim from lorenskogtannlege.no).
 * English is a faithful translation.
 */

export type Language = 'no' | 'en';

interface Dict {
  common: {
    callUs: string;
    bookATime: string;
    sendInquiry: string;
    readMore: string;
    contact: string;
    next: string;
    previous: string;
    backToHome: string;
    siteName: string;
    tagline: string;
    address: string;
    phone: string;
    email: string;
  };
  nav: {
    home: string;
    treatments: string;
    fearOfDentist: string;
    emergency: string;
    prices: string;
    booking: string;
    about: string;
    contact: string;
    bookCta: string;
  };
  home: {
    heroEyebrow: string;
    heroH1: string;
    heroSub: string;
    triageEyebrow: string;
    triageHeading: string;
    triageSub: string;
    triageAcuteTitle: string;
    triageAcuteBody: string;
    triageAcuteCta: string;
    triageAnxietyTitle: string;
    triageAnxietyBody: string;
    triageAnxietyCta: string;
    triageRoutineTitle: string;
    triageRoutineBody: string;
    triageRoutineCta: string;
    statsAcute: string;
    statsAcuteLabel: string;
    statsHours: string;
    statsHoursLabel: string;
    statsHelfo: string;
    statsHelfoLabel: string;
    statsDiscount: string;
    statsDiscountLabel: string;
    aboutEyebrow: string;
    aboutHeading: string;
    aboutBody1: string;
    aboutBody2: string;
    aboutBody3: string;
    pillarsHeading: string;
    pillarFocusFear: string;
    pillarWisdomTeeth: string;
    pillarWhitening: string;
    pillarCrowns: string;
    pillarSafeHygienic: string;
    pillarEmergency: string;
    pillarShortWait: string;
  };
  tannlegeskrekk: {
    eyebrow: string;
    heroH1: string;
    heroSub: string;
    body1: string;
    body2: string;
    body3: string;
    body4: string;
    sedationTitle: string;
    sedationBody: string;
    freeConsultTitle: string;
    freeConsultBody: string;
    adviceTitle: string;
    advice1: string;
    advice2: string;
    advice3: string;
    advice4: string;
    advice5: string;
    helfoTitle: string;
    helfoBody1: string;
    helfoBody2: string;
    pullquote: string;
  };
  tannlegevakt: {
    eyebrow: string;
    heroH1: string;
    heroSub: string;
    body1: string;
    body2: string;
    body3: string;
    typicalTitle: string;
    typical1: string;
    typical2: string;
    typical3: string;
    typical4: string;
    typical5: string;
    pricingTitle: string;
    pricingBody: string;
    locationTitle: string;
    locationBody: string;
  };
  behandlinger: {
    eyebrow: string;
    heroH1: string;
    heroSub: string;
    examination: string;
    examinationBody: string;
    fillings: string;
    fillingsBody: string;
    rootCanal: string;
    rootCanalBody: string;
    crown: string;
    crownBody: string;
    bridge: string;
    bridgeBody: string;
    denture: string;
    dentureBody: string;
    whitening: string;
    whiteningBody: string;
    extraction: string;
    extractionBody: string;
    // Categories (used as section dividers)
    categoryRoutine: string;
    categoryRepair: string;
    categoryAesthetic: string;
    // Metadata labels
    durationLabel: string;
    helfoBadge: string;
    sedationBadge: string;
    newPatientBadge: string;
    // Featured card (Undersøkelse)
    featuredTitle: string;
    featuredBody: string;
    featuredPrice: string;
    featuredCta: string;
    // Cross-link to tannlegeskrekk
    anxietyCrossLink: string;
    // Process section
    processEyebrow: string;
    processTitle: string;
    processSub: string;
    step1Title: string;
    step1Body: string;
    step2Title: string;
    step2Body: string;
    step3Title: string;
    step3Body: string;
    step4Title: string;
    step4Body: string;
    // Outro
    outroQuestion: string;
    // Stat strip
    statTreatments: string;
    statTreatmentsLabel: string;
    statPainfree: string;
    statPainfreeLabel: string;
    statNewPatientsLabel: string;
    statHelfo: string;
    statHelfoLabel: string;
    // Section headings
    repairHeading: string;
    aestheticHeading: string;
    featuredOriginalCopy: string;
    featuredFromLabel: string;
    stepLabel: string;
    // Duration tokens
    durationMultipleVisits: string;
    durationCrown: string;
    durationBridge: string;
  };
  priser: {
    eyebrow: string;
    heroH1: string;
    heroSub: string;
    discount30: string;
    discount30Body: string;
    discount10: string;
    discount10Body: string;
    discountFree: string;
    discountFreeBody: string;
    cancellation: string;
    estimateNote: string;
    catExam: string;
    catFillings: string;
    catRoot: string;
    catCrown: string;
    catCleaning: string;
    catExtraction: string;
  };
  bestill: {
    eyebrow: string;
    heroH1: string;
    heroSub: string;
    legendAvailable: string;
    legendLimited: string;
    legendBooked: string;
    typeLabel: string;
    typeAcute: string;
    typeRoutine: string;
    typeFear: string;
    typeAesthetic: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitCta: string;
    successTitle: string;
    successBody: string;
    pickDate: string;
    callInstead: string;
  };
  omoss: {
    eyebrow: string;
    heroH1: string;
    heroSub: string;
    body1: string;
    body2: string;
    body3: string;
    hoursTitle: string;
    hoursWeekday: string;
    hoursAcute: string;
    locationTitle: string;
    locationBody: string;
  };
  kontakt: {
    eyebrow: string;
    heroH1: string;
    heroSub: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    parking: string;
  };
  footer: {
    treatments: string;
    info: string;
    contact: string;
    copyright: string;
  };
}

export const dictionary: Record<Language, Dict> = {
  no: {
    common: {
      callUs: 'Ring oss',
      bookATime: 'Bestill time',
      sendInquiry: 'Send forespørsel',
      readMore: 'Les mer',
      contact: 'Kontakt',
      next: 'Neste',
      previous: 'Forrige',
      backToHome: '← Til forsiden',
      siteName: 'Lørenskog Tannlegesenter',
      tagline: 'Akutt hjelp, kort ventetid og kveldsbehandling',
      address: 'Skårersletta 10, 1473 Lørenskog',
      phone: '67 90 40 90',
      email: 'kontakt@lorenskogtannlege.no',
    },
    nav: {
      home: 'Hjem',
      treatments: 'Behandlinger',
      fearOfDentist: 'Tannlegeskrekk',
      emergency: 'Tannlegevakt',
      prices: 'Priser',
      booking: 'Bestill time',
      about: 'Om oss',
      contact: 'Kontakt',
      bookCta: 'Bestill time',
    },
    home: {
      heroEyebrow: 'Skårersletta 10 · Lørenskog',
      heroH1: 'Akutt hjelp, kort ventetid og kveldsbehandling.',
      heroSub:
        'Velutstyrt og moderne tannklinikk i hyggelige omgivelser ved Lørenskog/Solheim. Vi har spesialisert oss på pasienter med tannlegeskrekk.',
      triageEyebrow: 'Hva gjelder det?',
      triageHeading: 'Velg det som passer deg.',
      triageSub: 'Vi viser deg riktig neste steg.',
      triageAcuteTitle: 'Akutt tannverk',
      triageAcuteBody:
        'Mistet en fylling, knekt en bit av tann, vond visdomstann eller akutt betennelse? Vi har time på dagen.',
      triageAcuteCta: 'Ring 67 90 40 90',
      triageAnxietyTitle: 'Redd for tannlegen',
      triageAnxietyBody:
        '5–10% av befolkningen har tannlegeskrekk. Smertefri behandling, sedasjon og narkose er tilgjengelig. Helfo dekker store deler av kostnadene.',
      triageAnxietyCta: 'Gratis konsultasjon',
      triageRoutineTitle: 'Rutinetime',
      triageRoutineBody:
        'Undersøkelse, rens og forebygging. Som ny pasient får du 30% rabatt på første undersøkelse hos oss.',
      triageRoutineCta: 'Bestill online',
      statsAcute: 'På dagen',
      statsAcuteLabel: 'Akutt tannbehandling',
      statsHours: 'Kveld og helg',
      statsHoursLabel: 'Etter avtale',
      statsHelfo: 'Helfo',
      statsHelfoLabel: 'Refusjon ved odontofobi',
      statsDiscount: '30%',
      statsDiscountLabel: 'Rabatt for nye pasienter',
      aboutEyebrow: 'Om klinikken',
      aboutHeading: 'En velutstyrt og moderne tannklinikk i hyggelige omgivelser.',
      aboutBody1:
        'Lørenskog tannlegesenter er en velutstyrt og moderne tannklinikk i hyggelige omgivelser beliggende ved Lørenskog/Solheim. Vi tilbyr alle typer av tannbehandlinger bl.a. estetiske behandlinger (krone, bro, porselensfasetter og tannbleking).',
      aboutBody2:
        'Tannklinikken legger stor vekt på behandling av pasienter med tannlegeskrekk og gjennom mange års erfaring og god kommunikasjon tilbyr vi pasienter med tannlegeskrekk smertefri og behagelig behandling.',
      aboutBody3:
        'Vi lytter til deg og dine behov. Vi tilbyr kvelds- og helgetimer og tar gjerne imot nye pasienter. Ved akutte tannproblemer tilbyr vi time på dagen. Målet vårt er fornøyde pasienter.',
      pillarsHeading: 'Det vi har spesialisert oss på.',
      pillarFocusFear: 'Fokus på tannlegeskrekk',
      pillarWisdomTeeth: 'Trekking av visdomstenner',
      pillarWhitening: 'Bleking av tenner',
      pillarCrowns: 'Krone, bro og plateproteser',
      pillarSafeHygienic: 'Trygge, hygieniske forhold',
      pillarEmergency: 'Akutthjelp',
      pillarShortWait: 'Kort ventetid',
    },
    tannlegeskrekk: {
      eyebrow: 'Tannlegeskrekk',
      heroH1: 'Smertefri behandling, der du bestemmer tempoet.',
      heroSub:
        'Pasienter med tannlegeskrekk (odontofobi) utgjør mellom 5–10% av befolkningen. De fleste er redd for å ta det første steget, å ringe til et tannlegekontor.',
      body1:
        'De har ofte hatt smerter som de har gått med en god stund før de oppsøker tannlegen. Tannlegeskrekken kan som oftest ha kommet fra tidligere tannbehandlinger med ubehagelig opplevelse, spesielt i barndommen. Det er derfor viktig å informere tannlegen om dine tidligere erfaringer, og fortelle hva du er redd for.',
      body2:
        'Ved vårt tannlegekontor tar vi oss god tid til å høre på deg, dine behov og tilrettelegge en behandling hvor du føler deg trygt i stolen.',
      body3:
        'Lørenskog tannlegesenter har lang erfaring med behandling av akkurat pasienter med den slags behov. Gjennom konsultasjon, informasjon og smertefri behandling sørger vi for at du overvinner din skrekk.',
      body4:
        'Lørenskog tannlegesenter gir deg en smertefri behandling hvor du som pasient er i fokus og er med på bestemmelsen av behandlingen. Til eksempel er du med på behandlingsprosedyren ved å stoppe tannlegen underveis ved spørsmål eller ubehag. Tannlegen tar seg god tid til å etterkomme dine ønsker og behov. Målet vårt er å kunne hjelpe deg til å overvinne din tannlegeskrekk ved å føle deg trygg hos oss.',
      sedationTitle: 'Sedasjon og narkose',
      sedationBody:
        'Sedasjon med beroligende midler og narkose er hjelpemidler vi kan tilby deg på vei til å nå målet for å overkomme din tannlegeskrekk. Gjennom konsultasjon kan det også gjøres avtaler som å gi signaler ved å løfte opp en arm hvis man ønsker pauser under behandlingen.',
      freeConsultTitle: 'Gratis konsultasjon',
      freeConsultBody:
        'Lørenskog tannlegesenter tilbyr pasienter med tannlegeskrekk og høye behandlingsbehov gratis konsultasjon. Har du tannlegeskrekk, ring oss på 67 90 40 90 eller bestill time online.',
      adviceTitle: 'Råd til deg med tannlegeskrekk',
      advice1: 'Kontakt tannlegen NÅ på 67 90 40 90.',
      advice2: 'Finn en tannlege du finner god kjemi med. Dette kan oppnås gjennom en samtaleterapi hos oss.',
      advice3: 'Ha med en venn eller familiemedlem som ikke har tannlegeskrekk.',
      advice4: 'Be tannlegen informere deg om hva som kommer til å skje under neste behandling.',
      advice5: 'Viktig med jevnlige tannsjekk hos tannlege for å unngå tannsmerter og større tannskader.',
      helfoTitle: 'Refusjon og tannlegeskrekk',
      helfoBody1:
        'Helseforvaltningen (Helfo) dekker nå store deler av behandlingskostnadene til deg med stor tannlegeskrekk (odontofobi). Pasienter med svært alvorlig tannlegeskrekk må ha erklæring fra lege og psykolog.',
      helfoBody2:
        'Lørenskog tannlegesenter har lang erfaring med behandling av pasienter med tannlegeskrekk og tett samarbeid med psykolog. Kontakt oss på 67 90 40 90 eller bestill time online.',
      pullquote:
        'Du som pasient er i fokus og er med på bestemmelsen av behandlingen.',
    },
    tannlegevakt: {
      eyebrow: 'Tannlegevakt',
      heroH1: 'Vondt nå? Vi har time i dag.',
      heroSub:
        'Lørenskog tannlegevakt ligger i samme lokaler som Lørenskog tannlegesenter og tilbyr deg akutt tannbehandling på dagen.',
      body1:
        'Det hender man mister en fylling, knekker en bit av en tann, får akutt vondt på grunn av betent tann eller tannkjøtt, vond visdomstann på en tid det ikke er lett å få tak i tannlege.',
      body2:
        'Har du kanskje tidligere måttet gå med tannsmerte, mistet fylling, tannbyll og lignende til dagen etter eller over helgen til du får tak i tannlegen? Det trenger du ikke lenger å vente med.',
      body3:
        'Vi tilbyr akutt tannlegetime på dagen. Tannlegekontoret er kveldsåpent og kan også tilby akutthjelp i helgene.',
      typicalTitle: 'Typiske akuttbesøk',
      typical1: 'Mistet en fylling',
      typical2: 'Knekt en bit av tannen',
      typical3: 'Akutt betennelse i tann eller tannkjøtt',
      typical4: 'Vond visdomstann',
      typical5: 'Tannbyll',
      pricingTitle: 'Pris for akuttbesøk',
      pricingBody:
        'Det er vanskelig å gi eksakt pris på et akutt besøk hos tannlegen. Prisen er ofte mellom 700–3 500 NOK. Du vil alltid få et eksakt kostnadsoverslag før behandlingen starter.',
      locationTitle: 'Sentralt på Solheim i Lørenskog',
      locationBody:
        'Lørenskog Tannlegevakt ligger sentralt på Solheim i Lørenskog (vis-a-vis Metro-senter), med kort vei til Lillestrøm, Strømmen, Rælingen, Rasta og Skedsmo. Gode gratis parkeringsmuligheter.',
    },
    behandlinger: {
      eyebrow: 'Behandlinger',
      heroH1: 'Alt innen tannbehandling.',
      heroSub:
        'Vi tilbyr alle typer av tannbehandlinger, inkludert estetiske behandlinger som krone, bro, porselensfasetter og tannbleking.',
      examination: 'Undersøkelse',
      examinationBody:
        'Grundig undersøkelse med digitale røntgenbilder. Inkludert klinisk og røntgenologisk undersøkelse. 30% rabatt for nye pasienter.',
      fillings: 'Fyllinger',
      fillingsBody:
        'Fra enkle fyllinger til komplekse restaureringer. Behandlingen er smertefri og utføres under lokalbedøvelse.',
      rootCanal: 'Rotfylling',
      rootCanalBody:
        'Rotbehandling for å redde infiserte eller skadede tenner. Smertefri behandling utført med moderne teknikker.',
      crown: 'Tannkrone',
      crownBody:
        'Solid og holdbar løsning for tenner som mangler eller er skadet. Estetiske porselens-kroner.',
      bridge: 'Tannbro',
      bridgeBody:
        'Erstatter manglende tenner ved å feste seg til nabotennene. Stabil og varig løsning.',
      denture: 'Tannprotese',
      dentureBody:
        'Hel- eller delprotese for å erstatte tenner. Tilpasset deg for komfort og naturlig utseende.',
      whitening: 'Tannbleking',
      whiteningBody:
        'Profesjonell bleking av tenner i klinikken. Synlige resultater og varig effekt.',
      extraction: 'Tanntrekking',
      extractionBody:
        'Enkel og komplisert tanntrekking, inkludert trekking av visdomstenner. Smertefri behandling.',
      categoryRoutine: 'Rutine og forebygging',
      categoryRepair: 'Reparasjon og rehabilitering',
      categoryAesthetic: 'Estetisk tannpleie',
      durationLabel: 'Varighet',
      helfoBadge: 'Helfo-relevant',
      sedationBadge: 'Sedasjon mulig',
      newPatientBadge: '30% for nye pasienter',
      featuredTitle: 'Start med en grundig undersøkelse.',
      featuredBody:
        'Klinisk og røntgenologisk vurdering, rens og forebyggende råd — alt i én time. Nye pasienter får 30% rabatt, og du sitter igjen med en konkret plan og eksakt kostnadsoverslag før noe annet skjer.',
      featuredPrice: 'Fra 940 kr',
      featuredCta: 'Bestill undersøkelse',
      anxietyCrossLink: 'Tannlegeskrekk? Vi tilbyr sedasjon og gratis samtale.',
      processEyebrow: 'Slik foregår det',
      processTitle: 'Fire trinn — fra første samtale til ferdig behandling.',
      processSub:
        'Du blir aldri overrasket av en regning. Hver beslutning tas i fellesskap, og du kan stoppe når som helst.',
      step1Title: 'Samtale og undersøkelse',
      step1Body:
        'Vi lytter til hva du er bekymret for og gjør en grundig undersøkelse. Tar du opp gamle erfaringer, tilpasser vi tempoet etter dine signaler.',
      step2Title: 'Eksakt kostnadsoverslag',
      step2Body:
        'Du får skriftlig pris før behandlingen starter — ingen overraskelser. Hvis Helfo dekker noe, regner vi ut din egenandel.',
      step3Title: 'Smertefri behandling',
      step3Body:
        'Bedøvelse, sedasjon eller narkose etter behov. Du bestemmer tempoet og kan løfte hånda for pause når som helst.',
      step4Title: 'Oppfølging',
      step4Body:
        'Vi avtaler kontrolltime hvis behandlingen krever det, og er tilgjengelige på telefon hvis noe oppstår etterpå.',
      outroQuestion: 'Usikker på hva du trenger? Vi finner det ut sammen — uten kostnad.',
      statTreatments: '8',
      statTreatmentsLabel: 'Behandlinger',
      statPainfree: '100%',
      statPainfreeLabel: 'Smertefri',
      statNewPatientsLabel: 'For nye pasienter',
      statHelfo: 'Helfo',
      statHelfoLabel: 'Kan dekke deler',
      repairHeading: 'Reparasjoner som varer — og som ikke gjør vondt.',
      aestheticHeading: 'Krone, bro og bleking — i porselen som varer.',
      featuredOriginalCopy: 'Ordinær pris 1 340 kr — nye pasienter får 30% rabatt på første undersøkelse.',
      featuredFromLabel: 'Fra',
      stepLabel: 'Trinn',
      durationMultipleVisits: 'Flere besøk',
      durationCrown: '2 besøk · ~2 t',
      durationBridge: '2–3 besøk',
    },
    priser: {
      eyebrow: 'Priser',
      heroH1: 'Klare priser. Ingen overraskelser.',
      heroSub:
        'Du får alltid et eksakt kostnadsoverslag før behandlingen starter. Tannlegepriser kan virke noe forvirrende — derfor tilbyr vi 30% rabatt på undersøkelsen til deg som ny pasient.',
      discount30: '30% rabatt',
      discount30Body: 'På undersøkelse for nye pasienter.',
      discount10: '10% rabatt',
      discount10Body: 'For pensjonister og studenter på utvalgte behandlinger.',
      discountFree: 'Gratis konsultasjon',
      discountFreeBody:
        'For pasienter med stor tannlegeskrekk og høye behandlingsbehov.',
      cancellation:
        'Avbestilling: senest 24 timer før time. Ved avbestilling med kortere varsel belastes 75% av honoraret (1 500 kr/time).',
      estimateNote:
        'Prisene er veiledende. Du får alltid eksakt pris ved konsultasjon, og kostnadsoverslag før behandlingen starter.',
      catExam: 'Undersøkelse og forebygging',
      catFillings: 'Fyllinger',
      catRoot: 'Rotfylling',
      catCrown: 'Krone og bro',
      catCleaning: 'Rens og annet',
      catExtraction: 'Tanntrekking',
    },
    bestill: {
      eyebrow: 'Bestill time',
      heroH1: 'Velg en tid som passer deg.',
      heroSub:
        'Vi tar kontakt for å bekrefte detaljer og gi deg eksakt kostnadsoverslag før behandlingen starter. Ved akutt tannverk: ring 67 90 40 90.',
      legendAvailable: 'Tilgjengelig',
      legendLimited: 'Begrenset',
      legendBooked: 'Opptatt',
      typeLabel: 'Type behandling',
      typeAcute: 'Akutt · time på dagen',
      typeRoutine: 'Rutineundersøkelse · 30% rabatt for nye pasienter',
      typeFear: 'Tannlegeskrekk · gratis konsultasjon',
      typeAesthetic: 'Estetisk · krone, bro, fasetter, bleking',
      messageLabel: 'Kort melding',
      messagePlaceholder:
        'Hva gjelder besøket? Tidligere erfaringer, spesielle ønsker?',
      submitCta: 'Send forespørsel',
      successTitle: 'Forespørsel mottatt',
      successBody: 'Vi kommer tilbake til deg innen 24 timer.',
      pickDate: 'Velg en dato i kalenderen',
      callInstead: 'Heller ringe? 67 90 40 90',
    },
    omoss: {
      eyebrow: 'Om oss',
      heroH1: 'Tannklinikk i hyggelige omgivelser.',
      heroSub: 'Velutstyrt og moderne, midt i Lørenskog/Solheim.',
      body1:
        'Lørenskog tannlegesenter er en velutstyrt og moderne tannklinikk i hyggelige omgivelser beliggende ved Lørenskog/Solheim. Vi tilbyr alle typer av tannbehandlinger bl.a. estetiske behandlinger (krone, bro, porselensfasetter og tannbleking).',
      body2:
        'Tannklinikken legger stor vekt på behandling av pasienter med tannlegeskrekk og gjennom mange års erfaring og god kommunikasjon tilbyr vi pasienter med tannlegeskrekk smertefri og behagelig behandling.',
      body3:
        'Vi lytter til deg og dine behov. Vi tilbyr kvelds- og helgetimer og tar gjerne imot nye pasienter. Ved akutte tannproblemer tilbyr vi time på dagen. Målet vårt er fornøyde pasienter. Det søker vi å oppnå ved kvalitet i alle deler av tannbehandlingen.',
      hoursTitle: 'Åpningstider',
      hoursWeekday: 'Mandag–fredag · 08:00–16:00',
      hoursAcute: 'Akutt-timer på kveld og helg etter avtale',
      locationTitle: 'Slik finner du oss',
      locationBody:
        'Skårersletta 10, 1473 Lørenskog. Sentralt på Solheim, vis-a-vis Metro-senteret. Kort vei til Lillestrøm, Strømmen, Rælingen, Rasta og Skedsmo. Gode gratis parkeringsmuligheter.',
    },
    kontakt: {
      eyebrow: 'Kontakt',
      heroH1: 'Ring, skriv eller stikk innom.',
      heroSub:
        'Ved akutt tannverk anbefaler vi å ringe direkte. Vi svarer e-post innen 24 timer på hverdager.',
      addressLabel: 'Adresse',
      phoneLabel: 'Telefon',
      emailLabel: 'E-post',
      hoursLabel: 'Åpningstider',
      parking: 'Vis-a-vis Metro-senteret · Gratis parkering',
    },
    footer: {
      treatments: 'Behandlinger',
      info: 'Informasjon',
      contact: 'Kontakt',
      copyright: '© Lørenskog Tannlegesenter',
    },
  },

  en: {
    common: {
      callUs: 'Call us',
      bookATime: 'Book a time',
      sendInquiry: 'Send inquiry',
      readMore: 'Read more',
      contact: 'Contact',
      next: 'Next',
      previous: 'Previous',
      backToHome: '← Back to home',
      siteName: 'Lørenskog Dental Centre',
      tagline: 'Same-day emergency care, short waits and evening appointments',
      address: 'Skårersletta 10, 1473 Lørenskog · Norway',
      phone: '67 90 40 90',
      email: 'kontakt@lorenskogtannlege.no',
    },
    nav: {
      home: 'Home',
      treatments: 'Treatments',
      fearOfDentist: 'Dental anxiety',
      emergency: 'Emergency',
      prices: 'Prices',
      booking: 'Book',
      about: 'About',
      contact: 'Contact',
      bookCta: 'Book a time',
    },
    home: {
      heroEyebrow: 'Skårersletta 10 · Lørenskog',
      heroH1: 'Same-day emergency care, short waits and evening appointments.',
      heroSub:
        'A well-equipped, modern dental clinic in pleasant surroundings near Lørenskog/Solheim. We specialise in caring for patients with dental anxiety.',
      triageEyebrow: 'How can we help?',
      triageHeading: 'Pick what fits.',
      triageSub: 'We will guide you to the right next step.',
      triageAcuteTitle: 'Acute toothache',
      triageAcuteBody:
        'Lost a filling, broke part of a tooth, painful wisdom tooth, or sudden infection? We have appointments today.',
      triageAcuteCta: 'Call 67 90 40 90',
      triageAnxietyTitle: 'Afraid of the dentist',
      triageAnxietyBody:
        '5–10% of the population have dental anxiety. Pain-free treatment, sedation and general anaesthesia are available. Helfo covers a large share of the cost.',
      triageAnxietyCta: 'Free consultation',
      triageRoutineTitle: 'Routine check-up',
      triageRoutineBody:
        'Examination, cleaning and prevention. As a new patient you receive 30% off your first examination.',
      triageRoutineCta: 'Book online',
      statsAcute: 'Same-day',
      statsAcuteLabel: 'Emergency dental care',
      statsHours: 'Evenings & weekends',
      statsHoursLabel: 'By appointment',
      statsHelfo: 'Helfo',
      statsHelfoLabel: 'Reimbursement for odontophobia',
      statsDiscount: '30%',
      statsDiscountLabel: 'Discount for new patients',
      aboutEyebrow: 'About the clinic',
      aboutHeading: 'A well-equipped, modern dental clinic in pleasant surroundings.',
      aboutBody1:
        'Lørenskog Dental Centre is a well-equipped, modern dental clinic in pleasant surroundings near Lørenskog/Solheim. We offer all types of dental treatment, including aesthetic treatments such as crowns, bridges, porcelain veneers and tooth whitening.',
      aboutBody2:
        'The clinic places a strong emphasis on treating patients with dental anxiety. Through many years of experience and good communication, we offer pain-free and comfortable treatment for patients with dental fear.',
      aboutBody3:
        'We listen to you and your needs. We offer evening and weekend appointments and welcome new patients. For acute dental problems we offer same-day appointments. Our goal is satisfied patients.',
      pillarsHeading: 'What we specialise in.',
      pillarFocusFear: 'Focus on dental anxiety',
      pillarWisdomTeeth: 'Wisdom-tooth extraction',
      pillarWhitening: 'Tooth whitening',
      pillarCrowns: 'Crowns, bridges and dentures',
      pillarSafeHygienic: 'Safe, hygienic conditions',
      pillarEmergency: 'Emergency care',
      pillarShortWait: 'Short waits',
    },
    tannlegeskrekk: {
      eyebrow: 'Dental anxiety',
      heroH1: 'Pain-free treatment, at your pace.',
      heroSub:
        'Patients with dental anxiety (odontophobia) make up 5–10% of the population. Most of them are afraid of the very first step — picking up the phone.',
      body1:
        'Many have lived with pain for some time before seeing the dentist. The fear most often comes from earlier dental experiences, especially in childhood. That is why it is important to tell the dentist about your past, and what specifically scares you.',
      body2:
        'At our clinic we take the time to listen to you, your needs, and to design treatment around your sense of safety in the chair.',
      body3:
        'Lørenskog Dental Centre has long experience treating patients with these specific needs. Through consultation, information and pain-free treatment, we will help you overcome your fear.',
      body4:
        'You — the patient — are at the centre. You are part of the decisions about your treatment. You can stop the dentist at any moment with a simple raised hand. The dentist takes time to meet your wishes. Our goal is for you to feel safe with us.',
      sedationTitle: 'Sedation and general anaesthesia',
      sedationBody:
        'Sedation with calming medication and general anaesthesia are tools we can offer to help you reach your goal. During your initial consultation we can also agree on simple signals — like raising your hand — for pauses during treatment.',
      freeConsultTitle: 'Free consultation',
      freeConsultBody:
        'Lørenskog Dental Centre offers a free consultation to patients with dental anxiety and substantial treatment needs. If you have dental anxiety, call us on 67 90 40 90 or book online.',
      adviceTitle: 'Advice if you have dental anxiety',
      advice1: 'Contact the dentist NOW on 67 90 40 90.',
      advice2:
        'Find a dentist you have good chemistry with. We can establish that through an initial talk session.',
      advice3:
        'Bring a friend or family member who does not share the fear.',
      advice4:
        'Ask the dentist to walk you through what is going to happen in the next session.',
      advice5:
        'Regular check-ups matter — they prevent toothache and bigger problems later.',
      helfoTitle: 'Helfo reimbursement',
      helfoBody1:
        'Helfo (the Norwegian Health Economics Administration) now covers a large share of treatment costs for patients with severe dental anxiety (odontophobia). Patients with very severe anxiety need a declaration from a doctor and a psychologist.',
      helfoBody2:
        'Lørenskog Dental Centre has long experience treating patients with dental anxiety and works closely with a psychologist. Call us on 67 90 40 90 or book online.',
      pullquote:
        'You — the patient — are at the centre. You are part of the decisions about your treatment.',
    },
    tannlegevakt: {
      eyebrow: 'Emergency',
      heroH1: 'In pain right now? We have an opening today.',
      heroSub:
        'Lørenskog Emergency Dental is in the same premises as Lørenskog Dental Centre and offers same-day acute treatment.',
      body1:
        'It happens — a filling falls out, a tooth chips, sudden pain from an inflamed tooth or gum, a difficult wisdom tooth at a moment when no dentist is easy to reach.',
      body2:
        'Have you had to wait through pain, with a lost filling or an abscess, until the next morning or after the weekend? You no longer have to.',
      body3:
        'We offer acute appointments today. The clinic is open evenings and we also offer emergency help on weekends.',
      typicalTitle: 'Typical emergency visits',
      typical1: 'Lost filling',
      typical2: 'Chipped tooth',
      typical3: 'Acute inflammation in tooth or gum',
      typical4: 'Painful wisdom tooth',
      typical5: 'Tooth abscess',
      pricingTitle: 'Pricing for emergency visits',
      pricingBody:
        'It is hard to give an exact price for an emergency visit. The price is typically between 700–3,500 NOK. You always get an exact estimate before treatment begins.',
      locationTitle: 'Central Solheim, Lørenskog',
      locationBody:
        'Lørenskog Emergency Dental is in central Solheim in Lørenskog (across from Metro-senter), close to Lillestrøm, Strømmen, Rælingen, Rasta and Skedsmo. Plenty of free parking.',
    },
    behandlinger: {
      eyebrow: 'Treatments',
      heroH1: 'Everything in dental care.',
      heroSub:
        'We offer all types of dental treatment, including aesthetic ones such as crowns, bridges, porcelain veneers and whitening.',
      examination: 'Examination',
      examinationBody:
        'Thorough examination with digital X-rays. Includes clinical and radiographic review. 30% off for new patients.',
      fillings: 'Fillings',
      fillingsBody:
        'From simple fillings to complex restorations. Pain-free, performed under local anaesthesia.',
      rootCanal: 'Root canal',
      rootCanalBody:
        'Root canal therapy to save infected or damaged teeth. Pain-free treatment with modern techniques.',
      crown: 'Crown',
      crownBody:
        'A solid, durable solution for missing or damaged teeth. Aesthetic porcelain crowns.',
      bridge: 'Bridge',
      bridgeBody:
        'Replaces missing teeth by anchoring to neighbouring teeth. Stable and lasting.',
      denture: 'Denture',
      dentureBody:
        'Full or partial dentures to replace teeth. Tailored for comfort and a natural look.',
      whitening: 'Whitening',
      whiteningBody:
        'Professional in-clinic whitening. Visible, lasting results.',
      extraction: 'Extraction',
      extractionBody:
        'Simple and complex extractions, including wisdom teeth. Pain-free treatment.',
      categoryRoutine: 'Routine and prevention',
      categoryRepair: 'Repair and rehabilitation',
      categoryAesthetic: 'Aesthetic dentistry',
      durationLabel: 'Time',
      helfoBadge: 'Helfo-eligible',
      sedationBadge: 'Sedation available',
      newPatientBadge: '30% off for new patients',
      featuredTitle: 'Start with a thorough examination.',
      featuredBody:
        'Clinical and radiographic review, cleaning and preventive advice — all in one appointment. New patients get 30% off, and you leave with a concrete plan and an exact estimate before anything else happens.',
      featuredPrice: 'From 940 kr',
      featuredCta: 'Book examination',
      anxietyCrossLink: 'Dental anxiety? Sedation and a free consultation are available.',
      processEyebrow: 'How it works',
      processTitle: 'Four steps — from the first call to treatment complete.',
      processSub:
        'You are never surprised by an invoice. Every decision is made together, and you can stop at any time.',
      step1Title: 'Conversation and examination',
      step1Body:
        'We listen to what worries you and do a thorough exam. If you bring up past experiences, we set the pace by your signals.',
      step2Title: 'Exact written estimate',
      step2Body:
        'You receive the price in writing before treatment begins — no surprises. If Helfo covers part of it, we calculate your share.',
      step3Title: 'Pain-free treatment',
      step3Body:
        'Local anaesthesia, sedation, or general anaesthesia as needed. You set the pace and can raise a hand for a break whenever you want.',
      step4Title: 'Follow-up',
      step4Body:
        'We schedule a check-in appointment if treatment requires it, and stay reachable by phone for anything that comes up afterwards.',
      outroQuestion: 'Not sure what you need? We will figure it out together — no charge.',
      statTreatments: '8',
      statTreatmentsLabel: 'Treatments',
      statPainfree: '100%',
      statPainfreeLabel: 'Pain-free',
      statNewPatientsLabel: 'For new patients',
      statHelfo: 'Helfo',
      statHelfoLabel: 'Often covers part',
      repairHeading: 'Repairs that last — without the pain.',
      aestheticHeading: 'Crown, bridge and whitening — in porcelain that lasts.',
      featuredOriginalCopy: 'Regular price 1,340 kr — new patients get 30% off the first examination.',
      featuredFromLabel: 'From',
      stepLabel: 'Step',
      durationMultipleVisits: 'Multiple visits',
      durationCrown: '2 visits · ~2 h',
      durationBridge: '2–3 visits',
    },
    priser: {
      eyebrow: 'Prices',
      heroH1: 'Clear prices. No surprises.',
      heroSub:
        'You always receive an exact estimate before treatment starts. Dental pricing can feel confusing — that is why we offer 30% off the examination for new patients.',
      discount30: '30% off',
      discount30Body: 'Examination for new patients.',
      discount10: '10% off',
      discount10Body: 'For pensioners and students on selected treatments.',
      discountFree: 'Free consultation',
      discountFreeBody:
        'For patients with significant dental anxiety and substantial treatment needs.',
      cancellation:
        'Cancellation: at least 24 hours before the appointment. Late cancellations are charged 75% of the fee (1,500 kr/hour).',
      estimateNote:
        'Prices are guidelines. You always get an exact price at consultation, and an estimate before treatment begins.',
      catExam: 'Examination & prevention',
      catFillings: 'Fillings',
      catRoot: 'Root canal',
      catCrown: 'Crown & bridge',
      catCleaning: 'Cleaning & other',
      catExtraction: 'Extraction',
    },
    bestill: {
      eyebrow: 'Booking',
      heroH1: 'Pick a time that suits you.',
      heroSub:
        'We get back to you to confirm details and give you an exact estimate before treatment. For acute pain: call 67 90 40 90.',
      legendAvailable: 'Available',
      legendLimited: 'Limited',
      legendBooked: 'Booked',
      typeLabel: 'Type of treatment',
      typeAcute: 'Acute · same-day',
      typeRoutine: 'Routine check-up · 30% off for new patients',
      typeFear: 'Dental anxiety · free consultation',
      typeAesthetic: 'Aesthetic · crowns, bridges, veneers, whitening',
      messageLabel: 'Short message',
      messagePlaceholder:
        'What is the visit about? Past experiences, specific wishes?',
      submitCta: 'Send inquiry',
      successTitle: 'Inquiry received',
      successBody: 'We will get back to you within 24 hours.',
      pickDate: 'Pick a date in the calendar',
      callInstead: 'Prefer to call? 67 90 40 90',
    },
    omoss: {
      eyebrow: 'About',
      heroH1: 'A dental clinic in pleasant surroundings.',
      heroSub: 'Well-equipped and modern, central Lørenskog/Solheim.',
      body1:
        'Lørenskog Dental Centre is a well-equipped, modern dental clinic in pleasant surroundings near Lørenskog/Solheim. We offer all types of dental treatment, including aesthetic ones such as crowns, bridges, porcelain veneers and whitening.',
      body2:
        'The clinic places a strong emphasis on treating patients with dental anxiety. Through many years of experience and good communication, we offer pain-free and comfortable treatment for patients with dental fear.',
      body3:
        'We listen to you and your needs. We offer evening and weekend appointments and welcome new patients. For acute problems we offer same-day appointments. Our goal is satisfied patients — through quality in every part of the treatment.',
      hoursTitle: 'Opening hours',
      hoursWeekday: 'Monday–Friday · 08:00–16:00',
      hoursAcute: 'Emergency appointments evenings and weekends by arrangement',
      locationTitle: 'Finding us',
      locationBody:
        'Skårersletta 10, 1473 Lørenskog. Central Solheim, across from Metro-senter. Close to Lillestrøm, Strømmen, Rælingen, Rasta and Skedsmo. Plenty of free parking.',
    },
    kontakt: {
      eyebrow: 'Contact',
      heroH1: 'Call, write, or stop by.',
      heroSub:
        'For acute pain we recommend calling directly. We answer email within 24 hours on weekdays.',
      addressLabel: 'Address',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      hoursLabel: 'Hours',
      parking: 'Across from Metro-senter · Free parking',
    },
    footer: {
      treatments: 'Treatments',
      info: 'Information',
      contact: 'Contact',
      copyright: '© Lørenskog Dental Centre',
    },
  },
};

export type DictionaryShape = Dict;
