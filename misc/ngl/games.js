let games = {
    a: { banner: "banners/normal.png", url: u => `https://ngl.link/${u}` },
    d: { banner: "banners/dealbreaker.png", url: u => `https://ngl.link/${u}/dealbreaker` },
    f: { banner: "banners/kissmarryblock.png", url: u => `https://ngl.link/${u}/kissmarryblock` },
    n: { banner: "banners/neverhaveiever.png", url: u => `https://ngl.link/${u}/neverhave` },
    s: { banner: "banners/shipme.png", url: u => `https://ngl.link/${u}/shipme` },
    o: { banner: "banners/confess.png", url: u => `https://confess.ngl.link/${u}` },
    r: { banner: "banners/crush.png", url: u => `https://ngl.link/${u}/yourcrush` },
    c: { banner: "banners/cancelled.png", url: u => `https://ngl.link/${u}/cancelled` },
    w: { banner: "banners/3words.png", url: u => `https://3words.ngl.link/${u}` },
    h: { banner: "banners/halloween.png", url: u => `https://ngl.link/${u}/spookyszn` },
    m: { banner: "banners/comment.png", url: u => `https://ngl.link/${u}/commentsection` }
};
let gamesString = Object.keys(games).join("");
Object.keys(games).forEach(g => {
    games[g]["play"] = false;
});