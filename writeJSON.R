library(jsonlite)

init <- read.csv('ingredients.csv', stringsAsFactors = F)

menu <- split(init[,-5],init$Family)

menu <- lapply(menu, function(x) x[order(x$Name),] )

menu <- lapply(menu, function(x) split(x[,-1], x$Name))

# Going to have to comment this is the menu categories change. This just re-orders them into the order I'd like.
menu <- menu[c("Punch","Negroni","Manhattans","Classics")]

cat( toJSON(menu), file="js/menu_items.json")
