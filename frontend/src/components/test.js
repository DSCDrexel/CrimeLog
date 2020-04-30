function p1(){
  //array
  c = [];

  word_count_list = {"galaxy": 0, "star": 0, "planet": 0, "nebula": 0, "cluster": 0, "cosmic": 0};

  s = "galaxy,star,planet,nebula,cluster,cosmic";
  s_list = s.split(',');

  // Loop through all titles


  os="<table border='1' cellspacing='0'>"; 
  os=os+"<tr bgcolor='#cccccc'><td align='center'><b>ID</td><td align='center'><b>Title</td><td align='center'><b>2019<br>&nbsp; width x height&nbsp;</td><td align='center'><b>2010<br>&nbsp;src&nbsp;</td>"


  for (i=0;i<root.childNodes.length;i++) // 
       {
         id    =root.childNodes[i].childNodes[0].childNodes[0].nodeValue; // id
         title=root.childNodes[i].childNodes[1].childNodes[0].nodeValue; // title
         width      =root.childNodes[i].childNodes[2].childNodes[0].nodeValue; // width
         height      =root.childNodes[i].childNodes[3].childNodes[0].nodeValue; // height         
         src  =root.childNodes[i].childNodes[4].childNodes[0].nodeValue; // src 

         os=os+"<tr><td align='right'>"+id+" </td>";
         os=os+"<td> "+ title+"</td>";
         os=os+"<td align='right'>"+ width + "x" + height + " </td>";         
         os=os+"<td align='right'>"+ src+" </td></tr>";    


         each_word_in_title = title.split('');

        // Check if each word in the title appear in our list

        for(k=0; k < each_word_in_title.length; k++){
            word = each_word_in_title[k].toLowerCase();

            // If it does, we update our word count map

            if(s_list.includes(word)){
              word_count_list[word] = word_count_list[word] + 1;
            }
        }     
         
       }

    for(var word in word_count_list){
    item = {};
    item.word = word;
    item.count = word_count_list[word];
    c.push(item)
  } 

  // Print c to view the word count array 
  // or document.write(JSON.stringify(c));
  

}