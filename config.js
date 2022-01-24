module.exports = {
    app: {
        px: '~',
        token: 'OTM0ODUyNzA4ODIzODU5MjYx.Ye2Hbg.dmEsOyB_owG9tkFDJFwhc8FUCAo',
        playing: 'by nottttt ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
