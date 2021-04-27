const root = document.getElementById("root");

const list__cells = [
  //a   b   c   d   e   f   g   h
  [{}, {}, {}, {}, {}, {}, {}, {}], // 8
  [{}, {}, {}, {}, {}, {}, {}, {}], // 7
  [{}, {}, {}, {}, {}, {}, {}, {}], // 6
  [{}, {}, {}, {}, {}, {}, {}, {}], // 5
  [{}, {}, {}, {}, {}, {}, {}, {}], // 4
  [{}, {}, {}, {}, {}, {}, {}, {}], // 3
  [{}, {}, {}, {}, {}, {}, {}, {}], // 2
  [{}, {}, {}, {}, {}, {}, {}, {}], // 1
];

const list__cellsText = [
  // a     b     c     d     e     f     g     h
  ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"], // 8
  ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"], // 7
  ["oo", "oo", "oo", "oo", "oo", "oo", "oo", "oo"], // 6
  ["oo", "oo", "oo", "oo", "oo", "oo", "oo", "oo"], // 5
  ["oo", "oo", "oo", "oo", "oo", "oo", "oo", "oo"], // 4
  ["oo", "oo", "oo", "oo", "oo", "oo", "oo", "oo"], // 3
  ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"], // 2
  ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"], // 1
];

const matrix = [
  //a    b    c    d    e    f    g    h
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 8
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 7
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 6
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 5
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 4
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 3
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 2
  ["1", "1", "1", "1", "1", "1", "1", "1"], // 1
];

let figure = "";

const list__columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

const rowUp = createElem("div", "row_up", root),
  lineUp = createElem("div", "line_up", rowUp),
  rowCenter = createElem("div", "row_center", root),
  lineLeft = createElem("div", "line_left", rowCenter),
  board = createElem("div", "board", rowCenter),
  lineRight = createElem("div", "line_right", rowCenter),
  rowDown = createElem("div", "row_down", root),
  lineDown = createElem("div", "line_down", rowDown);

list__cells.forEach((cell, x) => {
  cell.forEach((c, y) => {
    c = {
      id: `${list__columns[y]}${x + 1}`,
      clName: `cell`,
    };
    if (x % 2 !== 0 && y % 2 === 0) {
      c.backgroundColor = "#ccc";
    } else if (x % 2 === 0 && y % 2 !== 0) {
      c.backgroundColor = "#ccc";
    } else {
      c.backgroundColor = "#fff";
    }
    const cell = createElem("div", c.clName, board);
    cell.id = c.id;
    cell.style.backgroundColor = c.backgroundColor;
    cell.textContent = list__cellsText[x][y];
    cellsInnerHTMLBlack(cell);
    cellsInnerHTMLWhite(cell);
    cell.addEventListener("click", () => {
      if (emptyCell(cell) === false && figure !== "") {
        cell.innerHTML = figure;
        console.log(figure);
        figure = "";
      } else if (emptyCell(cell) === false) {
        figure = cell.innerHTML;
        cell.innerHTML = "";
        console.log(figure);
      } else if (emptyCell(cell) === true) {
        cell.innerHTML = figure;
        console.log(cell.innerHTML);
        figure = "";
      }
    });
  });
  x++;
});

createCells(8, "cell__row_up", lineUp, list__columns);
createCells(8, "cell__row_down", lineDown, list__columns);
createCells(8, "cell__row_left", lineLeft, list__columns);
createCells(8, "cell__row_right", lineRight, list__columns);

function emptyCell(cell) {
  if (cell.innerHTML === "") {
    return true;
  } else {
    return false;
  }
}

function cellsInnerHTMLBlack(cell) {
  if (cell.textContent === "oo") {
    cell.textContent = "";
  } else if (cell.textContent === "br") {
    cell.innerHTML = "&#9820;";
  } else if (cell.textContent === "bn") {
    cell.innerHTML = "&#9822;";
  } else if (cell.textContent === "bb") {
    cell.innerHTML = "&#9821;";
  } else if (cell.textContent === "bq") {
    cell.innerHTML = "&#9819;";
  } else if (cell.textContent === "bk") {
    cell.innerHTML = "&#9818;";
  } else if (cell.textContent === "bp") {
    cell.innerHTML = "&#9823;";
  }
}

function cellsInnerHTMLWhite(cell) {
  if (cell.textContent === "oo") {
    cell.textContent = "";
  } else if (cell.textContent === "wr") {
    cell.innerHTML = "&#9814;";
  } else if (cell.textContent === "wn") {
    cell.innerHTML = "&#9816;";
  } else if (cell.textContent === "wb") {
    cell.innerHTML = "&#9815;";
  } else if (cell.textContent === "wq") {
    cell.innerHTML = "&#9813;";
  } else if (cell.textContent === "wk") {
    cell.innerHTML = "&#9812;";
  } else if (cell.textContent === "wp") {
    cell.innerHTML = "&#9817;";
  }
}

function createCells(num, clName, parent, arr = []) {
  for (let i = 0; i < num; i++) {
    const cell = createElem("div", clName, parent);
    if (parent === lineUp || parent === lineDown) {
      cell.textContent = arr[i];
    } else {
      cell.textContent = (i - 8) * -1;
    }
  }
}

function createElem(element, clName, parent) {
  const e = document.createElement(element);
  e.classList.add(clName);
  parent.appendChild(e);

  return e;
}
