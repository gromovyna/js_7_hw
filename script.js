sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
   ];
   fruits = [];

   summer_sports = sports.slice(5,11); 

   winter_sports = sports.slice(0,5);  

   fruits.push(summer_sports.splice(2,2));

   fruits.push(winter_sports.splice(2,1));
   
   console.log(summer_sports);
   console.log(winter_sports);
   console.log(fruits);

  


