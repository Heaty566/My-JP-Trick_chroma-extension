// Future JavaScript will go here
const data = {
        a: "あ",
        i: "い",
        u: "う",
        e: "え",
        o: "お",
        ka: "か",
        ki: "き",
        ko: "こ",
        sa: "さ",
        si: " し",
        su: "す",
        se: "せ",
        so: "そ",
        ta: "た",
        ti: "ち",
        tu: "ち",
        te: "て",
        to: "と",
        na: "な",
        ni: "に",
        nu: "ぬ",
        ne: "ね",
        no: "の",
        ha: "は",
        hi: "ひ",
        hu: "ふ",
        he: "へ",
        ho: "ほ",
        ma: "ま",
        mi: "み",
        mu: "む",
        me: "め",
        mo: "も",
        ya: "や",
        yu: "ゆ",
        yo: "よ",
        wa: "わ",
        wo: "を",
        n: "ん",
        ga: "が",
        gi: "ぎ",
        gu: "ぐ",
        ge: "げ",
        go: "ご",
        za: "ざ",
        zi: "じ",
        zu: "ず",
        ze: "ぜ",
        zo: "ぞ",
        da: "だ",
        di: "ぢ",
        du: "づ",
        de: "で",
        do: "ど",
        ba: "ば",
        bi: "び",
        bu: "ぶ",
        be: "べ",
        bo: "ぼ",
        pa: "ぱ",
        pi: "ぴ",
        pu: "ぷ",
        pe: "ぺ",
        po: "ぽ",
        kya: "きゃ",
        kyu: "きゅ",
        kyo: "きょ",
        sha: "しゃ",
        shu: "しゅ",
        sho: "しょ",
        cha: "ちゃ",
        chu: "ちゅ",
        cho: "ちょ",
        nya: "にゃ",
        nyu: "にゅ",
        nyo: "にょ",
        hya: "ひゃ",
        hyu: "ひゅ",
        hyo: "ひょ",
        mya: "みゃ",
        myu: "みゅ",
        myo: "みょ",
        rya: "りゃ",
        ryu: "りゅ",
        ryo: "りょ",
        gya: "ぎゃ",
        gyu: "ぎゅ",
        gyo: "ぎょ",
        ja: "じゃ",
        ju: "じゅ",
        jo: "じょ",
        bya: "びゃ",
        byu: "びゅ",
        byo: "びょ",
        pya: "ぴゃ",
        pyu: "ぴゅ",
        pyo: "ぴょ",
};

const output = (data, value) => {
        return `<li class="item">
                                        ${data} 
                                        <span class="jp">${value}</span>
                                   </li>`;
};

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const show = document.getElementById("list");

input.addEventListener("keyup", function () {
        const value = this.value;
        const find = Object.keys(data)
                .filter((item) => item.includes(value))
                .slice(0, 10)
                .map((item) => output(item, data[item]))
                .join("");

        show.innerHTML = find.length ? find : "Not found";
});

btn.addEventListener("click", () => {
        console.log("gewe");
        const find = Object.keys(data)
                .map((item) => output(item, data[item]))
                .join("");

        show.innerHTML = find.length ? find : "Not found";
});
