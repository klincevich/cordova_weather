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
    $('#WeatherList').empty();
     var len = results.rows.length;
            console.log("WEATHER table: " + len + " rows found.");
            for (var i=0; i<len; i++){
                console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).temp+
                "  " + results.rows.item(i).humidity + "  " + results.rows.item(i).pressure + "  " + results.rows.item(i).windspeed +
                "  " + results.rows.item(i).cloudsall + "  " + results.rows.item(i).cityname + "  " + results.rows.item(i).icon);
                $('#WeatherList').append('<li><div>' +
                'Температура: ' + results.rows.item(i).temp + '<br>' +
                'Влажность: ' + results.rows.item(i).humidity + '<br>' +
                'Давление : ' + results.rows.item(i).pressure + '<br>' +
                'Скорость ветра: ' + results.rows.item(i).windspeed + '<br>' +
                'Хмарность: ' + results.rows.item(i).cloudsall + '<br>' +
                'Город: ' + results.rows.item(i).cityname +
                '<div></li>');
        }
        }