$(function() {
	
	var height = $(window).height();
	var width = $(window).height();

	$('#main-content').css('height', height);

	var artists = [
		['https://soundcloud.com/zzward','ZZ Ward'],
		['https://soundcloud.com/zedd','Zedd'],
		['https://soundcloud.com/youngandsick','Young and Sick'],
		['https://soundcloud.com/wyeoak','Wye Oak'],
		['https://soundcloud.com/woodkid','Woodkid'],
		['https://soundcloud.com/whoismgmt','MGMT'],
		['https://soundcloud.com/whitelies','White Lies'],
		['https://soundcloud.com/wearegta','GTA'],
		['https://soundcloud.com/wearegalantis','Galantis'],
		['https://soundcloud.com/wearedumdumgirls','Dum Dum Girls'],
		['https://soundcloud.com/waxahatchee','Waxahatchee'],
		['https://soundcloud.com/washedoutofficial','Washed Out'],
		['https://soundcloud.com/warpaintwarpaint','Warpaint'],
		['https://soundcloud.com/tomodell','Tom Odell'],
		['https://soundcloud.com/tnafofficial','The Naked and Famous'],
		['https://soundcloud.com/tjr','TJR'],
		['https://soundcloud.com/tiga','Tiga'],
		['https://soundcloud.com/thereplacements','The Replacements'],
		['https://soundcloud.com/thepreatures','The Preatures'],
		['https://soundcloud.com/themagician','The Magician'],
		['https://soundcloud.com/theheadandtheheart','The Head and the Heart'],
		['https://soundcloud.com/theglitchmob','The Glitch Mob'],
		['https://soundcloud.com/theafghanwhigs','The Afghan Whigs'],
		['https://soundcloud.com/the1975','The 1975'],
		['https://soundcloud.com/the-dismemberment-plan','The Dismemberment Plan'],
		['https://soundcloud.com/templesofficial','Temples'],
		['https://soundcloud.com/sydarthur','Syd Arthur'],
		['https://soundcloud.com/surferblood','Surfer Blood'],
		['https://soundcloud.com/starfucker_usa','STRFKR'],
		['https://soundcloud.com/solomun','Solomun'],
		['https://soundcloud.com/solangeknowles','Solange'],
		['https://soundcloud.com/sleighbells','Sleigh Bells'],
		['https://soundcloud.com/skrillex','Skrillex'],
		['https://soundcloud.com/showtekmusic','Showtek'],
		['https://soundcloud.com/shlohmo','Shlohmo'],
		['https://soundcloud.com/rudimentaluk','Rudimental'],
		['https://soundcloud.com/rlgrime','RL Grime'],
		['https://soundcloud.com/qotsa','Queens of the Stone Age'],
		['https://soundcloud.com/preservationhalljazzband','Preservation Hall Jazz Band'],
		['https://soundcloud.com/poolside','Poolside'],
		['https://soundcloud.com/petshopboysofficial','Pet Shop Boys'],
		['https://soundcloud.com/ohdaughter','Daughter'],
		['https://soundcloud.com/nina-kraviz','Nina Kraviz'],
		['https://soundcloud.com/nicolemoudaber','Nicole Moudaber'],
		['https://soundcloud.com/netsky','Netsky'],
		['https://soundcloud.com/muse','Muse'],
		['https://soundcloud.com/msmrsounds','MS MR'],
		['https://soundcloud.com/michaelbrun','Michael Brun'],
		['https://soundcloud.com/martingarrix','Martin Garrix'],
		['https://soundcloud.com/maceoplex','Maceo Plex'],
		['https://soundcloud.com/lordemusic','Lorde'],
		['https://soundcloud.com/littledragon','Little Dragon'],
		['https://soundcloud.com/leeburridge','Lee Burridge'],
		['https://soundcloud.com/laurent-garnier','Laurent Garnier'],
		['https://soundcloud.com/lauramvula','Laura Mvula'],
		['https://soundcloud.com/lana-del-rey','Lana Del Rey'],
		['https://soundcloud.com/krewella','Krewella'],
		['https://soundcloud.com/katenash','Kate Nash'],
		['https://soundcloud.com/jvmcmorrow','James Vincent McMorrow'],
		['https://soundcloud.com/johnnewmanmusic','John Newman'],
		['https://soundcloud.com/johnbeaver','John Beaver'],
		['https://soundcloud.com/jagwar-ma','Jagwar Ma'],
		['https://soundcloud.com/internet-band','The Internet'],
		['https://soundcloud.com/hotsince-82','Hot Since 82'],
		['https://soundcloud.com/holyghostnyc','Holy Ghost!'],
		['https://soundcloud.com/haimtime','HAIM'],
		['https://soundcloud.com/guygerber','Guy Gerber'],
		['https://soundcloud.com/garethemery','Gareth Emery'],
		['https://soundcloud.com/foxygen','Foxygen'],
		['https://soundcloud.com/fosterthepeoplemusic','Foster the People'],
		['https://soundcloud.com/flume','Flume'],
		['https://soundcloud.com/flosstradamus','Flosstradamus'],
		['https://soundcloud.com/flightfacilities','Flight Facilities'],
		['https://soundcloud.com/flatbushzombies','Flatbush Zombies'],
		['https://soundcloud.com/fishbone_music','Fishbone'],
		['https://soundcloud.com/feelmybicep','Bicep'],
		['https://soundcloud.com/fatboyslim','Fatboy Slim'],
		['https://soundcloud.com/factory-floor','Factory Floor'],
		['https://soundcloud.com/empireofthesunsound','Empire of the Sun'],
		['https://soundcloud.com/elliegoulding','Ellie Goulding'],
		['https://soundcloud.com/dukedumont','Duke Dumont'],
		['https://soundcloud.com/ducksaucenyc','Duck Sauce'],
		['https://soundcloud.com/djmakj','Makj'],
		['https://soundcloud.com/djheadhunterz','Headhunterz'],
		['https://soundcloud.com/djfalconofficial','DJ Falcon'],
		['https://soundcloud.com/djcarnageofficial','Carnage'],
		['https://soundcloud.com/dixon','Dixon'],
		['https://soundcloud.com/disclosuremusic','Disclosure'],
		['https://soundcloud.com/dillonfrancis','Dillon Francis'],
		['https://soundcloud.com/deorro','Deorro'],
		['https://soundcloud.com/davide-squillace','Davide Squillace'],
		['https://soundcloud.com/damianlazarus','Damian Lazarus'],
		['https://soundcloud.com/daftside-2','DARKSIDE'],
		['https://soundcloud.com/crosses','†††'],
		['https://soundcloud.com/craiggis','Courtney Barnett'],
		['https://soundcloud.com/classixx','Classixx'],
		['https://soundcloud.com/cityandcolour','City and Colour'],
		['https://soundcloud.com/chvrches','Chvrches'],
		['https://soundcloud.com/chromeo','Chromeo'],
		['https://soundcloud.com/carbonairways','Carbon Airways'],
		['https://soundcloud.com/caravan-palace-official','Caravan Palace'],
		['https://soundcloud.com/capital-cities','Capital Cities'],
		['https://soundcloud.com/calvinharris','Calvin Harris'],
		['https://soundcloud.com/cajmere-2','Cajmere'],
		['https://soundcloud.com/cagetheelephant','Cage the Elephant'],
		['https://soundcloud.com/bryanferry','Bryan Ferry'],
		['https://soundcloud.com/brokenbellsmusic','Broken Bells'],
		['https://soundcloud.com/bonobo','Bonobo'],
		['https://soundcloud.com/bombay-bicycle-club','Bombay Bicycle Club'],
		['https://soundcloud.com/bloodorange','Blood Orange'],
		['https://soundcloud.com/biggigantic','Big Gigantic'],
		['https://soundcloud.com/bearhandsband','Bear Hands'],
		['https://soundcloud.com/beadyeye','Beady Eye'],
		['https://soundcloud.com/bastilleuk','Bastille'],
		['https://soundcloud.com/banksbanksbanks','Banks'],
		['https://soundcloud.com/ball-trap-music','UZ'],
		['https://soundcloud.com/austra_midi','Austra'],
		['https://soundcloud.com/asapferg','A$AP Ferg'],
		['https://soundcloud.com/artdepartment','Art Department'],
		['https://soundcloud.com/arcadefirevk','Arcade Fire'],
		['https://soundcloud.com/antiflag','Anti Flag'],
		['https://soundcloud.com/anthonygreen','Anthony Green'],
		['https://soundcloud.com/anna-lunoe','Anna Lunoe'],
		['https://soundcloud.com/alunageorge','AlunaGeorge'],
		['https://soundcloud.com/alesso','Alesso'],
		['https://soundcloud.com/afi-official','AFI'],
		['https://soundcloud.com/aeroplane','Aeroplane'],
		['https://soundcloud.com/adventureclub','Adventure Club'],
		];

	function tumble(artists) {
		var random = Math.round(Math.random() * artists.length);
		var artist_url = artists[random];
		artist_url = artist_url[0];
		return artist_url;
	}
	


	SC.initialize({
	    client_id: "80e8a2cf483fbdab96c26f33391c45a2",

 	});
	
	$("#loadTracks").on("click", function(){
    	// SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
     //  		var track = tracks[0];
     //  		SC.oEmbed(track.permalink_url, document.getElementById("track"));

    	// });
		var artist_string = tumble(artists);
		console.log(artist_string);

		SC.get('/resolve', { url: artist_string, }, function(tracks) {
	  		console.log(tracks);
	  		var artist = tracks.uri;
	  		console.log(artist);
	  		SC.oEmbed(artist, {auto_play: true, maxheight:166}, document.getElementById("track"));
			$('#artist-info').html(tracks.username);
			$('#nextTrack').show();
		});
    	$('#loadTracks').hide();

    	$('#site-name').show();
    	
  	});

  	$("#nextTrack").on("click", function(){
  		console.log("test");
    	// SC.get("/groups/55517/tracks", {limit: 1}, function(tracks){
     //  		var track = tracks[0];
     //  		SC.oEmbed(track.permalink_url, document.getElementById("track"));

    	// });
		var artist_string = tumble(artists);
		console.log(artist_string);

		

		SC.get('/resolve', { url: artist_string, }, function(tracks) {
	  		console.log(tracks);
	  		var artist = tracks.uri;
	  		console.log(artist);
	  		SC.oEmbed(artist, {auto_play: true, maxheight:166 }, document.getElementById("track"));
	  		$('#artist-info').html(tracks.username);
		});
	});
	});