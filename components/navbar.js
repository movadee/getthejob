let Navbar = {
  render: async () => {
    let view = /*html*/ `
          <a href="/#/">home</a> <br>
          <a href="/#/employee-vs-contractor">employee vs contractor</a>
          `;
    return view;
  },
  after_render: async () => {}
};

export default Navbar;
