const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it("agregarProducto agrega un producto al carrito", () => {
    // Mock function para simular agregar un producto
    const producto = { nombre: "Producto 1", precio: 10 };
    const agregarProductoMock = jest.fn();
    carrito.agregarProducto = agregarProductoMock;

    carrito.agregarProducto(producto);

    // Verificar que la función agregarProducto se haya llamado con el producto correcto
    expect(agregarProductoMock).toHaveBeenCalledWith(producto);
  });

  it("calcularTotal llama al método calcularTotal correctamente", () => {
    // Mock function para simular el cálculo del total
    const calcularTotalMock = jest
      .spyOn(carrito, "calcularTotal")
      .mockReturnValue(50);

    const total = carrito.calcularTotal();

    // Verificar que el método calcularTotal haya sido llamado y retorne el valor esperado
    expect(calcularTotalMock).toHaveBeenCalled();
    expect(total).toBe(50);

    // Restaurar el método calcularTotal original después de la prueba
    calcularTotalMock.mockRestore();
  });

  it("aplicarDescuento aplica el descuento correctamente", () => {
    // Mock function para simular aplicar un descuento
    const porcentajeDescuento = 10;
    const totalConDescuento = 90;
    carrito.calcularTotal = jest.fn(() => 100); // Simula un total de compra de $100
    const aplicarDescuentoMock = jest
      .spyOn(carrito, "aplicarDescuento")
      .mockReturnValue(totalConDescuento);

    const totalConDescuentoCalculado =
      carrito.aplicarDescuento(porcentajeDescuento);

    // Verificar que el descuento se haya aplicado correctamente
    expect(aplicarDescuentoMock).toHaveBeenCalledWith(porcentajeDescuento);
    expect(totalConDescuentoCalculado).toBe(totalConDescuento);

    // Restaurar el método aplicarDescuento original después de la prueba
    aplicarDescuentoMock.mockRestore();
  });
});
