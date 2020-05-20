/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of all town's parks (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

Green Park has a tree density of 1075 trees per square km.
National Park has a tree density of 1221.0344827586207 trees per square km.
Oak Park has a tree density of 2372.5 trees per square km.
Our 3 parks have an average of 75.33333333333333 years.
National Park has more than 1000 trees.
-----STREETS REPORT-----
Our 4 streets have a total length of 7.1000000000000005 km, with an average of 1.7750000000000001 km.
Ocean Avenue, build in 1999, is a big street.
Evergreen Street, build in 2008, is a small street.
4th Street, build in 2015, is a normal street.
Sunset Boulevard, build in 1982, is a huge street.
*/


class Element {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

}

class Park extends Element {
    constructor (name, buildYear, area, numberOfTrees) {
        super(name, buildYear);
        this.area = area;
        this.numberOfTrees = numberOfTrees;
    }
    
        treeDensity() {
             const density = this.numberOfTrees / this.area;

             console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}



class Street extends Element {
    constructor (name, buildyear, length, size = 3) {
        super(name, buildyear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks =  [new Park('Green Park', 1987, 0.2, 215),
                new Park('National Park', 1894, 2.9, 3541),
                new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr){
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    return [sum, sum / arr.length];
}

function reportParks(p){
    console.log('-----PARKS REPORT-----');

    p.forEach(element => element.treeDensity());

    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [sumofAges, avgAge] = calc(ages);
    
    //Our 3 parks have an average of 75.33333333333333 years.
    console.log(`Our ${p.length} parks have an average age of ${avgAge} years.`);
    
    //National Park has more than 1000 trees.
    const i = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000); // [215, 3541, 949]
    console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s){
    console.log('-----STREETS REPORT-----');

    s.forEach(element => element.classifyStreet());

    //Our 4 streets have a total length of 7.1000000000000005 km, with an average of 1.7750000000000001 km.
    const lengths = s.map(el => el.length);
    const [sumOfLengths, avgLength] = calc(lengths);
    console.log(`Our ${s.length} streets have a total length of ${sumOfLengths} km, with an average length of ${avgLength} km.`);
    
}

reportParks(allParks);
reportStreets(allStreets);
                

