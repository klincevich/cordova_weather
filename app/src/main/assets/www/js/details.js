var param;

function getParameter() {
        var pos = document.URL.indexOf('?');
        param=document.URL.substring(pos+1);
}

function showId(){
    getParameter();
    document.getElementById('number').innerHTML = "Идентификатор в базе: " + param;
}

function deleteRecord(){
    var db = window.openDatabase("weather", "1.0", "Weather", 1000000);
    db.transaction(queryDBdelete, queryDeleteError);
}

function queryDBdelete(tx) {
    tx.executeSql('DELETE FROM WEATHER WHERE ID=' + param, [], queryDeleteSuccess, queryDeleteError);
}

function queryDeleteError(err) {
    alert("Query delete error: "+err.code);
}

function queryDeleteSuccess() {
    if (!alert('The record was deleted from DB!'))
    {
        window.history.back();
    }
}