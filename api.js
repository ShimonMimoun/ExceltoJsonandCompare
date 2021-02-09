$.get('lead.json', (res) => {
    lead = JSON.parse(JSON.stringify(res));
})
$.get('client.json', (ress) => {
    client = JSON.parse(JSON.stringify(ress));
})


function save(){
    var str="["

    client.forEach(myclient => {
        lead.forEach(mylead => {
          if(mylead["Adresse e-mail"]==myclient["Client: E-mail"]) {
            str=str+JSON.stringify(mylead)+",\n";          } 

        });
    });
    str=str+"]"
    download(str,'combine_withdate.json','application/json');
}

