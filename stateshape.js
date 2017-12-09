state = {
    users: {
        steamid: { /* user object */ }
    },
    games: {
        appid: { /* game object */ }
    },
    overlaps: {
        all: [ /* list of appids of games owned by all */ ],
        steamid: [ /* list of appids of games owned by all BUT spec. steamid*/ ],
    },
    selected_steamid: /* int */,
}
