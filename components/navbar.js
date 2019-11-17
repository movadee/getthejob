let Navbar = {
  render: async () => {
    let view = /*html*/ `
      <aside class="menu">      
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li><a href="/#/home">Home</a></li>
          <li><a href="/#/employee-vs-contractor-pay">Employee vs Contractor Pay</a></li>
          <li><a>More to come...</a></li>
        </ul>
      </aside>
    `;
    return view;
  },
  after_render: async () => {}
};

export default Navbar;
