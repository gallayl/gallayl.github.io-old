define('models/enums',["require", "exports"], function (require, exports) {
    "use strict";
    var LocalizationLanguage;
    (function (LocalizationLanguage) {
        LocalizationLanguage[LocalizationLanguage["English"] = 0] = "English";
        LocalizationLanguage[LocalizationLanguage["Hungarian"] = 1] = "Hungarian";
    })(LocalizationLanguage = exports.LocalizationLanguage || (exports.LocalizationLanguage = {}));
});

define('models/types',["require", "exports"], function (require, exports) {
    "use strict";
});

define('models/localizedresource',["require", "exports"], function (require, exports) {
    "use strict";
    class LocalizedResource {
    }
    exports.LocalizedResource = LocalizedResource;
});

define('services/localizationservice',["require", "exports", "../models/enums"], function (require, exports, enums_1) {
    "use strict";
    class LocalizationService {
        static NoLocalization(key) {
            let noLoc = {
                Key: "NoLocalization",
                Values: [
                    [enums_1.LocalizationLanguage.English, `!!No localization available for key "${key}" !!`],
                    [enums_1.LocalizationLanguage.Hungarian, `!!Nincs elérhető fordítás a "${key}" kulcshoz!!`]
                ]
            };
            return noLoc;
        }
        get currentLanguage() {
            if (this._currentLanguage)
                return this._currentLanguage;
            let fromLocalStorage = enums_1.LocalizationLanguage[localStorage.getItem(LocalizationService.LocalStorageKey)];
            if (localStorage.getItem(LocalizationService.LocalStorageKey)) {
                this._currentLanguage = fromLocalStorage;
                return fromLocalStorage;
            }
            let fromBrowser = navigator.language.indexOf("hu") === 0 ? enums_1.LocalizationLanguage.Hungarian : enums_1.LocalizationLanguage.English;
            this._currentLanguage = fromBrowser;
        }
        set currentLanguage(v) {
            localStorage.setItem(LocalizationService.LocalStorageKey, enums_1.LocalizationLanguage[v]);
            this._currentLanguage = v;
        }
        Get(key) {
            let found = LocalizationService.Localizations.find(loc => {
                return loc.Key === key;
            }) || LocalizationService.NoLocalization(key);
            let localizedValue = found.Values.find(val => {
                return val[0] === this.currentLanguage;
            });
            return localizedValue[1];
        }
    }
    LocalizationService.LocalStorageKey = "CvTemplate.Localization";
    LocalizationService.Localizations = [
        {
            Key: "date-now",
            Values: [
                [enums_1.LocalizationLanguage.English, "now"],
                [enums_1.LocalizationLanguage.Hungarian, "jelenleg"]
            ]
        },
        {
            Key: "cv-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "CV"],
                [enums_1.LocalizationLanguage.Hungarian, "Önéletrajz"]
            ]
        },
        {
            Key: "owner-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Software Developer"],
                [enums_1.LocalizationLanguage.Hungarian, "Fejlesztő"]
            ]
        },
        {
            Key: "print",
            Values: [
                [enums_1.LocalizationLanguage.English, "Print"],
                [enums_1.LocalizationLanguage.Hungarian, "Nyomtatás"]
            ]
        },
        {
            Key: "schools-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Schools and education"],
                [enums_1.LocalizationLanguage.Hungarian, "Oktatás, tanulmányok"]
            ]
        },
        {
            Key: "school-vocational-generic, school-okj-general-programming",
            Values: [
                [enums_1.LocalizationLanguage.English, "Vocational, General programming - NQR"],
                [enums_1.LocalizationLanguage.Hungarian, "Érettségi, Általános programozó - OKJ"]
            ]
        },
        {
            Key: "school-web-development",
            Values: [
                [enums_1.LocalizationLanguage.English, "WEB Development - NQR"],
                [enums_1.LocalizationLanguage.Hungarian, "WEB Fejlesztő - OKJ"]
            ]
        },
        {
            Key: "school-ms70-480",
            Values: [
                [enums_1.LocalizationLanguage.English, "Programming in HTML5 with JavaScript and CSS3"],
                [enums_1.LocalizationLanguage.Hungarian, "HTML5, JavaScript és CSS3 fejlesztés"]
            ]
        },
        {
            Key: "button-close",
            Values: [
                [enums_1.LocalizationLanguage.English, "Close"],
                [enums_1.LocalizationLanguage.Hungarian, "Bezár"]
            ]
        },
        {
            Key: "jobs-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Career"],
                [enums_1.LocalizationLanguage.Hungarian, "Munkatapasztalatok"]
            ]
        },
        {
            Key: "job-digic-responsibilities",
            Values: [
                [enums_1.LocalizationLanguage.English, "Developing and testing of an in-house production-management application using ASP.NET, Entity Framework, OData, Angular2 / Aurelia.IO and WebPack. Set up and maintain Continuous Delivery solutions with Team Foundation Server. Developing small individual systems."],
                [enums_1.LocalizationLanguage.Hungarian, "A cég saját fejlesztésű gyártásirányítási szoftverének a fejlesztése és tesztelése ASP.NET, Entity Framework, OData, Angular2 / Aurelia.IO és WebPack alapokon, kisebb különálló webalkalmazások fejlesztése"]
            ]
        },
        {
            Key: "digic-project-dProject-description",
            Values: [
                [enums_1.LocalizationLanguage.English, "The in-house production management software of Digic, used for almost every area in the company including task management, communication, HR processes and distributed rendering task management."],
                [enums_1.LocalizationLanguage.Hungarian, "A Digic saját fejlesztésű gyártásirányítási szoftvere, a vállalat szinte összes területét érinti, ide értve a belső feladatkezelést, kommunikációt, HR folyamatokat és a renderek kiosztását."]
            ]
        },
        {
            Key: "digic-project-DPS-description",
            Values: [
                [enums_1.LocalizationLanguage.English, "DPS(dProject Services) has been started as a public in-house RESTful API for dProject, now it has an Angular2-based modern frontend UI aswell."],
                [enums_1.LocalizationLanguage.Hungarian, "A DPS(dProject Services) egy publikus REST API-ként indult, jelenleg rendelkezik egy modernebb frontend-el is Angular2 alapokon."]
            ]
        },
        {
            Key: "digic-project-TER-description",
            Values: [
                [enums_1.LocalizationLanguage.English, "The TER (Performance Review System) is the company's own employee rating system."],
                [enums_1.LocalizationLanguage.Hungarian, "A TER (Teljesítmény Értékelési Rendszer) a vállalat belső fejlesztésű, egyedi folyamatokra épülő teljesítmény értékelési rendszere."]
            ]
        },
        {
            Key: "job-sensenet-responsibilities",
            Values: [
                [enums_1.LocalizationLanguage.English, "Developing an Enterprise Content Management with online document viewer feature, bulk import / export features with high scalability"],
                [enums_1.LocalizationLanguage.Hungarian, "Nagyvállalati tartalomkezelő szoftver fejlesztése, online dokumentum előnézetek, tömeges import / export funkciókkal"]
            ]
        },
        {
            Key: "job-tesco-responsibilities",
            Values: [
                [enums_1.LocalizationLanguage.English, "Managing user accesses for all the systems, participating in integrating new systems and solutions to the company workflow. Created command line tools for IT Support (AD management and reporting, bulk user management, etc...). Developed some independent web applications for managing business processes using"],
                [enums_1.LocalizationLanguage.Hungarian, "A felhasználók hozzáféréseinek kezelése az összes vállalati rendszerhez, részvétel az új rendszerek és IT megoldások bevezetésében és a vállalati folyamatokba való beillesztésében. Konzolos tool-ok fejlesztése az IT Support csapat részére (riportálás, bulk műveletek, stb...). Webes alkalmazások fejlesztése belső folyamatok kiszolgálására."]
            ]
        },
        {
            Key: "tesco-project-itr-description",
            Values: [
                [enums_1.LocalizationLanguage.English, "This web application is for managing all of the (beforehand paper-based) IT Requests from the submitting to the closure. It includes a PC Device inventory and a training journal (which is a prerequisite for some application request), the data fields and the workflow phases can change dynamically. It also includes an interface to the HR systems for automatic approver calculation."],
                [enums_1.LocalizationLanguage.Hungarian, "A szoftver a PC Support részére korábban papír- illetve e-mail alapon beérkezett eszköz- és hozzáférés igényeket ülteti át elektronikus formába. A szoftver képes több adatforrásból szinkronizálni a dolgozói adatokat illetve a hierarchiát, az igénylésekhez szükséges adatok, illetve a jóváhagyási lánc az adminisztrátorok által dinamikusan szerkeszthetőek, illetve a szoftver tárolja a különböző eszköz- és vizsgaadatokat is."]
            ]
        },
        {
            Key: "tesco-project-phone-description",
            Values: [
                [enums_1.LocalizationLanguage.English, "With this software, the private and company calls are separable and accountable. It includes a corporate phonebook and helps to administrate the device handovers and takeover."],
                [enums_1.LocalizationLanguage.Hungarian, "A szoftver segítségével a vállalat dolgozói hozzáférhetnek a vállalati telefonkönyvhöz, nyilvántarthatják a telefonköltségeiket, valamint vállalati szinten kimutathatóak az egyes területek telefonköltségei."]
            ]
        },
        {
            Key: "tesco-project-poolcars-description",
            Values: [
                [enums_1.LocalizationLanguage.English, "The application was developed to manage the company’s pool car reservation processes for the Fleet Management Department"],
                [enums_1.LocalizationLanguage.Hungarian, "A webalkalmazás a vállalati kulcsosautó-foglalási folyamatokat és az ezzel járó adminisztratív teendőket segíti a Flottakezelési osztály számára."]
            ]
        },
        {
            Key: "job-gyk-description-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Media watching, administrative tasks, system maintenance, supporting of the implementation of a new processes, communicating with the customers, team leadership"],
                [enums_1.LocalizationLanguage.Hungarian, "Médiafigyelés, adminisztrációs feladatok, rendszerkarbantartás, új folyamatok bevezetésének támogatása, ügyfelekkel való napi kapcsolattartás, csoportvezetés"]
            ]
        },
        {
            Key: "job-gyk-description-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Media watching, administrative tasks, system maintenance, supporting of the implementation of a new processes, communicating with the customers, team leadership"],
                [enums_1.LocalizationLanguage.Hungarian, "Médiafigyelés, adminisztrációs feladatok, rendszerkarbantartás, új folyamatok bevezetésének támogatása, ügyfelekkel való napi kapcsolattartás, csoportvezetés"]
            ]
        },
        {
            Key: "skills-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Skills"],
                [enums_1.LocalizationLanguage.Hungarian, "Ismeretek"]
            ]
        },
        {
            Key: "languages-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Languages"],
                [enums_1.LocalizationLanguage.Hungarian, "Nyelvismeret"]
            ]
        },
        {
            Key: "language-hungarian",
            Values: [
                [enums_1.LocalizationLanguage.English, "Hungarian"],
                [enums_1.LocalizationLanguage.Hungarian, "Magyar"]
            ]
        },
        {
            Key: "language-english",
            Values: [
                [enums_1.LocalizationLanguage.English, "English"],
                [enums_1.LocalizationLanguage.Hungarian, "Angol"]
            ]
        },
        {
            Key: "language-german",
            Values: [
                [enums_1.LocalizationLanguage.English, "German"],
                [enums_1.LocalizationLanguage.Hungarian, "Német"]
            ]
        },
        {
            Key: "language-skill-Elementary",
            Values: [
                [enums_1.LocalizationLanguage.English, "Elementary"],
                [enums_1.LocalizationLanguage.Hungarian, "Alapszintű"]
            ]
        },
        {
            Key: "language-skill-Limited",
            Values: [
                [enums_1.LocalizationLanguage.English, "Limited"],
                [enums_1.LocalizationLanguage.Hungarian, "Korlátozott"]
            ]
        },
        {
            Key: "language-skill-Professional",
            Values: [
                [enums_1.LocalizationLanguage.English, "Professional"],
                [enums_1.LocalizationLanguage.Hungarian, "Szakmai"]
            ]
        },
        {
            Key: "language-skill-Native",
            Values: [
                [enums_1.LocalizationLanguage.English, "Native"],
                [enums_1.LocalizationLanguage.Hungarian, "Anyanyelvi szint"]
            ]
        },
        {
            Key: "skill-programming languages",
            Values: [
                [enums_1.LocalizationLanguage.English, "Programming languages"],
                [enums_1.LocalizationLanguage.Hungarian, "Programnyelvek"]
            ]
        },
        {
            Key: "skill-frameworks-and-libraries",
            Values: [
                [enums_1.LocalizationLanguage.English, "Frameworks and libraries"],
                [enums_1.LocalizationLanguage.Hungarian, "Keretrendszerek, programkönyvtárak"]
            ]
        },
        {
            Key: "skill-productivity-tools",
            Values: [
                [enums_1.LocalizationLanguage.English, "Other utilities, debug- and productivity tools"],
                [enums_1.LocalizationLanguage.Hungarian, "Egyéb, debug produktivitásnövelő eszközök"]
            ]
        },
        {
            Key: "skill-version-control-name",
            Values: [
                [enums_1.LocalizationLanguage.English, "Version control systems"],
                [enums_1.LocalizationLanguage.Hungarian, "Verziókövető rendszerek"]
            ]
        },
        {
            Key: "skill-integrated-development-environment",
            Values: [
                [enums_1.LocalizationLanguage.English, "Integrated Development Environments"],
                [enums_1.LocalizationLanguage.Hungarian, "Feljesztői környezetek"]
            ]
        },
        {
            Key: "hobbies-title",
            Values: [
                [enums_1.LocalizationLanguage.English, "Hobbies"],
                [enums_1.LocalizationLanguage.Hungarian, "Hobbik"]
            ]
        },
        {
            Key: "hobby-music",
            Values: [
                [enums_1.LocalizationLanguage.English, "Music"],
                [enums_1.LocalizationLanguage.Hungarian, "Music"]
            ]
        },
        {
            Key: "hobby-bands",
            Values: [
                [enums_1.LocalizationLanguage.English, "Bands"],
                [enums_1.LocalizationLanguage.Hungarian, "Bandák"]
            ]
        },
        {
            Key: "hobby-iot",
            Values: [
                [enums_1.LocalizationLanguage.English, "IOT projects"],
                [enums_1.LocalizationLanguage.Hungarian, "IOT Projektek"]
            ]
        },
        {
            Key: "hobby-books",
            Values: [
                [enums_1.LocalizationLanguage.English, "Books"],
                [enums_1.LocalizationLanguage.Hungarian, "Könyvek"]
            ]
        },
        {
            Key: "hobby-gaming",
            Values: [
                [enums_1.LocalizationLanguage.English, "PC Gaming"],
                [enums_1.LocalizationLanguage.Hungarian, "PC Játékok"]
            ]
        },
        {
            Key: "hobby-opensource",
            Values: [
                [enums_1.LocalizationLanguage.English, "Open source development"],
                [enums_1.LocalizationLanguage.Hungarian, "Nyílt forráskódú fejlesztések"]
            ]
        },
    ];
    exports.LocalizationService = LocalizationService;
});

define('interfaces/ihaslocation',["require", "exports"], function (require, exports) {
    "use strict";
});

define('models/tag',["require", "exports"], function (require, exports) {
    "use strict";
    class Tag {
    }
    exports.Tag = Tag;
});

define('models/hobby',["require", "exports"], function (require, exports) {
    "use strict";
    class Hobby {
    }
    exports.Hobby = Hobby;
});

define('models/project',["require", "exports"], function (require, exports) {
    "use strict";
    class Project {
    }
    exports.Project = Project;
});

define('models/employer',["require", "exports"], function (require, exports) {
    "use strict";
    class Employer {
    }
    exports.Employer = Employer;
});

define('models/job',["require", "exports"], function (require, exports) {
    "use strict";
    class Job {
    }
    exports.Job = Job;
});

define('models/school',["require", "exports"], function (require, exports) {
    "use strict";
    class School {
    }
    exports.School = School;
});

define('models/owner',["require", "exports"], function (require, exports) {
    "use strict";
    class Owner {
    }
    exports.Owner = Owner;
});

define('services/ownerservice',["require", "exports"], function (require, exports) {
    "use strict";
    class OwnerService {
        Get() {
            return {
                Name: "Gallay Lajos",
                Title: 'owner-title',
                Address: "1144 Budapest, Rákosfalva park 4.",
                Email: "gallay.lajos@gmail.com",
                BirthDate: new Date("1985-09-25"),
                BirthPlace: "Budapest, Hungary",
                Phone: "+36 20 530 7414",
                PhotoURL: "./assets/lalo.jpg",
                LinkedinProfileUrl: "https://www.linkedin.com/in/gallay-lajos-3b735185",
                GithubProfileUrl: "https://github.com/gallayl",
                StackOwerflowProfileUrl: "http://stackoverflow.com/users/7418775/lajos-gallay",
                GooglePlusProfileUrl: "https://plus.google.com/106743540419438515130",
                FacebookProfileUrl: "https://www.facebook.com/lajos.gallay",
                LocationQuery: "Budapest,+R%C3%A1kosfalva+park"
            };
        }
    }
    exports.OwnerService = OwnerService;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "./services/localizationservice", "./services/ownerservice", "aurelia-framework"], function (require, exports, localizationservice_1, ownerservice_1, aurelia_framework_1) {
    "use strict";
    let App = class App {
        constructor(owner, localize) {
            this.owner = owner;
            this.localize = localize;
        }
        configureRouter(config, router) {
            this.router = router;
            config.title = this.localize.Get('cv-title');
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'home/home', title: `${this.owner.Get().Name}` }
            ]);
        }
    };
    App = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [ownerservice_1.OwnerService, localizationservice_1.LocalizationService])
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.use.plugin('aurelia-materialize-bridge', b => b.useAll());
        aurelia.start().then(() => aurelia.setRoot());
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/cv-header',["require", "exports", "../models/enums", "../services/localizationservice", "aurelia-framework", "../models/owner", "aurelia-templating-resources"], function (require, exports, enums_1, localizationservice_1, aurelia_framework_1, owner_1, aurelia_templating_resources_1) {
    "use strict";
    let CvHeader = class CvHeader {
        constructor(localization, signaler) {
            this.localization = localization;
            this.signaler = signaler;
        }
        setLanguageEnglish() {
            this.localization.currentLanguage = enums_1.LocalizationLanguage.English;
            this.signaler.signal('language-changed');
        }
        setLanguageHungarian() {
            this.localization.currentLanguage = enums_1.LocalizationLanguage.Hungarian;
            this.signaler.signal('language-changed');
        }
        print() {
            window.print();
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", owner_1.Owner)
    ], CvHeader.prototype, "Owner", void 0);
    CvHeader = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [localizationservice_1.LocalizationService, aurelia_templating_resources_1.BindingSignaler])
    ], CvHeader);
    exports.CvHeader = CvHeader;
});

define('services/hobbyservice',["require", "exports"], function (require, exports) {
    "use strict";
    class HobbyService {
        Get() {
            return [
                {
                    Name: "hobby-iot",
                    ImageUrl: "./assets/photo-iot.jpg",
                    Tags: [
                        { Name: "Arduino", Url: "http://arduino.cc" },
                        { Name: "NodeMCU", Url: "http://www.nodemcu.com/index_en.html" },
                        { Name: "Raspberry PI", Url: "https://www.raspberrypi.org" },
                    ]
                },
                {
                    Name: "hobby-opensource",
                    ImageUrl: "./assets/github-logo.png",
                    Tags: [
                        { Name: "BLM utils for EF6", Url: "https://github.com/gallayl/FuryTech.BLM" },
                        { Name: "OData to TypeScript tools", Url: "https://github.com/gallayl/FuryTech.OdataTypescriptServiceGenerator" },
                        { Name: "Aurelia CV Template", Url: "https://github.com/gallayl/aurelia-cv-template" },
                    ]
                },
                {
                    Name: "hobby-books",
                    ImageUrl: "./assets/photo-books.jpg",
                    Tags: [
                        { Name: "Fantasy", Url: "" },
                        { Name: "Sci-fi", Url: "" },
                        { Name: "Game adoptations", Url: "" },
                    ]
                },
                {
                    Name: "hobby-gaming",
                    ImageUrl: "./assets/w3.jpg",
                    Tags: [
                        { Name: "FPS", Url: "https://js-dos.com/games/doom2.exe.html" },
                        { Name: "Real time strategy", Url: "http://epicport.com/en/dune2" },
                        { Name: "Role playing games", Url: "http://thewitcher.com/en/witcher3" },
                        { Name: "Retro gaming", Url: "https://retropie.org.uk/" }
                    ]
                },
                {
                    Name: "hobby-bands",
                    ImageUrl: "./assets/photo-music.jpeg",
                    Tags: [
                        { Name: "Beastial Rage", Url: "https://beastialrage.bandcamp.com/" },
                        { Name: "Autumn Wings", Url: "" },
                        { Name: "Ideas", Url: "https://www.facebook.com/IdeasOfficial/" },
                    ]
                }
            ];
        }
    }
    exports.HobbyService = HobbyService;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/hobbies',["require", "exports", "./../services/hobbyservice", "aurelia-framework"], function (require, exports, hobbyservice_1, aurelia_framework_1) {
    "use strict";
    let Hobbies = class Hobbies {
        constructor(hobbieService) {
            this.hobbieService = hobbieService;
            this.Hobbies = this.hobbieService.Get();
        }
    };
    Hobbies = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [hobbyservice_1.HobbyService])
    ], Hobbies);
    exports.Hobbies = Hobbies;
});

define('models/language',["require", "exports"], function (require, exports) {
    "use strict";
    class Language {
    }
    exports.Language = Language;
});

define('services/languagesservice',["require", "exports"], function (require, exports) {
    "use strict";
    class LanguageService {
        Get() {
            return [
                {
                    Name: "language-hungarian",
                    Level: 'language-skill-Native'
                },
                {
                    Name: "language-english",
                    Level: 'language-skill-Professional'
                },
                {
                    Name: "language-german",
                    Level: 'language-skill-Elementary'
                }
            ];
        }
    }
    exports.LanguageService = LanguageService;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/home',["require", "exports", "./../services/languagesservice", "../services/localizationservice", "../models/owner", "../services/ownerservice", "aurelia-framework"], function (require, exports, languagesservice_1, localizationservice_1, owner_1, ownerservice_1, aurelia_framework_1) {
    "use strict";
    let Home = class Home {
        constructor(owner, localization, languageService) {
            this.owner = owner;
            this.localization = localization;
            this.languageService = languageService;
            this.Owner = owner.Get();
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", owner_1.Owner)
    ], Home.prototype, "Owner", void 0);
    Home = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [ownerservice_1.OwnerService,
            localizationservice_1.LocalizationService,
            languagesservice_1.LanguageService])
    ], Home);
    exports.Home = Home;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('services/jobservice',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    let JobService = class JobService {
        constructor() {
        }
        Get() {
            let jobDigic = {
                Employer: {
                    Name: "Digic Pictures",
                    Description: "employer-digic-description",
                    HomePage: "http://digicpictures.com",
                    LogoUrl: "./assets/digic-logo.png"
                },
                Address: "Budapest, H-1031 Graphisoft Park Hz. Záhony utca 7.",
                LocationQuery: "Graphisoft+Park+Kft.",
                FromDate: new Date("2015-10-01"),
                UntilDate: null,
                Title: "Production developer",
                Tags: [],
                Projects: [
                    {
                        Name: "dProject",
                        Description: "digic-project-dProject-description",
                        Tags: [
                            { Name: "WinForms", Url: "https://en.wikipedia.org/wiki/Windows_Forms" },
                            { Name: "PostgreSQL", Url: "https://www.postgresql.org/" },
                            { Name: "Google API", Url: "https://developers.google.com/drive/v2/reference/" },
                            { Name: "Chromium Embedded Framework", Url: "https://bitbucket.org/chromiumembedded/cef" }
                        ]
                    },
                    {
                        Name: "DPS",
                        Description: "digic-project-DPS-description",
                        Tags: [
                            { Name: "ASP.NET", Url: "https://www.asp.net/" },
                            { Name: "EF6", Url: "https://www.asp.net/entity-framework" },
                            { Name: "OData V4", Url: "http://www.odata.org/" },
                            { Name: "SignalR", Url: "https://www.asp.net/signalr" },
                            { Name: "Typescript", Url: "https://www.typescriptlang.org/" },
                            { Name: "Angular2", Url: "https://angularjs.org/" },
                            { Name: "Angular Material", Url: "https://material.angular.io/" },
                        ]
                    },
                    {
                        Name: "TER",
                        Description: "digic-project-TER-description",
                        Tags: [
                            { Name: "ASP.NET", Url: "https://www.asp.net/" },
                            { Name: "EF6", Url: "https://www.asp.net/entity-framework" },
                            { Name: "OData V4", Url: "http://www.odata.org/" },
                            { Name: "Typescript", Url: "https://www.typescriptlang.org/" },
                            { Name: "Aurelia", Url: "http://aurelia.io/" },
                            { Name: "Aurelia Materialize Bridge", Url: "https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge" },
                        ]
                    }
                ],
                Responsibilities: "job-digic-responsibilities"
            };
            let jobSenseNet = {
                Employer: {
                    Name: "Sense/NET",
                    Description: "employer-sensenet-description",
                    HomePage: "http://sensenet.com",
                    LogoUrl: "./assets/sensenet-logo.png"
                },
                Title: "Frontend developer",
                FromDate: new Date("2014-05-01"),
                UntilDate: new Date("2015-10-01"),
                Address: "1117 Budapest, Infopark sétány 1",
                LocationQuery: "Budapest,+Infopark+stny.+1,+1117",
                Projects: [],
                Responsibilities: "job-sensenet-responsibilities",
                Tags: [
                    { Name: "Sense/NET API", Url: "http://www.sensenet.com/" },
                    { Name: "ASP.NET MVC", Url: "http://www.asp.net/mvc" },
                    { Name: "Lucene.NET", Url: "https://lucenenet.apache.org/" },
                    { Name: "OData", Url: "http://www.odata.org/" },
                    { Name: "SignalR", Url: "https://www.asp.net/signalr" },
                    { Name: "Kendo UI", Url: "http://www.telerik.com/kendo-ui" },
                    { Name: "Scrum", Url: "http://scrum.org" }
                ],
            };
            let jobTesco = {
                Employer: {
                    Name: "Tesco Stores Ltd. / PartnerSys ZRt.",
                    Description: "",
                    HomePage: "http://tesco.hu",
                    LogoUrl: "./assets/tesco-logo.png"
                },
                FromDate: new Date("2010-09-01"),
                UntilDate: new Date("2014-05-01"),
                Address: "Budaörs, Kinizsi ut 1, 2040",
                LocationQuery: "Budaörs,+Kinizsi+út+1,+2040",
                Projects: [
                    {
                        Name: "IT Requests",
                        Description: "tesco-project-itr-description",
                        Tags: [
                            { Name: "PHP", Url: "https://secure.php.net/" },
                            { Name: "MySQL", Url: "https://www.mysql.com/" },
                            { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                            { Name: "Active Directory", Url: "https://en.wikipedia.org/wiki/Active_Directory" },
                            { Name: "Microsoft Exchange", Url: "https://en.wikipedia.org/wiki/Microsoft_Exchange_Server" },
                        ]
                    },
                    {
                        Name: "PhoneCosts",
                        Description: "tesco-project-phone-description",
                        Tags: [
                            { Name: "ASP.NET MVC", Url: "http://www.asp.net/mvc" },
                            { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                            { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                        ]
                    },
                    {
                        Name: "PoolCars",
                        Description: "tesco-project-phone-description",
                        Tags: [
                            { Name: "ASP.NET MVC", Url: "http://www.asp.net/mvc" },
                            { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                            { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                        ]
                    }
                ],
                Responsibilities: "job-tesco-responsibilities",
                Tags: [],
                Title: "IT Support specialist / User Admin / Web developer"
            };
            return [jobDigic, jobSenseNet, jobTesco];
        }
    };
    JobService = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [])
    ], JobService);
    exports.JobService = JobService;
});

define('services/schoolservice',["require", "exports"], function (require, exports) {
    "use strict";
    class SchoolService {
        Get() {
            return [
                {
                    Name: "Microsoft certification 70-480",
                    Description: "",
                    FromDate: new Date("2015-03-01"),
                    UntilDate: new Date("2015-03-01"),
                    Homepage: "https://www.microsoft.com/en-us/learning/exam-70-480.aspx",
                    Tags: [
                        { Name: "HTML5", Url: "https://en.wikipedia.org/wiki/HTML5" },
                        { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                        { Name: "CSS3", Url: "https://developer.mozilla.org/en/docs/Web/CSS/CSS3" },
                    ],
                    LocationQuery: "Budapest,+Budafoki+út+56,",
                    Address: "1117 Budapest, Budafoki út 56.",
                    Type: "school-ms70-480",
                    HomepageUrl: "https://www.training360.com/"
                },
                {
                    Name: "LIA Iskola",
                    Description: "",
                    FromDate: new Date("2008-09-01"),
                    UntilDate: new Date("2010-06-01"),
                    Homepage: "http://www.liaiskola.hu/",
                    Tags: [
                        { Name: "PHP", Url: "https://secure.php.net/" },
                        { Name: "MySQL", Url: "https://www.mysql.com/" },
                        { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                        { Name: "JQuery", Url: "https://jquery.com/" },
                        { Name: "Flash", Url: "https://en.wikipedia.org/wiki/Adobe_Flash" }
                    ],
                    LocationQuery: "Lia+Iskola+Budapest,+Dolgos+utca+7,+1126",
                    Address: "1126 Budapest, Dolgos utca 7",
                    Type: "school-web-development",
                    HomepageUrl: "http://www.liaiskola.hu/"
                },
                {
                    Name: "Verebély László Szakközépiskola",
                    Description: "",
                    FromDate: new Date("2000-09-01"),
                    UntilDate: new Date("2006-06-01"),
                    Homepage: "http://www.verebelyszki.hu/",
                    Tags: [
                        { Name: "Borland C", Url: "https://en.wikipedia.org/wiki/Borland_Turbo_C" },
                        { Name: "Turbo Pascal", Url: "https://en.wikipedia.org/wiki/Turbo_Pascal" },
                        { Name: "Delphi", Url: "https://en.wikipedia.org/wiki/Delphi_(programming_language)" },
                        { Name: "PHP", Url: "https://secure.php.net/" },
                        { Name: "MySQL", Url: "https://www.mysql.com/" },
                        { Name: "Photoshop", Url: "http://www.adobe.com/products/photoshopfamily.html" },
                    ],
                    LocationQuery: "BMSZC+Verebély+László+Szakgimnáziuma+és+Szakközépiskolája",
                    Address: "1139 Budapest, Üteg u. 15",
                    Type: "school-vocational-generic, school-okj-general-programming",
                    HomepageUrl: "http://www.verebelyszki.hu/"
                }
            ];
        }
    }
    exports.SchoolService = SchoolService;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/jobs',["require", "exports", "./../services/jobservice", "../services/localizationservice", "aurelia-framework"], function (require, exports, jobservice_1, localizationservice_1, aurelia_framework_1) {
    "use strict";
    let Works = class Works {
        constructor(localization, jobService) {
            this.localization = localization;
            this.Jobs = jobService.Get();
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], Works.prototype, "Jobs", void 0);
    Works = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [localizationservice_1.LocalizationService, jobservice_1.JobService])
    ], Works);
    exports.Works = Works;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/languages',["require", "exports", "aurelia-framework", "./../services/languagesservice"], function (require, exports, aurelia_framework_1, languagesservice_1) {
    "use strict";
    let Languages = class Languages {
        constructor(languageService) {
            this.languageService = languageService;
            this.Languages = languageService.Get();
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], Languages.prototype, "Languages", void 0);
    Languages = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [languagesservice_1.LanguageService])
    ], Languages);
    exports.Languages = Languages;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/projects',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    class Projects {
    }
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], Projects.prototype, "Projects", void 0);
    exports.Projects = Projects;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/schools',["require", "exports", "../services/schoolservice", "../services/localizationservice", "aurelia-framework"], function (require, exports, schoolservice_1, localizationservice_1, aurelia_framework_1) {
    "use strict";
    let Schools = class Schools {
        constructor(localization, schoolService) {
            this.localization = localization;
            this.Schools = schoolService.Get();
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], Schools.prototype, "Schools", void 0);
    Schools = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [localizationservice_1.LocalizationService, schoolservice_1.SchoolService])
    ], Schools);
    exports.Schools = Schools;
});

define('models/skill',["require", "exports"], function (require, exports) {
    "use strict";
    class Skill {
    }
    exports.Skill = Skill;
});

define('services/skillservice',["require", "exports"], function (require, exports) {
    "use strict";
    class SkillService {
        Get() {
            return [
                {
                    Name: "skill-programming languages",
                    Tags: [
                        { Name: "C#", Url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" },
                        { Name: "TypeScript", Url: "https://typescriptlang.com/" },
                        { Name: "JavaScript", Url: "https://en.wikipedia.org/wiki/JavaScript" },
                        { Name: "CSS", Url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets" },
                        { Name: "SASS", Url: "https://en.wikipedia.org/wiki/Sass_(stylesheet_language)" },
                        { Name: "HTML5", Url: "https://en.wikipedia.org/wiki/HTML5" },
                        { Name: "JADE", Url: "http://learnjade.com/" },
                        { Name: "SQL", Url: "https://en.wikipedia.org/wiki/SQL" },
                    ]
                },
                {
                    Name: "skill-frameworks-and-libraries",
                    Tags: [
                        { Name: ".NET", Url: "https://www.microsoft.com/net" },
                        { Name: "MVC", Url: "https://www.asp.net/mvc/mvc4" },
                        { Name: "Web API", Url: "https://www.asp.net/web-api" },
                        { Name: "Entity Framework", Url: "https://www.asp.net/entity-framework" },
                        { Name: "Angular2", Url: "https://angular.io" },
                        { Name: "Aurelia", Url: "https://aurelia.io" },
                        { Name: "Kendo UI", Url: "http://www.telerik.com/kendo-ui" },
                        { Name: "JQuery", Url: "https://jquery.com" },
                    ]
                },
                {
                    Name: "skill-version-control-name",
                    Tags: [
                        { Name: "Team Foundation Server", Url: "https://www.visualstudio.com/tfs/" },
                        { Name: "GIT", Url: "https://git-scm.com/" }
                    ]
                },
                {
                    Name: "skill-integrated-development-environment",
                    Tags: [
                        { Name: "Visual Studio 2013-2017RC", Url: "https://www.visualstudio.com/" },
                        { Name: "Visual Studio Code", Url: "https://code.visualstudio.com/" },
                        { Name: "WebStorm", Url: "https://www.jetbrains.com/webstorm/" }
                    ]
                },
                {
                    Name: "skill-productivity-tools",
                    Tags: [
                        { Name: "JetBrains ReSharper", Url: "https://www.jetbrains.com/resharper/" },
                        { Name: "JetBrains dotTrace", Url: "https://www.jetbrains.com/profiler/" },
                        { Name: "JetBrains dotMemory", Url: "https://www.jetbrains.com/dotmemory/" },
                        { Name: "Fiddler", Url: "http://www.telerik.com/fiddler" },
                        { Name: "PostMan", Url: "https://www.getpostman.com/" }
                    ]
                }
            ];
        }
    }
    exports.SkillService = SkillService;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home/skills',["require", "exports", "./../services/skillservice", "aurelia-framework"], function (require, exports, skillservice_1, aurelia_framework_1) {
    "use strict";
    let Skills = class Skills {
        constructor(SkillService) {
            this.SkillService = SkillService;
            this.Skills = SkillService.Get();
        }
    };
    Skills = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [skillservice_1.SkillService])
    ], Skills);
    exports.Skills = Skills;
});

define('models/certification',["require", "exports"], function (require, exports) {
    "use strict";
    class Certification {
    }
    exports.Certification = Certification;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/value-converters/translate',["require", "exports", "../../services/localizationservice", "aurelia-framework"], function (require, exports, localizationservice_1, aurelia_framework_1) {
    "use strict";
    let TranslateValueConverter = class TranslateValueConverter {
        constructor(localization) {
            this.localization = localization;
        }
        toView(value) {
            let translated = this.localization.Get(value);
            return translated;
        }
    };
    TranslateValueConverter = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [localizationservice_1.LocalizationService])
    ], TranslateValueConverter);
    exports.TranslateValueConverter = TranslateValueConverter;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
        config.globalResources([
            './value-converters/translate',
            './value-converters/date-range',
            './elements/google-map',
            './elements/fa-button-link',
            "./elements/tag-list",
            "../home/cv-header",
            "../home/schools",
            "../home/jobs",
            "../home/languages",
            "../home/skills",
            "../home/hobbies",
        ]);
    }
    exports.configure = configure;
});

define('utils/guit',["require", "exports"], function (require, exports) {
    "use strict";
    class Guid {
        static newGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    }
    exports.Guid = Guid;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/fa-button-link',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    class FaButtonLink {
        iconNameChanged(newValue, oldValue) { }
        linkUrlChanged(newValue, oldValue) { }
        titleChanged(newValue, oldValue) { }
    }
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], FaButtonLink.prototype, "iconName", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], FaButtonLink.prototype, "linkUrl", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], FaButtonLink.prototype, "title", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], FaButtonLink.prototype, "target", void 0);
    exports.FaButtonLink = FaButtonLink;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/google-map',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    class GoogleMap {
        openMap($event) {
            this.modal.open();
        }
    }
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], GoogleMap.prototype, "Item", void 0);
    exports.GoogleMap = GoogleMap;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/tag-list',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    class TagList {
    }
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], TagList.prototype, "tags", void 0);
    exports.TagList = TagList;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/value-converters/date-range',["require", "exports", "./../../services/localizationservice", "aurelia-framework"], function (require, exports, localizationservice_1, aurelia_framework_1) {
    "use strict";
    let DateRangeValueConverter = class DateRangeValueConverter {
        constructor(localizationService) {
            this.localizationService = localizationService;
        }
        toView(value, until) {
            let dateNow = this.localizationService.Get("date-now");
            return value.getFullYear() + ((until != null) ? ` - ${until.getFullYear()}` : ` - ${dateNow}`);
        }
    };
    DateRangeValueConverter = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [localizationservice_1.LocalizationService])
    ], DateRangeValueConverter);
    exports.DateRangeValueConverter = DateRangeValueConverter;
});

define('aurelia-templating-resources/compose',['exports', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-templating', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaTemplating, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Compose = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var Compose = exports.Compose = (_dec = (0, _aureliaTemplating.customElement)('compose'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaTaskQueue.TaskQueue), _dec(_class = (0, _aureliaTemplating.noView)(_class = _dec2(_class = (_class2 = function () {
    function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
      

      _initDefineProp(this, 'model', _descriptor, this);

      _initDefineProp(this, 'view', _descriptor2, this);

      _initDefineProp(this, 'viewModel', _descriptor3, this);

      this.element = element;
      this.container = container;
      this.compositionEngine = compositionEngine;
      this.viewSlot = viewSlot;
      this.viewResources = viewResources;
      this.taskQueue = taskQueue;
      this.currentController = null;
      this.currentViewModel = null;
    }

    Compose.prototype.created = function created(owningView) {
      this.owningView = owningView;
    };

    Compose.prototype.bind = function bind(bindingContext, overrideContext) {
      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext;
      processInstruction(this, createInstruction(this, {
        view: this.view,
        viewModel: this.viewModel,
        model: this.model
      }));
    };

    Compose.prototype.unbind = function unbind(bindingContext, overrideContext) {
      this.bindingContext = null;
      this.overrideContext = null;
      var returnToCache = true;
      var skipAnimation = true;
      this.viewSlot.removeAll(returnToCache, skipAnimation);
    };

    Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
      var _this = this;

      if (this.currentInstruction) {
        this.currentInstruction.model = newValue;
        return;
      }

      this.taskQueue.queueMicroTask(function () {
        if (_this.currentInstruction) {
          _this.currentInstruction.model = newValue;
          return;
        }

        var vm = _this.currentViewModel;

        if (vm && typeof vm.activate === 'function') {
          vm.activate(newValue);
        }
      });
    };

    Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
      var _this2 = this;

      var instruction = createInstruction(this, {
        view: newValue,
        viewModel: this.currentViewModel || this.viewModel,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this2, _this2.currentInstruction);
      });
    };

    Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
      var _this3 = this;

      var instruction = createInstruction(this, {
        viewModel: newValue,
        view: this.view,
        model: this.model
      });

      if (this.currentInstruction) {
        this.currentInstruction = instruction;
        return;
      }

      this.currentInstruction = instruction;
      this.taskQueue.queueMicroTask(function () {
        return processInstruction(_this3, _this3.currentInstruction);
      });
    };

    return Compose;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'view', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'viewModel', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);


  function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
      bindingContext: composer.bindingContext,
      overrideContext: composer.overrideContext,
      owningView: composer.owningView,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentController: composer.currentController,
      host: composer.element
    });
  }

  function processInstruction(composer, instruction) {
    composer.currentInstruction = null;
    composer.compositionEngine.compose(instruction).then(function (controller) {
      composer.currentController = controller;
      composer.currentViewModel = controller ? controller.viewModel : null;
    });
  }
});
define('aurelia-templating-resources/if',['exports', 'aurelia-templating', 'aurelia-dependency-injection'], function (exports, _aureliaTemplating, _aureliaDependencyInjection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.If = undefined;

  

  var _dec, _dec2, _class;

  var If = exports.If = (_dec = (0, _aureliaTemplating.customAttribute)('if'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function If(viewFactory, viewSlot) {
      

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.showing = false;
      this.view = null;
      this.bindingContext = null;
      this.overrideContext = null;
    }

    If.prototype.bind = function bind(bindingContext, overrideContext) {
      this.bindingContext = bindingContext;
      this.overrideContext = overrideContext;
      this.valueChanged(this.value);
    };

    If.prototype.valueChanged = function valueChanged(newValue) {
      var _this = this;

      if (this.__queuedChanges) {
        this.__queuedChanges.push(newValue);
        return;
      }

      var maybePromise = this._runValueChanged(newValue);
      if (maybePromise instanceof Promise) {
        (function () {
          var queuedChanges = _this.__queuedChanges = [];

          var runQueuedChanges = function runQueuedChanges() {
            if (!queuedChanges.length) {
              _this.__queuedChanges = undefined;
              return;
            }

            var nextPromise = _this._runValueChanged(queuedChanges.shift()) || Promise.resolve();
            nextPromise.then(runQueuedChanges);
          };

          maybePromise.then(runQueuedChanges);
        })();
      }
    };

    If.prototype._runValueChanged = function _runValueChanged(newValue) {
      var _this2 = this;

      if (!newValue) {
        var viewOrPromise = void 0;
        if (this.view !== null && this.showing) {
          viewOrPromise = this.viewSlot.remove(this.view);
          if (viewOrPromise instanceof Promise) {
            viewOrPromise.then(function () {
              return _this2.view.unbind();
            });
          } else {
            this.view.unbind();
          }
        }

        this.showing = false;
        return viewOrPromise;
      }

      if (this.view === null) {
        this.view = this.viewFactory.create();
      }

      if (!this.view.isBound) {
        this.view.bind(this.bindingContext, this.overrideContext);
      }

      if (!this.showing) {
        this.showing = true;
        return this.viewSlot.add(this.view);
      }

      return undefined;
    };

    If.prototype.unbind = function unbind() {
      if (this.view === null) {
        return;
      }

      this.view.unbind();

      if (!this.viewFactory.isCaching) {
        return;
      }

      if (this.showing) {
        this.showing = false;
        this.viewSlot.remove(this.view, true, true);
      }
      this.view.returnToCache();
      this.view = null;
    };

    return If;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/with',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-binding'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.With = undefined;

  

  var _dec, _dec2, _class;

  var With = exports.With = (_dec = (0, _aureliaTemplating.customAttribute)('with'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function With(viewFactory, viewSlot) {
      

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.parentOverrideContext = null;
      this.view = null;
    }

    With.prototype.bind = function bind(bindingContext, overrideContext) {
      this.parentOverrideContext = overrideContext;
      this.valueChanged(this.value);
    };

    With.prototype.valueChanged = function valueChanged(newValue) {
      var overrideContext = (0, _aureliaBinding.createOverrideContext)(newValue, this.parentOverrideContext);
      if (!this.view) {
        this.view = this.viewFactory.create();
        this.view.bind(newValue, overrideContext);
        this.viewSlot.add(this.view);
      } else {
        this.view.bind(newValue, overrideContext);
      }
    };

    With.prototype.unbind = function unbind() {
      this.parentOverrideContext = null;

      if (this.view) {
        this.view.unbind();
      }
    };

    return With;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/repeat',['exports', 'aurelia-dependency-injection', 'aurelia-binding', 'aurelia-templating', './repeat-strategy-locator', './repeat-utilities', './analyze-view-factory', './abstract-repeater'], function (exports, _aureliaDependencyInjection, _aureliaBinding, _aureliaTemplating, _repeatStrategyLocator, _repeatUtilities, _analyzeViewFactory, _abstractRepeater) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Repeat = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Repeat = exports.Repeat = (_dec = (0, _aureliaTemplating.customAttribute)('repeat'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.TargetInstruction, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaBinding.ObserverLocator, _repeatStrategyLocator.RepeatStrategyLocator), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = (_class2 = function (_AbstractRepeater) {
    _inherits(Repeat, _AbstractRepeater);

    function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
      

      var _this = _possibleConstructorReturn(this, _AbstractRepeater.call(this, {
        local: 'item',
        viewsRequireLifecycle: (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory)
      }));

      _initDefineProp(_this, 'items', _descriptor, _this);

      _initDefineProp(_this, 'local', _descriptor2, _this);

      _initDefineProp(_this, 'key', _descriptor3, _this);

      _initDefineProp(_this, 'value', _descriptor4, _this);

      _this.viewFactory = viewFactory;
      _this.instruction = instruction;
      _this.viewSlot = viewSlot;
      _this.lookupFunctions = viewResources.lookupFunctions;
      _this.observerLocator = observerLocator;
      _this.key = 'key';
      _this.value = 'value';
      _this.strategyLocator = strategyLocator;
      _this.ignoreMutation = false;
      _this.sourceExpression = (0, _repeatUtilities.getItemsSourceExpression)(_this.instruction, 'repeat.for');
      _this.isOneTime = (0, _repeatUtilities.isOneTime)(_this.sourceExpression);
      _this.viewsRequireLifecycle = (0, _analyzeViewFactory.viewsRequireLifecycle)(viewFactory);
      return _this;
    }

    Repeat.prototype.call = function call(context, changes) {
      this[context](this.items, changes);
    };

    Repeat.prototype.bind = function bind(bindingContext, overrideContext) {
      this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
      this.matcherBinding = this._captureAndRemoveMatcherBinding();
      this.itemsChanged();
    };

    Repeat.prototype.unbind = function unbind() {
      this.scope = null;
      this.items = null;
      this.matcherBinding = null;
      this.viewSlot.removeAll(true);
      this._unsubscribeCollection();
    };

    Repeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
      if (this.collectionObserver) {
        this.collectionObserver.unsubscribe(this.callContext, this);
        this.collectionObserver = null;
        this.callContext = null;
      }
    };

    Repeat.prototype.itemsChanged = function itemsChanged() {
      this._unsubscribeCollection();

      if (!this.scope) {
        return;
      }

      var items = this.items;
      this.strategy = this.strategyLocator.getStrategy(items);
      if (!this.strategy) {
        throw new Error('Value for \'' + this.sourceExpression + '\' is non-repeatable');
      }

      if (!this.isOneTime && !this._observeInnerCollection()) {
        this._observeCollection();
      }
      this.strategy.instanceChanged(this, items);
    };

    Repeat.prototype._getInnerCollection = function _getInnerCollection() {
      var expression = (0, _repeatUtilities.unwrapExpression)(this.sourceExpression);
      if (!expression) {
        return null;
      }
      return expression.evaluate(this.scope, null);
    };

    Repeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
      if (!this.collectionObserver) {
        return;
      }
      this.strategy.instanceMutated(this, collection, changes);
    };

    Repeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
      var _this2 = this;

      if (!this.collectionObserver) {
        return;
      }

      if (this.ignoreMutation) {
        return;
      }
      this.ignoreMutation = true;
      var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
      this.observerLocator.taskQueue.queueMicroTask(function () {
        return _this2.ignoreMutation = false;
      });

      if (newItems === this.items) {
        this.itemsChanged();
      } else {
        this.items = newItems;
      }
    };

    Repeat.prototype._observeInnerCollection = function _observeInnerCollection() {
      var items = this._getInnerCollection();
      var strategy = this.strategyLocator.getStrategy(items);
      if (!strategy) {
        return false;
      }
      this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
      if (!this.collectionObserver) {
        return false;
      }
      this.callContext = 'handleInnerCollectionMutated';
      this.collectionObserver.subscribe(this.callContext, this);
      return true;
    };

    Repeat.prototype._observeCollection = function _observeCollection() {
      var items = this.items;
      this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
      if (this.collectionObserver) {
        this.callContext = 'handleCollectionMutated';
        this.collectionObserver.subscribe(this.callContext, this);
      }
    };

    Repeat.prototype._captureAndRemoveMatcherBinding = function _captureAndRemoveMatcherBinding() {
      if (this.viewFactory.viewFactory) {
        var instructions = this.viewFactory.viewFactory.instructions;
        var instructionIds = Object.keys(instructions);
        for (var i = 0; i < instructionIds.length; i++) {
          var expressions = instructions[instructionIds[i]].expressions;
          if (expressions) {
            for (var ii = 0; i < expressions.length; i++) {
              if (expressions[ii].targetProperty === 'matcher') {
                var matcherBinding = expressions[ii];
                expressions.splice(ii, 1);
                return matcherBinding;
              }
            }
          }
        }
      }

      return undefined;
    };

    Repeat.prototype.viewCount = function viewCount() {
      return this.viewSlot.children.length;
    };

    Repeat.prototype.views = function views() {
      return this.viewSlot.children;
    };

    Repeat.prototype.view = function view(index) {
      return this.viewSlot.children[index];
    };

    Repeat.prototype.matcher = function matcher() {
      return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null;
    };

    Repeat.prototype.addView = function addView(bindingContext, overrideContext) {
      var view = this.viewFactory.create();
      view.bind(bindingContext, overrideContext);
      this.viewSlot.add(view);
    };

    Repeat.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
      var view = this.viewFactory.create();
      view.bind(bindingContext, overrideContext);
      this.viewSlot.insert(index, view);
    };

    Repeat.prototype.moveView = function moveView(sourceIndex, targetIndex) {
      this.viewSlot.move(sourceIndex, targetIndex);
    };

    Repeat.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
      return this.viewSlot.removeAll(returnToCache, skipAnimation);
    };

    Repeat.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
      return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
    };

    Repeat.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
      return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
    };

    Repeat.prototype.updateBindings = function updateBindings(view) {
      var j = view.bindings.length;
      while (j--) {
        (0, _repeatUtilities.updateOneTimeBinding)(view.bindings[j]);
      }
      j = view.controllers.length;
      while (j--) {
        var k = view.controllers[j].boundProperties.length;
        while (k--) {
          var binding = view.controllers[j].boundProperties[k].binding;
          (0, _repeatUtilities.updateOneTimeBinding)(binding);
        }
      }
    };

    return Repeat;
  }(_abstractRepeater.AbstractRepeater), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'items', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'local', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
});
define('aurelia-templating-resources/repeat-strategy-locator',['exports', './null-repeat-strategy', './array-repeat-strategy', './map-repeat-strategy', './set-repeat-strategy', './number-repeat-strategy'], function (exports, _nullRepeatStrategy, _arrayRepeatStrategy, _mapRepeatStrategy, _setRepeatStrategy, _numberRepeatStrategy) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RepeatStrategyLocator = undefined;

  

  var RepeatStrategyLocator = exports.RepeatStrategyLocator = function () {
    function RepeatStrategyLocator() {
      

      this.matchers = [];
      this.strategies = [];

      this.addStrategy(function (items) {
        return items === null || items === undefined;
      }, new _nullRepeatStrategy.NullRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Array;
      }, new _arrayRepeatStrategy.ArrayRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Map;
      }, new _mapRepeatStrategy.MapRepeatStrategy());
      this.addStrategy(function (items) {
        return items instanceof Set;
      }, new _setRepeatStrategy.SetRepeatStrategy());
      this.addStrategy(function (items) {
        return typeof items === 'number';
      }, new _numberRepeatStrategy.NumberRepeatStrategy());
    }

    RepeatStrategyLocator.prototype.addStrategy = function addStrategy(matcher, strategy) {
      this.matchers.push(matcher);
      this.strategies.push(strategy);
    };

    RepeatStrategyLocator.prototype.getStrategy = function getStrategy(items) {
      var matchers = this.matchers;

      for (var i = 0, ii = matchers.length; i < ii; ++i) {
        if (matchers[i](items)) {
          return this.strategies[i];
        }
      }

      return null;
    };

    return RepeatStrategyLocator;
  }();
});
define('aurelia-templating-resources/null-repeat-strategy',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var NullRepeatStrategy = exports.NullRepeatStrategy = function () {
    function NullRepeatStrategy() {
      
    }

    NullRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      repeat.removeAllViews(true);
    };

    NullRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {};

    return NullRepeatStrategy;
  }();
});
define('aurelia-templating-resources/array-repeat-strategy',['exports', './repeat-utilities', 'aurelia-binding'], function (exports, _repeatUtilities, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ArrayRepeatStrategy = undefined;

  

  var ArrayRepeatStrategy = exports.ArrayRepeatStrategy = function () {
    function ArrayRepeatStrategy() {
      
    }

    ArrayRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getArrayObserver(items);
    };

    ArrayRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var itemsLength = items.length;

      if (!items || itemsLength === 0) {
        repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        return;
      }

      var children = repeat.views();
      var viewsLength = children.length;

      if (viewsLength === 0) {
        this._standardProcessInstanceChanged(repeat, items);
        return;
      }

      if (repeat.viewsRequireLifecycle) {
        (function () {
          var childrenSnapshot = children.slice(0);
          var itemNameInBindingContext = repeat.local;
          var matcher = repeat.matcher();

          var itemsPreviouslyInViews = [];
          var viewsToRemove = [];

          for (var index = 0; index < viewsLength; index++) {
            var view = childrenSnapshot[index];
            var oldItem = view.bindingContext[itemNameInBindingContext];

            if ((0, _repeatUtilities.indexOf)(items, oldItem, matcher) === -1) {
              viewsToRemove.push(view);
            } else {
              itemsPreviouslyInViews.push(oldItem);
            }
          }

          var updateViews = void 0;
          var removePromise = void 0;

          if (itemsPreviouslyInViews.length > 0) {
            removePromise = repeat.removeViews(viewsToRemove, true, !repeat.viewsRequireLifecycle);
            updateViews = function updateViews() {
              for (var _index = 0; _index < itemsLength; _index++) {
                var item = items[_index];
                var indexOfView = (0, _repeatUtilities.indexOf)(itemsPreviouslyInViews, item, matcher, _index);
                var _view = void 0;

                if (indexOfView === -1) {
                  var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_index], _index, itemsLength);
                  repeat.insertView(_index, overrideContext.bindingContext, overrideContext);

                  itemsPreviouslyInViews.splice(_index, 0, undefined);
                } else if (indexOfView === _index) {
                  _view = children[indexOfView];
                  itemsPreviouslyInViews[indexOfView] = undefined;
                } else {
                  _view = children[indexOfView];
                  repeat.moveView(indexOfView, _index);
                  itemsPreviouslyInViews.splice(indexOfView, 1);
                  itemsPreviouslyInViews.splice(_index, 0, undefined);
                }

                if (_view) {
                  (0, _repeatUtilities.updateOverrideContext)(_view.overrideContext, _index, itemsLength);
                }
              }

              _this._inPlaceProcessItems(repeat, items);
            };
          } else {
            removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
            updateViews = function updateViews() {
              return _this._standardProcessInstanceChanged(repeat, items);
            };
          }

          if (removePromise instanceof Promise) {
            removePromise.then(updateViews);
          } else {
            updateViews();
          }
        })();
      } else {
        this._inPlaceProcessItems(repeat, items);
      }
    };

    ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function _standardProcessInstanceChanged(repeat, items) {
      for (var i = 0, ii = items.length; i < ii; i++) {
        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[i], i, ii);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }
    };

    ArrayRepeatStrategy.prototype._inPlaceProcessItems = function _inPlaceProcessItems(repeat, items) {
      var itemsLength = items.length;
      var viewsLength = repeat.viewCount();

      while (viewsLength > itemsLength) {
        viewsLength--;
        repeat.removeView(viewsLength, true, !repeat.viewsRequireLifecycle);
      }

      var local = repeat.local;

      for (var i = 0; i < viewsLength; i++) {
        var view = repeat.view(i);
        var last = i === itemsLength - 1;
        var middle = i !== 0 && !last;

        if (view.bindingContext[local] === items[i] && view.overrideContext.$middle === middle && view.overrideContext.$last === last) {
          continue;
        }

        view.bindingContext[local] = items[i];
        view.overrideContext.$middle = middle;
        view.overrideContext.$last = last;
        repeat.updateBindings(view);
      }

      for (var _i = viewsLength; _i < itemsLength; _i++) {
        var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, items[_i], _i, itemsLength);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }
    };

    ArrayRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, array, splices) {
      var _this2 = this;

      if (repeat.__queuedSplices) {
        for (var i = 0, ii = splices.length; i < ii; ++i) {
          var _splices$i = splices[i],
              index = _splices$i.index,
              removed = _splices$i.removed,
              addedCount = _splices$i.addedCount;

          (0, _aureliaBinding.mergeSplice)(repeat.__queuedSplices, index, removed, addedCount);
        }

        repeat.__array = array.slice(0);
        return;
      }

      var maybePromise = this._runSplices(repeat, array.slice(0), splices);
      if (maybePromise instanceof Promise) {
        (function () {
          var queuedSplices = repeat.__queuedSplices = [];

          var runQueuedSplices = function runQueuedSplices() {
            if (!queuedSplices.length) {
              repeat.__queuedSplices = undefined;
              repeat.__array = undefined;
              return;
            }

            var nextPromise = _this2._runSplices(repeat, repeat.__array, queuedSplices) || Promise.resolve();
            queuedSplices = repeat.__queuedSplices = [];
            nextPromise.then(runQueuedSplices);
          };

          maybePromise.then(runQueuedSplices);
        })();
      }
    };

    ArrayRepeatStrategy.prototype._runSplices = function _runSplices(repeat, array, splices) {
      var _this3 = this;

      var removeDelta = 0;
      var rmPromises = [];

      for (var i = 0, ii = splices.length; i < ii; ++i) {
        var splice = splices[i];
        var removed = splice.removed;

        for (var j = 0, jj = removed.length; j < jj; ++j) {
          var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
          if (viewOrPromise instanceof Promise) {
            rmPromises.push(viewOrPromise);
          }
        }
        removeDelta -= splice.addedCount;
      }

      if (rmPromises.length > 0) {
        return Promise.all(rmPromises).then(function () {
          var spliceIndexLow = _this3._handleAddedSplices(repeat, array, splices);
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);
        });
      }

      var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), spliceIndexLow);

      return undefined;
    };

    ArrayRepeatStrategy.prototype._handleAddedSplices = function _handleAddedSplices(repeat, array, splices) {
      var spliceIndex = void 0;
      var spliceIndexLow = void 0;
      var arrayLength = array.length;
      for (var i = 0, ii = splices.length; i < ii; ++i) {
        var splice = splices[i];
        var addIndex = spliceIndex = splice.index;
        var end = splice.index + splice.addedCount;

        if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
          spliceIndexLow = spliceIndex;
        }

        for (; addIndex < end; ++addIndex) {
          var overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, array[addIndex], addIndex, arrayLength);
          repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
        }
      }

      return spliceIndexLow;
    };

    return ArrayRepeatStrategy;
  }();
});
define('aurelia-templating-resources/repeat-utilities',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.updateOverrideContexts = updateOverrideContexts;
  exports.createFullOverrideContext = createFullOverrideContext;
  exports.updateOverrideContext = updateOverrideContext;
  exports.getItemsSourceExpression = getItemsSourceExpression;
  exports.unwrapExpression = unwrapExpression;
  exports.isOneTime = isOneTime;
  exports.updateOneTimeBinding = updateOneTimeBinding;
  exports.indexOf = indexOf;


  var oneTime = _aureliaBinding.bindingMode.oneTime;

  function updateOverrideContexts(views, startIndex) {
    var length = views.length;

    if (startIndex > 0) {
      startIndex = startIndex - 1;
    }

    for (; startIndex < length; ++startIndex) {
      updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
    }
  }

  function createFullOverrideContext(repeat, data, index, length, key) {
    var bindingContext = {};
    var overrideContext = (0, _aureliaBinding.createOverrideContext)(bindingContext, repeat.scope.overrideContext);

    if (typeof key !== 'undefined') {
      bindingContext[repeat.key] = key;
      bindingContext[repeat.value] = data;
    } else {
      bindingContext[repeat.local] = data;
    }
    updateOverrideContext(overrideContext, index, length);
    return overrideContext;
  }

  function updateOverrideContext(overrideContext, index, length) {
    var first = index === 0;
    var last = index === length - 1;
    var even = index % 2 === 0;

    overrideContext.$index = index;
    overrideContext.$first = first;
    overrideContext.$last = last;
    overrideContext.$middle = !(first || last);
    overrideContext.$odd = !even;
    overrideContext.$even = even;
  }

  function getItemsSourceExpression(instruction, attrName) {
    return instruction.behaviorInstructions.filter(function (bi) {
      return bi.originalAttrName === attrName;
    })[0].attributes.items.sourceExpression;
  }

  function unwrapExpression(expression) {
    var unwrapped = false;
    while (expression instanceof _aureliaBinding.BindingBehavior) {
      expression = expression.expression;
    }
    while (expression instanceof _aureliaBinding.ValueConverter) {
      expression = expression.expression;
      unwrapped = true;
    }
    return unwrapped ? expression : null;
  }

  function isOneTime(expression) {
    while (expression instanceof _aureliaBinding.BindingBehavior) {
      if (expression.name === 'oneTime') {
        return true;
      }
      expression = expression.expression;
    }
    return false;
  }

  function updateOneTimeBinding(binding) {
    if (binding.call && binding.mode === oneTime) {
      binding.call(_aureliaBinding.sourceContext);
    } else if (binding.updateOneTimeBindings) {
      binding.updateOneTimeBindings();
    }
  }

  function indexOf(array, item, matcher, startIndex) {
    if (!matcher) {
      return array.indexOf(item);
    }
    var length = array.length;
    for (var index = startIndex || 0; index < length; index++) {
      if (matcher(array[index], item)) {
        return index;
      }
    }
    return -1;
  }
});
define('aurelia-templating-resources/map-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MapRepeatStrategy = undefined;

  

  var MapRepeatStrategy = exports.MapRepeatStrategy = function () {
    function MapRepeatStrategy() {
      
    }

    MapRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getMapObserver(items);
    };

    MapRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, items);
        });
        return;
      }
      this._standardProcessItems(repeat, items);
    };

    MapRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
      var index = 0;
      var overrideContext = void 0;

      items.forEach(function (value, key) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size, key);
        repeat.addView(overrideContext.bindingContext, overrideContext);
        ++index;
      });
    };

    MapRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, map, records) {
      var key = void 0;
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var removeIndex = void 0;
      var record = void 0;
      var rmPromises = [];
      var viewOrPromise = void 0;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        key = record.key;
        switch (record.type) {
          case 'update':
            removeIndex = this._getViewIndexByKey(repeat, key);
            viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), removeIndex, map.size, key);
            repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
            break;
          case 'add':
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, map.get(key), map.size - 1, map.size, key);
            repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
            break;
          case 'delete':
            if (record.oldValue === undefined) {
              return;
            }
            removeIndex = this._getViewIndexByKey(repeat, key);
            viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            break;
          case 'clear':
            repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
            break;
          default:
            continue;
        }
      }

      if (rmPromises.length > 0) {
        Promise.all(rmPromises).then(function () {
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
        });
      } else {
        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
      }
    };

    MapRepeatStrategy.prototype._getViewIndexByKey = function _getViewIndexByKey(repeat, key) {
      var i = void 0;
      var ii = void 0;
      var child = void 0;

      for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
        child = repeat.view(i);
        if (child.bindingContext[repeat.key] === key) {
          return i;
        }
      }

      return undefined;
    };

    return MapRepeatStrategy;
  }();
});
define('aurelia-templating-resources/set-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SetRepeatStrategy = undefined;

  

  var SetRepeatStrategy = exports.SetRepeatStrategy = function () {
    function SetRepeatStrategy() {
      
    }

    SetRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
      return observerLocator.getSetObserver(items);
    };

    SetRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, items);
        });
        return;
      }
      this._standardProcessItems(repeat, items);
    };

    SetRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
      var index = 0;
      var overrideContext = void 0;

      items.forEach(function (value) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, index, items.size);
        repeat.addView(overrideContext.bindingContext, overrideContext);
        ++index;
      });
    };

    SetRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, set, records) {
      var value = void 0;
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var removeIndex = void 0;
      var record = void 0;
      var rmPromises = [];
      var viewOrPromise = void 0;

      for (i = 0, ii = records.length; i < ii; ++i) {
        record = records[i];
        value = record.value;
        switch (record.type) {
          case 'add':
            overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, value, set.size - 1, set.size);
            repeat.insertView(set.size - 1, overrideContext.bindingContext, overrideContext);
            break;
          case 'delete':
            removeIndex = this._getViewIndexByValue(repeat, value);
            viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
            if (viewOrPromise instanceof Promise) {
              rmPromises.push(viewOrPromise);
            }
            break;
          case 'clear':
            repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
            break;
          default:
            continue;
        }
      }

      if (rmPromises.length > 0) {
        Promise.all(rmPromises).then(function () {
          (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
        });
      } else {
        (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
      }
    };

    SetRepeatStrategy.prototype._getViewIndexByValue = function _getViewIndexByValue(repeat, value) {
      var i = void 0;
      var ii = void 0;
      var child = void 0;

      for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
        child = repeat.view(i);
        if (child.bindingContext[repeat.local] === value) {
          return i;
        }
      }

      return undefined;
    };

    return SetRepeatStrategy;
  }();
});
define('aurelia-templating-resources/number-repeat-strategy',['exports', './repeat-utilities'], function (exports, _repeatUtilities) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NumberRepeatStrategy = undefined;

  

  var NumberRepeatStrategy = exports.NumberRepeatStrategy = function () {
    function NumberRepeatStrategy() {
      
    }

    NumberRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver() {
      return null;
    };

    NumberRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, value) {
      var _this = this;

      var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
      if (removePromise instanceof Promise) {
        removePromise.then(function () {
          return _this._standardProcessItems(repeat, value);
        });
        return;
      }
      this._standardProcessItems(repeat, value);
    };

    NumberRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, value) {
      var childrenLength = repeat.viewCount();
      var i = void 0;
      var ii = void 0;
      var overrideContext = void 0;
      var viewsToRemove = void 0;

      value = Math.floor(value);
      viewsToRemove = childrenLength - value;

      if (viewsToRemove > 0) {
        if (viewsToRemove > childrenLength) {
          viewsToRemove = childrenLength;
        }

        for (i = 0, ii = viewsToRemove; i < ii; ++i) {
          repeat.removeView(childrenLength - (i + 1), true, !repeat.viewsRequireLifecycle);
        }

        return;
      }

      for (i = childrenLength, ii = value; i < ii; ++i) {
        overrideContext = (0, _repeatUtilities.createFullOverrideContext)(repeat, i, i, ii);
        repeat.addView(overrideContext.bindingContext, overrideContext);
      }

      (0, _repeatUtilities.updateOverrideContexts)(repeat.views(), 0);
    };

    return NumberRepeatStrategy;
  }();
});
define('aurelia-templating-resources/analyze-view-factory',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.viewsRequireLifecycle = viewsRequireLifecycle;
  var lifecycleOptionalBehaviors = exports.lifecycleOptionalBehaviors = ['focus', 'if', 'repeat', 'show', 'with'];

  function behaviorRequiresLifecycle(instruction) {
    var t = instruction.type;
    var name = t.elementName !== null ? t.elementName : t.attributeName;
    return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && viewsRequireLifecycle(t.viewFactory) || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function targetRequiresLifecycle(instruction) {
    var behaviors = instruction.behaviorInstructions;
    if (behaviors) {
      var i = behaviors.length;
      while (i--) {
        if (behaviorRequiresLifecycle(behaviors[i])) {
          return true;
        }
      }
    }

    return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
  }

  function viewsRequireLifecycle(viewFactory) {
    if ('_viewsRequireLifecycle' in viewFactory) {
      return viewFactory._viewsRequireLifecycle;
    }

    viewFactory._viewsRequireLifecycle = false;

    if (viewFactory.viewFactory) {
      viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
      return viewFactory._viewsRequireLifecycle;
    }

    if (viewFactory.template.querySelector('.au-animate')) {
      viewFactory._viewsRequireLifecycle = true;
      return true;
    }

    for (var id in viewFactory.instructions) {
      if (targetRequiresLifecycle(viewFactory.instructions[id])) {
        viewFactory._viewsRequireLifecycle = true;
        return true;
      }
    }

    viewFactory._viewsRequireLifecycle = false;
    return false;
  }
});
define('aurelia-templating-resources/abstract-repeater',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var AbstractRepeater = exports.AbstractRepeater = function () {
    function AbstractRepeater(options) {
      

      Object.assign(this, {
        local: 'items',
        viewsRequireLifecycle: true
      }, options);
    }

    AbstractRepeater.prototype.viewCount = function viewCount() {
      throw new Error('subclass must implement `viewCount`');
    };

    AbstractRepeater.prototype.views = function views() {
      throw new Error('subclass must implement `views`');
    };

    AbstractRepeater.prototype.view = function view(index) {
      throw new Error('subclass must implement `view`');
    };

    AbstractRepeater.prototype.matcher = function matcher() {
      throw new Error('subclass must implement `matcher`');
    };

    AbstractRepeater.prototype.addView = function addView(bindingContext, overrideContext) {
      throw new Error('subclass must implement `addView`');
    };

    AbstractRepeater.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
      throw new Error('subclass must implement `insertView`');
    };

    AbstractRepeater.prototype.moveView = function moveView(sourceIndex, targetIndex) {
      throw new Error('subclass must implement `moveView`');
    };

    AbstractRepeater.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeAllViews`');
    };

    AbstractRepeater.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeView`');
    };

    AbstractRepeater.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
      throw new Error('subclass must implement `removeView`');
    };

    AbstractRepeater.prototype.updateBindings = function updateBindings(view) {
      throw new Error('subclass must implement `updateBindings`');
    };

    return AbstractRepeater;
  }();
});
define('aurelia-templating-resources/show',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal', './aurelia-hide-style'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaPal, _aureliaHideStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Show = undefined;

  

  var _dec, _dec2, _class;

  var Show = exports.Show = (_dec = (0, _aureliaTemplating.customAttribute)('show'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
    function Show(element, animator, domBoundary) {
      

      this.element = element;
      this.animator = animator;
      this.domBoundary = domBoundary;
    }

    Show.prototype.created = function created() {
      (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
    };

    Show.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      } else {
        this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      }
    };

    Show.prototype.bind = function bind(bindingContext) {
      this.valueChanged(this.value);
    };

    return Show;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/aurelia-hide-style',['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.aureliaHideClassName = undefined;
  exports.injectAureliaHideStyleAtHead = injectAureliaHideStyleAtHead;
  exports.injectAureliaHideStyleAtBoundary = injectAureliaHideStyleAtBoundary;
  var aureliaHideClassName = exports.aureliaHideClassName = 'aurelia-hide';

  var aureliaHideClass = '.' + aureliaHideClassName + ' { display:none !important; }';

  function injectAureliaHideStyleAtHead() {
    _aureliaPal.DOM.injectStyles(aureliaHideClass);
  }

  function injectAureliaHideStyleAtBoundary(domBoundary) {
    if (_aureliaPal.FEATURE.shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle) {
      domBoundary.hasAureliaHideStyle = true;
      _aureliaPal.DOM.injectStyles(aureliaHideClass, domBoundary);
    }
  }
});
define('aurelia-templating-resources/hide',['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal', './aurelia-hide-style'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaPal, _aureliaHideStyle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hide = undefined;

  

  var _dec, _dec2, _class;

  var Hide = exports.Hide = (_dec = (0, _aureliaTemplating.customAttribute)('hide'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTemplating.Animator, _aureliaDependencyInjection.Optional.of(_aureliaPal.DOM.boundary, true)), _dec(_class = _dec2(_class = function () {
    function Hide(element, animator, domBoundary) {
      

      this.element = element;
      this.animator = animator;
      this.domBoundary = domBoundary;
    }

    Hide.prototype.created = function created() {
      (0, _aureliaHideStyle.injectAureliaHideStyleAtBoundary)(this.domBoundary);
    };

    Hide.prototype.valueChanged = function valueChanged(newValue) {
      if (newValue) {
        this.animator.addClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      } else {
        this.animator.removeClass(this.element, _aureliaHideStyle.aureliaHideClassName);
      }
    };

    Hide.prototype.bind = function bind(bindingContext) {
      this.valueChanged(this.value);
    };

    return Hide;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/sanitize-html',['exports', 'aurelia-binding', 'aurelia-dependency-injection', './html-sanitizer'], function (exports, _aureliaBinding, _aureliaDependencyInjection, _htmlSanitizer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SanitizeHTMLValueConverter = undefined;

  

  var _dec, _dec2, _class;

  var SanitizeHTMLValueConverter = exports.SanitizeHTMLValueConverter = (_dec = (0, _aureliaBinding.valueConverter)('sanitizeHTML'), _dec2 = (0, _aureliaDependencyInjection.inject)(_htmlSanitizer.HTMLSanitizer), _dec(_class = _dec2(_class = function () {
    function SanitizeHTMLValueConverter(sanitizer) {
      

      this.sanitizer = sanitizer;
    }

    SanitizeHTMLValueConverter.prototype.toView = function toView(untrustedMarkup) {
      if (untrustedMarkup === null || untrustedMarkup === undefined) {
        return null;
      }

      return this.sanitizer.sanitize(untrustedMarkup);
    };

    return SanitizeHTMLValueConverter;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/html-sanitizer',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  

  var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  var HTMLSanitizer = exports.HTMLSanitizer = function () {
    function HTMLSanitizer() {
      
    }

    HTMLSanitizer.prototype.sanitize = function sanitize(input) {
      return input.replace(SCRIPT_REGEX, '');
    };

    return HTMLSanitizer;
  }();
});
define('aurelia-templating-resources/replaceable',['exports', 'aurelia-dependency-injection', 'aurelia-templating'], function (exports, _aureliaDependencyInjection, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Replaceable = undefined;

  

  var _dec, _dec2, _class;

  var Replaceable = exports.Replaceable = (_dec = (0, _aureliaTemplating.customAttribute)('replaceable'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.BoundViewFactory, _aureliaTemplating.ViewSlot), _dec(_class = (0, _aureliaTemplating.templateController)(_class = _dec2(_class = function () {
    function Replaceable(viewFactory, viewSlot) {
      

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.view = null;
    }

    Replaceable.prototype.bind = function bind(bindingContext, overrideContext) {
      if (this.view === null) {
        this.view = this.viewFactory.create();
        this.viewSlot.add(this.view);
      }

      this.view.bind(bindingContext, overrideContext);
    };

    Replaceable.prototype.unbind = function unbind() {
      this.view.unbind();
    };

    return Replaceable;
  }()) || _class) || _class) || _class);
});
define('aurelia-templating-resources/focus',['exports', 'aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaBinding, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Focus = undefined;

  

  var _dec, _dec2, _class;

  var Focus = exports.Focus = (_dec = (0, _aureliaTemplating.customAttribute)('focus', _aureliaBinding.bindingMode.twoWay), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaTaskQueue.TaskQueue), _dec(_class = _dec2(_class = function () {
    function Focus(element, taskQueue) {
      var _this = this;

      

      this.element = element;
      this.taskQueue = taskQueue;
      this.isAttached = false;
      this.needsApply = false;

      this.focusListener = function (e) {
        _this.value = true;
      };
      this.blurListener = function (e) {
        if (_aureliaPal.DOM.activeElement !== _this.element) {
          _this.value = false;
        }
      };
    }

    Focus.prototype.valueChanged = function valueChanged(newValue) {
      if (this.isAttached) {
        this._apply();
      } else {
        this.needsApply = true;
      }
    };

    Focus.prototype._apply = function _apply() {
      var _this2 = this;

      if (this.value) {
        this.taskQueue.queueMicroTask(function () {
          if (_this2.value) {
            _this2.element.focus();
          }
        });
      } else {
        this.element.blur();
      }
    };

    Focus.prototype.attached = function attached() {
      this.isAttached = true;
      if (this.needsApply) {
        this.needsApply = false;
        this._apply();
      }
      this.element.addEventListener('focus', this.focusListener);
      this.element.addEventListener('blur', this.blurListener);
    };

    Focus.prototype.detached = function detached() {
      this.isAttached = false;
      this.element.removeEventListener('focus', this.focusListener);
      this.element.removeEventListener('blur', this.blurListener);
    };

    return Focus;
  }()) || _class) || _class);
});
define('aurelia-templating-resources/css-resource',['exports', 'aurelia-templating', 'aurelia-loader', 'aurelia-dependency-injection', 'aurelia-path', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaLoader, _aureliaDependencyInjection, _aureliaPath, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._createCSSResource = _createCSSResource;

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  

  var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;

  function fixupCSSUrls(address, css) {
    if (typeof css !== 'string') {
      throw new Error('Failed loading required CSS file: ' + address);
    }
    return css.replace(cssUrlMatcher, function (match, p1) {
      var quote = p1.charAt(0);
      if (quote === '\'' || quote === '"') {
        p1 = p1.substr(1, p1.length - 2);
      }
      return 'url(\'' + (0, _aureliaPath.relativeToFile)(p1, address) + '\')';
    });
  }

  var CSSResource = function () {
    function CSSResource(address) {
      

      this.address = address;
      this._scoped = null;
      this._global = false;
      this._alreadyGloballyInjected = false;
    }

    CSSResource.prototype.initialize = function initialize(container, target) {
      this._scoped = new target(this);
    };

    CSSResource.prototype.register = function register(registry, name) {
      if (name === 'scoped') {
        registry.registerViewEngineHooks(this._scoped);
      } else {
        this._global = true;
      }
    };

    CSSResource.prototype.load = function load(container) {
      var _this = this;

      return container.get(_aureliaLoader.Loader).loadText(this.address).catch(function (err) {
        return null;
      }).then(function (text) {
        text = fixupCSSUrls(_this.address, text);
        _this._scoped.css = text;
        if (_this._global) {
          _this._alreadyGloballyInjected = true;
          _aureliaPal.DOM.injectStyles(text);
        }
      });
    };

    return CSSResource;
  }();

  var CSSViewEngineHooks = function () {
    function CSSViewEngineHooks(owner) {
      

      this.owner = owner;
      this.css = null;
    }

    CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
      if (instruction.targetShadowDOM) {
        _aureliaPal.DOM.injectStyles(this.css, content, true);
      } else if (_aureliaPal.FEATURE.scopedCSS) {
        var styleNode = _aureliaPal.DOM.injectStyles(this.css, content, true);
        styleNode.setAttribute('scoped', 'scoped');
      } else if (!this.owner._alreadyGloballyInjected) {
        _aureliaPal.DOM.injectStyles(this.css);
        this.owner._alreadyGloballyInjected = true;
      }
    };

    return CSSViewEngineHooks;
  }();

  function _createCSSResource(address) {
    var _dec, _class;

    var ViewCSS = (_dec = (0, _aureliaTemplating.resource)(new CSSResource(address)), _dec(_class = function (_CSSViewEngineHooks) {
      _inherits(ViewCSS, _CSSViewEngineHooks);

      function ViewCSS() {
        

        return _possibleConstructorReturn(this, _CSSViewEngineHooks.apply(this, arguments));
      }

      return ViewCSS;
    }(CSSViewEngineHooks)) || _class);

    return ViewCSS;
  }
});
define('aurelia-templating-resources/attr-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AttrBindingBehavior = undefined;

  

  var AttrBindingBehavior = exports.AttrBindingBehavior = function () {
    function AttrBindingBehavior() {
      
    }

    AttrBindingBehavior.prototype.bind = function bind(binding, source) {
      binding.targetObserver = new _aureliaBinding.DataAttributeObserver(binding.target, binding.targetProperty);
    };

    AttrBindingBehavior.prototype.unbind = function unbind(binding, source) {};

    return AttrBindingBehavior;
  }();
});
define('aurelia-templating-resources/binding-mode-behaviors',['exports', 'aurelia-binding', 'aurelia-metadata'], function (exports, _aureliaBinding, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TwoWayBindingBehavior = exports.OneWayBindingBehavior = exports.OneTimeBindingBehavior = undefined;

  

  var _dec, _class, _dec2, _class2, _dec3, _class3;

  var modeBindingBehavior = {
    bind: function bind(binding, source, lookupFunctions) {
      binding.originalMode = binding.mode;
      binding.mode = this.mode;
    },
    unbind: function unbind(binding, source) {
      binding.mode = binding.originalMode;
      binding.originalMode = null;
    }
  };

  var OneTimeBindingBehavior = exports.OneTimeBindingBehavior = (_dec = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec(_class = function OneTimeBindingBehavior() {
    

    this.mode = _aureliaBinding.bindingMode.oneTime;
  }) || _class);
  var OneWayBindingBehavior = exports.OneWayBindingBehavior = (_dec2 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec2(_class2 = function OneWayBindingBehavior() {
    

    this.mode = _aureliaBinding.bindingMode.oneWay;
  }) || _class2);
  var TwoWayBindingBehavior = exports.TwoWayBindingBehavior = (_dec3 = (0, _aureliaMetadata.mixin)(modeBindingBehavior), _dec3(_class3 = function TwoWayBindingBehavior() {
    

    this.mode = _aureliaBinding.bindingMode.twoWay;
  }) || _class3);
});
define('aurelia-templating-resources/throttle-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ThrottleBindingBehavior = undefined;

  

  function throttle(newValue) {
    var _this = this;

    var state = this.throttleState;
    var elapsed = +new Date() - state.last;
    if (elapsed >= state.delay) {
      clearTimeout(state.timeoutId);
      state.timeoutId = null;
      state.last = +new Date();
      this.throttledMethod(newValue);
      return;
    }
    state.newValue = newValue;
    if (state.timeoutId === null) {
      state.timeoutId = setTimeout(function () {
        state.timeoutId = null;
        state.last = +new Date();
        _this.throttledMethod(state.newValue);
      }, state.delay - elapsed);
    }
  }

  var ThrottleBindingBehavior = exports.ThrottleBindingBehavior = function () {
    function ThrottleBindingBehavior() {
      
    }

    ThrottleBindingBehavior.prototype.bind = function bind(binding, source) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

      var methodToThrottle = 'updateTarget';
      if (binding.callSource) {
        methodToThrottle = 'callSource';
      } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
        methodToThrottle = 'updateSource';
      }

      binding.throttledMethod = binding[methodToThrottle];
      binding.throttledMethod.originalName = methodToThrottle;

      binding[methodToThrottle] = throttle;

      binding.throttleState = {
        delay: delay,
        last: 0,
        timeoutId: null
      };
    };

    ThrottleBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var methodToRestore = binding.throttledMethod.originalName;
      binding[methodToRestore] = binding.throttledMethod;
      binding.throttledMethod = null;
      clearTimeout(binding.throttleState.timeoutId);
      binding.throttleState = null;
    };

    return ThrottleBindingBehavior;
  }();
});
define('aurelia-templating-resources/debounce-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DebounceBindingBehavior = undefined;

  

  function debounce(newValue) {
    var _this = this;

    var state = this.debounceState;
    if (state.immediate) {
      state.immediate = false;
      this.debouncedMethod(newValue);
      return;
    }
    clearTimeout(state.timeoutId);
    state.timeoutId = setTimeout(function () {
      return _this.debouncedMethod(newValue);
    }, state.delay);
  }

  var DebounceBindingBehavior = exports.DebounceBindingBehavior = function () {
    function DebounceBindingBehavior() {
      
    }

    DebounceBindingBehavior.prototype.bind = function bind(binding, source) {
      var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

      var methodToDebounce = 'updateTarget';
      if (binding.callSource) {
        methodToDebounce = 'callSource';
      } else if (binding.updateSource && binding.mode === _aureliaBinding.bindingMode.twoWay) {
        methodToDebounce = 'updateSource';
      }

      binding.debouncedMethod = binding[methodToDebounce];
      binding.debouncedMethod.originalName = methodToDebounce;

      binding[methodToDebounce] = debounce;

      binding.debounceState = {
        delay: delay,
        timeoutId: null,
        immediate: methodToDebounce === 'updateTarget' };
    };

    DebounceBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var methodToRestore = binding.debouncedMethod.originalName;
      binding[methodToRestore] = binding.debouncedMethod;
      binding.debouncedMethod = null;
      clearTimeout(binding.debounceState.timeoutId);
      binding.debounceState = null;
    };

    return DebounceBindingBehavior;
  }();
});
define('aurelia-templating-resources/signal-binding-behavior',['exports', './binding-signaler'], function (exports, _bindingSignaler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SignalBindingBehavior = undefined;

  

  var SignalBindingBehavior = exports.SignalBindingBehavior = function () {
    SignalBindingBehavior.inject = function inject() {
      return [_bindingSignaler.BindingSignaler];
    };

    function SignalBindingBehavior(bindingSignaler) {
      

      this.signals = bindingSignaler.signals;
    }

    SignalBindingBehavior.prototype.bind = function bind(binding, source) {
      if (!binding.updateTarget) {
        throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
      }
      if (arguments.length === 3) {
        var name = arguments[2];
        var bindings = this.signals[name] || (this.signals[name] = []);
        bindings.push(binding);
        binding.signalName = name;
      } else if (arguments.length > 3) {
        var names = Array.prototype.slice.call(arguments, 2);
        var i = names.length;
        while (i--) {
          var _name = names[i];
          var _bindings = this.signals[_name] || (this.signals[_name] = []);
          _bindings.push(binding);
        }
        binding.signalName = names;
      } else {
        throw new Error('Signal name is required.');
      }
    };

    SignalBindingBehavior.prototype.unbind = function unbind(binding, source) {
      var name = binding.signalName;
      binding.signalName = null;
      if (Array.isArray(name)) {
        var names = name;
        var i = names.length;
        while (i--) {
          var n = names[i];
          var bindings = this.signals[n];
          bindings.splice(bindings.indexOf(binding), 1);
        }
      } else {
        var _bindings2 = this.signals[name];
        _bindings2.splice(_bindings2.indexOf(binding), 1);
      }
    };

    return SignalBindingBehavior;
  }();
});
define('aurelia-templating-resources/binding-signaler',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BindingSignaler = undefined;

  

  var BindingSignaler = exports.BindingSignaler = function () {
    function BindingSignaler() {
      

      this.signals = {};
    }

    BindingSignaler.prototype.signal = function signal(name) {
      var bindings = this.signals[name];
      if (!bindings) {
        return;
      }
      var i = bindings.length;
      while (i--) {
        bindings[i].call(_aureliaBinding.sourceContext);
      }
    };

    return BindingSignaler;
  }();
});
define('aurelia-templating-resources/update-trigger-binding-behavior',['exports', 'aurelia-binding'], function (exports, _aureliaBinding) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.UpdateTriggerBindingBehavior = undefined;

  

  var _class, _temp;

  var eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
  var notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.';

  var UpdateTriggerBindingBehavior = exports.UpdateTriggerBindingBehavior = (_temp = _class = function () {
    function UpdateTriggerBindingBehavior(eventManager) {
      

      this.eventManager = eventManager;
    }

    UpdateTriggerBindingBehavior.prototype.bind = function bind(binding, source) {
      for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        events[_key - 2] = arguments[_key];
      }

      if (events.length === 0) {
        throw new Error(eventNamesRequired);
      }
      if (binding.mode !== _aureliaBinding.bindingMode.twoWay) {
        throw new Error(notApplicableMessage);
      }

      var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
      if (!targetObserver.handler) {
        throw new Error(notApplicableMessage);
      }
      binding.targetObserver = targetObserver;

      targetObserver.originalHandler = binding.targetObserver.handler;

      var handler = this.eventManager.createElementHandler(events);
      targetObserver.handler = handler;
    };

    UpdateTriggerBindingBehavior.prototype.unbind = function unbind(binding, source) {
      binding.targetObserver.handler = binding.targetObserver.originalHandler;
      binding.targetObserver.originalHandler = null;
    };

    return UpdateTriggerBindingBehavior;
  }(), _class.inject = [_aureliaBinding.EventManager], _temp);
});
define('aurelia-templating-resources/html-resource-plugin',['exports', 'aurelia-templating', './dynamic-element'], function (exports, _aureliaTemplating, _dynamicElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getElementName = getElementName;
  exports.configure = configure;
  function getElementName(address) {
    return (/([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase()
    );
  }

  function configure(config) {
    var viewEngine = config.container.get(_aureliaTemplating.ViewEngine);
    var loader = config.aurelia.loader;

    viewEngine.addResourcePlugin('.html', {
      'fetch': function fetch(address) {
        return loader.loadTemplate(address).then(function (registryEntry) {
          var _ref;

          var bindable = registryEntry.template.getAttribute('bindable');
          var elementName = getElementName(address);

          if (bindable) {
            bindable = bindable.split(',').map(function (x) {
              return x.trim();
            });
            registryEntry.template.removeAttribute('bindable');
          } else {
            bindable = [];
          }

          return _ref = {}, _ref[elementName] = (0, _dynamicElement._createDynamicElement)(elementName, address, bindable), _ref;
        });
      }
    });
  }
});
define('aurelia-templating-resources/dynamic-element',['exports', 'aurelia-templating'], function (exports, _aureliaTemplating) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._createDynamicElement = _createDynamicElement;

  

  function _createDynamicElement(name, viewUrl, bindableNames) {
    var _dec, _dec2, _class;

    var DynamicElement = (_dec = (0, _aureliaTemplating.customElement)(name), _dec2 = (0, _aureliaTemplating.useView)(viewUrl), _dec(_class = _dec2(_class = function () {
      function DynamicElement() {
        
      }

      DynamicElement.prototype.bind = function bind(bindingContext) {
        this.$parent = bindingContext;
      };

      return DynamicElement;
    }()) || _class) || _class);

    for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
      (0, _aureliaTemplating.bindable)(bindableNames[i])(DynamicElement);
    }
    return DynamicElement;
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./scss/reset.css\"></require>\n  <require from=\"./scss/print.css\"></require>\n  <require from=\"./scss/mobile.css\"></require>\n  <require from=\"materialize-css/css/materialize.css\"></require>\n  <require from=\"font-awesome/css/font-awesome.min.css\"></require>\n  \n  <md-colors md-primary-color=\"teal\" md-accent-color=\"lightblue\"></md-colors>\n  <router-view></router-view>\n</template>\n"; });
define('text!home/cv-header.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./cv-header.css\" as=\"scoped\"></require>\r\n  <md-navbar class=\"header-container\">\r\n    <div class=\"header-inner\">\r\n      <div class=\"head-left\">\r\n        <span class=\"title\">${Owner.Name}</span>\r\n        <span class=\"subtitle\">${Owner.Title | translate & signal:'language-changed' }</span>\r\n        <div class=\"language-selector no-print\">\r\n          <a href=\"\" click.delegate=\"setLanguageEnglish()\">English</a>\r\n          <a href=\"\" click.delegate=\"setLanguageHungarian()\">Magyar</a>\r\n          <a href=\"./assets/cv_en.pdf\">Download</a>\r\n          <a href=\"./assets/cv_hu.pdf\">Letöltés</a>\r\n          <a href=\"#\" click.delegate=\"print()\">${'print' | translate & signal:'language-changed'}</a>\r\n        </div>\r\n          <div class=\"button-links no-print\">\r\n            <fa-button-link title=\"Linkedin\" \r\n                            target=\"_blank\"\r\n                            icon-name=\"fa-linkedin\" \r\n                            link-url.bind=\"Owner.LinkedinProfileUrl\">\r\n            </fa-button-link>\r\n            <fa-button-link title=\"Github\" \r\n                            target=\"_blank\"            \r\n                            icon-name=\"fa-github\" \r\n                            link-url.bind=\"Owner.GithubProfileUrl\">\r\n            </fa-button-link>\r\n            <fa-button-link title=\"Stack Owerflow\" \r\n                            target=\"_blank\"            \r\n                            icon-name=\"fa-stack-overflow\" \r\n                            link-url.bind=\"Owner.StackOwerflowProfileUrl\">\r\n            </fa-button-link>\r\n            <fa-button-link title=\"Google Plus\" \r\n                            target=\"_blank\"            \r\n                            icon-name=\"fa-google-plus\" \r\n                            link-url.bind=\"Owner.GooglePlusProfileUrl\">\r\n            </fa-button-link>\r\n            <fa-button-link title=\"Facebook\" \r\n                            target=\"_blank\"            \r\n                            icon-name=\"fa-facebook\" \r\n                            link-url.bind=\"Owner.FacebookProfileUrl\">\r\n            </fa-button-link>            \r\n          </div>        \r\n      </div>\r\n      <div class=\"head-center\">\r\n        <div class=\"button-links\">\r\n          <div class=\"button-link\">\r\n            <span class=\"text email\">${Owner.Email}</span>\r\n            <fa-button-link title.bind=\"Owner.Email\"\r\n                            icon-name=\"fa-envelope\" \r\n                            link-url.bind=\"'mailto:'+ Owner.Email\">\r\n            </fa-button-link>\r\n          </div>\r\n          <div class=\"button-link\">\r\n            <span class=\"text phone\">${Owner.Phone}</span>\r\n            <fa-button-link title.bind=\"Owner.Phone\" \r\n                            icon-name=\"fa-phone\" \r\n                            link-url.bind=\"'tel:'+ Owner.Phone\">\r\n            </fa-button-link>\r\n          </div>\r\n\r\n\r\n          <div class=\"button-link\">\r\n            <span class=\"text address\">${Owner.Address}</span>\r\n            <google-map item.bind=\"Owner\"></google-map>\r\n          </div>          \r\n        </div>\r\n      </div>\r\n      <div class=\"head-right\">\r\n        <img md-box src=\"${Owner.PhotoURL}\" alt=\"User\" />\r\n      </div>\r\n    </div>\r\n  </md-navbar>\r\n</template>"; });
define('text!home/cv-header.css', ['module'], function(module) { module.exports = "md-navbar {\n  margin-bottom: 200px; }\n  md-navbar nav {\n    background-image: url(\"../assets/bg-head.jpg\");\n    background-position: center;\n    background-size: 100%;\n    height: 200px; }\n  md-navbar .header-inner {\n    display: flex;\n    flex-direction: row; }\n    md-navbar .header-inner .head-center {\n      flex-grow: 1; }\n      md-navbar .header-inner .head-center .button-links {\n        margin-right: 15px;\n        text-align: right;\n        display: flex;\n        flex-direction: column; }\n        @media print {\n          md-navbar .header-inner .head-center .button-links {\n            margin-top: 15px; } }\n        @media screen and (max-width: 710px) {\n          md-navbar .header-inner .head-center .button-links .email,\n          md-navbar .header-inner .head-center .button-links .phone,\n          md-navbar .header-inner .head-center .button-links .address {\n            display: none; } }\n    md-navbar .header-inner .head-left {\n      display: block;\n      line-height: normal; }\n      md-navbar .header-inner .head-left .button-links {\n        margin-left: 15px;\n        margin-top: 10px; }\n      md-navbar .header-inner .head-left .subtitle,\n      md-navbar .header-inner .head-left .title,\n      md-navbar .header-inner .head-left .language-selector {\n        display: inline-block;\n        line-height: normal;\n        margin-left: 25px;\n        text-align: left;\n        text-shadow: 1px 1px 15px black;\n        width: 100%; }\n      md-navbar .header-inner .head-left .language-selector a {\n        text-decoration: underline; }\n      md-navbar .header-inner .head-left .title {\n        font-size: 1.8em;\n        margin-top: 25px; }\n      md-navbar .header-inner .head-left .subtitle {\n        margin-bottom: 20px;\n        margin-top: 20px; }\n    md-navbar .header-inner .head-right {\n      border-radius: 50%;\n      box-shadow: 0 0 12px 5px black;\n      height: 150px;\n      margin-right: 25px;\n      margin-top: 25px;\n      min-width: 150px;\n      overflow: hidden;\n      width: 150px; }\n      md-navbar .header-inner .head-right:active {\n        box-shadow: 0 0 5px 3px black; }\n      md-navbar .header-inner .head-right img {\n        will-change: initial;\n        transition: 0ms;\n        height: 100%;\n        width: 100%; }\n"; });
define('text!home/hobbies.css', ['module'], function(module) { module.exports = ".hobbyItem .collapsible-body .flex-container {\n  display: flex !important;\n  flex-direction: row; }\n  .hobbyItem .collapsible-body .flex-container .hobby-image {\n    border-radius: 50%;\n    overflow: hidden;\n    display: inline-block;\n    height: 64px;\n    width: 64px;\n    margin-right: 15px;\n    box-shadow: 1px 1px 5px 0 black; }\n    .hobbyItem .collapsible-body .flex-container .hobby-image img {\n      will-change: initial !important;\n      transition-duration: 0ms !important; }\n"; });
define('text!home/hobbies.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./hobbies.css\"></require>\r\n    <md-card class=\"print-one-page\" md-title.bind=\"'hobbies-title' | translate  & signal:'language-changed'\" md-image=\"./assets/dev-header.jpg\">\r\n        <div class=\"collapsible-popout\">\r\n            <ul md-collapsible=\"accordion: false;\">\r\n                <li repeat.for=\"hobby of Hobbies\" class=\"hobbyItem\">\r\n                    <div class=\"collapsible-header active\">\r\n                        <span class=\"skill-name\" title.bind=\"hobby.Name | translate  & signal:'language-changed'\">\r\n                            ${hobby.Name  | translate  & signal:'language-changed'}\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                        <div class=\"flex-container\">\r\n                            <div class=\"hobby-image\">\r\n                                <img md-box src.bind=\"hobby.ImageUrl\" height=\"64px\">\r\n                            </div>\r\n                            <tag-list tags.bind=\"hobby.Tags\"></tag-list>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </md-card>\r\n</template>"; });
define('text!home/home.css', ['module'], function(module) { module.exports = ".main-content > works md-card div.card {\n  margin-top: 0; }\n\n@media screen and (min-width: 1600px) {\n  .main-content > * {\n    padding: 15px;\n    max-width: 50%;\n    float: left;\n    box-sizing: border-box; } }\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\r\n    <cv-header owner.bind=\"Owner\"></cv-header>\r\n\r\n    <require from=\"./home.css\" as=\"scoped\"></require>\r\n    <div class=\"main-content\">\r\n        <works></works>\r\n        <schools></schools>\r\n        <languages></languages>        \r\n        <skills></skills>        \r\n        <hobbies></hobbies>\r\n    </div>\r\n</template>"; });
define('text!home/jobs.css', ['module'], function(module) { module.exports = ".job-container > .collapsible-header {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row; }\n  .job-container > .collapsible-header .logo {\n    position: relative;\n    top: 10px;\n    margin-right: 17px; }\n  .job-container > .collapsible-header .separator {\n    flex-grow: 1; }\n  .job-container > .collapsible-header .job-duration,\n  .job-container > .collapsible-header .job-name {\n    flex-grow: 1;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  .job-container > .collapsible-header .job-duration {\n    text-align: right;\n    min-width: 100px;\n    padding-top: 6px; }\n\n.job-container > .collapsible-body > .body-head {\n  display: flex;\n  flex-direction: row; }\n  .job-container > .collapsible-body > .body-head > .employer-home-page {\n    margin-top: 10px; }\n    .job-container > .collapsible-body > .body-head > .employer-home-page .homapage-name {\n      vertical-align: super; }\n  .job-container > .collapsible-body > .body-head > .separator {\n    flex-grow: 1; }\n  .job-container > .collapsible-body > .body-head > .logo {\n    margin: 0 10px 10px 0; }\n  .job-container > .collapsible-body > .body-head > .address {\n    margin-left: 25px; }\n    .job-container > .collapsible-body > .body-head > .address > google-map .map-link-button a {\n      transform: scale(0.7);\n      position: relative;\n      top: -3px; }\n\n.job-container > .collapsible-body > .description {\n  margin-bottom: 10px;\n  text-align: justify; }\n"; });
define('text!home/jobs.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./jobs.css\"></require>\r\n    <require from=\"./projects\"></require>\r\n    <md-card md-title.bind=\"'jobs-title' | translate & signal:'language-changed'\" md-image=\"./assets/dev-header.jpg\">\r\n        <div class=\"collapsible-popout jobs-container\">\r\n            <ul md-collapsible=\"accordion: false; popout: true;\">\r\n                <li repeat.for=\"job of Jobs\" class=\"job-container print-one-page\">\r\n                    <div class=\"collapsible-header active \">\r\n                        <span class=\"job-name\" title.bind=\"job.Employer.Name + ' - ' + job.Title\">\r\n                            <a class=\"logo\" href.bind=\"job.Employer.HomePage\" target=\"_blank\">\r\n                                <img class=\"logo-image\" src.bind=\"job.Employer.LogoUrl\" alt=\"job-logo\" height=\"32\"/>\r\n                            </a>\r\n                            \r\n                             <span class=\"position\">\r\n                                 ${job.Title}\r\n                             </span>\r\n                             </span>\r\n                             <span class=\"separator\"></span>\r\n                        <span class=\"job-duration\" title.bind=\"job.FromDate | dateRange:job.UntilDate\"> ${job.FromDate | dateRange:job.UntilDate} </span>\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                        <div class=\"body-head\">\r\n                            <a class=\"employer-home-page\" href.bind=\"job.Employer.HomePage\" target=\"_blank\">\r\n                                <i class=\"material-icons\">public</i>\r\n                                <span class=\"homapage-name\">${job.Employer.HomePage}</span>\r\n                                </a>\r\n                            <div class=\"separator\"></div>\r\n                            <div class=\"address\">\r\n                                <google-map item.bind=\"job\"></google-map>\r\n                                <span class=\"address-name\">${job.Address}</span>\r\n                            </div>                            \r\n                        </div>\r\n                        <div class=\"homepage\">\r\n                            <a href.bind=\"job.HomepageUrl\" target=\"_blank\">${job.HomepageUrl}</a>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            ${job.Responsibilities | translate & signal:'language-changed'}\r\n                        </div>\r\n                        <projects projects.bind=\"job.Projects\"></projects>\r\n                        <tag-list tags.bind=\"job.Tags\"></tag-list>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </md-card>\r\n</template>"; });
define('text!home/languages.css', ['module'], function(module) { module.exports = ""; });
define('text!home/languages.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./languages.css\"></require>\r\n    <md-card class=\"print-one-page\" md-title.bind=\"'languages-title' | translate & signal:'language-changed'\" md-image=\"./assets/dev-header-2.jpg\">\r\n        <md-collection>\r\n            <md-collection-item repeat.for=\"language of Languages\" class=\"language-container\">\r\n                <span text-content.bind=\"language.Name | translate & signal:'language-changed'\"></span>\r\n                <div class=\"secondary-content text-primary\">\r\n                    <span text-content.bind=\"language.Level | translate & signal:'language-changed'\"></span>\r\n                </div>\r\n            </md-collection-item>\r\n        </md-collection>\r\n    </md-card>\r\n\r\n</template>"; });
define('text!home/projects.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./projects.css\"></require>\r\n    <div class=\"projects-container print-one-page\">\r\n        <div class=\"collapsible-popout active\">\r\n            <ul md-collapsible=\"accordion: false;\">\r\n                <li repeat.for=\"project of Projects\">\r\n                    <div class=\"collapsible-header active\">\r\n                        ${project.Name}\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                        <div class=\"description\">\r\n                            ${project.Description | translate & signal:'language-changed'}\r\n                        </div>\r\n                        <tag-list tags.bind=\"project.Tags\"></tag-list>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</template>"; });
define('text!home/projects.css', ['module'], function(module) { module.exports = ""; });
define('text!home/schools.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./schools.css\"></require>\r\n    <md-card class=\"print-one-page\" md-title.bind=\"'schools-title' | translate & signal:'language-changed'\" md-image=\"./assets/dev-header-2.jpg\">\r\n        <div class=\"collapsible-popout\">\r\n            <ul md-collapsible=\"accordion: false; popout: true;\">\r\n                <li repeat.for=\"school of Schools\" class=\"school-container\">\r\n                    <div class=\"collapsible-header active\">\r\n                        <span class=\"school-name\" title.bind=\"school.Name\">\r\n                            <strong>${school.Name}</strong>\r\n                             - ${school.Type | translate & signal:'language-changed'}</span>\r\n                             <span class=\"separator\"></span>\r\n                        <span class=\"school-duration\" title.bind=\"school.FromDate | dateRange:school.UntilDate\"> ${school.FromDate | dateRange:school.UntilDate} </span>\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                        <div class=\"address right\">\r\n                            <google-map item.bind=\"school\"></google-map>\r\n                            <span class=\"address-name\">${school.Address}</span>\r\n                        </div>\r\n                        <div class=\"homepage\">\r\n                            <a href.bind=\"school.HomepageUrl\" target=\"_blank\">${school.HomepageUrl}</a>\r\n                        </div>\r\n                        <div class=\"description\">\r\n                            ${school.Description}\r\n                        </div>\r\n                        <tag-list tags.bind=\"school.Tags\"></tag-list>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </md-card>\r\n</template>"; });
define('text!home/schools.css', ['module'], function(module) { module.exports = "md-card > .au-target.card > .card-image {\n  height: 64px; }\n\n.collapsible-header {\n  white-space: nowrap;\n  overflow: hidden;\n  display: flex !important;\n  flex-direction: row; }\n  .collapsible-header .school-duration,\n  .collapsible-header .school-name {\n    flex-grow: 1;\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  .collapsible-header .separator {\n    flex-grow: 1; }\n  .collapsible-header .school-duration {\n    text-align: right;\n    min-width: 80px; }\n\n.collapsible-body {\n  padding: 15px; }\n  @media screen and (max-width: 700px) {\n    .collapsible-body .address .address-name {\n      display: none; } }\n  .collapsible-body .address google-map {\n    display: inline-block; }\n  .collapsible-body a:hover {\n    text-decoration: underline; }\n"; });
define('text!home/skills.css', ['module'], function(module) { module.exports = ""; });
define('text!home/skills.html', ['module'], function(module) { module.exports = "<template>\r\n    <require from=\"./skills.css\"></require>\r\n    <md-card class=\"print-one-page\" md-title.bind=\"'skills-title' | translate & signal:'language-changed'\" md-image=\"./assets/dev-header-3.jpg\">\r\n        <div class=\"collapsible-popout\">\r\n            <ul md-collapsible=\"\">\r\n                <li repeat.for=\"skill of Skills\">\r\n                    <div class=\"collapsible-header active\">\r\n                        <span class=\"skill-name\" title.bind=\"skill.Name | translate & signal:'language-changed'\">\r\n                            ${skill.Name  | translate & signal:'language-changed'}\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"collapsible-body\">\r\n                        <tag-list tags.bind=\"skill.Tags\"></tag-list>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </md-card>\r\n</template>"; });
define('text!resources/elements/fa-button-link.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./fa-button-link.css\" as=\"scoped\"></require>\n  <span class=\"button-link\">\n  <a md-button=\"floating: true;\" \n      md-waver=\"color: primary; circle: true;\" \n      title.bind=\"title\" \n      target.bind=\"target\" \n      href.bind=\"linkUrl\">\n    <i class=\"fa ${iconName}\" aria-hidden=\"true\"></i>\n  </a>\n  </span>\n</template>"; });
define('text!scss/mobile.css', ['module'], function(module) { module.exports = "@media screen and (max-width: 600px) {\n  body > router-view > cv-header > md-navbar.header-container > div.au-target > nav {\n    height: 305px !important;\n    background-repeat: no-repeat;\n    background-size: cover; }\n    body > router-view > cv-header > md-navbar.header-container > div.au-target > nav div.head-left div.language-selector {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      margin-top: 2rem; }\n      body > router-view > cv-header > md-navbar.header-container > div.au-target > nav div.head-left div.language-selector a {\n        width: 49%;\n        padding: 5px 0 0;\n        display: block; }\n    body > router-view > cv-header > md-navbar.header-container > div.au-target > nav div.head-left div.button-links {\n      margin-top: 0;\n      position: absolute; }\n    body > router-view > cv-header > md-navbar.header-container > div.au-target > nav div.head-center .button-links {\n      position: absolute;\n      flex-direction: row;\n      bottom: 0;\n      left: 15px; }\n      body > router-view > cv-header > md-navbar.header-container > div.au-target > nav div.head-center .button-links .button-link {\n        margin-right: 2px; }\n    body > router-view > cv-header > md-navbar.header-container > div.au-target > nav div.head-right {\n      height: 100px;\n      min-width: 100px;\n      width: 100px;\n      margin-right: 30px;\n      margin-top: 10px; } }\n"; });
define('text!resources/elements/google-map.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./google-map.css\"></require>\n  <fa-button-link title.bind=\"Item.Address\"\n                  icon-name=\"fa-map-marker\" \n                  click.delegate=\"openMap($event)\"\n                  class=\"map-link-button\">\n  </fa-button-link>\n  <div class=\"modal-container\">\n    <div class=\"maps-modal\" md-modal=\"dismissible: false;\" md-modal.ref=\"modal\">\n      <div class=\"modal-content\">\n        <a md-button=\"floating: true;\" md-waves=\"color: accent;\" class=\"right modal-action modal-close\" title.bind=\"'button-close' | translate & signal:'language-changed'\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </a>\n        <h4 title.bind=\"Address\">${Item.Address}</h4>\n        <iframe class=\"mapFrame\" \n                height=\"450\" \n                frameborder=\"0\" \n                src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyBe7lzmO9QZluA6UzpTRi9RjG8pbwgw740 &q=${Item.LocationQuery}\" \n                allowfullscreen=\"true\"></iframe>\n      </div>\n    </div>\n  </div>\n\n</template>"; });
define('text!scss/print.css', ['module'], function(module) { module.exports = "@media print {\n  * {\n    border: 0px !important;\n    box-shadow: 0 0 0 transparent !important; }\n  body,\n  html {\n    background: transparent !important; }\n  .card-content {\n    padding: 0 !important; }\n  .no-print,\n  .no-print * {\n    display: none !important; }\n  .collapsible-popout > ul > li {\n    margin: 0 !important;\n    box-shadow: none !important;\n    border: none !important; }\n  .collapsible-body {\n    display: block !important;\n    box-shadow: 0 0 0 transparent !important;\n    border: none !important; }\n  .print-one-page {\n    page-break-inside: avoid; } }\n"; });
define('text!resources/elements/tag-list.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./tag-list.css\"></require>\n  <div class=\"tags\">\n    <span class=\"tag\" repeat.for=\"tag of tags\">\n      <a if.bind=\"tag.Url && tag.Url.length\" class=\"tag\" href.bind=\"tag.Url\" target=\"_blank\"> ${tag.Name} </a>\n      <span if.bind=\"!tag.Url || !tag.Url.length\" class=\"tag-nolink\" > ${tag.Name} </span>\n    </span>\n  </div>\n</template>"; });
define('text!scss/reset.css', ['module'], function(module) { module.exports = "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0b1 | 201101 \r\n   NOTE: WORK IN PROGRESS\r\n   USE WITH CAUTION AND TEST WITH ABANDON */\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\n/* remember to define visible focus styles! \r\n:focus {\r\n\toutline: ?????;\r\n} */\n/* remember to highlight inserts somehow! */\nins {\n  text-decoration: none; }\n\ndel {\n  text-decoration: line-through; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nhtml, body {\n  height: 100%;\n  background-color: whitesmoke; }\n"; });
define('text!resources/elements/fa-button-link.css', ['module'], function(module) { module.exports = ".button-link {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n  .button-link .text {\n    text-shadow: 1px 1px 15px black; }\n  .button-link a {\n    box-shadow: 1px 1px 3px 0 black;\n    margin: 5px; }\n    .button-link a i {\n      line-height: inherit !important;\n      width: 100%; }\n"; });
define('text!resources/elements/google-map.css', ['module'], function(module) { module.exports = ".modal-container .maps-modal .modal-content h4 {\n  text-align: left;\n  color: #333;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  font-size: 1.5em;\n  font-weight: lighter; }\n\n.modal-container .maps-modal .modal-content .modal-close {\n  position: relative;\n  top: -20px;\n  left: 17px; }\n\n.modal-container .maps-modal .modal-content .mapFrame {\n  width: 100%; }\n"; });
define('text!resources/elements/tag-list.css', ['module'], function(module) { module.exports = ".tags .tag {\n  margin: 8px 10px 0 0;\n  display: inline-block; }\n\n.tags .tag-nolink {\n  color: #8989c3; }\n"; });
//# sourceMappingURL=app-bundle.js.map