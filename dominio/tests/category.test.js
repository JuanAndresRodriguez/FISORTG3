
const Category = require('../category');

let ute = new Category("luz", "egreso",  "mensual", "rojo", 1);

test("obtener nombre de categoría", () => {
    expect(ute.getCategoryName()).toBe("luz");
});

test("obtener frecuencia dela categoría", () => {
    expect(ute.getCategoryFreq()).toBe("mensual");
});

test("obtener tipó del categoría", () => {
    expect(ute.getCategoryType()).toBe("egreso");
});

test("obtener color de categoría", () => {
    expect(ute.getCategoryColor()).toBe("rojo");
});

test("obtener cantidad elementos de categoría", () => {
    expect(ute.getCategoryCantElem()).toBe(1);
});