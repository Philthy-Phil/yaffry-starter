# YAFFRY-STARTER

## Welcome to Yaffry 🚀

**Yaffry** is your lightweight, component-based framework for modern web apps
– inspired by Angular, React & Vue, but with an own twist!

---

## Quickstart

- **Start Dev-Server:**

  ```bash
  npm run dev
  ```

- **Build Production-Code:**

  ```bash
  npm run build
  ```

- **Create new component:**

  ```bash
  npx yaff create component MyAwesomeOne
  ```

- **Create new service:**

  ```bash
  npx yaff create service MyFancyOne
  ```

---

## Project Structure

- **src/components/** – Your components (each in its own folder)
- **src/services/**   – Global services (z.B. for State, API)
- **src/routes/**     – Route-definitions
- **public/**         – Static assets (images, icons, ...)
- **scripts/yaff.js** – CLI for components/services

---

## Components

- Each Component consits of:
  - `.component.ts` (Class with decorator)
  - `.component.template.html` (Template)
  - `.component.style.css` (Styles)
- Example:

  ```ts
  @YComponent({
    selector: 'my-comp',
    templateUrl: './my-comp.component.template.html',
    styleUrls: ['./my-comp.component.style.css']
  })
  export class MyCompComponent extends Component { ... }
  ```

---

## Services

- Write global Logic/State in services.
- Example:

  ```ts
  export class CounterService extends Service { ... }
  export const counterService = ReactiveSystem.makeReactive(new CounterService());
  ```

---

## Routing

- Define routes in `src/routes/routes.config.ts`
- Use `<router-outlet></router-outlet>` in template

---

## Tipps

- **Live-Reload:** Changes on components are instantly processed.
- **Custom Pipes/Directives:** Look Framework-API.
- **Lifecycle-Hooks:** `onInit`, `onUpdate`, `onDestroy` in Komponenten nutzen.
- **Styles:** Component-Styles are loaded automatically (see import in `.component.ts`).

---

## Usefull commands

- `npm run dev` – start dev server
- `npx yaff create component <Name>` – new component
- `npx yaff create service <Name>` – new service

---

## More infos

- [Yaffry GitHub](https://github.com/philthy-phil/yaffry)  
- [README in project](./README.md)  
- [Framework-API](./docs/)

---

**Have fun developing with Yaffry! 🎉**