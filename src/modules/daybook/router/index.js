export default {
  name: 'daybook',
  component: () => import('../layouts/DayBookLayout.vue'),
  children: [
    {
      path: '',
      name: 'noEntrySelected',
      component: () => import('../views/NoEntrySelected')
    },
    {
      path: ':id',
      name: 'entry',
      component: () => import('../views/EntryView')
    }
  ]
}