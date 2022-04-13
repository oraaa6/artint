// SWITCH BUTTON
let switchButton = document.querySelector('.menu__lang');
function checkSessionStorage() {
    switchButton.addEventListener('click', () => {
        sessionStorage.setItem('switchButton', switchButton.textContent);
        
    })
    return sessionStorage.getItem('switchButton');
}

// NAVIGATION, SLIDER AND FOOTER TRANSLATION
let menuTranslation = {
    pl: {
        t1: 'o nas',
        t2: 'oferta',
        t3: 'realizacje',
        t4: 'aktualności',
        t5: 'kontakt',
        t6: 'en'
    },
    eng: {
        t1: 'about',
        t2: 'offers',
        t3: 'realizations',
        t4: 'news',
        t5: 'contact', 
        t6: 'pl'
    }
}

let footerTranslation = {
    pl: {
        t1: 'Adres naszego biura',
        t2: 'Kontakt',
        t3: 'Obserwuj nas:',
    },
    eng: {
        t1: 'Our office address',
        t2: 'Contact',
        t3: 'Follow us:',
    }
}

let sliderTranslationAbout = {
    pl: 'o nas',
    eng: 'about Us',
}

// SECTION ABOUT US TRANSLATION 

let sectionsAboutTranslation = {
    pl: {
        t1: 'Naszą pasją są ludzie oraz wnętrza. Z połączenia obu składowych powstają niesamowite dzieła, oparte na dialogu oraz emocjach. Od lat dzielimy się z Państwem wiedzą, oraz otwartym umysłem na nowe pomysły. Dom jest najbliższym otoczeniem, w którym przebywamy na co dzien, dlatego zależy nam na każdym z detali. Tworząc kolejne projekty, zwracamy szczególną uwagę na funkcjonalność rozwiązań oraz prostotę ale również stawiamy na wysoką jakość stosowanych materiałów. Dom to miejsce, gdzie zaczynają się miłość, marzenia i nadzieja. Będziemy zaszczyceni biorąc udział w swtorzeniu Państwa Domu.',
        t2: 'Nasz zespół projektowy',
        t3: 'Właściciel',
        t4: 'Głowa całego zespołu. Zajmuje się głównie koordynacją całego zadania, ale również tworzeniem koncepcji projektowych. Uwielbia podróże oraz sporty ekstremalne.',
        t5: 'Specjalista ds. podłóg i drzwi',
        t6: 'Zajmuje się doborem odpowiednich drzwi i podłóg, w zależności od dostępnych funduszy. Dobiera odcienie, materiały, przelicza powierzchnie. Prywatnie tancerka salsy.',
        t7: 'Architekt wnętrz',
        t8: 'Tworzy koncepcje projektowe, wizualizacje wraz z dokumentacją techniczną. Jest odpowiedziala za kontakty z klientami. Swój wolny czsas spędza szydełkując.',
        t9: 'Specjalista ds. funkcjonalności',
        t10: 'Dla niej funkcjonalność układów oraz sprzętów jest na pierwszym miejscu. Dogłębnie analizuje dostępne warianty, żeby wnętrze było użyteczne a jednocześnie proste. Kocha filmy i seriale.',
        t11: 'Specjalista ds. budżetu',
        t12: 'W zespole zajmuje się przeliczaniem kosztów materiałów, oraz przedstawianiem klientom pełnego kosztorysu. Kiedy nastaje potrzeba, to również ucinaniem kosztów. Prywatnie zapalony motocyklista.',
        t13: 'Specjalista ds. kolorów',
        t14: 'Dla niego kolory to bułka z masłem! Dobiera kolory dla całości projektu, począwszy od ścian, mebli, na dodatkach kończąc. Lubi malować obrazy.',
        t15: 'Czym się zamujemy',
        t16: 'ArtInt jako firma projektowa świadczy profesjonane usługi z zakresu projektowania oraz urządzania wnętrz. Tworzymy przestrzenie, które mają zarówno inspirować do działania, jak i stanowić miejsce relaksu, wypoczynku i wyciszenia.',
        t17: 'Aranżacje wnętrz',
        t18: 'Produkcje mebli na wymiar',
        t19: 'Prace remontowe',
        t20: 'Innowacyjne rozwiązania',
        t21: 'Oryginalne pomysły',
        t22: 'Nieograniczone możliwości',
        t23: 'Gustowne wnętrza',
        t24: 'Terminowe wykonanie usług',
        t25: 'Atrakcyjne ceny',
        t26: 'Stuprocentową satysfakcję',
        t27: 'Wykonawstwo',
        t28: 'Obecnie na swoim koncie mamy setki zrealizowanych projektów dla najróżniejszych Klientów - zarówno prywatnych jak i biznesowych. W procesie projektowania stawiamy ma oryginalne, nietuzinkowe rozwiązania, które są obecnie na topie. Wieloletnie doświadczenie w branży pozwala nam na swobodę w działaniu. Nie boimy się dużych oraz nietypowych zleceń.',
        t29: 'Meble na wymiar',
        t30: 'Posiadamy własną pracownie stolarską, dzięki czemu w naszej ofercie znajdują się również meble na wymiar. Jesteśmy otwarci na oryginalne, a nawet trudne do zrealizowania pomysły i wcale nie musimy szukać kompromisów. Dbamy o najwyższą jakość dobieranych materiałów, jednocześnie utrzymując atrakcyjną cenę.',
        t31: 'Dlaczego warto?',
        t32: 'Projekt wykonawczy',
        t33: 'Projekt koncepcyjny',
        t34: 'Nadzór autorski',
        t35: 'Konsultacje projektowe',
        t36: 'Projektowanie zdalne',
        t37: 'Zastępstwo inwestorskie',
        t38: 'lat doświadczenia',
        t39: 'wykonanych wizualizacji',
        t40: '% zadowolonych klientów'

    },
    eng: {
        t1: 'People and interiors are our passion. The combination of both components creates amazing works, based on dialogue and emotions. We have been sharing our knowledge and an open mind for new ideas for years. The house is the closest environment in which we live every day, which is why we care about every detail. When creating new projects, we pay special attention to the functionality of solutions and simplicity, but we also focus on the high quality of the materials used. Home is where love, dreams and hope begin. We will be honored to take part in the creation of your home.',
        t2: 'Our design team',
        t3: 'Owner',
        t4: 'Head of the entire team. It mainly coordinates the entire task, but also creates design concepts. She loves traveling and extreme sports.',
        t5: 'Floor and door specialist',
        t6: 'He selects the appropriate doors and floors, depending on the funds available. Selects shades, materials, calculates surfaces. Privately, a salsa dancer.',
        t7: 'Interior architect',
        t8: 'He creates design concepts, visualizations along with technical documentation. She is responsible for contacts with clients. He spends his free time crocheting',
        t9: 'Functional specialist',
        t10: 'For her, the functionality of systems and equipment is in the first place. It thoroughly analyzes the available variants to make the interior useful and simple at the same time. She loves movies and series.',
        t11: 'Budget specialist',
        t12: 'In the team, he is responsible for calculating the cost of materials and presenting clients with a full cost estimate. When there is a need, it also cuts costs. Privately, an avid motorcyclist.',
        t13: 'Color specialist',
        t14: 'For him, colors are a piece of cake! Selects colors for the entire project, starting from walls, furniture and ending with accessories. He likes to paint pictures.',
        t15: 'What we do',
        t16: 'ArtInt as a design company provides professional services in the field of interior design and decoration. We create spaces that are to both inspire to act and be a place of relaxation, rest and tranquility.',
        t17: 'Interior design',
        t18: 'Custom-made furniture production',
        t19: 'Renovations',
        t20: 'Innovative solutions',
        t21: 'Original ideas',
        t22: 'Endless possibilities',
        t23: 'Tasteful interiors',
        t24: 'Timely performance of services',
        t25: 'Attractive prices',
        t26: 'One hundred percent satisfaction',
        t27: 'Execution',
        t28: 'Currently, we have hundreds of completed projects for various clients - both private and business. In the design process, we focus on original, extraordinary solutions that are currently on top. Many years of experience in the industry allows us to act freely. We are not afraid of large and unusual orders.',
        t29: 'Custom furniture',
        t30: 'We have our own carpentry workshop, thanks to which our offer also includes custom-made furniture. We are open to original and even difficult to implement ideas and we don\'t have to compromise. We take care of the highest quality of selected materials, while maintaining an attractive price.',
        t31: 'Why is it worth it',
        t32: 'Executive project',
        t33: 'Conceptual design',
        t34: 'Author\'s supervision',
        t35: 'Design consultations',
        t36: 'Remote design',
        t37: 'Investor representation',
        t38: 'years of experience',
        t39: 'made visualizations',
        t40: '% of satisfied customers'
    }
}

// SECTION OFFER TRANSLATION

let sliderTranslationOffer = {
    pl: 'oferta',
    eng: 'offer',
}


let sectionsOfferTranslation = {
    pl: {
        t1: 'Wybierz swój pakiet',
        t2: 'Pakiet podstawowy',
        t3: "*cena dla mieszkań o powierzchni większej niż 30m²",
        t4: 'Pakiet podstawowy dedykowany jest dla osób, które cenią sobie prostotę wykonania, a jednocześnie stawiają na funkcjonalne wykorzystanie dostępnej przestrzeni. Idealnie nadaje się dla mieszkania pod inwestycję.',
        t5: 'Pakiet pełny',
        t6: '*cena dla mieszkań o powierzchni większej niż 40m²',
        t7: 'Pakiet pełny idealnie sprawdzi się osób, chcących wykończyć wnętrze ze smakiem, według najnowszych trendów, jednocześnie nie rujnując domowego budżetu. Ten pakiet dedykowny jest w szczególności dla rodzin z dziećmi.',
        t8: 'Pakiet premium',
        t9: '*cena dla mieszkań o powierzchni większej niż 50m²',
        t10: 'Pakiet premium jest dla osób wymagających, ceniących sobie najwyższą jakość materiałów, a także lubiących nietuzinkowe rozwiązania. Nasi projektanci gotowi są podjąć wyzwanie każdego oryginalnego pomysłu.',
        t11: 'Projekt kompeksowy',
        t12: 'Na zawrtość projetu kompleksowego składają sie wszystkie wizualizacje, pełna dokumentacja wykonawcza, a także kosztorys wraz z zestawieniem materiałów.',
        t13: 'Zapytaj o szczegóły',
        t14: 'Projekt koncepcyjny',
        t15: 'Zawiera ogólną wizje wykończenia wnętrz, oparte na wykonanych wizualizacjach, z podstawową listą materiałów.',
        t16: 'Zapytaj o szczegóły',
        t17: 'Projekt online',
        t18: 'Projek on-line polega zaprojektowaniu wnętrz na podstawie przesłanej przez Klienta dokumentacji (rzutów, zdjeć). Całość spotkań z Klientem odbywa się poprzez popularne komunikatory.',
        t19: 'Zapytaj o szczegóły',
        t20: 'Etapy',
        
    },
    eng: {
        t1: 'Choose your package',
        t2: 'Basic package',
        t3: "*price for apartments with an area of ​​more than 30m²",
        t4: 'The basic package is dedicated to people who appreciate the simplicity of execution, and at the same time focus on the functional use of the available space. Ideally suited for an apartment for investment.',
        t5: 'Full package',
        t6: '*price for apartments with an area of ​​more than 40m²',
        t7: 'The full package is perfect for people who want to finish the interior with taste, according to the latest trends, without ruining the home budget. This package is especially dedicated to families with children.',
        t8: 'Premium package',
        t9: '*price for apartments with an area of ​​more than 50m²',
        t10: 'The premium package is for demanding people who value the highest quality of materials and who like unusual solutions. Our designers are ready to take on the challenge of any original idea.',
        t11: 'Full project',
        t12: 'The content of a comprehensive project consists of all visualizations, full executive documentation, as well as a cost estimate with a list of materials.',
        t13: 'Ask for details',
        t14: 'Conceptual project',
        t15: 'It contains a general vision of interior finishing, based on the visualizations made, with a basic list of materials.',
        t16: 'Ask for details',
        t17: 'Online project',
        t18: 'The online project consists in designing interiors based on the documentation sent by the client (projections, photos). All meetings with the client take place via popular communicators.',
        t19: 'Ask for details',
        t20: 'Stages',
    }
}

// SECTION REALIZATIONS 

let sliderTranslationRealizations = {
    pl: 'realizacje',
    eng: 'realizations',
}

let sectionsRealizationsTranslation = {
    pl: {
        t1: 'Zobacz nasze wnętrza',
        t2: 'Dom w Łukawcu',
        t3: 'Mieszkanie w Krakowie',
        t4: 'Dom w Poznaniu',
        t5: 'Taras domu w Rzeszowie',
        t6: 'Apartament we Wrocławiu',
        t7: 'Dom w Pogwizdowie',
        t8: 'Dom w Warszawie',
        t9: 'Kawalerka w Łodzi',
        t10: 'Dom w Gdańsku', 
        t11: 'Apartament w Płocku',
        t12: 'Kawalerka w Krakowie',
        t13: 'Dom w Gdyni',
        t14: 'Mieszkanie w Toruniu',
        t15: 'Apartament w Sopocie',
        t16: 'Mieszkanie we Włocławku',
        t17: 'Mieszkanie w Lublinie',
        t18: 'Kawalerka w Bydgoszczy',
        t19: 'Dom w Bytomiu',
        t20: 'Dom w Katowicach',
        t21: 'Apartament w Łodzi'
    },
    eng: {
        t1: 'See our interiors',
        t2: 'House in Lukawiec',
        t3: 'Flat in Krakow',
        t4: 'House in Poznan',
        t5: 'Terrace of the house in Rzeszow',
        t6: 'Apartment in Wroclaw',
        t7: 'House in Pogwizdow',
        t8: 'House in Warszawa',
        t9: 'Studio apartment in Lodz',
        t10: 'House in Gdansk', 
        t11: 'Apartment in Plock',
        t12: 'Studio apartment in Krakow',
        t13: 'House in Gdynia',
        t14: 'Flat in Torun',
        t15: 'Studio apartment in Sopot',
        t16: 'Flat in Wloclawek',
        t17: 'Flat in Lublin',
        t18: 'Studio apartment in Bydgoszcz',
        t19: 'House in Bytom',
        t20: 'House in Katowice',
        t21: 'Studio apartment in Lodz'
    }
}

// SECTION NEWS

let sliderTranslationNews = {
    pl: 'aktualności',
    eng: 'news',
}


let sectionsNewsTranslation = {
    pl: {
        t1: 'Nowości ze świata designu',
        t2: 'Mar 22',
        t3: 'Rośliny w pomieszczeniach',
        t4: 'Od dawna wiadomo, że obecność roślin w naszych pomieszczeniach, ożywia otoczenie. Jakie gatunki nadają się do ciemnych, a jakie do jasnych wnętrz? Jakie rośliny nie potrzebują słońca?',
        t5: 'Czytaj więcej',
        t6: 'Mar 22',
        t7: 'Wanna czy prysznic?',
        t8: 'Szybki prysznic, czy relaksująca wanna? Co chętniej wybierają polacy w 2022 roku? Z jakimi kosztami trzeba się liczyć, decydując się na wannę wolnostojącą?',
        t9: 'Czytaj więcej',
        t10: 'Lut 22',
        t11: 'Rozmowa z Anną Mysz',
        t12: 'Rozmowa z Anną Mysz - projektantką wnętrz. Kiedy zdecydować się projekt mieszkania? Z jakimi kosztami trzeba się liczyć? Na te i inne pytania odpowie pani Anna.',
        t13: 'Czytaj więcej',
        t14: 'Sty 22',
        t15: 'Kuchnia z salonem czy osobno?',
        t16: 'Kuchnia z salonem, a może osobno? Obecnie panuje trend łączenia tych pomieszczeń w jedno. Czy decydując się na takie wnętrze, znamy konsekwencje?',
        t17: 'Czytaj więcej',
        t18: 'Gru 21',
        t19: 'Raport 2021 - ceny mieszkań',
        t20: 'Od kilku lat obserwujemy sukcesywny wzrost cen mieszkań. Czym to jest spowodowane? Kiedy ceny się ustabilizują? Najnowszy Raport 2021 - ceny mieszkań',
        t21: 'Czytaj więcej',
        t22: 'Lis 21',
        t23: 'Nowinki technologiczne 2021',
        t24: 'Inteligentne rolety, gniazdka na bluetooth czy kamera w lodówce? Które nowinki technologiczne są najchętniej wybierane do inteligetnych domów w 2021?',
        t25: 'Czytaj więcej',
        t26: 'Wrz 21',
        t27: 'Rozmowa z Marcinem Lampą',
        t28: 'Styl loftowy czy skandynawski? A może ich połączenie? Dlaczego warto oglądać inspiracje? Rozmowa z Marcinem Lampą - architektem wnętrz.',
        t29: 'Czytaj więcej',
        t30: 'Sie 21',
        t31: 'Jak wizualnie powiekszyć salon',
        t32: 'Mieszkanie w bloku - dla innych wygoda, a dla innych wnętrzarska zmora. Salony w mieszkaniach bardzo często są małe oraz nieustawne. Doradzamy jak wizualnie zwiększyć salon.',
        t33: 'Czytaj więcej',
        t34: 'Cze 21',
        t35: 'Eko design - wykład J.Murka dla UW',
        t36: '5 czerwca 2021 odbył się wykład J. Murka dla UW pt. "Eko design". Ukazał on w jak prosty sposób design może pozostać w zgodzie z naturą. Zachęcamy do lektury.',
        t37: 'Czytaj więcej',
        t38: 'Mar 21',
        t39: 'Jak zaprojektować kuchnie',
        t40: 'Zaprojektowanie kuchni nie należy do najłatwiejszych rzeczy. Pod uwagę należy wziąć nie tylko kwestie wizualne, ale przede wszystkim funkcjonalne. Podpowiadamy jak właściwie zaprojektować kuchnie.',
        t41: 'Czytaj więcej',
        t42: 'Sty 21',
        t43: 'Panele czy parkiet?',
        t44: 'Podłogi w mieszkaniu to jeden z większych wydatków, a więc warto się zastanowić. Czy cena zawsze idzie w parze z jakością? Czas roztrzygnąć odwieczny spór: panele czy parkiet?',
        t45: 'Czytaj więcej',
        t46: 'Gru 20',
        t47: 'Armatura do łazienki',
        t48: 'Armatura do łazienki może nas nieraz przytłoczyć - szczególnie mnogością wyboru. Jak wybrać coś, co jest jednocześnie estetyczne i funkcjonalne? Jak dobrać wysokości montażu armatury?',
        t49: 'Czytaj więcej',
        t50: 'Wrz 20',
        t51: 'Targi architektów wnętrz 2020',
        t52: '10 września 2020 roku w Warszawie zapraszamy na międzynarodowe targi dla architektów wnętrz. W programie m.in. wystawy, prelekcje, darmowe broszury i porady. Wszystkich zainteresowanych zapraszamy!',
        t53: 'Czytaj więcej',
        t54: 'Lip 20',
        t55: 'Wybór płytek',
        t56: 'Wybór płytek nie należy do prostych decyzji. Jest to bowiem inwestycja na lata. Podpowiadamy czym kierować się wyborze płytek, jak poradzić sobie z mnogością produktów oraz gdzie znaleźć sprawdzonych fachowców.',
        t57: 'Czytaj więcej',
        t58: 'Mar 20',
        t59: 'Oświetlenie w domu',
        t60: 'Niekażdy wie, jak oświetlenie odgrywa ogromną rolę w naszym domu. To ono sprawia, czy pomieszczenie jest uznawane jako przytulne, lub idealne miejsce do pracy.',
        t61: 'Czytaj więcej',
        t62: 'Sty 20',
        t63: 'Jak dobrać kolor ścian?',
        t64: 'Większość ludzi decyduje się na jasny kolor ścian. Jednak nie każdemu wnętrzu pasują delikatne odcienie. Dlaczego warto korzystać z próbników? Jak dobrać ilość potrzebnej farby?',
        t65: 'Czytaj więcej',
        t66: 'Gru 19',
        t67: 'Dodatki do wnętrz',
        t68: 'Niektóre dodatki, figurki czy obrazy potrafią całkowicie odmienić nasze wnętrza. Jednak gdy jest ich za dużo, pomieszczenie traci na swoim uroku. Podpowiadamy gdzie jest ta idealna granica między dobrym smakiem, a przesadą.',
        t69: 'Czytaj więcej',
        t70: 'Paź 19',
        t71: 'Mieszkanie w stylu loft',
        t72: 'Podpowiadamy jak urządzić mieszkanie w stylu loftowym, gdzie szukać mebli oraz dodatków, oraz na co warto uważać podczas wykańczania mieszkania w takim stylu. Zapraszamy do lektury.',
        t73: 'Czytaj więcej',
        t74: 'Wrz 19',
        t75: 'Zasłony w domu',
        t76: 'Zasłony - hit? A może przeżytek? Coraz więcej ludzi rezygnuje w domu z zasłon na rzecz rolet, jednak czy jest to odpowiedni kierunek? Czy brak zasłon nie sprawi, iż wnętrze stanie się nudne, oraz zimne?',
        t77: 'Czytaj więcej',
        t78: 'Sie 19',
        t79: 'Ranking drzwi 2019',
        t80: '1 sierpnia 2019 roku wyszedł nowy ranking drzwi. Jakie drzwi są najczęściej wybierane? Jaki jest średni koszt jednej pary drzwi ze standardową ościeżnicą? Czy lepiej kupować w marketach czy salonach drzwi?',
        t81: 'Czytaj więcej'
    },
    eng: {
        t1: 'News from the world of design',
        t2: 'Mar 22',
        t3: 'Plants in interiors',
        t4: 'It has long been known that the presence of plants in our rooms enlivens the surroundings. Which species are suitable for dark and which are suitable for light interiors? Which plants don\'t need sun? ',
        t5: 'Read more',
        t6: 'Mar 22',
        t7: 'Bathtub or shower?',
        t8: 'A quick shower or a relaxing bathtub? What are Poles more likely to choose in 2022? What costs do you have to take into account when choosing a free-standing bathtub?',
        t9: 'Read more',
        t10: 'Feb 22',
        t11: 'Interview with Anna Mysz',
        t12: 'Interview with Anna Mysz - interior designer. When to decide on an apartment design? What costs do you have to reckon with? Anna will answer these and other questions.',
        t13: 'Read more',
        t14: 'Jan 22',
        t15: 'Kitchen with a living room or separately?',
        t16: 'A kitchen with a living room, or maybe a separate one? Currently, there is a trend of combining these rooms into one. Do we know the consequences when deciding on such an interior?',
        t17: 'Read more',
        t18: 'Dec 21',
        t19: 'Report 2021 - housing prices',
        t20: 'For several years, we have been observing a gradual increase in apartment prices. What is it caused by? When will prices stabilize? The latest 2021 Report - apartment prices',
        t21: 'Read more',
        t22: 'Nov 21',
        t23: 'Technological news 2021',
        t24: 'Smart blinds, bluetooth sockets or a camera in the refrigerator? Which technological innovations are most often chosen for smart homes in 2021?',
        t25: 'Read more',
        t26: 'Sep 21',
        t27: 'Interview with Marcin Lampa',
        t28: 'Loft or Scandinavian style? Or maybe their combination? Why is it worth watching inspiration? Interview with Marcin Lampa - interior designer.',
        t29: 'Read more',
        t30: 'Aug 21',
        t31: 'How to visually enlarge the living room',
        t32: 'A flat in a block of flats - convenience for others, and interior design bane for others. Living rooms in apartments are very often small and incessant. We advise on how to visually increase the salon.',
        t33: 'Read more',
        t34: 'Jun 21',
        t35: 'Eco design - a lecture by J.Murek for the UW',
        t36: 'On June 5, 2021, J. Murek gave a lecture for the University of Warsaw, entitled "Eco design". It showed in a simple way how design can remain in harmony with nature. We encourage you to read.',
        t37: 'Read more',
        t38: 'Mar 21',
        t39: 'How to design kitchens',
        t40: 'Designing a kitchen is not the easiest thing to do. You should take into account not only visual, but most of all functional issues. We advise on how to properly design kitchens.',
        t41: 'Read more',
        t42: 'Jan 21',
        t43: 'Panels or parquet?',
        t44: 'Floors in an apartment are one of the biggest expenses, so it\'s worth considering. Does price always go hand in hand with quality Time to settle the age-old dispute: panels or parquet?',
        t45: 'Read more',
        t46: 'Dec 20',
        t47: 'Bathroom fittings',
        t48: 'Bathroom fittings can sometimes overwhelm us - especially with the multitude of choices. How to choose something that is both aesthetic and functional? How to choose the height of the fittings installation?',
        t49: 'Read more',
        t50: 'Sep 20',
        t51: 'Interior designers fair 2020',
        t52: 'On September 10, 2020 in Warsaw, we invite you to the international fair for interior designers. The program includes exhibitions, lectures, free brochures and advice. We invite all interested parties!',
        t53: 'Read more',
        t54: 'Jul 20',
        t55: 'The choice of tiles',
        t56: 'Choosing tiles is not an easy decision. It is an investment for years. We advise you on what to consider when choosing tiles, how to deal with the multitude of products and where to find proven professionals.',
        t57: 'Read more',
        t58: 'Mar 20',
        t59: 'Lighting in the house',
        t60: 'Not everyone knows how lighting plays a huge role in our home. It makes the room feel cozy or a perfect place to work.',
        t61: 'Read more',
        t62: 'Jan 20',
        t63: 'How to choose the color of the walls?',
        t64: 'Most people choose a light color for their walls. However, not every interior is suitable for delicate shades. Why is it worth using samplers? How to choose the amount of paint needed?',
        t65: 'Read more',
        t66: 'Dec 19',
        t67: 'Interior accessories',
        t68: 'Some accessories, figurines or paintings can completely change our interiors. However, when there are too many of them, the room loses its charm. We advise where the perfect line between good taste and exaggeration is.',
        t69: 'Read more',
        t70: 'Oct 19',
        t71: 'A loft-style apartment',
        t72: 'We advise you how to arrange a loft-style apartment, where to look for furniture and accessories, and what to watch out for when finishing the apartment in this style. We invite you to read.',
        t73: 'Read more',
        t74: 'Sep 19',
        t75: 'Curtains at home',
        t76: 'Curtains - a hit? Or maybe a relic? More and more people are giving up curtains at home in favor of roller blinds, but is this the right direction? Will the lack of curtains make the interior boring and cold?',
        t77: 'Read more',
        t78: 'Aug 19',
        t79: '2019 door ranking',
        t80: 'On August 1, 2019, a new door ranking was released. What are the most frequently chosen doors? What is the average cost of one pair of doors with a standard door frame? Is it better to buy doors in supermarkets or showrooms?',
        t81: 'Read more'
    }
}

// SECTION NEWS

let sliderTranslationContact = {
    pl: 'kontakt',
    eng: 'contact',
}

let sectionsContactTranslation = {
    pl: {
        t1: 'Napisz do nas',
        t2: 'Opinie',
        t3: 'Dodaj opinie',
        t4: 'Oceń nas:',
    },
    eng: {
        t1: 'Write to us',
        t2: 'Opinions',
        t3: 'Add opinion',
        t4: 'Rate us:',
    }
}

let inputsPlaceholder = {
    pl: {
        t1: 'Imię i nazwisko',
        t2: 'Twoja wiadomość',
        t3: 'Imię i nazwisko',
        t4: 'Twoja opinia'
    },
    eng: {
        t1: 'First and last name',
        t2: 'Your message',
        t3: 'First and last name',
        t4: 'Your opinion'
    }
}

let submitValues = {
    pl: {
        t1: 'Wyślij',
        t2: 'Dodaj'
    },
    eng: {
        t1: 'Send',
        t2: 'Add'
    }
}

let thankYou = {
    pl: {
        t1: 'Dziękujemy za wiadomość!',
        t2: 'Wróć do strony głównej'
    },
    eng: {
        t1: 'Thank You for your message!',
        t2: 'Go back to the main page'
    }
}