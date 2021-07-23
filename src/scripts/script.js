window.onload = function () {
  const list = document.getElementById("grid-data");
  const shuffleButton = document.getElementById("shuffle-grid");
  const sortButton = document.getElementById("sort-grid");
  sortButton.disabled = true;

  function shuffleNodes(items) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }

    return items;
  }

  function shuffleGrid() {
	isGridSorted = false;
	sortButton.disabled = false;
    let nodes = list.children;
    let i = 0;
    nodes =  Array.prototype.slice.call(nodes);
    nodes = shuffleNodes(nodes);
    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }

  function sortGrid() {
    const listData = list;
	isGridSorted = true;
    [...listData.children]
      .sort((a, b) => (a.innerText > b.innerText ? 1 : -1))
      .forEach((node) => listData.appendChild(node));
	  sortButton.disabled = true;
  }

  shuffleButton.onclick = shuffleGrid;
  sortButton.onclick = sortGrid;
  
};
