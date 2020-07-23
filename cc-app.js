var executed = false;
var lol;
var db = [];
var showAlert;
var blockImg;
var turnOn;
var blockTxt;
var blockWlg;
var blockWlgEn;
const wlg = ['chuj', 'chuja', 'chujek', 'chuju', 'chujem', 'chujnia',
    'chujowy', 'chujowa', 'chujowe', 'cipa', 'cipę', 'cipe', 'cipą',
    'cipie', 'dojebać', 'dojebac', 'dojebie', 'dojebał', 'dojebal',
    'dojebała', 'dojebala', 'dojebałem', 'dojebalem', 'dojebałam',
    'dojebalam', 'dojebię', 'dojebie', 'dopieprzać', 'dopieprzac',
    'dopierdalać', 'dopierdalac', 'dopierdala', 'dopierdalał',
    'dopierdalal', 'dopierdalała', 'dopierdalala', 'dopierdoli',
    'dopierdolił', 'dopierdolil', 'dopierdolę', 'dopierdole', 'dopierdoli',
    'dopierdalający', 'dopierdalajacy', 'dopierdolić', 'dopierdolic',
    'dupa', 'dupie', 'dupą', 'dupcia', 'dupeczka', 'dupy', 'dupe', 'huj',
    'hujek', 'hujnia', 'huja', 'huje', 'hujem', 'huju', 'jebać', 'jebac',
    'jebał', 'jebal', 'jebie', 'jebią', 'jebia', 'jebak', 'jebaka', 'jebal',
    'jebał', 'jebany', 'jebane', 'jebanka', 'jebanko', 'jebankiem',
    'jebanymi', 'jebana', 'jebanym', 'jebanej', 'jebaną', 'jebana',
    'jebani', 'jebanych', 'jebanymi', 'jebcie', 'jebiący', 'jebiacy',
    'jebiąca', 'jebiaca', 'jebiącego', 'jebiacego', 'jebiącej', 'jebiacej',
    'jebia', 'jebią', 'jebie', 'jebię', 'jebliwy', 'jebnąć', 'jebnac',
    'jebnąc', 'jebnać', 'jebnął', 'jebnal', 'jebną', 'jebna', 'jebnęła',
    'jebnela', 'jebnie', 'jebnij', 'jebut', 'koorwa', 'kórwa', 'kurestwo',
    'kurew', 'kurewski', 'kurewska', 'kurewskiej', 'kurewską', 'kurewska',
    'kurewsko', 'kurewstwo', 'kurwa', 'kurwaa', 'kurwami', 'kurwą', 'kurwe',
    'kurwę', 'kurwie', 'kurwiska', 'kurwo', 'kurwy', 'kurwach', 'kurwami',
    'kurewski', 'kurwiarz', 'kurwiący', 'kurwica', 'kurwić', 'kurwic',
    'kurwidołek', 'kurwik', 'kurwiki', 'kurwiszcze', 'kurwiszon',
    'kurwiszona', 'kurwiszonem', 'kurwiszony', 'kutas', 'kutasa', 'kutasie',
    'kutasem', 'kutasy', 'kutasów', 'kutasow', 'kutasach', 'kutasami',
    'matkojebca', 'matkojebcy', 'matkojebcą', 'matkojebca', 'matkojebcami',
    'matkojebcach', 'nabarłożyć', 'najebać', 'najebac', 'najebał',
    'najebal', 'najebała', 'najebala', 'najebane', 'najebany', 'najebaną',
    'najebana', 'najebie', 'najebią', 'najebia', 'naopierdalać',
    'naopierdalac', 'naopierdalał', 'naopierdalal', 'naopierdalała',
    'naopierdalala', 'naopierdalała', 'napierdalać', 'napierdalac',
    'napierdalający', 'napierdalajacy', 'napierdolić', 'napierdolic',
    'nawpierdalać', 'nawpierdalac', 'nawpierdalał', 'nawpierdalal',
    'nawpierdalała', 'nawpierdalala', 'obsrywać', 'obsrywac', 'obsrywający',
    'obsrywajacy', 'odpieprzać', 'odpieprzac', 'odpieprzy', 'odpieprzył',
    'odpieprzyl', 'odpieprzyła', 'odpieprzyla', 'odpierdalać',
    'odpierdalac', 'odpierdol', 'odpierdolił', 'odpierdolil',
    'odpierdoliła', 'odpierdolila', 'odpierdoli', 'odpierdalający',
    'odpierdalajacy', 'odpierdalająca', 'odpierdalajaca', 'odpierdolić',
    'odpierdolic', 'odpierdoli', 'odpierdolił', 'opieprzający',
    'opierdalać', 'opierdalac', 'opierdala', 'opierdalający',
    'opierdalajacy', 'opierdol', 'opierdolić', 'opierdolic', 'opierdoli',
    'opierdolą', 'opierdola', 'piczka', 'pieprznięty', 'pieprzniety',
    'pieprzony', 'pierdel', 'pierdlu', 'pierdolą', 'pierdola', 'pierdolący',
    'pierdolacy', 'pierdoląca', 'pierdolaca', 'pierdol', 'pierdole',
    'pierdolenie', 'pierdoleniem', 'pierdoleniu', 'pierdolę', 'pierdolec',
    'pierdola', 'pierdolą', 'pierdolić', 'pierdolicie', 'pierdolic',
    'pierdolił', 'pierdolil', 'pierdoliła', 'pierdolila', 'pierdoli',
    'pierdolnięty', 'pierdolniety', 'pierdolisz', 'pierdolnąć',
    'pierdolnac', 'pierdolnął', 'pierdolnal', 'pierdolnęła', 'pierdolnela',
    'pierdolnie', 'pierdolnięty', 'pierdolnij', 'pierdolnik', 'pierdolona',
    'pierdolone', 'pierdolony', 'pierdołki', 'pierdzący', 'pierdzieć',
    'pierdziec', 'pizda', 'pizdą', 'pizde', 'pizdę', 'piździe', 'pizdzie',
    'pizdnąć', 'pizdnac', 'pizdu', 'podpierdalać', 'podpierdalac',
    'podpierdala', 'podpierdalający', 'podpierdalajacy', 'podpierdolić',
    'podpierdolic', 'podpierdoli', 'pojeb', 'pojeba', 'pojebami',
    'pojebani', 'pojebanego', 'pojebanemu', 'pojebani', 'pojebany',
    'pojebanych', 'pojebanym', 'pojebanymi', 'pojebem', 'pojebać',
    'pojebac', 'pojebalo', 'popierdala', 'popierdalac', 'popierdalać',
    'popierdolić', 'popierdolic', 'popierdoli', 'popierdolonego',
    'popierdolonemu', 'popierdolonym', 'popierdolone', 'popierdoleni',
    'popierdolony', 'porozpierdalać', 'porozpierdala', 'porozpierdalac',
    'poruchac', 'poruchać', 'przejebać', 'przejebane', 'przejebac',
    'przyjebali', 'przepierdalać', 'przepierdalac', 'przepierdala',
    'przepierdalający', 'przepierdalajacy', 'przepierdalająca',
    'przepierdalajaca', 'przepierdolić', 'przepierdolic', 'przyjebać',
    'przyjebac', 'przyjebie', 'przyjebała', 'przyjebala', 'przyjebał',
    'przyjebal', 'przypieprzać', 'przypieprzac', 'przypieprzający',
    'przypieprzajacy', 'przypieprzająca', 'przypieprzajaca',
    'przypierdalać', 'przypierdalac', 'przypierdala', 'przypierdoli',
    'przypierdalający', 'przypierdalajacy', 'przypierdolić',
    'przypierdolic', 'qrwa', 'rozjebać', 'rozjebac', 'rozjebie',
    'rozjebała', 'rozjebią', 'rozpierdalać', 'rozpierdalac', 'rozpierdala',
    'rozpierdolić', 'rozpierdolic', 'rozpierdole', 'rozpierdoli',
    'rozpierducha', 'skurwić', 'skurwiel', 'skurwiela', 'skurwielem',
    'skurwielu', 'skurwysyn', 'skurwysynów', 'skurwysynow', 'skurwysyna',
    'skurwysynem', 'skurwysynu', 'skurwysyny', 'skurwysyński',
    'skurwysynski', 'skurwysyństwo', 'skurwysynstwo', 'spieprzać',
    'spieprzac', 'spieprza', 'spieprzaj', 'spieprzajcie', 'spieprzają',
    'spieprzaja', 'spieprzający', 'spieprzajacy', 'spieprzająca',
    'spieprzajaca', 'spierdalać', 'spierdalac', 'spierdala', 'spierdalał',
    'spierdalała', 'spierdalal', 'spierdalalcie', 'spierdalala',
    'spierdalający', 'spierdalajacy', 'spierdolić', 'spierdolic',
    'spierdoli', 'spierdoliła', 'spierdoliło', 'spierdolą', 'spierdola',
    'srać', 'srac', 'srający', 'srajacy', 'srając', 'srajac', 'sraj',
    'sukinsyn', 'sukinsyny', 'sukinsynom', 'sukinsynowi', 'sukinsynów',
    'sukinsynow', 'śmierdziel', 'udupić', 'ujebać', 'ujebac', 'ujebał',
    'ujebal', 'ujebana', 'ujebany', 'ujebie', 'ujebała', 'ujebala',
    'upierdalać', 'upierdalac', 'upierdala', 'upierdoli', 'upierdolić',
    'upierdolic', 'upierdoli', 'upierdolą', 'upierdola', 'upierdoleni',
    'wjebać', 'wjebac', 'wjebie', 'wjebią', 'wjebia', 'wjebiemy',
    'wjebiecie', 'wkurwiać', 'wkurwiac', 'wkurwi', 'wkurwia', 'wkurwiał',
    'wkurwial', 'wkurwiający', 'wkurwiajacy', 'wkurwiająca', 'wkurwiajaca',
    'wkurwić', 'wkurwic', 'wkurwi', 'wkurwiacie', 'wkurwiają', 'wkurwiali',
    'wkurwią', 'wkurwia', 'wkurwimy', 'wkurwicie', 'wkurwiacie', 'wkurwić',
    'wkurwic', 'wkurwia', 'wpierdalać', 'wpierdalac', 'wpierdalający',
    'wpierdalajacy', 'wpierdol', 'wpierdolić', 'wpierdolic', 'wpizdu',
    'wyjebać', 'wyjebac', 'wyjebali', 'wyjebał', 'wyjebac', 'wyjebała',
    'wyjebały', 'wyjebie', 'wyjebią', 'wyjebia', 'wyjebiesz', 'wyjebie',
    'wyjebiecie', 'wyjebiemy', 'wypieprzać', 'wypieprzac', 'wypieprza',
    'wypieprzał', 'wypieprzal', 'wypieprzała', 'wypieprzala', 'wypieprzy',
    'wypieprzyła', 'wypieprzyla', 'wypieprzył', 'wypieprzyl', 'wypierdal',
    'wypierdalać', 'wypierdalac', 'wypierdala', 'wypierdalaj',
    'wypierdalał', 'wypierdalal', 'wypierdalała', 'wypierdalala',
    'wypierdalać', 'wypierdolić', 'wypierdolic', 'wypierdoli',
    'wypierdolimy', 'wypierdolicie', 'wypierdolą', 'wypierdola',
    'wypierdolili', 'wypierdolił', 'wypierdolil', 'wypierdoliła',
    'wypierdolila', 'zajebać', 'zajebac', 'zajebie', 'zajebią', 'zajebia',
    'zajebiał', 'zajebial', 'zajebała', 'zajebiala', 'zajebali', 'zajebana',
    'zajebani', 'zajebane', 'zajebany', 'zajebanych', 'zajebanym',
    'zajebanymi', 'zajebiste', 'zajebisty', 'zajebistych', 'zajebista',
    'zajebistym', 'zajebistymi', 'zajebiście', 'zajebiscie', 'zapieprzyć',
    'zapieprzyc', 'zapieprzy', 'zapieprzył', 'zapieprzyl', 'zapieprzyła',
    'zapieprzyla', 'zapieprzą', 'zapieprza', 'zapieprzy', 'zapieprzymy',
    'zapieprzycie', 'zapieprzysz', 'zapierdala', 'zapierdalać',
    'zapierdalac', 'zapierdalaja', 'zapierdalał', 'zapierdalaj',
    'zapierdalajcie', 'zapierdalała', 'zapierdalala', 'zapierdalali',
    'zapierdalający', 'zapierdalajacy', 'zapierdolić', 'zapierdolic',
    'zapierdoli', 'zapierdolił', 'zapierdolil', 'zapierdoliła',
    'zapierdolila', 'zapierdolą', 'zapierdola', 'zapierniczać',
    'zapierniczający', 'zasrać', 'zasranym', 'zasrywać', 'zasrywający',
    'zesrywać', 'zesrywający', 'zjebać', 'zjebac', 'zjebał', 'zjebal',
    'zjebała', 'zjebala', 'zjebana', 'zjebią', 'zjebali', 'zjeby'];
const wlgEn = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        mList: [],
        showAlert: false,
        blockImg: false,
        turnOn: false,
        blockWlg: false,
        blockWlgEn: false
    }, function (items) {
        db = [...items.mList];
        showAlert = items.showAlert;
        blockImg = items.blockImg;
        turnOn = items.turnOn;
        blockWlg = items.blockWlg;
        blockWlgEn = items.blockWlgEn;
        console.log("CC-APP status: " + turnOn + "\nCensore: " + db);
        console.log("Options status: \n" + "Show alert: " + items.showAlert + "\nBlock all images: " + items.blockImg + "\nBlock Polish curses: " + items.blockWlg);
    });
}

restore_options();

setTimeout(function () {
    turnOn ? replaceText(document.body) : console.log("CC-APP status: " + turnOn);
}, 11);

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {

        db.some(function (word) {
            var myExp = new RegExp(word, 'gi');

            if (element.textContent.match(myExp)) {
                element.parentElement.style.color = 'black';
                element.parentElement.style.backgroundColor = 'black';
                element.parentElement.style.opacity = "0.1";

                if (blockImg) {
                    Array.from(document.images).forEach(mImg => {
                        mImg.parentElement.style.opacity = "0.0";
                    })
                }
                if (!executed) {
                    showMeAlert();
                }
            }
        })

        const lol = "*-*";

        if (blockWlg) {
            wlg.some(function (mWlg) {
                var myExp = new RegExp(mWlg, 'gi');

                if (element.textContent.match(myExp)) {
                    element.textContent = element.textContent.replace(myExp, lol);
                }
            })
        }

        if (blockWlgEn) {
            wlgEn.some(function(mEnWlg) {
                var myExp = new RegExp(mEnWlg, 'gi')
                
                if(element.textContent.match(myExp)) {
                    element.textContent = element.textContent.replace(myExp, lol);
                }
            })
        }
    }
}


function showMeAlert() {
    if (showAlert) {
        setTimeout(function () {
            alert("ALERT! AHTUNG! OMG! NOOOOOOOOO! \nCensor Content application found content you want to hide:\n \n" + db);
        }, 100);
    }
    executed = true;
}
