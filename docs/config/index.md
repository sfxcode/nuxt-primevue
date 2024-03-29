# Module Configuration

Available Configuration options are:

<<< @/../src/module.ts#options

## Options

| Option        | Default | Config Section                        | Comment                                     |
|---------------|:-------:|:--------------------------------------|:--------------------------------------------|
| config        |         | [Primevue](#primevue-configuration)   | PrimeVue Config            |
| components    |         | [Component](#component-configuration) | Finetuning of used PrimeVue components      |
| useFormkit    |  true   | [Formkit](#component-configuration)   | Force to include components used by Formkit |
| quiet |  false  |                                       | Show module logs on startup                 |
| includeDemo |  true   |                                       | Include Demo Components                     |


## Default Configuration

If no configuration provided, this module work totally fine.

Nearly all PrimeVue components are imported (except Editor because of some SSR problems).

Default PrimeVueConfiguration is used with (ripple:true).

If fintuning is needed, see information below.

## Primevue Configuration

PrimeVueConfiguration is read from module config and injected in the PrimeVue startup of this module.
```ts
export interface PrimeVueConfiguration {
    ripple?: boolean;
    inputStyle?: string;
    locale?: PrimeVueLocaleOptions;
}

```
Configuration sample:

```typescript
config: {
  ripple: true  // default
}
```

## Formkit Configuration

Shows if formkit should be used with PrimeVue.
In this case PrimeVue components used by formkit-primevue must be imported global.

```typescript
  useFormkit: true  // default
```
## Component Configuration

Default all but excluded PrimeVue Components are imported automatically.

Some components in default are excluded because of some SSR problems or needed Third Party Libraries:
```typescript
export const defaultPrimevueExcludeComponentNames:Array<string>  = [
  'Chart',
  'Editor',
  'FullCalendar',
]


```
Finetuning by components configuration options:

```typescript
components: {
  include: [...defaultPrimeVueComponents(true, true), 'DataTable', 'Column'],
  force: ['Button',{name:'Message', global:true}],
}
```
### Components Configuration

**Option include**:

Includes components by name or as PrimeVueComponent. If includes are defined, default values are **not** used.

```ts
export interface PrimeVueComponent {
  name: string
  global: boolean
}

```

**Option exclude**:

Only if not include is used. Exclude default components by name.

**Option force**:

Force Includes components by name or as PrimeVueComponent.

**Helper Function**:
``` typescript
export function defaultPrimeVueComponents(useFormkit: boolean, onlyGlobal:boolean=false) 
```

