/* =========================================================================
   EDIT ME — everything on the page comes from this one object.
   Replace the placeholder dates, text, photos and song below with your own.
   ========================================================================= */
var CONFIG = {

  // Simple password gate — this is NOT real security (anyone can view the
  // page source and read it), just a casual "not for randos" lock.
  // Change this to whatever you want before sharing the link.
  sitePassword: "Maureen",

  // The day it all started — used to auto-count months & days together.
  relationshipStartDate: "2023-03-14",
  partnerName: "Bb",

  monthsary: {
    message: "It's been three years of choosing you, over and over, and it still feels like the easiest decision I've ever made. Every month with you has taught me something new about how big love can actually get. Thank you for growing with me, for staying through the ordinary days and the hard ones, and for still making my heart do this every single time I see you. Happy monthsary, Bb — here's to every month still waiting for us."
  },

  story: [
    { date: "January 17, 2023", title: "The First Time We Met", text: "This is the photo from our first meetup — you could barely even look at me, you were so shy. We bought two bottles of Tanduay Ice, and I ended up breaking one of them.", image: "static/assets/day-we-met.jpg" },
    { date: "March 19, 2023", title: "Our First Memories", text: "This was our first time hanging out — I told my mom I had class, but it turned out I didn't have any that day. We used to go out all the time back then, every single night, and my mom would just spam me with missed calls, hahaha.", image: "static/assets/first-gala-1.jpg", album: [
      { src: "static/assets/first-gala-1.jpg", type: "image" },
      { src: "static/assets/first-gala-2.jpg", type: "image" },
      { src: "static/assets/first-gala-3.mp4", type: "video" },
      { src: "static/assets/first-gala-4.jpg", type: "image" },
      { src: "static/assets/first-gala-5.jpg", type: "image" }
    ] },
    { date: "Month, Year", title: "Our Favorite Moments", text: "", image: "static/assets/fave-moments-1.jpg", album: [
      { src: "static/assets/fave-moments-1.jpg", type: "image", caption: "mao tung time na gi laay ta, gusto ka mag motor2X ta hahhaa" },
      { src: "static/assets/fave-moments-2.mp4", type: "video", caption: "sabay ta nag new year diri December 31, 2023, di paka mutuo ani na ako ga luto sa imo gikaon 😕" },
      { src: "static/assets/fave-moments-3.jpg", type: "image", caption: "gwapa uy huhu" },
      { src: "static/assets/fave-moments-4.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-01.jpg", type: "image", caption: "aniversarry natu ni na time hhheeh gikan pako eskwela ani hahhaha" },
      { src: "static/assets/fave-moments-more-02.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-03.jpg", type: "image", caption: "pa picture daw siya kunwari stollen haahhaa" },
      { src: "static/assets/fave-moments-more-04.jpg", type: "image", caption: "nag kaon ta ani sa Mang Inasal atung April 19, 2024, gikapuy nata luto sa BH mao nangaon ta sa gawas hahahah" },
      { src: "static/assets/fave-moments-more-05.jpg", type: "image", caption: "kani na time naka pro max pa ang dragon mode nimo ani hahhaa, nag huna huna napud ka i away sa akoa hahahahaa" },
      { src: "static/assets/fave-moments-more-06.jpg", type: "image", caption: "awa nag i hate you na HAHAHHAHAA" },
      { src: "static/assets/fave-moments-more-07.jpg", type: "image", caption: "joke lang daw ana niya hahahahha" },
      { src: "static/assets/fave-moments-more-08.jpg", type: "image", caption: "mao ni tung time na gina kuha pa tika sa imoha ate kay imoha mama manawag hahhaaah" },
      { src: "static/assets/fave-moments-more-09.jpg", type: "image", caption: "murag nag huna huna ka ani unsay sud anon sa BH hahhahaa, ako na chill ra kaayu hahahhaha" },
      { src: "static/assets/fave-moments-more-10.jpg", type: "image", caption: "pa uli nata sa Samal ani, gi hatud taka kay naa naman ka klase, for sure absent ko ani kay whole week baya eskwela nako pero bahala sila, hhahahahaa" },
      { src: "static/assets/fave-moments-more-11.jpg", type: "image", caption: "nwong sa kusug kaayu mamaak, hahahha" },
      { src: "static/assets/fave-moments-more-13.jpg", type: "image", caption: "kani na time graduate na jud tawon ko syempre ang bb di pwede na wala hehhehehee" },
      { src: "static/assets/fave-moments-more-14.jpg", type: "image", caption: "pa silip silip yarn? hahahaah" },
      { src: "static/assets/fave-moments-more-15.jpg", type: "image", caption: "naka uli nata balay ani, nag picture ta kauban ig agaw nako, hahaha" },
      { src: "static/assets/fave-moments-more-16.jpg", type: "image", caption: "nangaligo ta ani kay gipang igang hahhahaa" },
      { src: "static/assets/fave-moments-more-17.mp4", type: "video", caption: "kani ni na time katung mag start nako OJT, gusto ka mag dagat ta for the last time huhuhu" },
      { src: "static/assets/fave-moments-more-18.mp4", type: "video", caption: "pa uli ta samal ani siga kaayu ba hahahaha" },
      { src: "static/assets/fave-moments-more-19.mp4", type: "video", caption: "kiat kaayu kay ka diri hahaha" },
      { src: "static/assets/fave-moments-more-20.mp4", type: "video", caption: "nag laag ta diri sa Puting Bato, na tuman jud kay sa first plano natu na pakyas wala ma dayun, suko kaayu ka sa akoa that time, pero na ulian ra man noon ka ahhahaa" },
      { src: "static/assets/fave-moments-more-21.mp4", type: "video", caption: "first time ko naka tilaw ug balot na gi adobo huhu, the best kaayu si bb mag luto 😊" },
      { src: "static/assets/fave-moments-more-22.mp4", type: "video", caption: "feeling bornok yarn? HHAHAHAHAHAH" },
      { src: "static/assets/fave-moments-more-23.mp4", type: "video", caption: "kiat kaayu ka mas unsaon hahhahaha" },
      { src: "static/assets/fave-moments-more-24.mp4", type: "video", caption: "siga kaayu oh hahaahah, naay occasion sa side nimo kalimot ko kay kinsa hhahaha" },
      { src: "static/assets/fave-moments-more-25.mp4", type: "video", caption: "nag dagat ta ani kauban fam nimo hehhhee" },
      { src: "static/assets/fave-moments-more-26.mp4", type: "video", caption: "namalik ta isla farm ani hahahha October 2023 hahah" },
      { src: "static/assets/fave-moments-more-27.mp4", type: "video", caption: "birthday sa akoa ate, gi pa adtu taka hhahaha gi pa kanta dayun uy hahhaha" },
      { src: "static/assets/fave-moments-more-28.jpg", type: "image", caption: "gikan taka gi sundo sa school nimo ani, naka remember pako nag hisgot ka ani na ma bagsak naka sa isa ka subject hahaha maong problemado kaayu kag nwong hahaha" },
      { src: "static/assets/fave-moments-more-29.jpg", type: "image", caption: "tag naa unsa mood nimo ate b? hahhahaha galit yarn? hahahahaha" },
      { src: "static/assets/fave-moments-more-31.jpg", type: "image", caption: "peace yow!!!!!!!!!" },
      { src: "static/assets/fave-moments-more-32.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-33.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-34.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-35.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-36.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-37.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-39.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-40.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-41.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-42.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-43.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-44.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-45.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-46.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-47.jpg", type: "image" },
      { src: "static/assets/fave-moments-more-48.jpg", type: "image" }
    ] }
  ],

  reasons: [
    { label: "Your Smile", message: "It's the first thing that makes any bad day feel a little lighter." },
    { label: "Your Kindness", message: "The way you care for everyone around you, without ever expecting anything back." },
    { label: "The Way You Care", message: "You notice the little things — and that means more to me than you know." },
    { label: "Your Personality", message: "You make even ordinary moments feel like an adventure worth having." },
    { label: "How You Make Me Happy", message: "Somehow, just being near you makes everything feel okay." },
    { label: "Your Laugh", message: "It's easily my favorite sound in the world." }
  ],

  // Set `src` to a real photo path (e.g. "assets/photo-1.jpg") to replace a placeholder.
  gallery: [
    { src: "static/assets/gallery-1.jpg", caption: "that random tuesday that felt like a movie" },
    { src: "static/assets/gallery-2.jpg", caption: "your favorite spot" },
    { src: "static/assets/gallery-3.jpg", caption: "the trip we still talk about" },
    { src: "static/assets/gallery-4.jpg", caption: "just us, being us" },
    { src: "static/assets/gallery-5.jpg", caption: "one for the album" },
    { src: "static/assets/gallery-6.jpg", caption: "one more for good measure" }
  ],

  letter: "Sometimes I don't say it enough, but I want you to know how grateful I am to have you in my life. You make ordinary days feel special, and I hope this little website reminds you how much you mean to me.",

  openWhen: [
    { label: "Open when you're sad", message: "Whatever it is, it's temporary — and you don't have to carry it alone. I'm right here, and I love you exactly as you are today." },
    { label: "Open when you miss me", message: "I miss you too, more than a text could ever say. Close your eyes for a second — I'm thinking of you right now." },
    { label: "Open when you need to smile", message: "Remember that time we couldn't stop laughing over something completely ridiculous? Yeah. That. Smile — you're loved." },
    { label: "Open when you want to know how much I love you", message: "More than I've ever loved anything. More than yesterday, and less than tomorrow. That's the whole answer." }
  ],

  surprise: "This whole page took time, but you're worth far more than that. Thank you for being my favorite person, my favorite story, and my favorite reason to smile."
};

(function(){

  /* ---------------- site password gate ---------------- */
  var siteGate = document.getElementById('siteGate');
  var siteGateForm = document.getElementById('siteGateForm');
  var siteGateInput = document.getElementById('siteGateInput');
  var siteGateError = document.getElementById('siteGateError');

  if(sessionStorage.getItem('giftSiteUnlocked') === 'yes'){
    siteGate.classList.add('is-unlocked');
  }

  siteGateForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(siteGateInput.value === CONFIG.sitePassword){
      sessionStorage.setItem('giftSiteUnlocked', 'yes');
      siteGate.classList.add('is-unlocked');
      siteGateError.hidden = true;
    } else {
      siteGateError.hidden = false;
      siteGateInput.value = '';
      siteGateInput.focus();
    }
  });

  /* ---------------- background music (YouTube) ---------------- */
  var BG_MUSIC_VIDEO_ID = 'gQ3cqWIhbM8';
  var bgPlayer = null;
  var bgMusicReady = false;
  var bgMusicStarted = false;
  var bgMusicPlaying = false;
  var bgMusicToggle = document.getElementById('bgMusicToggle');
  var bgMusicUserPaused = false;
  var bgMusicResumeTimer = null;
  var albumVideoIsPlaying = false;

  function resumeBgMusicIfAllowed(){
    if(bgPlayer && !bgMusicUserPaused && bgMusicStarted && !albumVideoIsPlaying && !bgMusicPlaying){
      bgPlayer.playVideo();
    }
  }

  function updateBgMusicIcon(){
    if(!bgMusicToggle) return;
    bgMusicToggle.classList.toggle('is-playing', bgMusicPlaying);
    bgMusicToggle.setAttribute('aria-label', bgMusicPlaying ? 'Pause music' : 'Play music');
  }

  window.onYouTubeIframeAPIReady = function(){
    bgPlayer = new YT.Player('bgMusicFrame', {
      height: '1',
      width: '1',
      videoId: BG_MUSIC_VIDEO_ID,
      playerVars: {
        autoplay: 1, controls: 0, disablekb: 1, fs: 0, modestbranding: 1,
        playsinline: 1, mute: 1, loop: 1, playlist: BG_MUSIC_VIDEO_ID
      },
      events: {
        onReady: function(e){
          bgMusicReady = true;
          e.target.playVideo();
        },
        onStateChange: function(e){
          bgMusicPlaying = (e.data === YT.PlayerState.PLAYING);
          updateBgMusicIcon();
          /* self-healing: if something other than our own pause button
             stopped the music, bring it back automatically — but not
             while a memory video is actively playing, since fighting for
             audio focus there just makes the video itself stop instead. */
          if(!bgMusicPlaying && !bgMusicUserPaused && bgMusicStarted && !albumVideoIsPlaying){
            clearTimeout(bgMusicResumeTimer);
            bgMusicResumeTimer = setTimeout(function(){
              if(bgPlayer && !bgMusicUserPaused && !albumVideoIsPlaying) bgPlayer.playVideo();
            }, 400);
          }
          /* explicit replay-on-end, in case the loop/playlist trick doesn't
             catch it on every device */
          if(e.data === YT.PlayerState.ENDED && !albumVideoIsPlaying){
            e.target.seekTo(0);
            e.target.playVideo();
          }
        }
      }
    });
  };
  var ytApiTag = document.createElement('script');
  ytApiTag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(ytApiTag);

  function startUnmutedBgMusic(){
    if(!bgPlayer || !bgMusicReady || bgMusicStarted) return;
    bgMusicStarted = true;
    bgPlayer.unMute();
    bgPlayer.playVideo();
  }
  document.addEventListener('click', startUnmutedBgMusic);
  document.addEventListener('touchstart', startUnmutedBgMusic);
  document.addEventListener('keydown', startUnmutedBgMusic);

  if(bgMusicToggle){
    bgMusicToggle.addEventListener('click', function(){
      if(!bgPlayer || !bgMusicReady) return;
      bgMusicStarted = true;
      if(bgMusicPlaying){
        bgMusicUserPaused = true;
        bgPlayer.pauseVideo();
      } else {
        bgMusicUserPaused = false;
        bgPlayer.unMute();
        bgPlayer.playVideo();
      }
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- ambient floating hearts / sparkles ---------------- */
  var canvas = document.getElementById('ambient');
  var ctx = canvas.getContext('2d');
  var particles = [];
  function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function seedParticles(){
    particles = [];
    var count = Math.min(26, Math.floor(window.innerWidth/50));
    var glyphs = ['♥','✦','♡'];
    var colors = ['rgba(232,135,159,0.5)','rgba(164,143,224,0.45)','rgba(246,201,155,0.5)'];
    for(var i=0;i<count;i++){
      particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        size: 10 + Math.random()*16,
        speed: 0.15 + Math.random()*0.3,
        drift: (Math.random()-0.5)*0.4,
        glyph: glyphs[i%glyphs.length],
        color: colors[i%colors.length],
        phase: Math.random()*Math.PI*2
      });
    }
  }
  function drawParticles(t){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(var i=0;i<particles.length;i++){
      var p = particles[i];
      var y = reduceMotion ? p.y : (p.y - (t*0.02*p.speed) % (canvas.height+40));
      if(y < -40) y += canvas.height+40;
      var x = p.x + (reduceMotion?0:Math.sin(t*0.0006 + p.phase)*18);
      ctx.font = p.size + 'px serif';
      ctx.fillStyle = p.color;
      ctx.fillText(p.glyph, x, y);
    }
    if(!reduceMotion) requestAnimationFrame(drawParticles);
  }
  window.addEventListener('resize', function(){ resizeCanvas(); seedParticles(); });
  resizeCanvas(); seedParticles();
  requestAnimationFrame(drawParticles);
  if(reduceMotion) drawParticles(0);

  /* ---------------- bulalak floating particles (decorative, CSS-driven) ---------------- */
  if(!reduceMotion){
    var bulalakLayer = document.getElementById('bulalakLayer');
    var bulalakColors = ['#f6c99b', '#e8879f', '#a48fe0'];
    var bulalakCount = Math.min(22, Math.max(10, Math.floor(window.innerWidth / 70)));
    for(var bi = 0; bi < bulalakCount; bi++){
      var dot = document.createElement('span');
      dot.className = 'bulalak';
      var size = (1.5 + Math.random() * 3).toFixed(1);
      var duration = (10 + Math.random() * 12).toFixed(1);
      var swayDuration = (3 + Math.random() * 4).toFixed(1);
      var sway = Math.round(10 + Math.random() * 26);
      var delay = (Math.random() * 18).toFixed(1);
      var opacityPeak = (0.4 + Math.random() * 0.45).toFixed(2);
      dot.style.setProperty('--bx', (Math.random() * 100).toFixed(1) + '%');
      dot.style.setProperty('--bs', size + 'px');
      dot.style.setProperty('--bc', bulalakColors[bi % bulalakColors.length]);
      dot.style.setProperty('--bd', duration + 's');
      dot.style.setProperty('--bsd', swayDuration + 's');
      dot.style.setProperty('--bsw', sway + 'px');
      dot.style.setProperty('--bdelay', '-' + delay + 's');
      dot.style.setProperty('--bo', opacityPeak);
      bulalakLayer.appendChild(dot);
    }
  }

  /* ---------------- smooth scroll to surprise ---------------- */
  document.getElementById('openSurprise').addEventListener('click', function(){
    document.getElementById('monthsary').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---------------- back to top ---------------- */
  var toTop = document.getElementById('toTop');
  window.addEventListener('scroll', function(){
    toTop.hidden = false;
    toTop.classList.toggle('visible', window.scrollY > 700);
  });
  toTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---------------- scroll reveal ---------------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
        if(entry.target.dataset.onReveal === 'letter') startLetterTyping();
      }
    });
  }, { threshold:0.18 }) : null;
  function observeReveal(el){
    if(!el) return;
    el.classList.add('reveal');
    if(io) io.observe(el); else el.classList.add('in-view');
  }

  // Elements already marked `.reveal` straight in the HTML (headings,
  // kickers, hero copy, final lines) still need to be handed to the
  // observer, or they stay invisible forever.
  document.querySelectorAll('.reveal').forEach(function(el){
    if(io) io.observe(el); else el.classList.add('in-view');
  });

  /* ---------------- escape helper ---------------- */
  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }

  /* ---------------- monthsary celebration ---------------- */
  var monthsaryBtn = document.getElementById('monthsaryBtn');
  var monthsaryReveal = document.getElementById('monthsaryReveal');
  observeReveal(document.querySelector('#monthsary .kicker'));
  observeReveal(document.querySelector('#monthsary .section-title'));
  observeReveal(monthsaryBtn);

  function monthsBetween(start, end){
    var months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if(end.getDate() < start.getDate()) months--;
    return Math.max(0, months);
  }
  function daysBetween(start, end){
    var ms = end.setHours(0,0,0,0) - start.setHours(0,0,0,0);
    return Math.max(0, Math.round(ms / 86400000));
  }
  function animateCount(el, target, duration){
    if(reduceMotion){ el.textContent = target; return; }
    var startTime = null;
    function tick(ts){
      if(!startTime) startTime = ts;
      var progress = Math.min(1, (ts - startTime) / duration);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if(progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function confettiBurst(){
    if(reduceMotion) return;
    var colors = ['#e8879f','#a48fe0','#f6c99b','#ffd7e4','#c85f7c'];
    for(var i=0;i<50;i++){
      var el = document.createElement('span');
      el.className = 'confetti-particle';
      var size = 6 + Math.random()*6;
      el.style.width = size + 'px';
      el.style.height = (size*0.4) + 'px';
      el.style.background = colors[i % colors.length];
      el.style.borderRadius = '2px';
      el.style.left = Math.random()*100 + 'vw';
      el.style.top = '-10px';
      el.style.setProperty('--cx', (Math.random()*140-70)+'px');
      el.style.setProperty('--cr', (Math.random()*720-360)+'deg');
      el.style.animation = 'confetti-fall ' + (2200 + Math.random()*1400) + 'ms ease-in forwards';
      el.style.animationDelay = (Math.random()*400) + 'ms';
      document.body.appendChild(el);
      (function(node){ setTimeout(function(){ node.remove(); }, 4200); })(el);
    }
    var balloonColors = ['#e8879f','#a48fe0','#f6c99b'];
    for(var b=0;b<7;b++){
      var balloon = document.createElement('span');
      balloon.className = 'balloon-particle';
      balloon.textContent = '🎈';
      balloon.style.left = (10 + Math.random()*80) + 'vw';
      balloon.style.bottom = '-60px';
      balloon.style.fontSize = (28 + Math.random()*16) + 'px';
      balloon.style.filter = 'hue-rotate(' + Math.random()*40 + 'deg)';
      balloon.style.animation = 'balloon-rise ' + (3200 + Math.random()*1200) + 'ms ease-in forwards';
      balloon.style.animationDelay = (Math.random()*300) + 'ms';
      document.body.appendChild(balloon);
      (function(node){ setTimeout(function(){ node.remove(); }, 5000); })(balloon);
    }
  }

  monthsaryBtn.addEventListener('click', function(){
    var start = new Date(CONFIG.relationshipStartDate + 'T00:00:00');
    var now = new Date();
    var months = monthsBetween(start, new Date(now));
    var days = daysBetween(new Date(start), new Date(now));

    monthsaryBtn.hidden = true;
    monthsaryReveal.hidden = false;
    animateCount(document.getElementById('countMonths'), months, 1400);
    animateCount(document.getElementById('countDays'), days, 1600);
    document.getElementById('monthsarySince').textContent =
      'since ' + start.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
    document.getElementById('monthsaryText').textContent = CONFIG.monthsary.message;

    confettiBurst();
    monthsaryReveal.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block:'center' });
  });

  /* ---------------- album grid overlay (iPhone-Photos-style results grid) ---------------- */
  var albumGridOverlay = document.getElementById('albumGridOverlay');
  var albumGridList = document.getElementById('albumGridList');
  var albumGridTitle = document.getElementById('albumGridTitle');
  var cameFromGrid = false;

  function formatDuration(seconds){
    var m = Math.floor(seconds / 60);
    var s = Math.round(seconds % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  function openAlbumGrid(album, coverSrc, title){
    albumGridTitle.textContent = title || '';
    albumGridList.innerHTML = '';
    album.forEach(function(media, idx){
      var cell = document.createElement('button');
      cell.className = 'album-grid-item';
      cell.setAttribute('aria-label', 'Open item ' + (idx+1));
      cell.innerHTML = '<img src="'+(media.type === 'video' ? (coverSrc || media.src) : media.src)+'" alt="" loading="lazy">';
      if(media.type === 'video'){
        var badge = document.createElement('span');
        badge.className = 'duration';
        badge.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg><span></span>';
        cell.appendChild(badge);
        var probe = document.createElement('video');
        probe.preload = 'metadata';
        probe.src = media.src;
        probe.addEventListener('loadedmetadata', function(){
          badge.querySelector('span').textContent = formatDuration(probe.duration);
        });
      }
      cell.addEventListener('click', function(){
        albumGridOverlay.hidden = true;
        cameFromGrid = true;
        openAlbum(album, idx, coverSrc);
      });
      albumGridList.appendChild(cell);
    });
    albumGridOverlay.hidden = false;
  }
  document.getElementById('albumGridClose').addEventListener('click', function(){
    albumGridOverlay.hidden = true;
  });

  /* ---------------- album lightbox (used by timeline entries) ---------------- */
  var albumLightbox = document.getElementById('albumLightbox');
  var albumFrame = document.getElementById('albumFrame');
  var albumImage = document.getElementById('albumImage');
  var albumVideo = document.getElementById('albumVideo');
  albumVideo.addEventListener('play', function(){ albumVideoIsPlaying = true; });
  albumVideo.addEventListener('pause', function(){ albumVideoIsPlaying = false; resumeBgMusicIfAllowed(); });
  albumVideo.addEventListener('ended', function(){ albumVideoIsPlaying = false; resumeBgMusicIfAllowed(); });
  var albumCaption = document.getElementById('albumCaption');
  var albumStory = document.getElementById('albumStory');
  var albumDock = document.getElementById('albumDock');
  var currentAlbum = [];
  var albumIndex = 0;

  function showAlbumItem(){
    var item = currentAlbum[albumIndex];
    if(!item) return;
    albumVideo.pause();
    if(item.type === 'video'){
      albumImage.hidden = true;
      albumVideo.hidden = false;
      albumVideo.src = item.src;
    } else {
      albumVideo.hidden = true;
      albumImage.hidden = false;
      albumImage.src = item.src;
    }
    albumStory.textContent = item.caption || '';
    albumStory.hidden = !item.caption;
    albumCaption.textContent = (albumIndex + 1) + ' / ' + currentAlbum.length;
    Array.prototype.forEach.call(albumDock.children, function(thumb, i){
      thumb.classList.toggle('active', i === albumIndex);
      if(i === albumIndex) thumb.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', inline:'center', block:'nearest' });
    });
  }
  function goToAlbumIndex(i){
    albumIndex = (i + currentAlbum.length) % currentAlbum.length;
    showAlbumItem();
  }
  function openAlbum(album, startIndex, coverSrc){
    currentAlbum = album;
    albumDock.innerHTML = '';
    album.forEach(function(media, i){
      var thumb = document.createElement('button');
      thumb.className = 'album-dock-thumb' + (media.type === 'video' ? ' is-video' : '');
      thumb.innerHTML = '<img src="'+(media.type === 'video' ? (coverSrc || media.src) : media.src)+'" alt="">';
      thumb.addEventListener('click', function(){ goToAlbumIndex(i); });
      albumDock.appendChild(thumb);
    });
    goToAlbumIndex(startIndex || 0);
    albumLightbox.hidden = false;
  }
  function closeAlbumViewer(){
    albumVideo.pause();
    albumLightbox.hidden = true;
    if(cameFromGrid){
      cameFromGrid = false;
      albumGridOverlay.hidden = false;
    }
  }
  document.getElementById('albumClose').addEventListener('click', closeAlbumViewer);
  document.getElementById('albumPrev').addEventListener('click', function(){ goToAlbumIndex(albumIndex - 1); });
  document.getElementById('albumNext').addEventListener('click', function(){ goToAlbumIndex(albumIndex + 1); });
  albumLightbox.addEventListener('click', function(e){ if(e.target === albumLightbox) closeAlbumViewer(); });
  document.addEventListener('keydown', function(e){
    if(albumLightbox.hidden) return;
    if(e.key === 'Escape') closeAlbumViewer();
    if(e.key === 'ArrowLeft' && currentAlbum.length > 1) goToAlbumIndex(albumIndex - 1);
    if(e.key === 'ArrowRight' && currentAlbum.length > 1) goToAlbumIndex(albumIndex + 1);
  });

  /* swipe / drag to move between album items, like a phone photo gallery */
  (function(){
    var startX = 0, currentX = 0, dragging = false;
    function onDown(x){
      if(currentAlbum.length < 2) return;
      dragging = true; startX = x; currentX = x;
      albumFrame.classList.add('is-dragging');
    }
    function onMove(x){
      if(!dragging) return;
      currentX = x;
      var dx = currentX - startX;
      albumFrame.style.transform = 'translateX(' + dx + 'px)';
    }
    function onUp(){
      if(!dragging) return;
      dragging = false;
      albumFrame.classList.remove('is-dragging');
      var dx = currentX - startX;
      albumFrame.style.transform = '';
      if(Math.abs(dx) > 60){
        goToAlbumIndex(albumIndex + (dx < 0 ? 1 : -1));
      }
    }
    albumFrame.addEventListener('touchstart', function(e){ onDown(e.touches[0].clientX); }, { passive:true });
    albumFrame.addEventListener('touchmove', function(e){ onMove(e.touches[0].clientX); }, { passive:true });
    albumFrame.addEventListener('touchend', onUp);
    albumFrame.addEventListener('pointerdown', function(e){ if(e.pointerType === 'touch') return; onDown(e.clientX); });
    albumFrame.addEventListener('pointermove', function(e){ if(e.pointerType === 'touch') return; onMove(e.clientX); });
    window.addEventListener('pointerup', function(e){ if(e.pointerType === 'touch') return; onUp(); });
  })();

  /* ---------------- timeline ---------------- */
  var timelineList = document.getElementById('timelineList');
  CONFIG.story.forEach(function(item){
    var li = document.createElement('li');
    li.className = 'timeline-item';
    li.innerHTML =
      '<span class="timeline-dot" aria-hidden="true"></span>' +
      '<div class="timeline-card">' +
        (item.image ? '<img class="timeline-image" src="'+item.image+'" alt="'+escapeHtml(item.title)+'" loading="lazy">' : '') +
        '<p class="timeline-date">'+escapeHtml(item.date)+'</p>' +
        '<h3 class="timeline-title">'+escapeHtml(item.title)+'</h3>' +
        '<p class="timeline-text">'+escapeHtml(item.text)+'</p>' +
      '</div>';

    var fullAlbum = item.album || (item.image ? [{src:item.image, type:'image'}] : null);

    if(item.image){
      var cover = li.querySelector('.timeline-image');
      cover.style.cursor = 'zoom-in';
      cover.addEventListener('click', function(){
        cameFromGrid = false;
        openAlbumGrid(fullAlbum, item.image, item.title);
      });
    }

    if(item.album && item.album.length){
      var strip = document.createElement('div');
      strip.className = 'timeline-album-strip';
      var visible = item.album.slice(0, 4);
      visible.forEach(function(media, idx){
        var thumb = document.createElement('button');
        thumb.className = 'timeline-album-thumb' + (media.type === 'video' ? ' is-video' : '');
        thumb.setAttribute('aria-label', 'Open item ' + (idx+1) + ' of album');
        if(media.type === 'video'){
          thumb.innerHTML = '<img src="'+item.image+'" alt="">';
        } else {
          thumb.innerHTML = '<img src="'+media.src+'" alt="" loading="lazy">';
        }
        thumb.addEventListener('click', function(){ openAlbumGrid(fullAlbum, item.image, item.title); });
        strip.appendChild(thumb);
      });
      if(item.album.length > visible.length){
        var more = document.createElement('button');
        more.className = 'timeline-album-more';
        more.textContent = '+' + (item.album.length - visible.length);
        more.setAttribute('aria-label', 'View full album');
        more.addEventListener('click', function(){ openAlbumGrid(fullAlbum, item.image, item.title); });
        strip.appendChild(more);
      }
      li.querySelector('.timeline-card').appendChild(strip);
    }


    observeReveal(li);
    timelineList.appendChild(li);
  });

  /* ---------------- reasons (flip cards) ---------------- */
  var reasonGrid = document.getElementById('reasonGrid');
  CONFIG.reasons.forEach(function(item){
    var card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML =
      '<button class="reason-inner" aria-pressed="false" aria-label="Reveal reason: '+escapeHtml(item.label)+'">' +
        '<span class="reason-face reason-front"><span>'+escapeHtml(item.label)+'</span></span>' +
        '<span class="reason-face reason-back">'+escapeHtml(item.message)+'</span>' +
      '</button>';
    var btn = card.querySelector('button');
    btn.addEventListener('click', function(){
      var flipped = card.classList.toggle('flipped');
      btn.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    });
    observeReveal(card);
    reasonGrid.appendChild(card);
  });

  /* ---------------- gallery + lightbox ---------------- */
  var galleryGrid = document.getElementById('galleryGrid');
  var lightbox = document.getElementById('lightbox');
  var lbImage = document.getElementById('lbImage');
  var lbCaption = document.getElementById('lbCaption');
  var photoItems = CONFIG.gallery.filter(function(g){ return g.src; });
  var lbIndex = 0;

  CONFIG.gallery.forEach(function(item){
    var fig = document.createElement('figure');
    fig.className = 'gallery-item';
    if(item.src){
      fig.innerHTML = '<img src="'+item.src+'" alt="'+escapeHtml(item.caption||'')+'" loading="lazy">' +
        '<figcaption class="gallery-caption">'+escapeHtml(item.caption||'')+'</figcaption>';
      fig.tabIndex = 0;
      fig.setAttribute('role','button');
      var openThis = function(){
        lbIndex = photoItems.indexOf(item);
        showLightboxItem();
        lightbox.hidden = false;
      };
      fig.addEventListener('click', openThis);
      fig.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openThis(); } });
    } else {
      fig.innerHTML =
        '<div class="gallery-placeholder">' +
          '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm1 2v10h14V7H5zm2 8l3.5-4.5 2.5 3 2-2.5L18 15H7z"/></svg>' +
          '<span>'+escapeHtml(item.caption||'add a photo here')+'</span>' +
        '</div>';
    }
    observeReveal(fig);
    galleryGrid.appendChild(fig);
  });

  function showLightboxItem(){
    var item = photoItems[lbIndex];
    if(!item) return;
    lbImage.src = item.src;
    lbImage.alt = item.caption || '';
    lbCaption.textContent = item.caption || '';
  }
  document.getElementById('lbClose').addEventListener('click', function(){ lightbox.hidden = true; });
  document.getElementById('lbPrev').addEventListener('click', function(){
    lbIndex = (lbIndex - 1 + photoItems.length) % photoItems.length; showLightboxItem();
  });
  document.getElementById('lbNext').addEventListener('click', function(){
    lbIndex = (lbIndex + 1) % photoItems.length; showLightboxItem();
  });
  lightbox.addEventListener('click', function(e){ if(e.target === lightbox) lightbox.hidden = true; });
  document.addEventListener('keydown', function(e){
    if(lightbox.hidden) return;
    if(e.key === 'Escape') lightbox.hidden = true;
    if(e.key === 'ArrowLeft' && photoItems.length > 1) document.getElementById('lbPrev').click();
    if(e.key === 'ArrowRight' && photoItems.length > 1) document.getElementById('lbNext').click();
  });

  /* ---------------- letter typing animation ---------------- */
  var letterTextEl = document.getElementById('letterText');
  var letterSection = document.getElementById('letter');
  letterSection.dataset.onReveal = 'letter';
  observeReveal(letterSection.querySelector('.letter-card'));
  observeReveal(letterSection);
  var letterTyped = false;
  function startLetterTyping(){
    if(letterTyped) return;
    letterTyped = true;
    var full = CONFIG.letter;
    if(reduceMotion){
      letterTextEl.textContent = full;
      return;
    }
    var i = 0;
    letterTextEl.textContent = '';
    var cursor = document.createElement('span');
    cursor.className = 'cursor';
    function step(){
      i++;
      letterTextEl.textContent = full.slice(0, i);
      letterTextEl.appendChild(cursor);
      if(i < full.length){
        setTimeout(step, 16 + Math.random()*14);
      } else {
        setTimeout(function(){ cursor.remove(); }, 900);
      }
    }
    step();
  }

  /* ---------------- open when envelopes ---------------- */
  var envelopeGrid = document.getElementById('envelopeGrid');
  CONFIG.openWhen.forEach(function(item, idx){
    var wrap = document.createElement('div');
    wrap.className = 'envelope';
    wrap.dataset.open = 'false';
    var bodyId = 'envelope-body-' + idx;
    wrap.innerHTML =
      '<button class="envelope-toggle" aria-expanded="false" aria-controls="'+bodyId+'">' +
        '<span class="seal" aria-hidden="true">💌</span>' +
        '<span class="label">'+escapeHtml(item.label)+'</span>' +
        '<span class="chev" aria-hidden="true">⌄</span>' +
      '</button>' +
      '<div class="envelope-body" id="'+bodyId+'">'+escapeHtml(item.message)+'</div>';
    var toggle = wrap.querySelector('.envelope-toggle');
    toggle.addEventListener('click', function(){
      var isOpen = wrap.dataset.open === 'true';
      wrap.dataset.open = isOpen ? 'false' : 'true';
      toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
    observeReveal(wrap);
    envelopeGrid.appendChild(wrap);
  });

  /* ---------------- takoyaki game ---------------- */
  var choiceA = document.getElementById('choiceA');
  var choiceB = document.getElementById('choiceB');
  var gameBubble = document.getElementById('gameBubble');
  var gameResult = document.getElementById('gameResult');
  var aStage = 0;
  var gameOver = false;

  var dodgeCount = 0;
  choiceA.addEventListener('click', function(){
    if(gameOver) return;
    if(aStage < 4){
      aStage++;
      choiceA.setAttribute('data-stage', aStage);
      if(aStage === 3) choiceB.classList.add('is-big');
      if(aStage === 4) gameBubble.hidden = false;
      return;
    }
    /* stays clickable forever, but it keeps dodging — and b keeps growing with every click */
    dodgeCount++;
    var randX = Math.round(Math.random() * 160 - 80);
    var randY = Math.round(Math.random() * 130 - 150);
    choiceA.style.transform = 'translate(' + randX + 'px, ' + randY + 'px) scale(0.55)';
    var bScale = Math.min(1.8, 1.35 + dodgeCount * 0.12);
    choiceB.style.transform = 'scale(' + bScale + ')';
  });

  choiceB.addEventListener('click', function(){
    gameOver = true;
    choiceA.disabled = true;
    gameBubble.hidden = true;
    gameResult.hidden = false;
    gameResult.textContent = "You lose. No free takoyaki today — catch me another time. 🐙";
    document.getElementById('gameResultGif').hidden = false;
  });

  /* ---------------- surprise reveal ---------------- */
  document.getElementById('surpriseText').textContent = CONFIG.surprise;
  var surpriseBtn = document.getElementById('surpriseBtn');
  var surpriseReveal = document.getElementById('surpriseReveal');

  function burst(originEl){
    if(reduceMotion) return;
    var rect = originEl.getBoundingClientRect();
    var cx = rect.left + rect.width/2;
    var cy = rect.top + rect.height/2;
    var glyphs = ['❤','✨','💕','♡'];
    for(var i=0;i<26;i++){
      var span = document.createElement('span');
      span.className = 'burst-particle';
      span.textContent = glyphs[i % glyphs.length];
      var angle = Math.random()*Math.PI*2;
      var dist = 90 + Math.random()*160;
      span.style.left = cx + 'px';
      span.style.top = cy + 'px';
      span.style.setProperty('--bx', Math.cos(angle)*dist + 'px');
      span.style.setProperty('--by', Math.sin(angle)*dist + 'px');
      span.style.setProperty('--br', (Math.random()*360)+'deg');
      span.style.animation = 'burst-fly ' + (900 + Math.random()*500) + 'ms ease-out forwards';
      document.body.appendChild(span);
      (function(el){ setTimeout(function(){ el.remove(); }, 1500); })(span);
    }
  }

  surpriseBtn.addEventListener('click', function(){
    burst(surpriseBtn);
    surpriseBtn.hidden = true;
    surpriseReveal.hidden = false;
    surpriseReveal.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block:'center' });
  });

  /* ---------------- gift reveal ---------------- */
  var giftBox = document.getElementById('giftBox');
  var giftOverlay = document.getElementById('giftOverlay');
  var giftBg = document.getElementById('giftBg');
  var giftFxBack = document.getElementById('giftFxBack');
  var giftFxFront = document.getElementById('giftFxFront');
  var giftFlowerWrap = document.getElementById('giftFlowerWrap');
  var giftClose = document.getElementById('giftClose');

  var GIFT_CHARS = '0123456789ABCDEFGHIJKL+-*/=<>{}[]'.split('');
  var backCtx = giftFxBack.getContext('2d');
  var frontCtx = giftFxFront.getContext('2d');
  var backParticles = [];
  var frontParticles = [];
  var giftRunning = false;
  var giftRafId = null;
  var giftOpened = false;
  var petalTimers = [];

  function resizeGiftCanvases(){
    giftFxBack.width = window.innerWidth;
    giftFxBack.height = window.innerHeight;
    giftFxFront.width = window.innerWidth;
    giftFxFront.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeGiftCanvases);

  function makeGiftParticle(front){
    var isDot = front && Math.random() < 0.35;
    var goingUp = Math.random() < 0.5;
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: front ? (isDot ? 2 + Math.random()*2.5 : 14 + Math.random()*10) : 9 + Math.random()*8,
      vy: (goingUp ? -1 : 1) * (front ? (0.6 + Math.random()*0.9) : (0.2 + Math.random()*0.4)),
      drift: (Math.random()-0.5) * (front ? 0.5 : 0.2),
      char: isDot ? '' : GIFT_CHARS[Math.floor(Math.random()*GIFT_CHARS.length)],
      isDot: isDot,
      opacity: front ? (0.55 + Math.random()*0.4) : (0.15 + Math.random()*0.3),
      blur: front ? (isDot ? 0 : 0.5) : (2 + Math.random()*2.5),
      hue: ['#39ff88','#7dffa8','#0f8a4d','#eafff2'][Math.floor(Math.random()*4)]
    };
  }
  function makeFlowerRainParticle(){
    var centerX = window.innerWidth / 2;
    var band = Math.min(160, window.innerWidth * 0.22);
    return {
      x: centerX + (Math.random()*2 - 1) * band,
      y: -Math.random() * window.innerHeight * 0.4,
      size: 10 + Math.random()*8,
      vy: 1.2 + Math.random()*1.4,
      drift: (Math.random()-0.5) * 0.15,
      char: Math.random() < 0.5 ? '0' : '1',
      isDot: Math.random() < 0.15,
      opacity: 0.5 + Math.random()*0.4,
      blur: 0,
      hue: ['#39ff88','#7dffa8','#eafff2'][Math.floor(Math.random()*3)],
      isRain: true
    };
  }
  function seedGiftParticles(){
    backParticles = [];
    frontParticles = [];
    for(var i=0;i<40;i++) backParticles.push(makeGiftParticle(false));
    for(var j=0;j<30;j++) frontParticles.push(makeGiftParticle(true));
  }
  function spawnFlowerRain(){
    for(var i=0;i<30;i++) frontParticles.push(makeFlowerRainParticle());
  }

  function drawGiftLayer(ctx, list, w, h){
    ctx.clearRect(0,0,w,h);
    for(var i=0;i<list.length;i++){
      var p = list[i];
      p.y += p.vy;
      p.x += p.drift;
      if(p.isRain){
        if(p.y > h + 30){
          var reset = makeFlowerRainParticle();
          p.x = reset.x; p.y = -20; p.size = reset.size; p.vy = reset.vy; p.hue = reset.hue; p.isDot = reset.isDot; p.char = reset.char;
        }
      } else {
        if(p.y < -40) p.y = h + 30;
        if(p.y > h + 40) p.y = -30;
        if(p.x < -30) p.x = w + 20;
        if(p.x > w + 30) p.x = -20;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.filter = p.blur ? 'blur(' + p.blur + 'px)' : 'none';
      if(p.isDot){
        ctx.shadowColor = p.hue;
        ctx.shadowBlur = 10;
        ctx.fillStyle = p.hue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size/2, 0, Math.PI*2);
        ctx.fill();
      } else {
        ctx.fillStyle = p.hue;
        ctx.font = p.size + 'px monospace';
        ctx.fillText(p.char, p.x, p.y);
      }
      ctx.restore();
    }
  }

  function giftLoop(){
    if(!giftRunning) return;
    var w = giftFxBack.width, h = giftFxBack.height;
    drawGiftLayer(backCtx, backParticles, w, h);
    drawGiftLayer(frontCtx, frontParticles, w, h);
    giftRafId = requestAnimationFrame(giftLoop);
  }
  function startGiftLoop(){
    if(giftRunning) return;
    resizeGiftCanvases();
    seedGiftParticles();
    giftRunning = true;
    giftRafId = requestAnimationFrame(giftLoop);
  }
  function stopGiftLoop(){
    giftRunning = false;
    if(giftRafId) cancelAnimationFrame(giftRafId);
  }

  function resetGiftSequence(){
    petalTimers.forEach(clearTimeout);
    petalTimers = [];
    giftBg.classList.remove('is-dark');
    giftFxBack.classList.remove('is-visible');
    giftFxFront.classList.remove('is-visible');
    giftFlowerWrap.classList.remove('bloom', 'bloomed', 'is-clickable');
    frontParticles = frontParticles.filter(function(p){ return !p.isRain; });
  }

  function playGiftSequence(){
    resetGiftSequence();
    giftOverlay.hidden = false;
    startGiftLoop();
    petalTimers.push(setTimeout(function(){ giftBg.classList.add('is-dark'); }, 50));
    petalTimers.push(setTimeout(function(){
      giftFxBack.classList.add('is-visible');
      giftFxFront.classList.add('is-visible');
    }, 400));
    petalTimers.push(setTimeout(function(){
      giftFlowerWrap.classList.add('bloom');
      spawnFlowerRain();
    }, 900));
    petalTimers.push(setTimeout(function(){
      giftFlowerWrap.classList.add('bloomed', 'is-clickable');
    }, 900 + 7000));
  }

  function closeGiftOverlay(){
    stopGiftLoop();
    giftOverlay.hidden = true;
    resetGiftSequence();
  }

  giftBox.addEventListener('click', function(){
    if(giftOpened) return;
    giftOpened = true;
    giftBox.classList.add('zooming');
    setTimeout(function(){
      playGiftSequence();
      giftBox.hidden = true;
    }, reduceMotion ? 0 : 260);
  });

  giftFlowerWrap.addEventListener('click', function(){
    if(!giftFlowerWrap.classList.contains('is-clickable')) return;
    playGiftSequence();
  });

  giftClose.addEventListener('click', closeGiftOverlay);

})();
