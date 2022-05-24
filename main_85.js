menu_list_array = [ "Pizza Margherita.",
    "Quick Tomato Pizzas.",
   "Four Cheese Pizza.",
"Cheesy Vegetable Pizza.",
"Tandoori Paneer Pizza.",
    "Thin Crust Hawaiian Pizza.",
"Uttapam Pizza.",
  "Chocolate Pizza."          
                                          ]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_name").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    var item2 = item.toLowerCase();
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item2);
}

