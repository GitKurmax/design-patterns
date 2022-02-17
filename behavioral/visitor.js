class Auto {
    accept(visitor) {
        return visitor(this);
    }
}

class Tesla extends Auto {
    info() {
        return 'It is a Tesla car!';
    }
}

class Bmw extends Auto {
    info() {
        return 'It is a BMW car!';
    }
}

class Audi extends Auto {
    info() {
        return 'It is an Audi car!';
    }
}

function exportVisitor(auto) {
    if (auto instanceof Tesla)
        auto.export = `Exported data: ${auto.info()}`
    if (auto instanceof Bmw)
        auto.export = `Exported data: ${auto.info()}`
    if (auto instanceof Audi)
        auto.export = `Exported data: ${auto.info()}`

    return auto.export
};

const tesla = new Tesla()
const bmw = new Bmw()

console.log(tesla.accept(exportVisitor))
console.log(bmw.accept(exportVisitor))