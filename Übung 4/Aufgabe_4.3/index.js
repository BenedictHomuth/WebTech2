$(document).ready(function(){
    getHeadline();
});

function getHeadline(){
    $.ajax({
        url: "/webtech2/getHeadersDB.php", // /hostname/goFromHere
        type: 'GET',
        success: function(response){
            var headlines = response;
            getTableData(headlines);
        }
    })
};

function getTableData(headlines){
    $.ajax({
        url: "/webtech2/db.php", // /hostname/goFromHere
        type: 'GET',
        success: function(response){
          var tableData = response;
          createTable(headlines, response);
        }
    })
}

function createTable(headlines, tableData){
    
    var entryNames = Object.keys(tableData[0]); //Gets the name of column
    var lengthOfArgsInReturnedObject =  Object.keys(tableData[0]).length; //In one db row get size of columns


    var table = document.createElement("table");
    
    table.setAttribute("id", "myTable");
    table.setAttribute("style","border: 1px solid black;")
    
    var row = table.insertRow(0);
    table.append(row);
    
    for(var i = 0; i < headlines.length; i++){
        var cell = document.createElement("th");
        cell.innerHTML = headlines[i].Column_name;
        row.append(cell);
    }

    for(var i = 0; i < tableData.length; i++){
        var row = document.createElement("tr");
        for(var x = 0; x < lengthOfArgsInReturnedObject; x++){
        var cell = document.createElement("td");
        var correspondingName = entryNames[x];
        cell.innerHTML = tableData[i][correspondingName];
        row.append(cell);
        }
        table.append(row);
    }

    var div = document.getElementById("tableDB");
    div.append(table);

    
}

function createEntry(){
    
    var tfName = document.getElementById("name").value;
    var tfJahr = document.getElementById("jahr").value;
    
    if(tfName.length==0 || tfJahr.length==0){
        console.log("Seems you did not enter enough information!");
        alert("Seems you did not enter enough information!");
        return;
    }
    else if(isNaN(tfJahr) || tfJahr.toString().length != 4){
        console.log("Please enter a valid number!");
        alert("Please enter a valid number!\nYear format: YYYY");
        return;
    }

    var json = {
        "name": tfName,
        "jahr": tfJahr
    }

    $.ajax({
        url: "/webtech2/writeDataToDB.php", // /hostname/goFromHere
        dataType: "json",
        type: 'PUT',
        data: json,
        success: function(response){
          console.log(response);

          //clear all inputs
          document.getElementById("name").value = "";
          document.getElementById("jahr").value = "";

          //Reload table
          const tableParentNode = document.getElementById("tableDB");
          tableParentNode.innerHTML = "";
          getHeadline();
        }
    })
    
}