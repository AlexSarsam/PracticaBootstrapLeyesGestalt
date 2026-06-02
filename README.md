# Leyes de la Gestalt en Diseño Web

Pagina educativa sobre las Leyes de la Gestalt, hecha con HTML, Bootstrap 5 y CSS.
Modulo M9 - Disseny d Interficies Web.

---

## Leyes incluidas

La pagina explica 8 leyes de la Gestalt, cada una en su propia seccion con titulo, explicacion y una imagen de ejemplo:

1. **Proximidad** - Los elementos cercanos se ven como un grupo.
2. **Semejanza** - Los elementos parecidos se perciben como relacionados.
3. **Continuidad** - Los ojos siguen lineas y curvas de forma natural.
4. **Cierre** - El cerebro completa las formas incompletas.
5. **Figura-Fondo** - El cerebro separa el objeto principal del fondo.
6. **Simetria y Orden** - Lo simetrico se percibe como estable y ordenado.
7. **Region Comun** - Los elementos dentro de una misma area se agrupan.
8. **Destino Comun** - Los elementos que se mueven juntos se perciben relacionados.

---

## Ejemplos visuales

Cada ley tiene una imagen que ilustra el concepto de forma visual y rapida, sin necesidad de leer el texto para entenderlo.

---

## Efecto Parallax

Se aplica en 3 secciones usando `background-attachment: fixed`:

- Seccion **Semejanza** - fondo morado fijo
- Seccion **Cierre** - fondo verde-azul fijo
- Seccion **Region Comun** - fondo naranja fijo

En moviles el efecto se desactiva solo para que la pagina siga viendose bien.

---

## Accesibilidad

- Titulos en orden correcto: H1 para el titulo principal, H2 para cada ley.
- Buen contraste entre texto y fondo en todas las secciones.
- Todas las imagenes tienen texto alternativo (atributo alt).
- La pagina se puede navegar con teclado.

---

## Tema visual y modo oscuro

- Color principal: morado/indigo (#6366f1)
- Se puede cambiar entre modo claro y modo oscuro con el boton de la barra de navegacion.

---

## Despliegue

La pagina esta publicada en Vercel como sitio estatico (sin herramientas de compilacion).

Pasos:
1. Archivos subidos a GitHub.
2. Repositorio conectado a Vercel.
3. Vercel genera la URL publica automaticamente.