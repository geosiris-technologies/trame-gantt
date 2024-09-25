# vue-gantt

A Configurable Gantt chart build for Vue.

## Features & characteristics

-   Customizable table fields
-   Draggable charts
-   Customisable user fields
-   Simple design

## Example

![Vue-gantt-example](https://github.com/salamanderbe/vue-gantt/blob/master/public/Gantt-example.gif)

## Demo

https://salamanderbe.github.io/vue-gantt/

## Status

In development

## Install & basic usage

```bash
npm install @salamander.be/vue-gantt
```

Minimum configuration
-   Items: a list of tasks shown in the Gantt chart

```vue
<template>
  <div id="app">
  	<gantt :items="items" />
  </div>
</template>

<script>
import Gantt from './components/gantt.vue'

export default {
  name: 'app',
  components: { Gantt },
  data() {
  	return {
      items: [
        { id: 1, summary: 'This is a task.', start_date: '2018-11-02 00:00', end_date: '2018-11-03 00:00', duration: 1 },
        { id: 2, summary: 'This is a task with a longer description.', start_date: '2018-11-03 00:00', end_date: '2018-11-04 00:00', duration: 1 },
        { id: 3, summary: 'You should first complete the first task.', start_date: '2018-11-04 00:00', end_date: '2018-01-11 00:00', duration: 7 },
        { id: 4, summary: 'And then, you should complete the second task.', start_date: '2018-11-07 00:00', end_date: '2018-11-09 00:00', duration: 9 },
        { id: 5, summary: 'Do not start with the last task.', start_date: '2018-11-09 00:00', end_date: '2018-11-15 00:00', duration: 6 },
        { id: 6, summary: 'It will make your project manager mad.', start_date: '2018-11-15 00:00', end_date: '2018-11-17 00:00', duration: 2 },
        { id: 7, summary: 'Very very very... mad.', start_date: '2018-11-17 00:00', end_date: '2018-11-19 00:00', duration: 2 },
        { id: 8, summary: 'But you only code once ;).', start_date: '2018-11-19 00:00', end_date: '2018-11-21 00:00', duration: 2 }
        ]
      }
  }
}
</script>
```

## Configuration

### props

| props  | type | default | description |
| ------------- | ------------- | ------------- | ------------- |
| items  | Array  | [] | A list of all items shown in the Gantt |
| title  | String | '' | A title shown above the Gantt |
| fields | Object | [fields](#fields) | A list of fields used in the header, items keys should match the header fields |
| levels | Number | 2 | Item indentation levels |
| dateLimit | Number,String | auto | Amount of dates shown in the chart |
| startDate | String | today | The start date from witch the Gantt will be shown |
| endDate | String | today + datelimit | The end date till witch the Gantt will be shown |
| canEdit | Boolean | true | Whether or not Gantt tables can be edited |
| user | Boolean, Object | { id: 'id', image: 'src' } | define the image and id field of a user object |

### Fields

| key  | type | description |
| ------------- | ------------- | ------------- |
| label | String | The Name displayed in the header |
| component | String | The vue component that should represent the cells (gantt-text, gantt-date, gantt-number, gantt-user) |
| width | Number | The fixed cell width |
| placeholder | String | The text shown when the cell is empty |

The default fields when no field option is provided.

```js
{
  summary: {
    label: 'Summary',
    component: 'gantt-text',
    width: 300,
    placeholder: 'Add a new task...'
  },
  start_date: {
    label: 'Start date',
    component: 'gantt-date',
    width: 95,
    placeholder: 'Start'
  },
  end_date: {
    label: 'End date',
    component: 'gantt-date',
    width: 95,
    placeholder: 'End'
  },
  duration: {
    label: 'Days',
    component: 'gantt-number',
    width: 50,
    placeholder: '0'
  }
}
```

### Users

You can add user objects to the gantt by adding a gantt-user field type or by defining the user prop

You can define the user id and user image key that will be used in the Gantt chart.
The user icon will be shown in the chart section of the Gantt chart.

```js
  user: { id: id, image: 'cursom_src' }
  items: { user: { id: 1, custom_src: './default-1.png' } }
```

Additionally you can add a user field that will be added 
to the table portion of the Gantt chart.

```js
user: { id: id, image: 'src' }
items: { user: { id: 1, src: './default-1.png' } }
fields: {
  user: {
    label: 'Usr.',
    component: 'gantt-user',
    width: 35
  }
}
```

### events

| events  | description |
| ------------- | ------------- |
| update | Triggers whenever a cell has been updated |