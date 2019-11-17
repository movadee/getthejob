let Home = {
  render: async () => {
    let view = /*html*/ `
      <h1 class="title">Home</h1>
      <h2 class="subtitle">
        This site is still under development... 
      </h2>
    `;
    return view;
  },
  after_render: async () => {}
};

export default Home;
