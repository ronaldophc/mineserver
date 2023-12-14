async function getServer(ip) {
    try {
        const response = await axios.get(`https://api.mcsrvstat.us/3/${ip}`);
        const data = response.data;
        const div = document.getElementById('results');
        div.innerHTML = '';
        console.log(data);
        if (data.online == true) {
            const on = document.createElement('p');
            on.textContent = 'Servidor online';
            div.appendChild(on);
            if (data.motd && data.motd.clean) {
                const motdClean = `MOTD: ${data.motd.clean}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = motdClean;
                div.appendChild(paragraph);
            }
            if (data.hostname) {
                const hostname = `Hostname: ${data.hostname}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = hostname;
                div.appendChild(paragraph);
            }
            if (data.version) {
                const version = `Version: ${data.version}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = version;
                div.appendChild(paragraph);
            }
            if (data.software) {
                const jar = `Jar used: ${data.software}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = jar;
                div.appendChild(paragraph);
            }
            if (data.players.online) {
                const players = `Players online: ${data.players.online}`;
                const paragraph = document.createElement('p');
                paragraph.textContent = players;
                div.appendChild(paragraph);
            }
            if (data.plugins) {
                const pluginsInfo = `Plugins: ${data.plugins}`;
                const pluginsParagraph = document.createElement('p');
                pluginsParagraph.textContent = pluginsInfo;
                div.appendChild(pluginsParagraph);
            }
            if (data.mods) {
                const modsInfo = `Mods: ${data.mods}`;
                const modsParagraph = document.createElement('p');
                modsParagraph.textContent = modsInfo;
                div.appendChild(modsParagraph);
            }
        } else {
            const on = document.createElement('p');
            on.textContent = 'Servidor offline';
            div.appendChild(on);
        }
    } catch (error) {
        console.log(error);
    }
}
const submit = document.getElementById('submit');
const input = document.getElementById('ip');
submit.addEventListener("click", function (e) {
    e.preventDefault();
    getServer(input.value);
});

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'rQzSiiRe6YM',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
window.onload = onYouTubeIframeAPIReady();