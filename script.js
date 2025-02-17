document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');

    // Contenu du fichier list_yokai.json
    const yokaiList = [
    {
        "id": "001",
        "name_fr": "Pandicon",
        "name_en": "Pandle",
        "rank": "E icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "002",
        "name_fr": "Undicon",
        "name_en": "Undy",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "003",
        "name_fr": "Tanbicon",
        "name_en": "Tanbo",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "004",
        "name_fr": "Cuttaicon",
        "name_en": "Cutta-nah",
        "rank": "E icon",
        "tribe": "Brave",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Juice"
    },
    {
        "id": "005",
        "name_fr": "Cuttanahicon",
        "name_en": "Cutta-nah-nah",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Juice"
    },
    {
        "id": "006",
        "name_fr": "Slackaicon",
        "name_en": "Slacka-slash",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Juice"
    },
    {
        "id": "007",
        "name_fr": "BrusIcon",
        "name_en": "Brushido",
        "rank": "E icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "008",
        "name_fr": "WashoIcon",
        "name_en": "Washogun",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "009",
        "name_fr": "LieIcon",
        "name_en": "Lie-in",
        "rank": "E icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "010",
        "name_fr": "LieHeIcon",
        "name_en": "Lie-in Heart",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "011",
        "name_fr": "HissfIcon",
        "name_en": "Hissfit",
        "rank": "E icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Meat"
    },
    {
        "id": "012",
        "name_fr": "Zerbericon",
        "name_en": "Zerberker",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Meat"
    },
    {
        "id": "013",
        "name_fr": "Snarticon",
        "name_en": "Snartle",
        "rank": "S icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Meat"
    },
    {
        "id": "014",
        "name_fr": "Mochicon",
        "name_en": "Mochismo",
        "rank": "D icon",
        "tribe": "Brave",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "015",
        "name_fr": "Minoicon",
        "name_en": "Minochi",
        "rank": "D icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "016",
        "name_fr": "TubblIcon",
        "name_en": "Tublappa",
        "rank": "D icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "017",
        "name_fr": "SliceIcon",
        "name_en": "Slicenrice",
        "rank": "D icon",
        "tribe": "Brave",
        "element": "Restoration",
        "role": "Blasters fighter",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "018",
        "name_fr": "FlamurIcon",
        "name_en": "Flamurice",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "019",
        "name_fr": "Helmsicon",
        "name_en": "Helmsman",
        "rank": "D icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "020",
        "name_fr": "Reuknicon",
        "name_en": "Reuknight",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "021",
        "name_fr": "Corptaicon",
        "name_en": "Corptain",
        "rank": "S icon",
        "tribe": "Brave",
        "element": "Drain",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "022",
        "name_fr": "MudmIcon",
        "name_en": "Mudmunch",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Oden"
    },
    {
        "id": "023",
        "name_fr": "Sgt.Icon",
        "name_en": "Sgt. Burly",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "024",
        "name_fr": "Blazicon",
        "name_en": "Blazion",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "025",
        "name_fr": "Quakicon",
        "name_en": "Quaken",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "026",
        "name_fr": "Siroicon",
        "name_en": "Siro",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "027",
        "name_fr": "Chansicon",
        "name_en": "Chansin",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Seafood"
    },
    {
        "id": "028",
        "name_fr": "Sheeicon",
        "name_en": "Sheen",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Seafood"
    },
    {
        "id": "029",
        "name_fr": "Sneeicon",
        "name_en": "Snee",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Seafood"
    },
    {
        "id": "030",
        "name_fr": "Gleaicon",
        "name_en": "Gleam",
        "rank": "S icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Seafood"
    },
    {
        "id": "031",
        "name_fr": "Benkeicon",
        "name_en": "Benkei",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "032",
        "name_fr": "B3icon",
        "name_en": "B3-NK1",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "033",
        "name_fr": "Susyamicon",
        "name_en": "Sushiyama",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "034",
        "name_fr": "Kapunkicon",
        "name_en": "Kapunki",
        "rank": "A icon",
        "tribe": "Brave",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "035",
        "name_fr": "Beetlicon",
        "name_en": "Beetler",
        "rank": "B icon",
        "tribe": "Brave",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Vegetables"
    },
    {
        "id": "036",
        "name_fr": "Beeticon",
        "name_en": "Beetall",
        "rank": "S icon",
        "tribe": "Brave",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Vegetables"
    },
    {
        "id": "037",
        "name_fr": "Crunchicon",
        "name_en": "Cruncha",
        "rank": "S icon",
        "tribe": "Brave",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Vegetables"
    },
    {
        "id": "038",
        "name_fr": "DemunIcon",
        "name_en": "Demuncher",
        "rank": "S icon",
        "tribe": "Brave",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Meat"
    },
    {
        "id": "039",
        "name_fr": "DevouIcon",
        "name_en": "Devourer",
        "rank": "S icon",
        "tribe": "Brave",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "040",
        "name_fr": "BrokenIcon",
        "name_en": "Brokenbrella",
        "rank": "E icon",
        "tribe": "Mysterious mini icon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Snacks"
    },
    {
        "id": "041",
        "name_fr": "PittaIcon",
        "name_en": "Pittapatt",
        "rank": "E icon",
        "tribe": "Mysterious mini icon",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Snacks"
    },
    {
        "id": "042",
        "name_fr": "Snotsicon",
        "name_en": "Snotsolong",
        "rank": "E icon",
        "tribe": "Mysterious mini icon",
        "element": "Water",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "043",
        "name_fr": "Duchicon",
        "name_en": "Duchoo",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "044",
        "name_fr": "Dwanicon",
        "name_en": "D'wanna",
        "rank": "E icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "045",
        "name_fr": "Nmoricon",
        "name_en": "N'more",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "046",
        "name_fr": "Qwiticon",
        "name_en": "Q'wit",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "047",
        "name_fr": "Wazzicon",
        "name_en": "Wazzat",
        "rank": "E icon",
        "tribe": "Mysterious mini icon",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "048",
        "name_fr": "HouzIcon",
        "name_en": "Houzzat",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "049",
        "name_fr": "Dummicon",
        "name_en": "Dummkap",
        "rank": "E icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "050",
        "name_fr": "FaysIcon",
        "name_en": "FaysoffBS",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "051",
        "name_fr": "Lafaicon",
        "name_en": "Lafalotta",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Drain",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "052",
        "name_fr": "Blipicon",
        "name_en": "Blips",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Drain",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "053",
        "name_fr": "Tatttellicon",
        "name_en": "Tattletell",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Ramen"
    },
    {
        "id": "054",
        "name_fr": "Tattcasticon",
        "name_en": "Tattlecast",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Ramen"
    },
    {
        "id": "055",
        "name_fr": "Skranicon",
        "name_en": "Skranny",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Ramen"
    },
    {
        "id": "056",
        "name_fr": "Cupisicon",
        "name_en": "Cupistol",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "057",
        "name_fr": "Casnuicon",
        "name_en": "Casanuva",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "058",
        "name_fr": "Casnoicon",
        "name_en": "Casanono",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "059",
        "name_fr": "Sosoricon",
        "name_en": "So-Sorree",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Curry"
    },
    {
        "id": "060",
        "name_fr": "Bowmicon",
        "name_en": "Bowminos",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Curry"
    },
    {
        "id": "061",
        "name_fr": "SmoglIcon",
        "name_en": "Smogling",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "062",
        "name_fr": "SmogmIcon",
        "name_en": "Smogmella",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "063",
        "name_fr": "Signibicon",
        "name_en": "Signibble",
        "rank": "D icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Snacks"
    },
    {
        "id": "064",
        "name_fr": "Signiticon",
        "name_en": "Signiton",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "065",
        "name_fr": "Statikinicon",
        "name_en": "Statiking",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "066",
        "name_fr": "MasOdeIcon",
        "name_en": "Master Oden",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters healer",
        "favorite_food": "Oden"
    },
    {
        "id": "067",
        "name_fr": "FailIcon",
        "name_en": "FailianBS",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "068",
        "name_fr": "Apelicon",
        "name_en": "Apelican",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "069",
        "name_fr": "Mirapicon",
        "name_en": "Mirapo",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Drain",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "070",
        "name_fr": "MiradIcon",
        "name_en": "Miradox",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Drain",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "071",
        "name_fr": "Mirclicon",
        "name_en": "Mircle",
        "rank": "A icon",
        "tribe": "Mysterious mini icon",
        "element": "Drain",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "072",
        "name_fr": "Illicon",
        "name_en": "Illoo",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Bread"
    },
    {
        "id": "073",
        "name_fr": "Ellicon",
        "name_en": "Elloo",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Bread"
    },
    {
        "id": "074",
        "name_fr": "Allicon",
        "name_en": "Alloo",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Bread"
    },
    {
        "id": "075",
        "name_fr": "Espicon",
        "name_en": "Espy",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Vegetables"
    },
    {
        "id": "076",
        "name_fr": "Infoicon",
        "name_en": "Infour",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Vegetables"
    },
    {
        "id": "077",
        "name_fr": "VerGoIcon",
        "name_en": "Verygoodsir",
        "rank": "B icon",
        "tribe": "Mysterious mini icon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "078",
        "name_fr": "Tengicon",
        "name_en": "Tengu",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "079",
        "name_fr": "Flengicon",
        "name_en": "Flengu",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "080",
        "name_fr": "Kyubicon",
        "name_en": "KyubiFS",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "081",
        "name_fr": "Frostaicon",
        "name_en": "Frostail",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "082",
        "name_fr": "ChymIcon",
        "name_en": "Chymera",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "083",
        "name_fr": "KingmeIcon",
        "name_en": "Kingmera",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "084",
        "name_fr": "TerrpottIcon",
        "name_en": "Terrorpotta",
        "rank": "E icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Snacks"
    },
    {
        "id": "085",
        "name_fr": "Dullicon",
        "name_en": "Dulluma",
        "rank": "E icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Curry"
    },
    {
        "id": "086",
        "name_fr": "Daruicon",
        "name_en": "Darumacho",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Curry"
    },
    {
        "id": "087",
        "name_fr": "Goruicon",
        "name_en": "Goruma",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Wind",
        "role": "Blasters tank",
        "favorite_food": "Curry"
    },
    {
        "id": "088",
        "name_fr": "WotgotIcon",
        "name_en": "WotchagotFS",
        "rank": "E icon",
        "tribe": "Tough",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "089",
        "name_fr": "PrishrIcon",
        "name_en": "Pride ShrimpFS",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Restoration",
        "role": "Blasters tank",
        "favorite_food": "Seafood"
    },
    {
        "id": "090",
        "name_fr": "NogoIcon",
        "name_en": "No-Go KartBS",
        "rank": "E icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "091",
        "name_fr": "MistanIcon",
        "name_en": "MistankBS",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "092",
        "name_fr": "Nowaicon",
        "name_en": "Noway",
        "rank": "E icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Ramen"
    },
    {
        "id": "093",
        "name_fr": "Impaicon",
        "name_en": "Impass",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Ramen"
    },
    {
        "id": "094",
        "name_fr": "Walldicon",
        "name_en": "Walldin",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Ramen"
    },
    {
        "id": "095",
        "name_fr": "Roughricon",
        "name_en": "Roughraff",
        "rank": "E icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "096",
        "name_fr": "Baduicon",
        "name_en": "Badude",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "097",
        "name_fr": "Bruficon",
        "name_en": "Bruff",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Ramen"
    },
    {
        "id": "098",
        "name_fr": "Armsicon",
        "name_en": "Armsman",
        "rank": "D icon",
        "tribe": "Tough",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "099",
        "name_fr": "MikiIcon",
        "name_en": "Mimikin",
        "rank": "D icon",
        "tribe": "Tough",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Candy"
    },
    {
        "id": "100",
        "name_fr": "Blowkicon",
        "name_en": "Blowkade",
        "rank": "D icon",
        "tribe": "Tough",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Milk"
    },
    {
        "id": "101",
        "name_fr": "Ledballicon",
        "name_en": "Ledballoon",
        "rank": "C icon",
        "tribe": "Tough",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Milk"
    },
    {
        "id": "102",
        "name_fr": "Fidgeicon",
        "name_en": "Fidgephant",
        "rank": "D icon",
        "tribe": "Tough",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "103",
        "name_fr": "Toupicon",
        "name_en": "Touphant",
        "rank": "C icon",
        "tribe": "Tough",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "104",
        "name_fr": "EnduIcon",
        "name_en": "Enduriphant",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "105",
        "name_fr": "ZappaIcon",
        "name_en": "ZapparyFS",
        "rank": "D icon",
        "tribe": "Tough",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "106",
        "name_fr": "FrazzIcon",
        "name_en": "FrazzelFS",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "107",
        "name_fr": "SweltoIcon",
        "name_en": "Swelton",
        "rank": "C icon",
        "tribe": "Tough",
        "element": "Fire",
        "role": "Blasters tank",
        "favorite_food": "Curry"
    },
    {
        "id": "108",
        "name_fr": "Madmounicon",
        "name_en": "Mad Mountain",
        "rank": "C icon",
        "tribe": "Tough",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Sushi"
    },
    {
        "id": "109",
        "name_fr": "Lavloricon",
        "name_en": "Lava Lord",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Sushi"
    },
    {
        "id": "110",
        "name_fr": "Castiiiicon",
        "name_en": "Castelius III",
        "rank": "C icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "111",
        "name_fr": "Castiiicon",
        "name_en": "Castelius II",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Milk"
    },
    {
        "id": "112",
        "name_fr": "Castiicon",
        "name_en": "Castelius I",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "113",
        "name_fr": "Castmaxicon",
        "name_en": "Castelius Max",
        "rank": "S icon",
        "tribe": "Tough",
        "element": "Wind",
        "role": "Blasters tank",
        "favorite_food": "Milk"
    },
    {
        "id": "114",
        "name_fr": "Rhinogicon",
        "name_en": "Rhinoggin",
        "rank": "B icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "115",
        "name_fr": "Rhinoricon",
        "name_en": "Rhinormous",
        "rank": "S icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "116",
        "name_fr": "Hornaicon",
        "name_en": "Hornaplenty",
        "rank": "S icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "117",
        "name_fr": "Robonyicon",
        "name_en": "Robonyan",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Chocobars"
    },
    {
        "id": "118",
        "name_fr": "Goldenyicon",
        "name_en": "Goldenyan",
        "rank": "S icon",
        "tribe": "Tough",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Chocobars"
    },
    {
        "id": "119",
        "name_fr": "Dromicon",
        "name_en": "Dromp",
        "rank": "A icon",
        "tribe": "Tough",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "120",
        "name_fr": "Swosicon",
        "name_en": "Swosh",
        "rank": "S icon",
        "tribe": "Tough",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "121",
        "name_fr": "ToadDuIcon",
        "name_en": "Toadal DudeFS",
        "rank": "S icon",
        "tribe": "Tough",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "122",
        "name_fr": "UbeGeeIcon",
        "name_en": "Uber Geeko",
        "rank": "S icon",
        "tribe": "Tough",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "123",
        "name_fr": "LeggIcon",
        "name_en": "Leggly",
        "rank": "E icon",
        "tribe": "Charming",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "124",
        "name_fr": "Dazzaicon",
        "name_en": "Dazzabel",
        "rank": "E icon",
        "tribe": "Charming",
        "element": "Fire",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "125",
        "name_fr": "Ratteicon",
        "name_en": "Rattelle",
        "rank": "C icon",
        "tribe": "Charming",
        "element": "Fire",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "126",
        "name_fr": "Skelebicon",
        "name_en": "Skelebella",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Water",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "127",
        "name_fr": "Cadinicon",
        "name_en": "Cadin",
        "rank": "E icon",
        "tribe": "Charming",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "128",
        "name_fr": "Cadabicon",
        "name_en": "Cadable",
        "rank": "C icon",
        "tribe": "Charming",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "129",
        "name_fr": "Singcaicon",
        "name_en": "Singcada",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "130",
        "name_fr": "Pupsicon",
        "name_en": "Pupsicle",
        "rank": "E icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "131",
        "name_fr": "Chilhuicon",
        "name_en": "Chilhuahua",
        "rank": "A icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "132",
        "name_fr": "Swelteicon",
        "name_en": "Swelterrier",
        "rank": "S icon",
        "tribe": "Charming",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "133",
        "name_fr": "JumbIcon",
        "name_en": "Jumbelina",
        "rank": "D icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Sweets"
    },
    {
        "id": "134",
        "name_fr": "BoyclIcon",
        "name_en": "BoyclopsFS",
        "rank": "D icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "135",
        "name_fr": "Jibanicon",
        "name_en": "Jibanyan",
        "rank": "D icon",
        "tribe": "Charming",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "136",
        "name_fr": "Thornicon",
        "name_en": "Thornyan",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Chocobars"
    },
    {
        "id": "137",
        "name_fr": "Baddicon",
        "name_en": "Baddinyan",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "138",
        "name_fr": "Buchicon",
        "name_en": "Buchinyan",
        "rank": "C icon",
        "tribe": "Charming",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Chocobars"
    },
    {
        "id": "139",
        "name_fr": "Walkaicon",
        "name_en": "Walkappa",
        "rank": "D icon",
        "tribe": "Charming",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "140",
        "name_fr": "Appakicon",
        "name_en": "Appak",
        "rank": "A icon",
        "tribe": "Charming",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "141",
        "name_fr": "Supyicon",
        "name_en": "Supyo",
        "rank": "A icon",
        "tribe": "Charming",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "142",
        "name_fr": "Komsanicon YW2",
        "name_en": "Komasan",
        "rank": "D icon",
        "tribe": "Charming",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Milk"
    },
    {
        "id": "143",
        "name_fr": "Komanicon YW2",
        "name_en": "Komane",
        "rank": "A icon",
        "tribe": "Charming",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Milk"
    },
    {
        "id": "144",
        "name_fr": "Komajicon",
        "name_en": "Komajiro",
        "rank": "D icon",
        "tribe": "Charming",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Milk"
    },
    {
        "id": "145",
        "name_fr": "Komiicon",
        "name_en": "Komiger",
        "rank": "A icon",
        "tribe": "Charming",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Milk"
    },
    {
        "id": "146",
        "name_fr": "Bakuicon",
        "name_en": "Baku",
        "rank": "D icon",
        "tribe": "Charming",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Juice"
    },
    {
        "id": "147",
        "name_fr": "BakulIcon",
        "name_en": "Bakulia",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Juice"
    },
    {
        "id": "148",
        "name_fr": "Whapicon",
        "name_en": "Whapir",
        "rank": "C icon",
        "tribe": "Charming",
        "element": "Drain",
        "role": "Blasters healer",
        "favorite_food": "Juice"
    },
    {
        "id": "149",
        "name_fr": "DrizeldIcon",
        "name_en": "Drizzelda",
        "rank": "C icon",
        "tribe": "Charming",
        "element": "Water",
        "role": "Blasters healer",
        "favorite_food": "Juice"
    },
    {
        "id": "150",
        "name_fr": "NespeeIcon",
        "name_en": "Nekidspeed",
        "rank": "C icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Curry"
    },
    {
        "id": "151",
        "name_fr": "Shmoicon",
        "name_en": "Shmoopie",
        "rank": "C icon",
        "tribe": "Charming",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "152",
        "name_fr": "Pinkicon",
        "name_en": "Pinkipoo",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "153",
        "name_fr": "Pookicon",
        "name_en": "Pookivil",
        "rank": "A icon",
        "tribe": "Charming",
        "element": "Drain",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "154",
        "name_fr": "Harbaricon",
        "name_en": "Harry Barry",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Meat"
    },
    {
        "id": "155",
        "name_fr": "Frosticon",
        "name_en": "Frostina",
        "rank": "B icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "156",
        "name_fr": "Blizzicon",
        "name_en": "Blizzaria",
        "rank": "S icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "157",
        "name_fr": "Damoicon",
        "name_en": "Damona",
        "rank": "S icon",
        "tribe": "Charming",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "158",
        "name_fr": "FauKapIcon",
        "name_en": "Faux Kappa",
        "rank": "A icon",
        "tribe": "Charming",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Vegetables"
    },
    {
        "id": "159",
        "name_fr": "TigapIcon",
        "name_en": "Tigappa",
        "rank": "S icon",
        "tribe": "Charming",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "160",
        "name_fr": "Nyadaicon",
        "name_en": "Master Nyada",
        "rank": "S icon",
        "tribe": "Charming",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "161",
        "name_fr": "Wantsicon",
        "name_en": "Wantston",
        "rank": "E icon",
        "tribe": "Heartful",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Ramen"
    },
    {
        "id": "162",
        "name_fr": "Grubsnicon",
        "name_en": "Grubsnitch",
        "rank": "D icon",
        "tribe": "Heartful",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Ramen"
    },
    {
        "id": "163",
        "name_fr": "Wiglicon",
        "name_en": "Wiglin",
        "rank": "E icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Ramen"
    },
    {
        "id": "164",
        "name_fr": "KelpacIcon",
        "name_en": "Kelpacabana",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Ramen"
    },
    {
        "id": "165",
        "name_fr": "Steppicon",
        "name_en": "Steppa",
        "rank": "E icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Ramen"
    },
    {
        "id": "166",
        "name_fr": "Rhythicon",
        "name_en": "Rhyth",
        "rank": "D icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Ramen"
    },
    {
        "id": "167",
        "name_fr": "Hungricon",
        "name_en": "Hungramps",
        "rank": "E icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "168",
        "name_fr": "Hungoicon",
        "name_en": "Hungorge",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Drain",
        "role": "Blasters healer",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "169",
        "name_fr": "Graicon",
        "name_en": "Grainpa",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "170",
        "name_fr": "TonguIcon",
        "name_en": "Tongus",
        "rank": "E icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Vegetables"
    },
    {
        "id": "171",
        "name_fr": "NurTonIcon",
        "name_en": "Nurse Tongus",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Vegetables"
    },
    {
        "id": "172",
        "name_fr": "SandIcon",
        "name_en": "Sandmeh",
        "rank": "E icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Oden"
    },
    {
        "id": "173",
        "name_fr": "MisSanIcon",
        "name_en": "Mr. Sandmeh",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Oden"
    },
    {
        "id": "174",
        "name_fr": "PallIcon",
        "name_en": "Pallysol",
        "rank": "E icon",
        "tribe": "Heartful",
        "element": "Wind",
        "role": "Blasters tank",
        "favorite_food": "Oden"
    },
    {
        "id": "175",
        "name_fr": "ScarasIcon",
        "name_en": "Scarasol",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Sushi"
    },
    {
        "id": "176",
        "name_fr": "Lodoicon",
        "name_en": "Lodo",
        "rank": "D icon",
        "tribe": "Heartful",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "177",
        "name_fr": "SupoorIcon",
        "name_en": "Supoor Hero",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "178",
        "name_fr": "Chippicon",
        "name_en": "Chippa",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Water",
        "role": "Blasters healer",
        "favorite_food": "Milk"
    },
    {
        "id": "179",
        "name_fr": "GnoIcon",
        "name_en": "Gnomey",
        "rank": "D icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Snacks"
    },
    {
        "id": "180",
        "name_fr": "HigGnoIcon",
        "name_en": "High Gnomey",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Snacks"
    },
    {
        "id": "181",
        "name_fr": "Enericon",
        "name_en": "Enerfly",
        "rank": "D icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Juice"
    },
    {
        "id": "182",
        "name_fr": "Eneicon",
        "name_en": "Enefly",
        "rank": "D icon",
        "tribe": "Heartful",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "183",
        "name_fr": "Bettericon",
        "name_en": "Betterfly",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Juice"
    },
    {
        "id": "184",
        "name_fr": "Peppicon",
        "name_en": "Peppillon",
        "rank": "S icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Juice"
    },
    {
        "id": "185",
        "name_fr": "PredIcon",
        "name_en": "Predictabull",
        "rank": "D icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Sushi"
    },
    {
        "id": "186",
        "name_fr": "SmashIcon",
        "name_en": "Smashibull",
        "rank": "S icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Sushi"
    },
    {
        "id": "187",
        "name_fr": "DoChaIcon",
        "name_en": "Don Chan",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Snacks"
    },
    {
        "id": "188",
        "name_fr": "RayOIcon",
        "name_en": "Ray O'Light",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "189",
        "name_fr": "Happieicon",
        "name_en": "Happierre",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Bread"
    },
    {
        "id": "190",
        "name_fr": "Revericon",
        "name_en": "Reversa",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Bread"
    },
    {
        "id": "191",
        "name_fr": "Reversicon",
        "name_en": "Reversette",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Wind",
        "role": "Blasters healer",
        "favorite_food": "Bread"
    },
    {
        "id": "192",
        "name_fr": "Olsaicon",
        "name_en": "Ol' Saint Trick",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Curry"
    },
    {
        "id": "193",
        "name_fr": "Olforicon",
        "name_en": "Ol' Fortune",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Lightning",
        "role": "Blasters healer",
        "favorite_food": "Curry"
    },
    {
        "id": "194",
        "name_fr": "Rollicon",
        "name_en": "Rollen",
        "rank": "B icon",
        "tribe": "Heartful",
        "element": "Water",
        "role": "Blasters healer",
        "favorite_food": "Candy"
    },
    {
        "id": "195",
        "name_fr": "Dubbicon",
        "name_en": "Dubbles",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Water",
        "role": "Blasters healer",
        "favorite_food": "Candy"
    },
    {
        "id": "196",
        "name_fr": "Papbolicon",
        "name_en": "Papa Bolt",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Sushi"
    },
    {
        "id": "197",
        "name_fr": "Uncinficon",
        "name_en": "Uncle Infinite",
        "rank": "S icon",
        "tribe": "Heartful",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Sushi"
    },
    {
        "id": "198",
        "name_fr": "Mamauricon",
        "name_en": "Mama Aura",
        "rank": "A icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Vegetables"
    },
    {
        "id": "199",
        "name_fr": "Aunheaicon",
        "name_en": "Auntie Heart",
        "rank": "S icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Vegetables"
    },
    {
        "id": "200",
        "name_fr": "KryrIcon",
        "name_en": "Kyryn",
        "rank": "S icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "201",
        "name_fr": "UnikIcon",
        "name_en": "Unikirin",
        "rank": "S icon",
        "tribe": "Heartful",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "202",
        "name_fr": "Leadonicon",
        "name_en": "Leadoni",
        "rank": "E icon",
        "tribe": "Shady",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "203",
        "name_fr": "Mynicon",
        "name_en": "Mynimo",
        "rank": "D icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "204",
        "name_fr": "Akeicon",
        "name_en": "Ake",
        "rank": "E icon",
        "tribe": "Shady",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "205",
        "name_fr": "Payicon",
        "name_en": "Payn",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "206",
        "name_fr": "Agoicon",
        "name_en": "Agon",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "207",
        "name_fr": "WydeaIcon",
        "name_en": "WydeawakeFS",
        "rank": "E icon",
        "tribe": "Shady",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "208",
        "name_fr": "AllnyIcon",
        "name_en": "AllnytaFS",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "209",
        "name_fr": "HerbIcon",
        "name_en": "HerbiboyBS",
        "rank": "E icon",
        "tribe": "Shady",
        "element": "Water",
        "role": "Blasters ranger",
        "favorite_food": "Vegetables"
    },
    {
        "id": "210",
        "name_fr": "CarnIcon",
        "name_en": "CarniboyBS",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "211",
        "name_fr": "Negaticon",
        "name_en": "Negatibuzz",
        "rank": "E icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "212",
        "name_fr": "Moskicon",
        "name_en": "Moskevil",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "213",
        "name_fr": "Scricon",
        "name_en": "Scritchy",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "214",
        "name_fr": "Dimmicon",
        "name_en": "Dimmy",
        "rank": "E icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "215",
        "name_fr": "Blanicon",
        "name_en": "Blandon",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "216",
        "name_fr": "Nulicon",
        "name_en": "Nul",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "217",
        "name_fr": "Suspicion",
        "name_en": "Suspicioni",
        "rank": "D icon",
        "tribe": "Shady",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "218",
        "name_fr": "Tantricon",
        "name_en": "Tantroni",
        "rank": "D icon",
        "tribe": "Shady",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "219",
        "name_fr": "Contraricon",
        "name_en": "Contrarioni",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "220",
        "name_fr": "Hidaicon",
        "name_en": "Hidabat",
        "rank": "D icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "221",
        "name_fr": "Abodicon",
        "name_en": "Abodabat",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "222",
        "name_fr": "Belfricon",
        "name_en": "Belfree",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters tank",
        "favorite_food": "Meat"
    },
    {
        "id": "223",
        "name_fr": "YoiIcon",
        "name_en": "Yoink",
        "rank": "D icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Sushi"
    },
    {
        "id": "224",
        "name_fr": "GimmIcon",
        "name_en": "Gimme",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Sushi"
    },
    {
        "id": "225",
        "name_fr": "KmonIcon",
        "name_en": "K'mon-K'mon",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Curry"
    },
    {
        "id": "226",
        "name_fr": "YoodooIcon",
        "name_en": "Yoodooit",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Sushi"
    },
    {
        "id": "227",
        "name_fr": "CouZapIcon",
        "name_en": "Count ZapawayFS",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "228",
        "name_fr": "Tyraticon",
        "name_en": "Tyrat",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "229",
        "name_fr": "Tenglicon",
        "name_en": "Tengloom",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Bread"
    },
    {
        "id": "230",
        "name_fr": "Nirdicon",
        "name_en": "Nird",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Bread"
    },
    {
        "id": "231",
        "name_fr": "SnobeIcon",
        "name_en": "Snobetty",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Sushi"
    },
    {
        "id": "232",
        "name_fr": "Slimamicon",
        "name_en": "SlimamanderBS",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "233",
        "name_fr": "Dracuicon",
        "name_en": "Dracunyan",
        "rank": "B icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "234",
        "name_fr": "Negaicon",
        "name_en": "Negasus",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Vegetables"
    },
    {
        "id": "235",
        "name_fr": "Neighficon",
        "name_en": "Neighfarious",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Drain",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "236",
        "name_fr": "Timidicon",
        "name_en": "Timidevil",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "237",
        "name_fr": "Beelzeicon",
        "name_en": "Beelzebold",
        "rank": "S icon",
        "tribe": "Shady",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "238",
        "name_fr": "Count cavicon",
        "name_en": "Count Cavity",
        "rank": "S icon",
        "tribe": "Shady",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "239",
        "name_fr": "EyesoIcon",
        "name_en": "Eyesoar",
        "rank": "A icon",
        "tribe": "Shady",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Meat"
    },
    {
        "id": "240",
        "name_fr": "EyellIcon",
        "name_en": "Eyellure",
        "rank": "S icon",
        "tribe": "Shady",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Sweets"
    },
    {
        "id": "241",
        "name_fr": "Greesicon",
        "name_en": "Greesel",
        "rank": "S icon",
        "tribe": "Shady",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "242",
        "name_fr": "Awevicon",
        "name_en": "Awevil",
        "rank": "S icon",
        "tribe": "Shady",
        "element": "Water",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "243",
        "name_fr": "Wobwokicon",
        "name_en": "Wobblewok",
        "rank": "S icon",
        "tribe": "Shady",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "244",
        "name_fr": "Coughicon",
        "name_en": "Coughkoff",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Water",
        "role": "Blasters ranger",
        "favorite_food": "Bread"
    },
    {
        "id": "245",
        "name_fr": "Hurchicon",
        "name_en": "Hurchin",
        "rank": "D icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Bread"
    },
    {
        "id": "246",
        "name_fr": "Droplicon",
        "name_en": "Droplette",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Juice"
    },
    {
        "id": "247",
        "name_fr": "Dricon",
        "name_en": "Drizzle",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Juice"
    },
    {
        "id": "248",
        "name_fr": "Slusicon",
        "name_en": "Slush",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Juice"
    },
    {
        "id": "249",
        "name_fr": "Alhaicon",
        "name_en": "Alhail",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters tank",
        "favorite_food": "Juice"
    },
    {
        "id": "250",
        "name_fr": "Gushicon",
        "name_en": "Gush",
        "rank": "D icon",
        "tribe": "Eerie",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Juice"
    },
    {
        "id": "251",
        "name_fr": "Peckpoicon",
        "name_en": "Peckpocket",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "252",
        "name_fr": "RobbIcon",
        "name_en": "Robbinyu",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "253",
        "name_fr": "Rockabicon",
        "name_en": "Rockabelly",
        "rank": "D icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "254",
        "name_fr": "SqueIcon",
        "name_en": "Squeeky",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Curry"
    },
    {
        "id": "255",
        "name_fr": "RawrIcon",
        "name_en": "Rawry",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Curry"
    },
    {
        "id": "256",
        "name_fr": "Buhuicon",
        "name_en": "Buhu",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Bread"
    },
    {
        "id": "257",
        "name_fr": "Flumicon",
        "name_en": "Flumpy",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Bread"
    },
    {
        "id": "258",
        "name_fr": "Skreicon",
        "name_en": "Skreek",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Bread"
    },
    {
        "id": "259",
        "name_fr": "Manjicon",
        "name_en": "Manjimutt",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Curry"
    },
    {
        "id": "260",
        "name_fr": "Multimicon",
        "name_en": "Multimutt",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Curry"
    },
    {
        "id": "261",
        "name_fr": "Sirbericon",
        "name_en": "Sir Berus",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Curry"
    },
    {
        "id": "262",
        "name_fr": "FurgIcon",
        "name_en": "Furgus",
        "rank": "E icon",
        "tribe": "Eerie",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "263",
        "name_fr": "FurdIcon",
        "name_en": "Furdinand",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "264",
        "name_fr": "NosiIcon",
        "name_en": "Nosirs",
        "rank": "D icon",
        "tribe": "Eerie",
        "element": "Restoration",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "265",
        "name_fr": "Dismaricon",
        "name_en": "Dismarelda",
        "rank": "D icon",
        "tribe": "Eerie",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Bread"
    },
    {
        "id": "266",
        "name_fr": "Chatlicon",
        "name_en": "Chatalie",
        "rank": "D icon",
        "tribe": "Eerie",
        "element": "Lightning",
        "role": "Blasters healer",
        "favorite_food": "Bread"
    },
    {
        "id": "267",
        "name_fr": "Nagaicon",
        "name_en": "Nagatha",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters healer",
        "favorite_food": "Bread"
    },
    {
        "id": "268",
        "name_fr": "PapWinIcon",
        "name_en": "Papa Windbag",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "269",
        "name_fr": "BenTovIcon",
        "name_en": "Ben Tover",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "270",
        "name_fr": "Ceeseeicon",
        "name_en": "Cheeksqueek",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "271",
        "name_fr": "Cttceeicon",
        "name_en": "Cuttincheez",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "272",
        "name_fr": "ToilIcon",
        "name_en": "Toiletta",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Snacks"
    },
    {
        "id": "273",
        "name_fr": "FoilIcon",
        "name_en": "Foiletta",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Snacks"
    },
    {
        "id": "274",
        "name_fr": "Sproicon",
        "name_en": "Sproink",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "275",
        "name_fr": "Compunicon",
        "name_en": "Compunzer",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Snacks"
    },
    {
        "id": "276",
        "name_fr": "Lamdicon",
        "name_en": "Lamedian",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Snacks"
    },
    {
        "id": "277",
        "name_fr": "Grumpicon",
        "name_en": "Grumples",
        "rank": "B icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "278",
        "name_fr": "Eveforicon",
        "name_en": "Everfore",
        "rank": "S icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "279",
        "name_fr": "Etericon",
        "name_en": "Eterna",
        "rank": "S icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Milk"
    },
    {
        "id": "280",
        "name_fr": "Insoicon",
        "name_en": "Insomni",
        "rank": "A icon",
        "tribe": "Eerie",
        "element": "Ice",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "281",
        "name_fr": "Sandicon",
        "name_en": "Sandi",
        "rank": "S icon",
        "tribe": "Eerie",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "282",
        "name_fr": "AranusIcon",
        "name_en": "ArachnusBS",
        "rank": "S icon",
        "tribe": "Eerie",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "283",
        "name_fr": "AracniaIcon",
        "name_en": "Arachnia",
        "rank": "S icon",
        "tribe": "Eerie",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "284",
        "name_fr": "CricIcon",
        "name_en": "Cricky",
        "rank": "E icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "285",
        "name_fr": "Nokoicon YW2",
        "name_en": "Noko",
        "rank": "E icon",
        "tribe": "Slippery",
        "element": "Earth",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "286",
        "name_fr": "Blokoicon YW2",
        "name_en": "Bloominoko",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Earth",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "287",
        "name_fr": "Pannokicon",
        "name_en": "Pandanoko",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Ice",
        "role": "Blasters healer",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "288",
        "name_fr": "SnaggIcon",
        "name_en": "Snaggly",
        "rank": "E icon",
        "tribe": "Slippery",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "289",
        "name_fr": "WhinoIcon",
        "name_en": "Whinona",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "290",
        "name_fr": "Heheeicon",
        "name_en": "Heheheel",
        "rank": "D icon",
        "tribe": "Slippery",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Meat"
    },
    {
        "id": "291",
        "name_fr": "Croonicon",
        "name_en": "Croonger",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Drain",
        "role": "Blasters healer",
        "favorite_food": "Meat"
    },
    {
        "id": "292",
        "name_fr": "Urnacicon",
        "name_en": "Urnaconda",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Meat"
    },
    {
        "id": "293",
        "name_fr": "Fishpicon",
        "name_en": "Fishpicable",
        "rank": "D icon",
        "tribe": "Slippery",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "294",
        "name_fr": "Rageicon",
        "name_en": "Rageon",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "295",
        "name_fr": "Tunaticon",
        "name_en": "Tunatic",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Meat"
    },
    {
        "id": "296",
        "name_fr": "FlushIcon",
        "name_en": "Flushback",
        "rank": "D icon",
        "tribe": "Slippery",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "297",
        "name_fr": "VacmorIcon",
        "name_en": "Vacuumory",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "298",
        "name_fr": "IrewIcon",
        "name_en": "IrewigBS",
        "rank": "D icon",
        "tribe": "Slippery",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "299",
        "name_fr": "FirewIcon",
        "name_en": "FirewigBS",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "300",
        "name_fr": "Draggicon",
        "name_en": "Draggie",
        "rank": "D icon",
        "tribe": "Slippery",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "301",
        "name_fr": "Draloricon",
        "name_en": "Dragon Lord",
        "rank": "S icon",
        "tribe": "Slippery",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "302",
        "name_fr": "Azudraicon",
        "name_en": "Azure Dragon",
        "rank": "S icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "303",
        "name_fr": "MermaIcon",
        "name_en": "Mermaidyn",
        "rank": "D icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "304",
        "name_fr": "MermadIcon",
        "name_en": "Mermadonna",
        "rank": "S icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "305",
        "name_fr": "MermotIcon",
        "name_en": "Mermother",
        "rank": "S icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "306",
        "name_fr": "LadLonIcon",
        "name_en": "Lady Longnek",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Restoration",
        "role": "Blasters ranger",
        "favorite_food": "Sweets"
    },
    {
        "id": "307",
        "name_fr": "Daicon",
        "name_en": "Daiz",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "308",
        "name_fr": "Couzicon",
        "name_en": "Confuze",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Drain",
        "role": "Blasters fighter",
        "favorite_food": "Candy"
    },
    {
        "id": "309",
        "name_fr": "Chumicon",
        "name_en": "Chummer",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "310",
        "name_fr": "Shroicon",
        "name_en": "Shrook",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Vegetables"
    },
    {
        "id": "311",
        "name_fr": "Spenpicon",
        "name_en": "Spenp",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Wind",
        "role": "Blasters tank",
        "favorite_food": "Bread"
    },
    {
        "id": "312",
        "name_fr": "Almicon",
        "name_en": "Almi",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Bread"
    },
    {
        "id": "313",
        "name_fr": "Babblicon",
        "name_en": "Babblong",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "314",
        "name_fr": "Banoicon",
        "name_en": "Bananose",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters ranger",
        "favorite_food": "Candy"
    },
    {
        "id": "315",
        "name_fr": "DraaaIcon",
        "name_en": "Draaagin",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Ramen"
    },
    {
        "id": "316",
        "name_fr": "Snaggericon",
        "name_en": "SV SnaggerjagFS",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "317",
        "name_fr": "Coperlicon",
        "name_en": "Copperled",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "318",
        "name_fr": "Cynakicon",
        "name_en": "Cynake",
        "rank": "B icon",
        "tribe": "Slippery",
        "element": "Water",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "319",
        "name_fr": "Slithicon",
        "name_en": "Slitheref",
        "rank": "A icon",
        "tribe": "Slippery",
        "element": "Lightning",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "320",
        "name_fr": "Venocticon",
        "name_en": "VenoctBS",
        "rank": "S icon",
        "tribe": "Slippery",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Seafood"
    },
    {
        "id": "321",
        "name_fr": "Shavenicon",
        "name_en": "Shad. Venoct",
        "rank": "S icon",
        "tribe": "Slippery",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Seafood"
    },
    {
        "id": "322",
        "name_fr": "Shoguicon",
        "name_en": "Shogunyan",
        "rank": "S icon",
        "tribe": "WibWobBraveIcon",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "323",
        "name_fr": "Shuraicon",
        "name_en": "Komashura",
        "rank": "S icon",
        "tribe": "Mysterious mini icon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Milk"
    },
    {
        "id": "324",
        "name_fr": "Gilgaricon",
        "name_en": "Gilgaros",
        "rank": "S icon",
        "tribe": "WibWobToughIcon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Meat"
    },
    {
        "id": "325",
        "name_fr": "Spoilicon",
        "name_en": "Spoilerina",
        "rank": "S icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Wind",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "326",
        "name_fr": "Eldblooicon",
        "name_en": "Elder Bloom",
        "rank": "S icon",
        "tribe": "WibWobHeartfulIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "327",
        "name_fr": "Pooficon",
        "name_en": "Poofessor",
        "rank": "S icon",
        "tribe": "WibWobShadyIcon",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Curry"
    },
    {
        "id": "328",
        "name_fr": "Dandicon",
        "name_en": "Dandoodle",
        "rank": "S icon",
        "tribe": "WibWobEerieIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "329",
        "name_fr": "Slurpicon",
        "name_en": "Slurpent",
        "rank": "S icon",
        "tribe": "WibWobSlipperyIcon",
        "element": "Drain",
        "role": "Blasters tank",
        "favorite_food": "Meat"
    },
    {
        "id": "330",
        "name_fr": "Sapphicon",
        "name_en": "Sapphinyan",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "331",
        "name_fr": "Emeicon",
        "name_en": "Emenyan",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Chocobars"
    },
    {
        "id": "332",
        "name_fr": "Rubicon",
        "name_en": "Rubinyan",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "333",
        "name_fr": "Topaicon",
        "name_en": "Topanyan",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Lightning",
        "role": "Blasters tank",
        "favorite_food": "Chocobars"
    },
    {
        "id": "334",
        "name_fr": "Diaicon",
        "name_en": "Dianyan",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "335",
        "name_fr": "Meloicon",
        "name_en": "Melonyan",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "336",
        "name_fr": "Oraicon",
        "name_en": "Oranyan",
        "rank": "B icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Lightning",
        "role": "Blasters healer",
        "favorite_food": "Chocobars"
    },
    {
        "id": "337",
        "name_fr": "Kiwicon",
        "name_en": "Kiwinyan",
        "rank": "B icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Chocobars"
    },
    {
        "id": "338",
        "name_fr": "Grapeicon",
        "name_en": "Grapenyan",
        "rank": "B icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "339",
        "name_fr": "Strawbicon",
        "name_en": "Strawbnyan",
        "rank": "B icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "340",
        "name_fr": "Watermelicon",
        "name_en": "Watermelnyan",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "341",
        "name_fr": "Robokappicon",
        "name_en": "Robokapp",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "342",
        "name_fr": "Robokomaicon",
        "name_en": "Robokoma",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Milk"
    },
    {
        "id": "343",
        "name_fr": "Robogricon",
        "name_en": "Robogramps",
        "rank": "B icon",
        "tribe": "WibWobHeartfulIcon",
        "element": "Restoration",
        "role": "Blasters ranger",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "344",
        "name_fr": "Robomicon",
        "name_en": "Robomutt",
        "rank": "B icon",
        "tribe": "WibWobEerieIcon",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Curry"
    },
    {
        "id": "345",
        "name_fr": "Robonicon",
        "name_en": "Robonoko",
        "rank": "B icon",
        "tribe": "WibWobSlipperyIcon",
        "element": "Earth",
        "role": "Blasters ranger",
        "favorite_food": "Hamburgers"
    },
    {
        "id": "346",
        "name_fr": "Robodraicon",
        "name_en": "Robodraggie",
        "rank": "B icon",
        "tribe": "WibWobSlipperyIcon",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "347",
        "name_fr": "Wondericon",
        "name_en": "Wondernyan",
        "rank": "B icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Chocobars"
    },
    {
        "id": "348",
        "name_fr": "Robonyan ficon",
        "name_en": "Robonyan FBS",
        "rank": "A icon",
        "tribe": "WibWobToughIcon",
        "element": "Fire",
        "role": "Blasters tank",
        "favorite_food": "Chocobars"
    },
    {
        "id": "349",
        "name_fr": "Sailoricon",
        "name_en": "SailornyanFS",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Chocobars"
    },
    {
        "id": "350",
        "name_fr": "Machonicon",
        "name_en": "MachonyanPS",
        "rank": "A icon",
        "tribe": "WibWobBraveIcon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "351",
        "name_fr": "Hovericon",
        "name_en": "Hovernyan",
        "rank": "B icon",
        "tribe": "WibWobBraveIcon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Seafood"
    },
    {
        "id": "352",
        "name_fr": "Darknicon",
        "name_en": "Darknyan",
        "rank": "A icon",
        "tribe": "WibWobEerieIcon",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Seafood"
    },
    {
        "id": "353",
        "name_fr": "Jibakoicon",
        "name_en": "Jibakoma",
        "rank": "A icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "354",
        "name_fr": "Jetnicon",
        "name_en": "Jetnyan",
        "rank": "B icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Chocobars"
    },
    {
        "id": "355",
        "name_fr": "UnfaIcon",
        "name_en": "UnfairyPS",
        "rank": "S icon",
        "tribe": "WibWobWickedIcon",
        "element": "Drain",
        "role": "Blasters ranger",
        "favorite_food": "Snacks"
    },
    {
        "id": "356",
        "name_fr": "UnkaIcon",
        "name_en": "UnkaindPS",
        "rank": "S icon",
        "tribe": "WibWobWickedIcon",
        "element": "Water",
        "role": "Blasters healer",
        "favorite_food": "Seafood"
    },
    {
        "id": "357",
        "name_fr": "UntIcon",
        "name_en": "UntidyPS",
        "rank": "S icon",
        "tribe": "WibWobWickedIcon",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Meat"
    },
    {
        "id": "358",
        "name_fr": "UnpleIcon",
        "name_en": "UnpleasantPS",
        "rank": "S icon",
        "tribe": "WibWobWickedIcon",
        "element": "Wind",
        "role": "Blasters ranger",
        "favorite_food": "Oden"
    },
    {
        "id": "359",
        "name_fr": "UnkeIcon",
        "name_en": "UnkeenPS",
        "rank": "S icon",
        "tribe": "WibWobWickedIcon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Curry"
    },
    {
        "id": "360",
        "name_fr": "GrublaIcon",
        "name_en": "GrublappaPS",
        "rank": "B icon",
        "tribe": "WibWobWickedIcon",
        "element": "Lightning",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "361",
        "name_fr": "MadmunIcon",
        "name_en": "MadmunchPS",
        "rank": "B icon",
        "tribe": "WibWobWickedIcon",
        "element": "Earth",
        "role": "Blasters tank",
        "favorite_food": "Oden"
    },
    {
        "id": "362",
        "name_fr": "BadsmeIcon",
        "name_en": "BadsmellaPS",
        "rank": "A icon",
        "tribe": "WibWobWickedIcon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "363",
        "name_fr": "MadKapIcon",
        "name_en": "Mad KappaPS",
        "rank": "A icon",
        "tribe": "WibWobWickedIcon",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "364",
        "name_fr": "ShamaIcon",
        "name_en": "ShamasolPS",
        "rank": "D icon",
        "tribe": "WibWobWickedIcon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "365",
        "name_fr": "GominIcon",
        "name_en": "GnominePS",
        "rank": "B icon",
        "tribe": "WibWobWickedIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Snacks"
    },
    {
        "id": "366",
        "name_fr": "DeflecIcon",
        "name_en": "DefectabullPS",
        "rank": "B icon",
        "tribe": "WibWobWickedIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Sushi"
    },
    {
        "id": "367",
        "name_fr": "FeargIcon",
        "name_en": "FeargusPS",
        "rank": "D icon",
        "tribe": "WibWobWickedIcon",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Rice Balls"
    },
    {
        "id": "368",
        "name_fr": "ScaremaIcon",
        "name_en": "ScaremaidenPS",
        "rank": "B icon",
        "tribe": "WibWobWickedIcon",
        "element": "Water",
        "role": "Blasters fighter",
        "favorite_food": "Sweets"
    },
    {
        "id": "369",
        "name_fr": "WrongnIcon",
        "name_en": "WrongnekPS",
        "rank": "B icon",
        "tribe": "WibWobWickedIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Sweets"
    },
    {
        "id": "370",
        "name_fr": "GrumpIcon",
        "name_en": "Grumpus Khan",
        "rank": "D icon",
        "tribe": "WibWobShadyIcon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Meat"
    },
    {
        "id": "371",
        "name_fr": "GroupIcon",
        "name_en": "Groupus Khan",
        "rank": "B icon",
        "tribe": "WibWobShadyIcon",
        "element": "Wind",
        "role": "Blasters fighter",
        "favorite_food": "Meat"
    },
    {
        "id": "372",
        "name_fr": "SlumbIcon",
        "name_en": "Slumberhog",
        "rank": "D icon",
        "tribe": "WibWobBraveIcon",
        "element": "Fire",
        "role": "Blasters tank",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "373",
        "name_fr": "SnortlIcon",
        "name_en": "Snortlehog",
        "rank": "B icon",
        "tribe": "WibWobBraveIcon",
        "element": "Fire",
        "role": "Blasters ranger",
        "favorite_food": "Chinese Food"
    },
    {
        "id": "374",
        "name_fr": "PanjPurIcon",
        "name_en": "Panja Pupil",
        "rank": "D icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "375",
        "name_fr": "PanjPrIcon",
        "name_en": "Panja Pro",
        "rank": "B icon",
        "tribe": "WibWobCharmingIcon",
        "element": "Ice",
        "role": "Blasters fighter",
        "favorite_food": "Sushi"
    },
    {
        "id": "376",
        "name_fr": "SameeIcon",
        "name_en": "Samureel",
        "rank": "D icon",
        "tribe": "WibWobBraveIcon",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Seafood"
    },
    {
        "id": "377",
        "name_fr": "TimKeeIcon",
        "name_en": "Time Keeler",
        "rank": "B icon",
        "tribe": "WibWobBraveIcon",
        "element": "Water",
        "role": "Blasters tank",
        "favorite_food": "Seafood"
    },
    {
        "id": "378",
        "name_fr": "TakidIcon",
        "name_en": "Takoyakid",
        "rank": "D icon",
        "tribe": "WibWobSlipperyIcon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "379",
        "name_fr": "TakinIcon",
        "name_en": "Takoyaking",
        "rank": "B icon",
        "tribe": "WibWobSlipperyIcon",
        "element": "Fire",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "380",
        "name_fr": "DanSanIcon",
        "name_en": "Danke Sand",
        "rank": "D icon",
        "tribe": "WibWobEerieIcon",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "381",
        "name_fr": "NoSanIcon",
        "name_en": "No Sandkyu",
        "rank": "B icon",
        "tribe": "WibWobEerieIcon",
        "element": "Earth",
        "role": "Blasters fighter",
        "favorite_food": "Oden"
    },
    {
        "id": "382",
        "name_fr": "SuodenIcon",
        "name_en": "Sumodon",
        "rank": "D icon",
        "tribe": "WibWobToughIcon",
        "element": "Restoration",
        "role": "Blasters tank",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "383",
        "name_fr": "YokodenIcon",
        "name_en": "Yokozudon",
        "rank": "B icon",
        "tribe": "WibWobToughIcon",
        "element": "Restoration",
        "role": "Blasters tank",
        "favorite_food": "Soba Noodles"
    },
    {
        "id": "384",
        "name_fr": "WhaestIcon",
        "name_en": "Whateverest",
        "rank": "D icon",
        "tribe": "WibWobToughIcon",
        "element": "Fire",
        "role": "Blasters tank",
        "favorite_food": "Meat"
    },
    {
        "id": "385",
        "name_fr": "WhauptIcon",
        "name_en": "Whatuption",
        "rank": "B icon",
        "tribe": "WibWobToughIcon",
        "element": "Fire",
        "role": "Blasters tank",
        "favorite_food": "Meat"
    },
    {
        "id": "386",
        "name_fr": "HapcanIcon",
        "name_en": "Happycane",
        "rank": "D icon",
        "tribe": "WibWobHeartfulIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Candy"
    },
    {
        "id": "387",
        "name_fr": "StacanIcon",
        "name_en": "Starrycane",
        "rank": "B icon",
        "tribe": "WibWobHeartfulIcon",
        "element": "Restoration",
        "role": "Blasters healer",
        "favorite_food": "Candy"
    }
];

    // Contenu du fichier list_equipement.json (extrait)
    const equipementList = [
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Cheap Bracelet (Japanese: 安っぽいうでわ Yasuppoi Udewa)\tCheap Bracelet\tIt's not the classiest accessory, but it does the job.\tSTR +10 DEF -05\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Jungle Hunter, Uptown Springdale",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Grand Bracelet (Japanese: 豪気なうでわ Gōki na Udewa)\tGrand Bracelet\tAn elegant, strength-enhancing item that helps with heavy lifting.\tSTR +25 DEF -12\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Location": "Memory Store, Uptown Springdale",
        "Name": "Sun Bracelet (Japanese: 太陽のうでわ Taiyō no Udewa)\tSun Bracelet\tA heavy gold bracelet said to contain the power of the sun.",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Comet Bracelet (Japanese: 彗星のうでわ Suisei no Udewa)\tComet Bracelet\tUnleashes the destructive force of a comet flying through space.\tSTR +35 DEF -15\tMemory Store, Uptown Springdale",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Jungle Hunter, Uptown Springdale",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Ugly Ring (Japanese: ダサいゆびわ Dasai Yubiwa)\tUgly Ring\tIt's not pretty, but it's pretty effective.\tSPR +10 SPD -05\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Rainbow Ring (Japanese: レインボーリング Reinbō Ringu)\tRainbow Ring\tA beautiful ring that sparkles with all the colors of the rainbow.\tSPR +18 SPD -08\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "No Time For Fishin'! quest reward (choice of two)",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "No Time For Fishin'! quest reward (choice of two)",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Find Mermaidyn! quest reward (choice of two)",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Ring of Fate (Japanese: 運命のゆびわ Uninochi no Yubiwa)\tRing of Fate\tImbued with the power to alter one's destiny.\tSPR +35 SPD -15\tMemory Store, Uptown Springdale",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Aged Charm (Japanese: 古びたおまもり Furubita Omamori)\tAged Charm\tAn old charm whose power has atrophied over the years.\tDEF +10 SPR -05\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Old Charm (Japanese: ボロボロなおまもり Boroboro na Omamori, lit. \"Tattered Charm\")\tOld Charm\tIt's seen better days, but it can still offer a little power.\tDEF +10 STR -05\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Runic Charm (Japanese: ルーンのおまもり Rūn no Omamori, \"Rune Amulet/Charm\")\tRunic Charm\tA charm with a mysterious pattern upon it.\tDEF +18 SPR -08\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Protective Charm (Japanese: 加護のおまもり Kago no Omamori, lit. \"Blessing/Divine Protection Charm\")\tProtective Charm\tOffers divine protection to the wearer.\tDEF +18 STR -08\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Secrets of Soulcery quest reward (choice of two)",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Secrets of Soulcery quest reward (choice of two)",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "The Shrine's Part quest reward (choice of two)",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "The Shrine's Part quest reward (choice of two)",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Shiny Badge (Japanese: ぴかぴかバッジ Pikapika Bajji)\tShiny Badge\tA cool badge that shines bright. Kids love this one!\tSPD +15 STR -08\tJungle Hunter, Uptown Springdale",
        "Buy Price": "$1.80",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$65.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "True Hide-and-Seek quest reward (choice of two)",
        "Buy Price": "$6.50",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Buy Price": "$110.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Whatta Find, Shopper's Row",
        "Buy Price": "$11.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Retrace Dad's Steps quest reward (choice of two)",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Cheery Coat (Japanese: ハッピーはっぴ Happī happi, \"Happy Happi\")\tCheery Coat\tThis'll make you wanna dance! For Wiglin, Steppa, and Rhyth only.\tSPD +50\tTrying Tangle Tango quest rewardPS",
        "Buy Price": "$280.00\t$28.00",
        "Sell Price": "N/A"
    },
    {
        "Name": "Lt.'s Medal (Japanese: 少将の勲章 Shōshō no Kunshō)\t\tUnlocked by reaching the equivalent level in battle.",
        "Buy Price": "$18.00",
        "Sell Price": "N/A"
    }
];

    const btnRandomiser = document.getElementById('btn-randomiser');
    const resultContainer = document.getElementById('result-container');
    const yokaiCheckbox = document.getElementById('yokai-checkbox');
    const niveauCheckbox = document.getElementById('niveau-checkbox');
    const equipementCheckbox = document.getElementById('equipement-checkbox');

    // Vérifie si les éléments sont correctement sélectionnés
    console.log('btnRandomiser:', btnRandomiser);
    console.log('resultContainer:', resultContainer);
    console.log('yokaiCheckbox:', yokaiCheckbox);
    console.log('niveauCheckbox:', niveauCheckbox);
    console.log('equipementCheckbox:', equipementCheckbox);

    // Fonction de randomisation
    function randomiser() {
        console.log('Randomisation lancée');
        resultContainer.innerHTML = ''; // Clear previous results

        if (!yokaiCheckbox.checked && !equipementCheckbox.checked) {
            alert('Veuillez cocher au moins une case pour lancer la randomisation.');
            return;
        }

        // Randomiser un Yokai
        if (yokaiCheckbox.checked) {
            console.log('Yokai checkbox is checked');
            const randomIndex = Math.floor(Math.random() * yokaiList.length);
            const yokai = yokaiList[randomIndex];
            const yokaiName = yokai.name_en;

            let randomResult = `Yokai: ${yokaiName}`;
            
            // Si le niveau est coché
            if (niveauCheckbox.checked) {
                console.log('Niveau checkbox is checked');
                const randomNiveau = Math.floor(Math.random() * 99) + 1;
                randomResult += ` - Niveau: ${randomNiveau}`;
            }

            // Ajout du bouton "Afficher plus"
            const moreInfoBtn = document.createElement('button');
            moreInfoBtn.innerText = "Afficher plus";
            moreInfoBtn.onclick = function () {
                alert(`
                    Nom Français: ${yokai.name_fr}\n
                    Nom Anglais: ${yokai.name_en}\n
                    Tribu: ${yokai.tribe}\n
                    Rang: ${yokai.rank}\n
                    Rôle: ${yokai.role}\n
                    Nourriture Préférée: ${yokai.fav_food}
                `);
            };
            resultContainer.appendChild(moreInfoBtn);

            resultContainer.innerHTML += `<p>${randomResult}</p>`;
        }

        // Randomiser un Équipement
        if (equipementCheckbox.checked) {
            console.log('Equipement checkbox is checked');
            const randomIndex = Math.floor(Math.random() * equipementList.length);
            const equipement = equipementList[randomIndex];
            const equipementName = equipement.Name;

            let randomResult = `Équipement: ${equipementName}`;

            // Ajout du bouton "Afficher plus"
            const moreInfoBtnEquip = document.createElement('button');
            moreInfoBtnEquip.innerText = "Afficher plus";
            moreInfoBtnEquip.onclick = function () {
                alert(`
                    Nom: ${equipement.Name}\n
                    Description: ${equipement.Description}\n
                    Effet: ${equipement.Effect}\n
                    Localisation: ${equipement.Location}\n
                    Prix d'achat: ${equipement["Buy Price"]}\n
                    Prix de vente: ${equipement["Sell Price"]}
                `);
            };
            resultContainer.appendChild(moreInfoBtnEquip);

            resultContainer.innerHTML += `<p>${randomResult}</p>`;
        }
    }

    btnRandomiser.addEventListener('click', randomiser);
});
