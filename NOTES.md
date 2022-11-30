# Principios de SOLID y Clean Code

## Temas puntuales de la sección
Esta es una sección corta y mayormente explicativa, en donde hablaremos sobre varios "code smells".

La idea es evitar a toda costa estos puntos que hacen que nuestro código pierda calidad.

## Acronimo STUPID

Singleton: Patron singleton
    Garantiza una unica instancia de la clase a los largo de toda la aplicacion.
Tight Coupling: alto acoplamiento
    Es cuando existe una dependencia transitiva que afecta clases o funciones que no tienen una dependencia real con relacion al cambio
Untestability: codigo no probable (unit test)
 - Codigo con alto acoplamiento
 - Codigo con muchas dependencias no inyectadas
 - Dependencias en el contexto global (Tipo Singleton)
Premature optimization: optimizaciones prematuras
    Mantener abiertas las opciones retrasando la toma de decisiones nos permite darle mayor relevancia a lo que es mas importante en una aplicacion.

    No debemos anticiparnos a los requisitos y desarrollar abstracciones innecesarias que puedan agregar complejidad accidental.
Insdecriptive Naming: nombre poco descriptivos
 - Real
    - Nombres de variables mal nombradas
    - Nombres de clases genericas
    - Nombres de funciones mal nombradas
    - Ser muy especifico
    - Ser demasiado generico
    Duplication: duplicidad de codigo, no aplicar el principio DRY
    - Codigo es identico y cumple la misma funcion
    - Un cambio implicaria actualizar todo el codigo identico en varios lugares
    - Incrementa posibilidades de error humano al olvidar una parte para actualizar
    - Mayor cantidad de pruebas innecesarias
 - Accidental
    - Codigo luce similar pero cumple funciones distintas
    - Cuando hay un cambio, solo hay que modificar un solo lugar
    - Este tipo de duplicidad se puede trabajar con parametros u optimizaciones.