const chemData = require('./data/periodic.json');

// find is similar to filter, but return first item only
const element = (elementName) => chemData.find(x => x.symbol === elementName);

const molCurry = element => (molCount) => {
    console.log(molCount);
    let mol = element;
    mol.atomicWeight = element.atomicWeight * molCount;
    if (molCount > 1) {
        mol.symbol = `${mol.symbol}${molCount}`;
    }
    return mol;
};

const H = element('H');
const O = element('O');


const hAtom = molCurry(H);

const oAtom = molCurry(O);
const H1 = hAtom(1);

const H2 = hAtom(2);

console.log(`${H1.symbol} ${H1.atomicWeight}`)  // WHOA H2 2.01588
console.log(`${H1.symbol} ${H1.atomicWeight}`)   // WHOA H2 2.01588

