/**
 * Created by olga.yudytskaya on 07.08.14.
 */
function dbConnect(){
    var db = window.openDatabase("weather", "1.0", "Weather", 1000000);
    db.transaction(queryDB, queryError);
}

function queryDB(tx) {
    console.log("queryDB(tx)");
    tx.executeSql('SELECT * FROM WEATHER', [], querySuccess, queryError);
}

function queryError(err) {
    console.log("queryError");
    alert("There is no entity about weather: "+err.code);
}

function querySuccess(tx,results){
var path = "weather-icons/";
    $('#WeatherList').empty();
     var len = results.rows.length;
            console.log("WEATHER table: " + len + " rows found.");
            for (var i=0; i<len; i++){
                console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).temp+
                "  " + results.rows.item(i).humidity + "  " + results.rows.item(i).pressure + "  " + results.rows.item(i).windspeed +
                "  " + results.rows.item(i).cloudsall + "  " + results.rows.item(i).cityname + "  " + results.rows.item(i).icon);
                var icon = results.rows.item(i).icon;
                var icon_id = icon;

                	switch(icon_id){
                		case("11d"):
                		icon = "storm";
                		break;
                		case("09d"):
                		icon = "heavy"
                		break;
                		case("10d"):
                		icon = "heavy"
                		break;
                		case("13d"):
                		icon = "snow"
                		break;
                		case("50d"):
                		icon = "fog"
                		break;
                		case("01d"):
                		icon = "sunny"
                		break;
                		case("03d"):
                		icon = "overcast"
                		break;
                		case("04d"):
                		icon = "overcast"
                		break;
                		//for night weather
                		case("11n"):
                		icon = "storm";
                		break;
                		case("09n"):
                		icon = "heavy"
                		break;
                		case("10n"):
                		icon = "heavy"
                		break;
                		case("13n"):
                		icon = "snow"
                		break;
                		case("50n"):
                		icon = "fog"
                		break;
                		case("01n"):
                		icon = "sunny"
                		break;
                		case("03n"):
                		icon = "overcast"
                		break;
                		case("04n"):
                		icon = "overcast"
                		break;
                	}

                $('#WeatherList').append('<li><br><div style=\'border:1px solid black\'><img src=\''+ path+icon+ '.png\' style=\'float:left;padding-right:20px\' width=\'110\' height=\'110\'/></div><div>' +
                'Температура: ' + results.rows.item(i).temp + '<br>' +
                'Влажность: ' + results.rows.item(i).humidity + '<br>' +
                'Давление : ' + results.rows.item(i).pressure + '<br>' +
                'Скорость ветра: ' + results.rows.item(i).windspeed + '<br>' +
                'Хмарность: ' + results.rows.item(i).cloudsall + '<br>' +
                'Город: ' + results.rows.item(i).cityname +
                '</div><br></li>');
        }
}

function initActionBar() {
    var ActionBar = window.plugins.actionbar;
    // Show Logo / Title
    ActionBar.setDisplayOptions(ActionBar.DISPLAY_SHOW_HOME | ActionBar.DISPLAY_USE_LOGO);
    ActionBar.setHomeButtonEnabled(true);

    ActionBar.setNavigationMode(ActionBar.NAVIGATION_MODE_STANDARD);
   	ActionBar.setHomeCallback(function() { window.open('index.html'); });

    // Set menu items
    ActionBar.setMenu([
  	]);
}

