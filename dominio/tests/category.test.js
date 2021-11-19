
const Category = require('../category');

let ute = new Category("luz", "egreso", "rojo", 1);

test("obtener nombre de categoría", () => {
    expect(ute.getCategoryName()).toBe("luz");
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


test("setear nombre de categoría", () => {
    ute.sumarCantidad();
    expect(ute.getCategoryCantElem()).toBe(2);
});
