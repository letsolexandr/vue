const state = {
  items: [
    { icon: 'contacts', text: 'Contacts' },
    { icon: 'history', text: 'Frequently contacted' ,url:"/images"},
    { icon: 'content_copy', text: 'Duplicates', url:"/data_table" },
    {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'Labels',
      model: true,
      children: [
        { icon: 'add', text: 'Create label' }
      ]
    },
    {
      icon: 'keyboard_arrow_up',
      'icon-alt': 'keyboard_arrow_down',
      text: 'More',
      model: false,
      children: [
        { text: 'Import' },
        { text: 'Export' },
        { text: 'Print' },
        { text: 'Undo changes' },
        { text: 'Other contacts' }
      ]
    },
    { icon: 'settings', text: 'Settings' },
    { icon: 'chat_bubble', text: 'Send feedback' },
    { icon: 'help', text: 'Help' },
    { icon: 'phonelink', text: 'App downloads' },
    { icon: 'keyboard', text: 'Go to the old version' }
  ]
}


const getters = {
  items: state => state.items
}


const menuModule = {
  state,
  getters
}

export default menuModule;
