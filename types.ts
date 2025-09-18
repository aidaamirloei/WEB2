interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface  Drink {
id : number;
title: String;
image : String;
volume : number;
price : number;

}
interface Film{
  id : number;
  title : String;
  director :String;
  duration : number ;
  budget ?: number;
  description ?: String;
  imageUrl ?: String;
}

type NewPizza = Omit<Pizza, "id">;

export type { Pizza, NewPizza, PizzaToUpdate ,Drink,Film};


