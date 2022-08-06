import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

/**
 * Sorting Array of Numbers
 */
const numbersCollection = new NumbersCollection([1, 2, 0, 5, 4, 3]);
numbersCollection.sort();

console.log(numbersCollection.data);

/**
 * Sorting String of Characters
 */
const charactersCollection = new CharactersCollection("acbZx");
charactersCollection.sort();

console.log(charactersCollection.data);

/**
 * Sorting Linked  List
 */
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

linkedList.print();
