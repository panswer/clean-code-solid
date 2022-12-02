# Principios de SOLID y Clean Code

## Temas puntuales de la sección
En esta sección hablaremos al fin sobre los principios S.O.L.I.D.

Cada principio básicamente cuenta de 3 partes, una exposición, un ejercicio y cómo detectar violaciones al principio, algunos son bastante obvios y otros tienen un poco más de complejidad, pero no dejen que los nombres los asusten, son fáciles de comprender con la práctica.

## Principios SOLID
Los principios SOLID nos indican como organizar nuestras funciones y estructuras de datos en componentes y como dichos componentes deben estar interconectados.

### Acronimo de SOLID
Single Responsability: Responsabilidad unica.
    Nunca deberia haber mas de un motivo por el cual cambiar una clase o un modulo
Open and Close: Abierto y Cerrado.
    Esteablece que las entidades de software (clases, modulos, metodos, etc.) deben de estar abiertas para la extension, pero cerradas para la modificacion.
Liskov Substitution: Sustitucion de Liskov.
    Por contribucion a los fundamentos practicos y teoricos del lenguaje de programacion y el dise;o de sistemas, especialmente relacionados con la abstraccion de datos, la tolerancia a fallas y la computacion distribuida.

    Siendo U un subtipo de T, cualquier instancia de T deberia por ser sustituida por cualquier instancia de U sin alterar las propiedades del sistema.
Interface segregation: Segregacion de interfaz.
    Este principio establece que los clientes no deberian verse forzados a depender de interfaces que no usan.
Dependency inversion: Inversion de dependencias.
 - Los modulos de alto nivel no deberian depender de modulos de bajo nivel
 - Ambos deberian depender de abstracciones
 - Las abstracciones no deberian depender de detalles
 - Los detalles deberian depender de abstacciones