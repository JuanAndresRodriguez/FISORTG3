
const Category = require('../category');

let categoryData = {
    'name' : 'luz',
    'type' : 'egreso',
    'color' : 'rojo',
    'cantElem' : 1
};
let ute = new Category(categoryData);

test("obtener nombre de categoría", () => {
    expect(ute.name).toBe("luz");
});

test("obtener tipó del categoría", () => {
    expect(ute.type).toBe("egreso");
});

test("obtener color de categoría", () => {
    expect(ute.color).toBe("rojo");
});

test("obtener cantidad elementos de categoría", () => {
    expect(ute.cantElem).toBe(1);
});


test("setear nombre de categoría", () => {
    ute.sumarCantidad();
    expect(ute.cantElem).toBe(2);
});
