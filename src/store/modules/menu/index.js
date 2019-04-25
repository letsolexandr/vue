const state = {
  drawer: null,
  items: [

    { icon: 'history', text: 'Frequently contacted' ,url:"/images"},
    { icon: 'content_copy', text: 'Duplicates', url:"/data_table" },
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
