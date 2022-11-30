# Principios de SOLID y Clean Code

En esta sección hablaremos principalmente sobre clases y conceptos generales para escribir un mejor código.

Es importante tener presente que así como todo, hay excepciones a cada regla, pero esto debería ser un caso aislado y no el estándar. Tratemos de escribir un mejor código y dejar de lado la comodidad de hacer las cosas como se han venido haciendo, especialmente si esas cosas traen muchos problemas.

## Orden 
 - Comenzar con la propiedades de las propiedades
    - publicas van primero
    - privadas van despues de las publicas
 - Despues van los metodos
    - Empezando por los constructores estaticos
    - Luego el constructor
    - Seguidamente metodos estaticos
    - Metodos privados despues
    - Resto de metodos de instancia ordenados de mayor a menor importancia
        - Es en relacion a lo que se acuerde en el equipo
    - Getters y Setters al final