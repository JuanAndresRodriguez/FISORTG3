# Documentación package.json

## Dominio
Nombre: Dominio
Versión: 1.0.0
Descripción: Mis Gastos dominio.

### Scripts
Para test se utiliza jest con el parámetro coverage, para tener indicador de la cobertura de los tests realizados. Se cubre un 100%

testWindows Se utiliza para poder testar en sistemas operativos Windows con Jest.

### Dependencias 

Jest 26.6.3

## Interfaz
Nombre: Interfaz
Versión: 1.0.0
Descripción: Mis Gastos interfaz
Privada

### Scripts
Se utiliza webpack como built-in script.
start levanta webpack.
watch recompila archivos de webpack cuando cambian.
build toma la variable de enviroment de Node.js.
build dev corre webpack.
clean borra la capreta dist.

### Dependencias
Babel 7.16.0 Es utilizado para que el códio ECMAScript sea compatible con motores anteriore de JS.

Con Babel preset-env 7.16.0 no hay necesidad de indicar a que versión de JS convertir el código.

Babel loader 8.2.3 permite gestionar a medida Babel para cada archivo que procesa. Viene con webpack.

Clean webpack plugin 4.0.0 remueve o limpia output.path de todos los activos de webpack no usados después de un build exitoso.

css-loader 6.5.1 habilita o deshabilita el manejo de funciones de CSS desde webpack.

html-webpack-plugin 5.5.0 simplifica la creación de archivos html para webpack.

mini-css-extract-plugin 2.4.3 Este plugin extrae CSS en archivos separados. Crea un archivo CSS por archivo JS que contiene CSS. Es compatible con la carga bajo demanda de CSS y SourceMaps. Funciona a partir de webpack 5.

sass 1.43.4 Este paquete es una distribución de Dart Sass, compilado en JavaScript puro sin código nativo ni dependencias externas. Proporciona un ejecutable sass de línea de comandos y una API de Node.js.

sass-loader 12.3.0 Permite controlar las versiones de todas las dependencias y elegir qué implementación de Sass usar.
Con sass-loader junto a css-loader y style-loader se aplican inmediatamente todos los estilos al DOM o el mini-css-extract-plugin para extraerlos en archivos separados.

webpack 5.36.0 Webpack es un paquete de módulos. Su propósito principal es agrupar archivos JavaScript para su uso en un navegador, pero también es capaz de transformar, agrupar o empaquetar casi cualquier recurso o activo.

webpack-cli 4.6.0 cliente de línea de comandos para webpack.

webpack-dev-server 3.11.2 webpack-dev-server está configurado de forma predeterminada para permitir el refresh en vivo de archivos a medida que se editan los activos mientras el servidor está levantado.

## Licencia 
ISC