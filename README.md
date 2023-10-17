### Rick and Morty Challenge

Para correr solo necesita el comando `npm i` y luego `npm start`.

Si desea correr los test solo basta con `npm run test`.

### Usa la API de Rick and Morty para probar tus habilidades 🥼

Tienes que consultar todos los `character`, `locations` y `episodes` de https://rickandmortyapi.com/ e indicar:

1. Char counter:
    - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
    - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
    - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)

2. Episode locations:
    - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos los `character` que aparecieron en ese `episode` (sin repetir)
    - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)

    - Output en formato `json` con esta estructura
    
    ```json
    [
        {
            "exercise_name": "Char counter",
            "time": "2s 545.573272ms",
            "in_time": true,
            "results": [
                {
                    "char": "l",
                    "count": 12345,
                    "resource": "location"
                },
                {
                    "char": "e",
                    "count": 12345,
                    "resource": "episode"
                },
                {
                    "char": "c",
                    "count": 12345,
                    "resource": "character"
                }
            ]
        },
        {
            "exercise_name": "Episode locations",
            "time": "1s 721.975698ms",
            "in_time": true,
            "results": [
                {
                    "name": "Pickle Rick",
                    "episode": "S03E03",
                    "locations": [
                      "Earth (C-137)",
                      "Earth (Replacement Dimension)",
                      "unknown"
                    ]
                }
            ]
        }
    ]
    ```
    

**Usa la tecnología que quieras.**

🦸‍♂️ Nos fijaremos en estas cosas según orden de prioridad:

1. ***Código legible***: ya lo sabes, poder leer el código de tu colega es clave porque permite escalar, mantener, encontrar bugs y reutilizar.
2. ***Diseño de la solución***: quizás te gusta usar un patrón de diseño específico o usar un paradigma especial (OOP, FP, etc.), lo importante es que no sea 🍝.
3. ***Testing**:* Antes pensábamos que el testing era para otros. Ahora es clave en nuestro workflow.
4. ***Orden**:* su `readme.md`, carpetas y archivos fáciles de digerir. La verdad que sí nos fijamos, porque cuando le pones cariño es diferente.
5. ***Workflow***: **usamos git. queremos ver cómo usas git.
6. ***Performance**:* Tu sistema **no debería tardar más de ~3 segundos** (dependiendo de la conexión a internet).

☝️ **Pro tip**: Usaremos tu solución como ambiente para las entrevistas técnicas.
