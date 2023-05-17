import rivendell from "../assets/rivendell.png";
import laketown from "../assets/laketown.png";
import forsakeninn from "../assets/forsakeninn.jpg";
import MapMarkerOutline from "svelte-material-icons/MapMarkerOutline.svelte";
import Wheelchair from "svelte-material-icons/Wheelchair.svelte";
import SproutOutline from "svelte-material-icons/SproutOutline.svelte";
import PawOutline from "svelte-material-icons/PawOutline.svelte";

interface Rating {
    user: string;
    userAttributes: string;
    rating: number;
    review: string;
}

export interface Pin {
    coords: [number, number];
    name: string;
    type: string;
    image?: string;
    description: string;
    bilbosJourney?: string;
    attributes: Array<{value: string, icon: any}>;
    ratings: Rating[];
}

const pins: Pin[] = [
    {
        coords: [7561, 1878],
        name: "Laketown",
        type: "City in Middle-Earth",
        image: laketown,
        attributes: [
            {
                value: "816 New Los Angeles Ave",
                icon: MapMarkerOutline
            }
        ],
        description: "Quaint lakeside village under the shadow of the Lonely Mountain, also referred to by locals as Esgaroth.",
        ratings: [
            {
                user: "Gandalf",
                userAttributes: "Local Guide · 223 reviews",
                rating: 5,
                review: "Nice place, but the people are a bit strange."
            }
        ]
    },
    {
        coords: [7611, 1155],
        name: "Lonely Mountain",
        type: "Mountain peak",
        description: "Foreboding mountain previously home to the terrorizing dragon Smaug.",
        bilbosJourney: "Bilbo's final struggle at the Lonely Mountain just before meeting Smaug is an important battle, not against a dragon, but against his own sense of self. Despite overcoming all the previous hurdles in Mirkwood and the Wood-elves on his own, going straight to the dragon is a risk far greater than any he has taken before. He is forced to confront his own fears and doubts, and in doing so, he finds the courage to face the dragon. It is no wonder, then, that Tolkien writes that \"[g]oing on from there was the bravest thing he [Bilbo] ever did. The tremendous things that happened afterwards were as nothing compared to it\" (Tolkien 197). This place represents the final stop in Bilbo's journey, where he learns to become a true hero.",
        image: rivendell,
        attributes: [
            {
                value: "Wheelchair accessible",
                icon: Wheelchair
            },
            {
                value: "Environmentally friendly",
                icon: SproutOutline
            }
        ],
        ratings: [
            {
                user: "Bilbo Baggins",
                userAttributes: "44 reviews",
                rating: 4,
                review: "Came for the treasure, stayed for the battle. Did you know I was here during the Battle of the Five Armies? It was pretty cool, I was doing all the fighting and it was fantastic! It's so much more pretty now that the dragon is gone."
            },
            {
                user: "Thorin44",
                userAttributes: "12 reviews",
                rating: 1,
                review: "worst place EVER. i came for the arkenstone and they didnt even have it??? stupid dragon gave it to bilbo or something, idk. DON'T VISIT, MY TREASURE ONLY!!"
            },
            {
                user: "TheBardianBard",
                userAttributes: "54 reviews",
                rating: 3,
                review: "Home of the terrorizing dragon (that I slain!!). It's a pretty cool place, but I don't think I'll be coming back anytime soon. At least they compensated me with a fourteenth of the gold."
            },
            {
                user: "SmaugTheDragon",
                userAttributes: "via AirBnB",
                rating: 5,
                review: "Booked a permanent stay after seeing the copious amounts of gold in the listing. I must say, it is quite an amazing place! The living room is nice and spacious and has ample room for my piles of gold. The mountain has a beautiful view of the lakefront and surrounding human settlements. I will say that many chambers within the home were built too small for regular dragons; I had to carve out a hole to fly out of during my excursions. Be warned that the neighbors may be noisy and intrusive; they were easily scared off with some threatening but less intimidating guests may want to find a different AirBnB. Thanks to the host for such an incredibly rich experience!"
            },
            {
                user: "Gandalf",
                userAttributes: "Local Guide · 223 reviews",
                rating: 5,
                review: "Good show."
            }
        ]
    },
    {
        coords: [6370, 2200],
        name: "The Elvenking's Halls",
        type: "Cave, Royal Palace",
        description: "A cave system in the midst of Mirkwood forest, home to the king of the Wood-elves.",
        attributes: [],
        ratings: []
    },
    {
        coords: [3475, 2130],
        name: "Trollshaws",
        type: "Forest",
        description: "A forest full of dangerous trolls.",
        attributes: [],
        ratings: [
            {
                user: "Gandalf",
                userAttributes: "Local Guide · 223 reviews",
                rating: 3,
                review: "Be wary of looking too far ahead in this place. You might never know what you are leaving behind, ho ho!"
            },
            {
                user: "Bilbo Baggins",
                userAttributes: "44 reviews",
                rating: 4,
                review: "This forest is full of terrifying monsters! I barely escaped with my life... and my wits. I just want to go home, but... I can't. I have to keep going. I have to keep going.\n\nUpdate: How much of a weakling I once was! I returned through this forest on the way back to Hobbiton, and I was able to defeat any trolls that stood in my way with ease. I am now a master burglar, and I am not afraid of anything!"
            }
        ]
    },
    {
        coords: [6569, 1980],
        name: "Mirkwood Forest",
        type: "Forest",
        description: "A gloomy and thick forest populated with strange and mysterious creatures.",
        bilbosJourney: "This part of Bilbo's Journey is important because it is finally where he learns to defeat monsters and rescue his party on his own. Before entering Mirkwood, Bilbo is still relatively timid and scared of the journey ahead. During his travels into the forest, however, he is forced to fight as the dwarves are kidnapped by spiders. After defeating one spider by himself, he feels immense pride and confidence in his abilities, feeling \"much fiercer and bolder in spite of an empty stomach\" (Tolkien 144). He then goes on to rescue the dwarves from the spiders and the elves, and he is able to do so because of this newfound confidence. It teaches him that he does not need to rely on others to save him, and that he is capable of doing things on his own.",
        attributes: [],
        ratings: [
            {
                user: "Gandalf",
                userAttributes: "Local Guide · 223 reviews",
                rating: 3,
                review: "STAY ON THE PATH!"
            }
        ]
    },
    {
        coords: [978, 2220],
        name: "Bilbo's House",
        type: "Residence",
        description: "The home of Bilbo Baggins.",
        attributes: [],
        ratings: []
    },
    {
        coords: [4516, 2100],
        name: "Goblin Caves",
        type: "Cave System",
        description: "Caves in the Misty Mountains inhabited by goblins. Travelers are advised to avoid this area for their own safety.",
        bilbosJourney: "The goblin caves is where Bilbo first tricks Gollum and finds the ring; but to accomplish such a task, he needed to use his quick thinking skills and intelligence in a way that he has never done before. To get out, Bilbo needed to beat Gollum at solving riddles. While he initially wins on accident, he learns to capitalize on such weaknesses for the benefit of himself and his party. Only by overcoming Gollum is he able to escape the goblin caves alive. His intelligence is later used in the final \"battle\" against Smaug, as Bilbo uses his riddles to distract the dragon into revealing his weakspot (Tolkien 205).",
        attributes: [],
        ratings: []
    },
    {
        coords: [5530, 2090],
        name: "Beorn's House",
        type: "Residence",
        description: "A large wooden house en route to Mirkwood, home to the shapeshifter Beorn.",
        attributes: [],
        ratings: []
    },
    {
        coords: [2000, 2200],
        name: "Forsaken Inn",
        type: "2-star hotel",
        description: "A small inn on the Great East Road, serving as one of the last stops before the wilderness.",
        image: forsakeninn,
        attributes: [
            {
                value: "Wheelchair accessible",
                icon: Wheelchair
            },
            {
                value: "Pet friendly",
                icon: PawOutline
            }
        ],
        ratings: []
    },
    {
        coords: [4220, 2250],
        name: "Rivendell",
        type: "City in Middle-Earth",
        description: "Elven city in a hidden valley in the Misty Mountains, commonly referred to as the Last Homely House.",
        image: rivendell,
        attributes: [],
        ratings: [
            {
                user: "Gandalf",
                userAttributes: "Local Guide · 223 reviews",
                rating: 5,
                review: "Nice place, but the people are a bit strange."
            }
        ]
    }
]

export default pins;