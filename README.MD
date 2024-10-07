# Styling CSS React

### Working with vanilla CSS in React

**Pros**

- Decouple CSS code from JSX code.
- Allow developers only working on CSS without having to worry about the other code.

**Cons**

- CSS code is not scoped to components -> it means that the a class with the same name may clash if it has been defined in different components.

### Working with inline-styles in React

**Pros**

- The styles are scoped only for components.

**Cons**

- JSX Code is not separated from CSS code, which may lead to a high-coupled code.
- The style rules are not reusable for many components.

### Working with CSS module

**Pros**

- The styles are scoped only for components.
- JSX code is separated form CSS code.
- The style rules are reusable in the component
- Allow developers to work separetely on the CSS styles.

**Cons**

- You may end up with many small CSS files

### Styled Components - Third party package

**Pros**

- The styles are scoped only for components.
- The style rules are reusable in the component

**Cons**

- JSX Code is not separated from CSS code, which may lead to a high-coupled code.
- You may end up with many small styled component functions.

### Tailwind

**Pros**

- You don't need to be an expert in CSS
- Yoy avoid styles clashes because you don't have any CSS class.
- Highly configurable and extensible.

**Cons**

- Creates long className values.
- There is not separation between JSX and the styling.
- You end up with many wrapper components focused only in styling
